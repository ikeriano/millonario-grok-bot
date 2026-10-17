// v1.11 · Pregunta rápida (antes de las 15 preguntas, como en Antena 3), emisión de TV (#QQSMElMinijuego, logo de la cadena y autopromos)
// y pequeños arreglos (público que siempre suma 100, confirmación al plantarse).
import TXT from './rapida.txt';
export const RAPIDA = [];
for (const l of TXT.split('\n')) { if (!l.trim() || l.startsWith('#')) continue; const [q, ...r] = l.split('|'); if (r.length === 4) RAPIDA.push({ q, orden: r }); }
import { FR_RAPIDA } from './rapida_fr.js';
export { FR_RAPIDA };
export const frasesRapida = () => [...Object.values(FR_RAPIDA), ...RAPIDA.map(p => p.q + '.')];
const NOMBRES = ['Marta', 'Javier', 'Lucía', 'Andrés', 'Carmen', 'Rubén', 'Nuria', 'Sergio', 'Elena', 'Pablo', 'Rocío', 'Álvaro', 'Paula', 'Daniel', 'Inés', 'Raúl'];
const ROPA = [0x7a1a2a, 0x2a4a8a, 0x3a6a3a, 0x5a3a7a, 0x8a6a2a, 0x2a6a7a, 0x6a2a5a, 0x4a4a4a], PIEL = [0xf2c8a8, 0xe0b08c, 0xc89870, 0xa8704a, 0xf6d2b8], PELO = [0x2a1c12, 0x5a3a2a, 0x111111, 0xd9b25a, 0x8a3b1a, 0xcccccc];
let D = null; const az = (a) => a[Math.floor(Math.random() * a.length)];
const css = `
#mq .rpzona{position:absolute;left:3vw;right:30vw;bottom:2.5vh;display:flex;flex-direction:column;gap:1vh}
#mq .rpzona .hexo.usada{opacity:.45;filter:grayscale(.6)} #mq .rpzona .hexo .num{position:absolute;right:5%;top:50%;transform:translateY(-50%);z-index:2;background:#ffb21c;color:#000;font:900 clamp(12px,2vw,18px) Arial;border-radius:50%;width:1.7em;height:1.7em;display:flex;align-items:center;justify-content:center}
#mq .rpbar{display:flex;gap:1vw;align-items:center;justify-content:center;flex-wrap:wrap}
#mq .rpreloj{width:clamp(54px,9vh,84px);height:clamp(54px,9vh,84px);border-radius:50%;background:conic-gradient(#ff2a3a var(--p,360deg),#2a0006 0);display:flex;align-items:center;justify-content:center;box-shadow:0 0 14px #ff2a3a88}
#mq .rpreloj b{background:#120004;border-radius:50%;width:76%;height:76%;display:flex;align-items:center;justify-content:center;color:#fff;font:900 clamp(16px,3.4vh,28px) Arial}
#mq .rpmio{font:900 clamp(14px,2.4vw,22px) Arial;color:#fff;background:#0a1748cc;border:2px solid #8fc4ff;border-radius:12px;padding:6px 14px;letter-spacing:.3em}
#mq .rppanel{position:absolute;right:0;top:52px;bottom:0;border-radius:12px 0 0 0;width:min(34vw,380px);background:linear-gradient(90deg,#1a2a8a55,#0a1a6acc 30%,#0a1a6aee);border-left:2px solid #8fc4ff99;color:#fff;font:700 clamp(12px,1.9vw,17px)/1.35 Arial,sans-serif;padding:6vh 16px 3vh;box-sizing:border-box;display:flex;flex-direction:column;gap:.8vh;overflow:auto;animation:rpent .5s ease-out}
@keyframes rpent{from{transform:translateX(100%)}to{transform:none}}
#mq .rppanel .cj{clip-path:polygon(4% 0,96% 0,100% 50%,96% 100%,4% 100%,0 50%);background:linear-gradient(#0a1748,#02061e 55%,#0d1f5c);padding:1vh 8%;transition:background .3s}
#mq .rppanel .cj.ok{background:linear-gradient(#7dff8a,#11a52a);color:#000} #mq .rppanel .cj.yo{outline:2px solid #ffd25a}
#mq .rppanel .cj b{color:#ffb21c;margin-right:.4em} #mq .rppanel .cj.ok b{color:#fff}
#mq .rppanel .tit{color:#cfe0ff} #mq .rppanel .lt{letter-spacing:.35em;font-size:1.3em;color:#ffd25a}
#mq .rppanel .fila{display:flex;justify-content:space-between;gap:8px}
#mq .rpfin{position:absolute;left:0;right:0;top:40%;text-align:center;font:900 clamp(26px,6vw,60px) Arial;color:#fff;text-shadow:0 0 18px #ff2a3a,0 3px 0 #000;animation:rpent .4s}
.emision{position:fixed;inset:0;pointer-events:none;z-index:40}
.emision .ht{position:absolute;left:max(10px,env(safe-area-inset-left));top:8px;font:700 clamp(10px,1.6vw,14px) Arial,sans-serif;color:#fff;text-shadow:0 1px 2px #000}
.emision .lg{position:absolute;right:max(8px,env(safe-area-inset-right));bottom:6px;height:clamp(22px,6.5vh,46px);width:auto;max-width:20vw;object-fit:contain}
body:has(#actions button) .emision{z-index:9}
#actions{z-index:13}
.emision .ap{position:absolute;right:max(12px,env(safe-area-inset-right));top:56px;max-width:min(42vw,360px);background:linear-gradient(90deg,#0a1a6aee,#2a5ae6ee);border-left:4px solid #ffd25a;color:#fff;font:700 clamp(10px,1.6vw,14px)/1.25 Arial,sans-serif;padding:6px 12px;border-radius:6px;box-shadow:0 3px 12px #0008;transition:transform .5s,opacity .5s;transform:translateX(120%);opacity:0}
.emision .ap.vis{transform:none;opacity:1} .emision .ap small{display:block;color:#ffd25a;font-size:.8em;text-transform:uppercase;letter-spacing:.06em}
`;
export function instalaRapida(deps) { D = deps; const s = document.createElement('style'); s.textContent = css; document.head.appendChild(s); }
// ---------------- plató: atriles de los candidatos y luz roja ----------------
let atriles = null, rivales = [], lucesG = null;
function creaAtriles() {
  const { plato, creaPersonaje } = D; const T = plato.THREE; const g = new T.Group(); const R = 6.1, N = 6;
  const matP = new T.MeshLambertMaterial({ color: 0x0a0d18 }), matB = new T.MeshBasicMaterial({ color: 0xff2a3a });
  const L = [];
  for (let i = 0; i < N; i++) {
    const a = (-55 + i * 22) * Math.PI / 180, x = Math.sin(a) * R, z = Math.cos(a) * R;
    const at = new T.Group(); at.position.set(x, 0, z); at.rotation.y = Math.atan2(-x, -z);
    const col = new T.Mesh(new T.CylinderGeometry(.32, .42, 1.05, 10), matP); col.position.y = .52; at.add(col);
    const aro = new T.Mesh(new T.TorusGeometry(.36, .025, 4, 16), matB); aro.rotation.x = Math.PI / 2; aro.position.y = 1.06; at.add(aro);
    const cv = document.createElement('canvas'); cv.width = 256; cv.height = 96; const tx = new T.CanvasTexture(cv); tx.colorSpace = T.SRGBColorSpace;
    const pan = new T.Mesh(new T.PlaneGeometry(.62, .23), new T.MeshBasicMaterial({ map: tx })); pan.position.set(0, .78, .36); pan.rotation.y = Math.PI; at.add(pan);
    g.add(at); L.push({ at, cv, tx, pos: [x * 1.09, 0, z * 1.09], ry: Math.atan2(-x, -z) });
  }
  plato.scene.add(g); g.visible = false;
  // los 5 rivales (figuras genéricas)
  for (let i = 0; i < N - 1; i++) { const P = creaPersonaje({ traje: az(ROPA), camisa: 0xf0f0f0, corbata: Math.random() < .5 ? null : 0x2a2a6a, pelo: az(PELO), piel: az(PIEL), melena: i % 2 === 0, falda: false }, null); P.root.userData = P; P.root.visible = false; plato.scene.add(P.root); plato.figuras['rp' + i] = P.root; rivales.push(P.root); }
  atriles = { g, L };
}
function pantalla(a, nombre, estado) { const c = a.cv.getContext('2d'); c.fillStyle = estado === 'ok' ? '#11a52a' : estado === 'resp' ? '#c06a00' : '#120004'; c.fillRect(0, 0, 256, 96); c.strokeStyle = '#ff2a3a'; c.lineWidth = 6; c.strokeRect(3, 3, 250, 90); c.fillStyle = '#fff'; c.font = 'bold 40px Arial'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(nombre.slice(0, 10), 128, 50); a.tx.needsUpdate = true; }
function luzRoja(on) {
  const { plato, it } = D;
  if (on) { lucesG = []; plato.scene.traverse(o => { if (o.isLight && !o.isAmbientLight) { lucesG.push([o, o.color.getHex(), o.intensity]); o.color.setHex(o.isHemisphereLight ? 0x5a0a14 : 0xff2a3a); } }); plato.aplicaEstilo('rojo'); }
  else { if (lucesG) for (const [o, c, i] of lucesG) { o.color.setHex(c); o.intensity = i; } lucesG = null; plato.aplicaEstilo(it.plato); }
}
const seg = (t) => t.toFixed(2).replace('.', ',') + ' s';
function musica() { const { F, it, RC } = D; if (!it.music) return null; const b = RC.cache['snd:rapida']; const a = new Audio(b ? URL.createObjectURL(b) : 'rapida/rapida.mp3'); a.volume = Math.min(1, it.musicVol * .9); a.play().catch(() => {}); return a; }
function efecto(n) { const { it } = D; if (!it.sfx) return; const a = new Audio('rapida/' + n + '.mp3'); a.volume = it.sfxVol; a.play().catch(() => {}); }
// ---------------- la ronda ----------------
/** devuelve true cuando el jugador gana y está sentado en la silla; false si vuelve al menú */
export async function preguntaRapida(s, o = {}) {
  const { plato, F, di, yn, en, esc, mezcla, it, anda } = D; if (!atriles) creaAtriles();
  const nombre = o.nombre || 'Tú'; const conc = plato.figuras.conc, leo = plato.figuras.leo;
  const usadas = new Set(JSON.parse(sessionStorage.getItem('mm_rp_usadas') || '[]'));
  const T = plato.THREE; plato.PLANOS.rapida = [new T.Vector3(0, 5.2, 15.5), new T.Vector3(0, 1.2, 3.2)];
  plato.PLANOS.rapidaLeo = [new T.Vector3(0, 2.1, 7.6), new T.Vector3(0, 1.7, 0)];
  let primera = true;
  try {
    while (true) {
      s.ok(); const m = en('mq'); m.innerHTML = ''; yn.limpia();
      // candidatos en sus atriles
      const yo = Math.floor(Math.random() * 6); const noms = mezcla(NOMBRES).slice(0, 5); const cands = [];
      atriles.g.visible = true; luzRoja(true); let r = 0;
      atriles.L.forEach((a, i) => { const f = i === yo ? conc : rivales[r]; const n = i === yo ? nombre : noms[r++]; plato.dePie(f, a.pos[0], 0, a.pos[2], a.ry); pantalla(a, n, ''); cands.push({ f, n, a, yo: i === yo }); });
      plato.dePie(leo, 0, 0, .2, 0);
      plato.plano('rapida', 1.4);
      if (primera) { await di(s, 'leo', FR_RAPIDA.intro, 'rapidaLeo'); F.aplauso(1.5); if (o.explica !== false) await di(s, 'leo', FR_RAPIDA.regla, 'rapida'); primera = false; }
      // pregunta
      let L = RAPIDA.filter((_, i) => !usadas.has(i)); if (!L.length) { usadas.clear(); L = RAPIDA; }
      const p = az(L); usadas.add(RAPIDA.indexOf(p)); try { sessionStorage.setItem('mm_rp_usadas', JSON.stringify([...usadas])); } catch (e) {}
      const resp = mezcla([0, 1, 2, 3]); // resp[k] = posición correcta de la respuesta mostrada en la letra k
      const correcto = [0, 1, 2, 3].map(pos => 'ABCD'[resp.indexOf(pos)]).join('');
      await di(s, 'leo', FR_RAPIDA.atencion, 'rapidaLeo');
      const z = document.createElement('div'); z.className = 'rpzona';
      z.innerHTML = `<div class="hexo q"><div class="hexi">⚡ ${esc(p.q)}</div></div><div class="rejilla" style="visibility:hidden">${resp.map((pos, k) => `<div class="hexo" data-k="${k}"><div class="hexi"><b>${'ABCD'[k]}:</b>${esc(p.orden[pos])}</div></div>`).join('')}</div><div class="rpbar"><div class="rpreloj"><b>15</b></div><div class="rpmio">_ _ _ _</div><button class="btn">↺ Borrar</button></div>`;
      m.appendChild(z); plato.plano('rapida', 1);
      if (it.lee) await di(s, 'leo', p.q + '.', 'rapida'); else await s.espera(1500);
      yn.bocadillo(); // ¡a jugar!
      z.querySelector('.rejilla').style.visibility = ''; const mus = musica(); if (!mus) F.playMusic('tension');
      const t0 = performance.now(); let mio = '', tMio = null; const mioEl = z.querySelector('.rpmio');
      const pinta = () => { mioEl.textContent = (mio + '____').slice(0, 4).split('').join(' '); z.querySelectorAll('.rejilla .hexo').forEach(h => { const l = 'ABCD'[+h.dataset.k], i = mio.indexOf(l); h.classList.toggle('usada', i >= 0); h.querySelector('.num')?.remove(); if (i >= 0) h.insertAdjacentHTML('beforeend', `<span class="num">${i + 1}</span>`); }); };
      z.querySelectorAll('.rejilla .hexo').forEach(h => h.onclick = (ev) => { ev.stopPropagation(); if (tMio !== null) return; const l = 'ABCD'[+h.dataset.k]; if (mio.includes(l)) return; F.play('Tecla'); mio += l; pinta(); if (mio.length === 4) tMio = (performance.now() - t0) / 1000; });
      z.querySelector('.rpbar .btn').onclick = (ev) => { ev.stopPropagation(); if (tMio !== null) return; F.play('Tecla'); mio = ''; pinta(); };
      // rivales: aciertan más o menos la mitad de las veces, con sus tiempos
      const dif = 0.62; for (const c of cands) if (!c.yo) { if (Math.random() < .08) { c.t = null; continue; } c.t = 3.2 + Math.random() * 10.8; c.orden = Math.random() < dif ? correcto : (() => { let x; do x = mezcla(['A', 'B', 'C', 'D']).join(''); while (x === correcto); return x; })(); }
      const reloj = z.querySelector('.rpreloj'); const pend = new Set(cands.filter(c => !c.yo && c.t));
      while (true) { s.ok(); const t = (performance.now() - t0) / 1000, q = Math.max(0, 15 - t); reloj.querySelector('b').textContent = Math.ceil(q); reloj.style.setProperty('--p', (q / 15 * 360) + 'deg');
        for (const c of [...pend]) if (c.t <= t) { pend.delete(c); pantalla(c.a, c.n, 'resp'); }
        if (q <= 0 || tMio !== null) break; await s.espera(80); }
      if (mus) mus.pause(); F.stopMusic(); F.tono(220, .5, 'square', .2);
      for (const c of pend) pantalla(c.a, c.n, 'resp'); // los que contestaban a la vez
      const me = cands.find(c => c.yo); me.t = tMio; me.orden = tMio !== null ? mio : null; if (me.t !== null) pantalla(me.a, me.n, 'resp');
      z.querySelectorAll('.hexo').forEach(h => h.onclick = null); z.querySelector('.rpbar .btn').remove();
      await di(s, 'leo', FR_RAPIDA.ya, 'rapidaLeo');
      // revelación: panel lateral con tu orden y el correcto, en verde uno a uno
      const pn = document.createElement('div'); pn.className = 'rppanel';
      pn.innerHTML = `<div class="tit">En la Pregunta rápida, el orden que has elegido ha sido:</div><div class="lt">${me.orden ? me.orden.split('').join(' ') : '— — — —'}</div><div class="tit">Y el orden correcto es el siguiente:</div>`;
      z.style.right = 'min(36vw,400px)'; m.appendChild(pn); plato.plano('rapida', 1.2);
      await di(s, 'leo', FR_RAPIDA.orden, 'rapida');
      for (let pos = 0; pos < 4; pos++) { s.ok(); const l = correcto[pos], k = 'ABCD'.indexOf(l); const cj = document.createElement('div'); cj.className = 'cj'; cj.innerHTML = `<b>${l}:</b>${esc(p.orden[pos])}`; pn.appendChild(cj); await s.espera(350); cj.classList.add('ok'); { const h = z.querySelector(`.rejilla [data-k="${k}"]`); h.classList.remove('usada'); h.classList.add('ok'); } efecto('rapida_ding'); await s.espera(1100); }
      // acertantes con sus tiempos
      const bien = cands.filter(c => c.t !== null && c.t !== undefined && c.orden === correcto).sort((a, b) => a.t - b.t);
      await s.espera(500); pn.innerHTML = '<div class="tit">Candidatos que lo han hecho bien:</div>';
      if (!bien.length) pn.insertAdjacentHTML('beforeend', '<div class="cj">Nadie</div>');
      for (const c of bien) { const d = document.createElement('div'); d.className = 'cj fila' + (c.yo ? ' yo' : ''); d.innerHTML = `<span>${esc(c.n)}</span><span>${seg(c.t)}</span>`; pn.appendChild(d); pantalla(c.a, c.n, 'ok'); }
      await di(s, 'leo', bien.length ? FR_RAPIDA.lista : FR_RAPIDA.nadie, 'rapida');
      if (!bien.length) { await s.espera(800); continue; }
      const g = bien[0]; z.remove(); pn.children[1].classList.add('ok'); efecto('rapida_gana'); F.aplauso(3); g.f.userData.gesto = 1.2;
      plato.PLANOS.rapidaGana = [new T.Vector3(g.a.pos[0] * .45, 2.1, g.a.pos[2] * .45 + .3), new T.Vector3(g.a.pos[0], 1.5, g.a.pos[2])]; plato.plano('rapidaGana', 1.2);
      yn.rotulo('⚡ ' + g.n, 'El más rápido · ' + seg(g.t));
      if (g.yo) {
        await di(s, 'leo', FR_RAPIDA.ganaTu, 'rapidaGana'); yn.rotulo(); m.innerHTML = ''; luzRoja(false); F.aplauso(2);
        plato.plano('wide', 1.5); const sill = plato.sillas[0].position; await anda(s, conc, [conc.position.x, 0, conc.position.z], [sill.x, 0, sill.z + .4], 2.6);
        atriles.g.visible = false; rivales.forEach(f => f.visible = false); plato.sentar(conc, plato.sillas[0]); plato.sentar(leo, plato.sillas[1]); return true;
      }
      await di(s, 'leo', me.orden && me.orden !== correcto ? FR_RAPIDA.fallo : me.orden ? FR_RAPIDA.ganaOtro : FR_RAPIDA.sinResp, 'rapidaLeo'); yn.rotulo(); F.oooh();
      m.innerHTML = '<div class="rpfin">FIN DEL JUEGO</div>'; await s.espera(1600);
      await di(s, 'leo', FR_RAPIDA.otra, 'rapidaLeo');
      const otra = await new Promise(res => yn.actions([{ label: '⚡ Jugar otra Pregunta rápida', cls: 'gold', fn: () => res(true) }, { label: 'Menú', fn: () => res(false) }])); yn.actions([]); m.innerHTML = '';
      if (!otra) { fin(); return false; }
    }
  } catch (e) { fin(); throw e; }
}
function fin() { if (!atriles) return; atriles.g.visible = false; rivales.forEach(f => f.visible = false); if (lucesG) luzRoja(false); }
export const finRapida = fin;
// ---------------- comodín del público: los porcentajes suman siempre 100 mientras suben ----------------
export function reparte100(v) { const t = v.reduce((a, b) => a + b, 0) || 1; const x = v.map(n => n / t * 100), f = x.map(Math.floor); let r = 100 - f.reduce((a, b) => a + b, 0); x.map((n, i) => [n - f[i], i]).sort((a, b) => b[0] - a[0]).forEach(([, i]) => { if (r > 0) { f[i]++; r--; } }); return f; }
export async function animaSondeo(sd, pc, quitadas, s) { const vivos = [0, 1, 2, 3].filter(k => !quitadas.has(k)); const ini = [0, 1, 2, 3].map(k => vivos.includes(k) ? 1 : 0); const sp = sd.querySelectorAll('.pct span'), bs = sd.querySelectorAll('.barras i'); const t0 = performance.now(), dur = 1800;
  while (true) { const k = Math.min(1, (performance.now() - t0) / dur), e = 1 - Math.pow(1 - k, 3); const ini100 = reparte100(ini); const v = reparte100(ini100.map((a, i) => a + (pc[i] - a) * e)); v.forEach((x, i) => { sp[i].textContent = x + '%'; bs[i].style.height = x + '%'; }); if (k >= 1) break; await (s ? s.espera(50) : new Promise(r => setTimeout(r, 50))); } pc.forEach((x, i) => { sp[i].textContent = x + '%'; bs[i].style.height = x + '%'; }); }
