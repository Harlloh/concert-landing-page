/* eslint-env node */
import { createRequire } from 'node:module';
import { mkdirSync, writeFileSync } from 'node:fs';
import assert from 'node:assert/strict';
const require = createRequire(`${process.env.HALLMARK_PUPPETEER || process.cwd()}/package.json`);
const puppeteer = require('puppeteer-core');
const origin = process.env.QA_ORIGIN || 'http://127.0.0.1:5173';
const browser = await puppeteer.launch({
  executablePath: process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true
});
const endpoint = 'https://bitsos-backend-123.onrender.com/asherpraise';
const screenshotDir = '.hallmark/current';
mkdirSync(screenshotDir, {
  recursive: true
});
try {
  const loader = await browser.newPage();
  await loader.setViewport({
    width: 390,
    height: 844
  });
  await loader.setCacheEnabled(false);
  await loader.setRequestInterception(true);
  const held = [];
  let release = false;
  loader.on('request', request => {
    const url = request.url();
    if (!url.startsWith(origin) && !url.startsWith('data:')) return request.abort();
    if (!release && (url.includes('/fonts/') || url.endsWith('/images/worship.jpg'))) {
      held.push(request);
      return;
    }
    return request.continue();
  });
  await loader.goto(origin, {
    waitUntil: 'domcontentloaded'
  });
  await loader.waitForSelector('.app-content.is-initializing');
  await loader.waitForFunction(() => document.querySelector('.boot-loader img')?.naturalWidth > 0);
  assert.equal(await loader.$eval('.boot-loader', el => el.textContent.trim()), '');
  assert.equal(await loader.$$eval('.boot-loader>*', els => els.length), 1);
  assert.equal(await loader.$eval('.app-content', el => el.hasAttribute('inert')), true);
  await loader.screenshot({
    path: screenshotDir + '/logo-loader.png'
  });
  release = true;
  await Promise.all(held.map(request => request.continue()));
  await loader.waitForSelector('.boot-loader', {
    hidden: true
  });
  assert.equal(await loader.$eval('.app-content', el => el.hasAttribute('inert')), false);
  console.log('PASS logo-only loader, pending content inert, dismissal when critical assets initialize');
  await loader.close();
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  let mode = 'failure',
    posts = 0;
  await page.setRequestInterception(true);
  page.on('request', async request => {
    if (request.url() === endpoint && request.method() === 'OPTIONS') return request.respond({
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    });
    if (request.url() === endpoint && request.method() === 'POST') {
      posts++;
      const payload = JSON.parse(request.postData());
      assert.deepEqual(Object.keys(payload).sort(), ['name', 'email', 'invitee', 'location', 'whatsappNumber', 'message'].sort());
      await new Promise(resolve => setTimeout(resolve, 200));
      return request.respond({
        status: mode === 'failure' ? 500 : 200,
        contentType: 'application/json',
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
          status: mode === 'success' ? 'Successfully registered' : mode === 'pending' ? 'pending' : 'failed'
        })
      });
    }
    if (request.url().startsWith(origin) || request.url().startsWith('data:')) return request.continue();
    return request.abort();
  });
  const widths = [320, 375, 390, 430, 560, 768, 900, 1024, 1100, 1280, 1440];
  for (const width of widths) {
    await page.setViewport({
      width,
      height: 900,
      deviceScaleFactor: 1
    });
    await page.goto(origin, {
      waitUntil: 'networkidle0'
    });
    await page.waitForSelector('.boot-loader', {
      hidden: true
    });
    await page.evaluate(async () => {
      const images = [...document.querySelectorAll('img')];
      images.forEach(img => {
        img.loading = 'eager';
      });
      await Promise.all(images.map(img => img.decode().catch(() => {})));
    });
    const overflow = await page.evaluate(() => [...document.querySelectorAll('main *,header *,footer *')].filter(el => {
      const style = getComputedStyle(el),
        rect = el.getBoundingClientRect();
      return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && (rect.right > innerWidth + 1 || rect.left < -1);
    }).map(el => el.tagName + '.' + el.className));
    assert.deepEqual(overflow, [], `overflow at ${width}`);
    assert.ok(await page.evaluate(() => document.querySelector('.brand').getBoundingClientRect().right <= document.querySelector('.header-actions').getBoundingClientRect().left), `header overlap at ${width}`);
    assert.equal(await page.$$eval('form input,form textarea', els => els.filter(el => el.required).length), 6);
    assert.equal(await page.$$eval('.countdown-unit', els => els.length), 4);
    assert.equal(await page.$eval('#hero-title', el => getComputedStyle(el).fontFamily.includes('Ornate')), true);
    assert.equal(await page.$eval('.registration-copy h2', el => getComputedStyle(el).fontFamily.includes('hazard')), true);
    assert.equal(await page.evaluate(() => document.fonts.check('24px Ornate') && document.fonts.check('24px designer') && document.fonts.check('24px hazard')), true);
    if (width === 1280) assert.ok(await page.$eval('.hero-actions .button', el => el.getBoundingClientRect().bottom < 800));
    await page.screenshot({
      path: `${screenshotDir}/viewport-${width}.png`,
      fullPage: true
    });
    console.log(`PASS ${width}px: no overflow/overlap, custom fonts, six registration fields, live countdown`);
  }
  await page.setViewport({
    width: 390,
    height: 844
  });
  await page.goto(origin, {
    waitUntil: 'networkidle0'
  });
  await page.waitForSelector('.boot-loader', {
    hidden: true
  });
  const first = await page.$eval('.countdown-unit:last-child strong', el => el.textContent);
  await page.waitForFunction(value => document.querySelector('.countdown-unit:last-child strong').textContent !== value, {}, first);
  await page.click('.menu-toggle');
  assert.equal(await page.$eval('.menu-toggle', el => el.getAttribute('aria-expanded')), 'true');
  await page.keyboard.press('Escape');
  assert.equal(await page.$eval('.menu-toggle', el => el.getAttribute('aria-expanded')), 'false');
  assert.equal(await page.$eval('.menu-toggle', el => el === document.activeElement), true);
  await page.click('.nav-register');
  await page.waitForFunction(() => location.hash === '#register');
  await page.click('#formbtn');
  assert.equal(posts, 0);
  assert.equal(await page.$eval('#name', el => el === document.activeElement), true);
  for (const [key, value] of Object.entries({
    name: 'QA test',
    email: 'qa@example.test',
    location: 'Lagos',
    whatsappNumber: '+2348000000000',
    invitee: 'guest@example.test',
    message: 'Intercepted QA only'
  })) await page.type('#' + key, value);
  await page.$eval('form', form => {
    form.requestSubmit();
    form.requestSubmit();
  });
  assert.equal(await page.$eval('#formbtn', el => el.disabled), true);
  await page.waitForSelector('.form-feedback.error');
  assert.equal(posts, 1);
  assert.equal(await page.$eval('#name', el => el.value), 'QA test');
  mode = 'pending';
  await page.click('#formbtn');
  await page.waitForFunction(() => document.querySelector('.form-feedback')?.textContent.includes('not yet confirmed'));
  assert.equal(await page.$eval('#name', el => el.value), 'QA test');
  mode = 'success';
  await page.click('#formbtn');
  await page.waitForSelector('.form-feedback.success');
  assert.equal(posts, 3);
  assert.equal(await page.$eval('#name', el => el.value), '');
  console.log('PASS timer ticks, menu/Escape focus, registration CTA, validation, duplicate protection, failure/pending preservation, confirmed success');
  await page.goto(origin + '/?lineup=preview#ministers', {
    waitUntil: 'networkidle0'
  });
  await page.waitForSelector('.preview-notice');
  assert.equal(await page.$$eval('.minister-grid figure', els => els.length), 8);
  for (const route of ['/give', '/playlist', '/team', '/gallery']) {
    await page.goto(origin + route, {
      waitUntil: 'networkidle0'
    });
    await page.waitForSelector('.boot-loader', {
      hidden: true
    });
    assert.ok(await page.$('main'));
  }
  assert.deepEqual(errors, []);
  console.log('PASS proposed minister review, all existing routes and no runtime errors');
  // A stalled optional asset must not leave the site permanently blocked.
  const stalled = await browser.newPage();
  await stalled.setRequestInterception(true);
  stalled.on('request', request => request.url().endsWith('/images/worship.jpg') ? request.abort() : request.url().startsWith(origin) ? request.continue() : request.abort());
  await stalled.goto(origin, {
    waitUntil: 'networkidle0'
  });
  await stalled.waitForSelector('.boot-loader', {
    hidden: true
  });
  console.log('PASS failed critical image releases logo screen');
  await stalled.close();
  const slow = await browser.newPage();
  await slow.setRequestInterception(true);
  let paused = [];
  slow.on('request', request => {
    if (request.url().endsWith('/images/worship.jpg')) {
      paused.push(request);
      return;
    }
    return request.url().startsWith(origin) ? request.continue() : request.abort();
  });
  await slow.goto(origin, {
    waitUntil: 'domcontentloaded'
  });
  await slow.waitForSelector('.app-content.is-initializing');
  await slow.waitForSelector('.boot-loader', {
    hidden: true,
    timeout: 11000
  });
  assert.equal(await slow.$eval('.app-content', el => el.hasAttribute('inert')), false);
  await Promise.all(paused.map(request => request.abort()));
  await slow.close();
  console.log('PASS stalled-asset timeout prevents a permanently blocked logo screen');
  writeFileSync(screenshotDir + '/qa-result.json', JSON.stringify({
    widths,
    registration: 'intercepted only',
    loader: 'verified',
    fonts: 'existing local fonts',
    passed: true
  }, null, 2));
} finally {
  await browser.close();
}
