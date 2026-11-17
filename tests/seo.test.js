import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { eventSchema, pages } from '../src/data/seo.js';
import { currentEvent, site } from '../src/data/event.js';
import seoPlugin from '../scripts/seo-plugin.js';

test('event markup contains confirmed event details and Lagos time', () => {
  const schema = eventSchema();
  assert.equal(schema.startDate, `${currentEvent.date}T16:00:00+01:00`);
  assert.equal(schema.location.name, currentEvent.venue);
  assert.equal(schema.offers.price, 0);
  assert.equal(schema.offers.url, `${site.url}/#register`);
  assert.equal(schema.performer, undefined);
  assert.equal(schema.endDate, undefined);
});

test('build emits unique canonical metadata, homepage event markup and crawl files', () => {
  const bundle = { 'index.html': { source: readFileSync(new URL('../index.html', import.meta.url), 'utf8') } };
  const emitted = {};
  seoPlugin().generateBundle.call({ emitFile: file => { emitted[file.fileName] = file.source; } }, {}, bundle);
  assert.equal(new Set(Object.values(pages).map(page => page.title)).size, 6);
  for (const path of Object.keys(pages)) {
    const html = path === '/' ? bundle['index.html'].source : emitted[`${path.slice(1)}/index.html`];
    assert.ok(html.includes(`<title>${pages[path].title.replaceAll('&', '&amp;')}</title>`));
    assert.ok(html.includes(`href="${new URL(path, site.url).href}"`));
    assert.equal(html.includes('id="event-schema"'), path === '/');
    assert.ok(emitted['sitemap.xml'].includes(`<loc>${new URL(path, site.url).href}</loc>`));
    assert.equal((html.match(/name="description"/g) || []).length, 1);
  }
  const schema = JSON.parse(bundle['index.html'].source.match(/<script id="event-schema" type="application\/ld\+json">(.*?)<\/script>/s)[1]);
  assert.equal(schema['@type'], 'MusicEvent');
  assert.ok(emitted['robots.txt'].includes(`${site.url}/sitemap.xml`));
});

test('hosting serves public verification files before the SPA fallback', () => {
  const { routes } = JSON.parse(readFileSync(new URL('../vercel.json', import.meta.url), 'utf8'));
  assert.ok(routes.findIndex(route => route.handle === 'filesystem') < routes.findIndex(route => route.src === '/.*'));
});
