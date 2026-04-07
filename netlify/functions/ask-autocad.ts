type NetlifyEvent = {
  httpMethod?: string;
  body?: string | null;
};

type NetlifyResponse = {
  statusCode: number;
  headers?: Record<string, string>;
  body: string;
};

const json = (statusCode: number, payload: Record<string, unknown>): NetlifyResponse => ({
  statusCode,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  body: JSON.stringify(payload)
});

const SYSTEM_PROMPT = `
You are AutoCAD Coach AI, a beginner-friendly AutoCAD helper.

Rules:
- Answer general beginner AutoCAD questions in plain English.
- Keep answers concise but helpful.
- Prefer this structure when useful:
  1. What's happening
  2. Why it happens
  3. What to try next
- Mention common beginner issues when relevant:
  - lines not touching
  - shape not closed
  - wrong object selected
  - zoom level confusion
- Do not invent commands.
- If unsure, say so.
`.trim();

export const handler = async (event: NetlifyEvent): Promise<NetlifyResponse> => {
  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'Method not allowed. Use POST.' });
  }

  let payload: { question?: unknown } = {};

  try {
    payload = event.body ? JSON.parse(event.body) : {};
  } catch {
    return json(400, { error: 'Invalid JSON body.' });
  }

  const question = typeof payload.question === 'string' ? payload.question.trim() : '';
  if (!question) {
    return json(400, { error: 'Question is required.' });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return json(500, { error: 'Missing OPENAI_API_KEY environment variable.' });
  }

  try {
    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        input: [
          { role: 'system', content: [{ type: 'input_text', text: SYSTEM_PROMPT }] },
          { role: 'user', content: [{ type: 'input_text', text: question }] }
        ]
      })
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      const apiError = typeof data?.error?.message === 'string' ? data.error.message : 'OpenAI request failed.';
      return json(502, { error: apiError });
    }

    const answer =
      typeof data?.output_text === 'string' && data.output_text.trim()
        ? data.output_text.trim()
        : Array.isArray(data?.output)
          ? data.output
              .flatMap((item: any) => Array.isArray(item?.content) ? item.content : [])
              .filter((item: any) => item?.type === 'output_text' && typeof item?.text === 'string')
              .map((item: any) => item.text.trim())
              .filter(Boolean)
              .join('\n\n')
          : '';

    if (!answer) {
      return json(502, { error: 'OpenAI returned an empty answer.' });
    }

    return json(200, { answer });
  } catch {
    return json(502, { error: 'Failed to reach OpenAI.' });
  }
};
