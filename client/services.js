// client/services.js
// Supabase auth + cloud progress storage.
// Swap in your real URL and anon key from Supabase → Settings → API.
// The anon key is safe to expose here — row-level security handles access control.

(function () {
  const SUPABASE_URL     = 'https://zxxrmxsumnpczevpbuwu.supabase.co';
  const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
  const LOCAL_KEY        = 'autocad-coach-progress-v4';

  const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  // ── Auth ──────────────────────────────────────────────────────────────────

  async function getUser() {
    const { data } = await sb.auth.getUser();
    return data?.user ?? null;
  }

  async function signUp({ name, email, password, goal }) {
    if (!name || !email || !password) {
      return { ok: false, message: 'Name, email, and password are all required.' };
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return { ok: false, message: 'Enter a valid email address.' };
    }
    if (password.length < 6) {
      return { ok: false, message: 'Password must be at least 6 characters.' };
    }

    const { data, error } = await sb.auth.signUp({
      email,
      password,
      options: { data: { name, goal } },
    });

    if (error) return { ok: false, message: error.message };
    return {
      ok: true,
      message: `Account created for ${name}. Check your email to confirm, then sign in.`,
      user: data.user,
    };
  }

  async function signIn({ email, password }) {
    if (!email || !password) {
      return { ok: false, message: 'Enter your email and password.' };
    }
    const { data, error } = await sb.auth.signInWithPassword({ email, password });
    if (error) return { ok: false, message: error.message };
    const name = data.user.user_metadata?.name || data.user.email;
    return { ok: true, message: `Welcome back, ${name}!`, user: data.user };
  }

  async function signOut() {
    await sb.auth.signOut();
    return { ok: true, message: 'Signed out.' };
  }

  function onAuthStateChange(callback) {
    return sb.auth.onAuthStateChange(callback);
  }

  // ── Progress storage ──────────────────────────────────────────────────────
  // Logged-in users → Supabase (synced across devices).
  // Guests → localStorage (local only).

  async function readState() {
    const user = await getUser();
    if (!user) {
      try { return JSON.parse(localStorage.getItem(LOCAL_KEY) || 'null'); }
      catch { return null; }
    }

    const { data, error } = await sb
      .from('user_progress')
      .select('*')
      .eq('user_id', user.id)
      .single();

    if (error || !data) return null;

    return {
      completedLessons:     data.completed_lessons    ?? [],
      completedProjects:    data.completed_projects   ?? [],
      selectedLessonId:     data.selected_lesson_id   ?? 1,
      lessonStepIndex:      data.lesson_step_index    ?? 0,
      selectedProjectTitle: data.selected_project     ?? '',
      streak:               data.streak               ?? 0,
      quizAnswers:          data.quiz_answers         ?? {},
      showVisuals:          data.show_visuals         ?? true,
      showProjectVisuals:   data.show_project_visuals ?? true,
    };
  }

  async function writeState(state) {
    const user = await getUser();
    if (!user) {
      localStorage.setItem(LOCAL_KEY, JSON.stringify(state));
      return;
    }
    const { error } = await sb.from('user_progress').upsert({
      user_id:              user.id,
      completed_lessons:    state.completedLessons,
      completed_projects:   state.completedProjects,
      selected_lesson_id:   state.selectedLessonId,
      lesson_step_index:    state.lessonStepIndex,
      selected_project:     state.selectedProjectTitle,
      streak:               state.streak,
      quiz_answers:         state.quizAnswers,
      show_visuals:         state.showVisuals,
      show_project_visuals: state.showProjectVisuals,
      updated_at:           new Date().toISOString(),
    }, { onConflict: 'user_id' });
    if (error) console.warn('Progress save error:', error.message);
  }

  // ── Expose ────────────────────────────────────────────────────────────────

  window.AutoCADCoachServices = {
    auth:    { getUser, signUp, signIn, signOut, onAuthStateChange },
    storage: { readState, writeState },
    client:  sb,
  };
}());