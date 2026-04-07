(function () {
  const STORAGE_KEY = 'autocad-coach-progress-v4';

  function readState() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    } catch (error) {
      console.warn(error);
      return null;
    }
  }

  function writeState(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function validateProfile(profile) {
    if (!profile.name || !profile.email || !profile.password) {
      return { ok: false, message: 'Enter your name, email, and password to save the login.', tone: 'error' };
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email)) {
      return { ok: false, message: 'Use a valid email format such as name@example.com.', tone: 'error' };
    }
    if (profile.password.length < 6) {
      return { ok: false, message: 'Use a password with at least 6 characters.', tone: 'error' };
    }
    return { ok: true, message: `Login saved for ${profile.name}.`, tone: 'success' };
  }

  function saveProfile(state, profile) {
    const result = validateProfile(profile);
    if (!result.ok) return result;
    state.profile = { ...profile, loggedIn: true };
    return result;
  }

  function logoutProfile(state) {
    state.profile = { ...state.profile, loggedIn: false };
    return { ok: true, message: 'Signed out on this device. Your saved profile details are still here.', tone: 'success' };
  }

  function clearProfile(state) {
    state.profile = { name: '', email: '', password: '', goal: '', loggedIn: false };
    return { ok: true, message: 'Local login details cleared from this device.', tone: 'muted' };
  }

  window.AutoCADCoachServices = {
    storage: { readState, writeState, key: STORAGE_KEY },
    auth: { validateProfile, saveProfile, logoutProfile, clearProfile }
  };
}());
