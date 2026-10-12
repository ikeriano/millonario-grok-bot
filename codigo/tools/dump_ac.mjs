import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader'] });
const p = await b.newPage(); await p.setViewport({width:1280,height:720}); await p.goto('http://127.0.0.1:18433/?screen=' + process.argv[2]); await new Promise(r=>setTimeout(r,6000));
console.log(await p.evaluate(() => [...document.querySelectorAll('#menu .orow, #menu .olabel, #menu .onote, #menu h2, #menu .mbtn, #menu .tbtn')].map(e => e.className.split(' ')[0] + ': ' + e.innerText.replace(/\n/g,' | ').slice(0,160)).join('\n')));
await p.screenshot({path:'/tmp/ac_'+process.argv[2]+'.png'}); await b.close();
