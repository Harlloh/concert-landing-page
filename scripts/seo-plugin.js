import { pages, eventSchema } from '../src/data/seo.js';
import { site, currentEvent } from '../src/data/event.js';

const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

export default function seoPlugin() {
  function render(html, path) {
    const { title, description } = pages[path];
    const url = new URL(path, site.url).href;
    const image = new URL(currentEvent.hero.src, site.url).href;
    return html.replace(/<title>.*?<\/title>/, `<title>${escape(title)}</title>`)
      .replace(/<meta (?:name="description"|property="og:(?:title|description|image|url)") content="[^"]*"\s*\/>/g, '')
      .replace(/<link rel="canonical"[^>]*>/, '')
      .replace('</head>', `
    <meta name="description" content="${escape(description)}" />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content="${escape(title)}" />
    <meta property="og:description" content="${escape(description)}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:site_name" content="${site.name}" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="canonical" href="${url}" />
    ${path === '/' ? `<script id="event-schema" type="application/ld+json">${JSON.stringify(eventSchema()).replaceAll('<', '\\u003c')}</script>` : ''}
  </head>`);
  }
  return {
    name: 'concert-seo', enforce: 'post',
    generateBundle(_, bundle) {
      const html = bundle['index.html'].source;
      for (const path of Object.keys(pages)) {
        const source = render(html, path);
        if (path === '/') bundle['index.html'].source = source;
        else this.emitFile({ type: 'asset', fileName: `${path.slice(1)}/index.html`, source });
      }
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n` });
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${Object.keys(pages).map(path => `<url><loc>${new URL(path, site.url).href}</loc></url>`).join('')}</urlset>\n` });
    }
  };
}
