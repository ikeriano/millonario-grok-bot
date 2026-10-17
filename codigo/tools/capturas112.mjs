import puppeteer from 'puppeteer-core';
const OUT='/workspace/qqsm111/shots', URL='http://127.0.0.1:18434/';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader','--autoplay-policy=no-user-gesture-required'] });
const p = await b.newPage(); await p.setViewport({ width: 1280, height: 720 }); const errs=[]; p.on('pageerror', e=>errs.push(e.message));
const w=ms=>new Promise(r=>setTimeout(r,ms));
await p.goto(URL+'?screen=main',{waitUntil:'load'}); await p.evaluate(()=>localStorage.clear()); await p.goto(URL+'?screen=main',{waitUntil:'load'}); await w(3500);
console.log('logo por defecto', await p.evaluate(()=>__it.logoCadena));
await p.evaluate(()=>{ __it.voz=false; __startMode('entrenamiento','e2020'); }); await w(9000);
await p.screenshot({path:`${OUT}/v112_logo_antena3hd_por_defecto.png`});
console.log('img', await p.evaluate(()=>{const i=document.querySelector('.emision .lg'); return i && getComputedStyle(i).display!=='none' ? i.getAttribute('src') : null;}));
// 1.11 con «El del juego» guardado → pasa a Antena 3 HD una vez
await p.evaluate(()=>{ localStorage.clear(); localStorage.setItem('mm_opts', JSON.stringify({logoCadena:'juego'})); }); await p.goto(URL+'?screen=main',{waitUntil:'load'}); await w(3000);
console.log('migración', await p.evaluate(()=>__it.logoCadena));
console.log('errores', errs); await b.close();
