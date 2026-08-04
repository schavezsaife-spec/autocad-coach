const SUPABASE_URL = 'https://tttxiqizxzjidzzggglp.supabase.co';
const SITE_URL = 'https://www.autocadcoach.com/';

module.exports = (request, response) => {
  const requestUrl = new URL(request.url, `https://${request.headers.host || 'www.autocadcoach.com'}`);
  const provider = requestUrl.searchParams.get('provider') || 'google';
  const requestedRedirect = requestUrl.searchParams.get('redirect_uri') || SITE_URL;
  const redirectTarget = new URL('/auth/v1/authorize', SUPABASE_URL);

  redirectTarget.searchParams.set('provider', provider);
  redirectTarget.searchParams.set('redirect_to', requestedRedirect);

  response.setHeader('Cache-Control', 'no-store');
  response.writeHead(302, { Location: redirectTarget.toString() });
  response.end();
};
