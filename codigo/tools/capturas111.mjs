import puppeteer from 'puppeteer-core';
import fs from 'fs';
const BANK = {}; for (const l of fs.readFileSync('/workspace/g2/millonario-grok-bot/codigo/src/rapida.txt','utf8').split('\n')) { if (!l.includes('|')||l.startsWith('#')) continue; const [q,...r]=l.split('|'); (BANK[q]=BANK[q]||[]).push(r); }
const OUT='/workspace/qqsm111/shots', URL='http://127.0.0.1:18433/';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader','--autoplay-policy=no-user-gesture-required'] });
const p = await b.newPage(); await p.setViewport({ width: 1280, height: 720 });
const errs=[]; p.on('pageerror', e=>errs.push(e.message)); p.on('console', m=>{ if(m.type()==='error') errs.push('console: '+m.text()); });
const w=ms=>new Promise(r=>setTimeout(r,ms)); const shot=n=>p.screenshot({path:`${OUT}/${n}.png`});
const until=async(fn,ms=60000)=>{const t0=Date.now(); while(Date.now()-t0<ms){ if(await p.evaluate(fn)) return true; await w(200);} return false;};
await p.goto(URL+'?screen=main',{waitUntil:'load'}); await w(3500);
await p.evaluate(()=>{ __it.voz=false; __it.lee=true; __it.logoCadena='antena3hd'; __it.copro=false; }); 
await p.evaluate(()=>__startMode('entrenamiento','e2020'));
await w(2500); await shot('rp1_candidatos_plato_rojo');
await until(()=>!!document.querySelector('.rpzona'),40000); await w(300); await shot('rp2_pregunta');

for (let intento=0; intento<6; intento++) {
  await until(()=>document.querySelector('.rpzona .rejilla')?.style.visibility==='' ,40000);
  const info = await p.evaluate(()=>({q:document.querySelector('.rpzona .hexo.q .hexi').textContent.replace('⚡ ','').trim(), r:[...document.querySelectorAll('.rpzona .rejilla .hexi')].map(h=>h.textContent.slice(2))}));
  const cand = BANK[info.q].find(o=>o.every(x=>info.r.includes(x))); const orden = cand.map(x=>info.r.indexOf(x)); console.log(intento, info.q, orden);
  await p.evaluate(o=>{ o.slice(0,3).forEach(k=>document.querySelector(`.rpzona [data-k="${k}"]`).click()); }, orden);
  if (intento===0) await shot('rp3_ordenando');
  await p.evaluate(k=>document.querySelector(`.rpzona [data-k="${k}"]`).click(), orden[3]);
  await until(()=>document.querySelectorAll('.rppanel .cj.ok').length>=4,40000); await w(800); if (intento===0) await shot('rp4_panel_orden_correcto');
  await until(()=>/Candidatos que/.test(document.querySelector('.rppanel')?.textContent||''),30000); await w(1200); await shot('rp5_acertantes_'+intento);
  const gana = await until(()=>/El más rápido/.test(document.querySelector('#lower3')?.textContent||''),20000); const yo = await p.evaluate(()=>document.querySelector('.rppanel .cj.ok')?.classList.contains('yo')); await w(1800);
  await shot('rp6_ganador_'+intento); console.log('gana yo', yo);
  if (yo) break;
  await until(()=>!!document.querySelector('.rpfin'),30000); await shot('rp6b_fin_del_juego'); 
  await until(()=>[...document.querySelectorAll('#actions button')].some(b=>/otra Pregunta/.test(b.textContent)),30000); await w(300); await shot('rp6c_otra');
  await p.evaluate(()=>[...document.querySelectorAll('#actions button')].find(b=>/otra Pregunta/.test(b.textContent)).click());
}
await until(()=>!!document.querySelector('.segsel .hexo'),90000); await w(500); await p.evaluate(()=>document.querySelectorAll('.segsel .hexo')[4].click());
await until(()=>!!document.querySelector('.escalera'),90000); await w(1500); await shot('rp7_primera_pregunta');
// público
await p.evaluate(()=>{ const c=[...document.querySelectorAll('.comod')].find(x=>x.textContent==='👥'); c.click(); });
const sums=[]; for(let i=0;i<40;i++){ const v=await p.evaluate(()=>{const s=[...document.querySelectorAll('.sondeo .pct span')]; return s.length? s.map(x=>parseInt(x.textContent)):null;}); if(v) sums.push(v.reduce((a,b)=>a+b,0)); await w(120);} console.log('sumas publico', [...new Set(sums)]);
await shot('rp8_publico');
await until(()=>!document.querySelector('.sondeo')||true,1000);
const q1 = await p.evaluate(()=>{ const q=document.querySelector('.mqzona .hexo.q .hexi').textContent.trim(); const P=__preguntas.find(x=>x.q===q); return P?P.c:null; });
console.log('correcta q1', q1); await w(4000);
await p.evaluate(c=>{ const h=[...document.querySelectorAll('.mqzona .rejilla .hexo')].find(h=>h.textContent.slice(2)===c); h.click(); }, q1);
const ok2 = await until(()=>[...document.querySelectorAll('.mqbtns button')].some(b=>/Plantarse \(1/.test(b.textContent)),60000); await shot('rp8b_tras_q1'); console.log('q2', ok2); await w(3000); await p.evaluate(()=>[...document.querySelectorAll('.mqbtns button')].find(b=>/Plantarse/.test(b.textContent)).click());
await until(()=>[...document.querySelectorAll('#actions button')].some(b=>/me planto/.test(b.textContent)),20000); await w(400); await shot('rp9_plantarse_confirmacion');
await p.evaluate(()=>[...document.querySelectorAll('#actions button')].find(b=>/sigo jugando/.test(b.textContent)).click()); await w(1500); await shot('rp10_sigue_jugando');
// fin: responde primero (pregunta 1) correctamente no es trivial; usamos plantarse en pregunta 1 -> toast. 
console.log('errores', errs); await b.close();
