// Injects the fully-rendered initial HTML into dist/index.html.
//
// This app is a client-rendered SPA: without this step, the server sends an
// empty <div id="root"></div> and the browser must download, parse and run
// the whole JS bundle before anything appears — that delay is what LCP/FCP
// measure. Pre-rendering the initial state removes it from the critical path;
// React still mounts normally afterwards; the innerHTML is simply replaced.
//
// Usage: npm run build && node scripts/prerender.mjs

import { chromium } from 'playwright';
import { preview } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const distIndex = path.join(root, 'dist/index.html');

const server = await preview({ root, preview: { port: 47821 } });
const url = server.resolvedUrls.local[0];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 412, height: 823 } });
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForSelector('.hero h1');
const rootHtml = await page.$eval('#root', (el) => el.innerHTML);
await browser.close();
await new Promise((resolve) => server.httpServer.close(resolve));

let html = fs.readFileSync(distIndex, 'utf-8');
if (!html.includes('<div id="root"></div>')) {
  throw new Error('Expected an empty <div id="root"></div> in dist/index.html — has this already been prerendered, or did the markup change?');
}
html = html.replace('<div id="root"></div>', `<div id="root">${rootHtml}</div>`);
fs.writeFileSync(distIndex, html);
console.log(`Prerendered HTML injected into ${distIndex} (${rootHtml.length} chars).`);
