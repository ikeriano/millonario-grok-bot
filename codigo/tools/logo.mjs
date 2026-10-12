import puppeteer from 'puppeteer-core'; import fs from 'fs';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox'] });
const p = await b.newPage(); await p.goto('http://127.0.0.1:18432/?screen=title'); await new Promise(r => setTimeout(r, 2500));
const d = await p.evaluate(() => document.querySelector('canvas.tlogo').toDataURL('image/png'));
fs.writeFileSync('/workspace/millonario/www/logo.png', Buffer.from(d.split(',')[1], 'base64')); await p.screenshot({path:'/tmp/title.png'}); await b.close();