// ---------------- emisión de TV: #QQSMElMinijuego, logo de la cadena y autopromociones ----------------
export const LOGOS_CADENA = [['juego', 'El del juego'], ['cuatro', 'Cuatro'], ['antena3hd', 'Antena 3 HD'], ['telecinco', 'Telecinco'], ['la2', 'La 2']];
const LOGO_ARCH = { cuatro: 'cadena/cuatro.png', antena3hd: 'cadena/antena3_hd.jpg', telecinco: 'cadena/telecinco_blanco_contorno.png', la2: 'cadena/la2_blanco.png' };
const NOM_CADENA = { cuatro: 'Cuatro', antena3hd: 'Antena 3', telecinco: 'Telecinco', la2: 'La 2' };
const APROMOS = [['A continuación', '¿Quién quiere ser millonario?'], ['Esta noche', 'Nuevo programa de ¿Quién quiere ser millonario?'], ['Muy pronto', 'Programa especial Nochebuena'], ['No te lo pierdas', 'La Pregunta rápida: ¿quién se sentará en la silla?'], ['Mañana', 'Más ¿Quién quiere ser millonario?, con Leo Arrieta'], ['Próximamente', 'Especial Prime Time']];
let em = null, emT = 0, emK = 0, emT2 = 0;
export function emision(on) {
  const { it } = D; clearInterval(emT); clearTimeout(emT2); if (!on || !it.emision) { if (em) em.style.display = 'none'; return; }
  if (!em) { em = document.createElement('div'); em.className = 'emision'; em.innerHTML = '<div class="ht">#QQSMElMinijuego</div><img class="lg" alt=""><div class="ap"></div>'; document.body.appendChild(em); }
  em.style.display = ''; const lg = em.querySelector('.lg'), f = LOGO_ARCH[it.logoCadena]; if (f) { if (!lg.src.endsWith(f)) lg.src = f; lg.style.display = ''; } else lg.style.display = 'none';
  const ap = em.querySelector('.ap'); ap.classList.remove('vis');
  if (it.autopromos) { const sale = () => { const [a, b] = APROMOS[emK++ % APROMOS.length]; const c = NOM_CADENA[it.logoCadena]; ap.innerHTML = `<small>${a}${c ? ' · ' + c : ''}</small>${b}`; ap.classList.add('vis'); setTimeout(() => ap.classList.remove('vis'), 8000); }; emT = setInterval(sale, 45000); emT2 = setTimeout(sale, 12000); }
}
export function filasRapida() {
  const { filaSiNo, filaOpc, nota } = D; const w = [];
  w.push(filaSiNo('⚡ Pregunta rápida antes de las 15 preguntas', 'rapida'), nota('Seis candidatos ordenan cuatro respuestas contra el reloj; el más rápido que acierte se sienta en la silla. Sale en el Programa completo, los especiales y el Entrenamiento.'));
  w.push(filaSiNo('📡 Emisión de TV (#QQSMElMinijuego, logo y autopromos)', 'emision'), filaSiNo('📢 Autopromociones de la cadena', 'autopromos'), filaOpc('📺 Logo de la cadena', 'logoCadena', LOGOS_CADENA, null, 'rowLogoCadena', true), nota('El logo de la cadena sale abajo a la derecha durante la emisión. «El del juego» lo deja como siempre.'));
  return w;
}
