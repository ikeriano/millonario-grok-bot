import puppeteer from 'puppeteer-core';
const OUT='/workspace/qqsm111/shots', URL='http://127.0.0.1:18433/';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader','--autoplay-policy=no-user-gesture-required'] });
const p = await b.newPage(); await p.setViewport({ width: 1280, height: 720 });
const errs=[]; p.on('pageerror', e=>errs.push(e.message));
const w=ms=>new Promise(r=>setTimeout(r,ms)); const shot=n=>p.screenshot({path:`${OUT}/${n}.png`});
const until=async(fn,ms=60000)=>{const t0=Date.now(); while(Date.now()-t0<ms){ if(await p.evaluate(fn)) return true; await w(200);} return false;};
await p.goto(URL+'?screen=main',{waitUntil:'load'}); await w(3500);
await p.evaluate(()=>{ localStorage.removeItem('mm_opts'); }); await p.goto(URL+'?screen=options',{waitUntil:'load'}); await w(3500);
await p.evaluate(()=>{ const f=document.querySelector('#menu .ofold>.olabel'); f.click(); }); await w(500);
await p.evaluate(()=>{ const l=[...document.querySelectorAll('#menu .ofold label')].find(x=>/Pregunta rápida/.test(x.textContent)); l.scrollIntoView({block:'start'}); }); await w(500); await shot('op1_mas_opciones_pregunta_rapida');
const vals = await p.evaluate(()=>({rapida:__it.rapida, emision:__it.emision, autopromos:__it.autopromos, logo:__it.logoCadena}));
console.log('por defecto', vals);
for (const lg of ['cuatro','telecinco','la2']) { await p.evaluate(v=>{ __it.voz=false; __it.logoCadena=v; __startMode('paseo'); }, lg); await w(2500); await shot('logo_'+lg); }
await p.evaluate(()=>{ __it.voz=false; __it.logoCadena='antena3hd'; __startMode('programa'); }); 
await until(()=>[...document.querySelectorAll('#actions button')].some(b=>/Saltar/.test(b.textContent)),60000); await w(1500); await shot('pc1_cabecera_con_emision');
await w(14000); await shot('pc1b_autopromo');
await until(()=>!!document.querySelector('.rpzona'),240000); await w(500); await shot('pc2_programa_completo_pregunta_rapida');
console.log('errores', errs); await b.close();
