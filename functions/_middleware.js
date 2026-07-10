/**
 * Every page on this site canonicalises to https://implementai.today.
 * Until DNS lands, the site is served from *.pages.dev, so that canonical
 * points at a domain Google cannot fetch the site from. Left alone, the
 * preview host would be crawled while pointing search engines at a parking page.
 *
 * So: noindex anything served from a pages.dev hostname. On the real domain this
 * is a no-op and removes itself. Do not delete it once DNS lands; it costs one
 * string comparison and it protects every future preview deployment too.
 */
export const onRequest = async (context) => {
  const response = await context.next();
  const { hostname } = new URL(context.request.url);

  if (hostname.endsWith('.pages.dev')) {
    const patched = new Response(response.body, response);
    patched.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return patched;
  }

  return response;
};
