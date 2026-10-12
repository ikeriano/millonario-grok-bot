// ¿Quién quiere ser millonario? El juego 3D — juego de fans de Iker (estructura de menús de ¡Ahora Caigo! 1.13)
import { creaPlato } from './plato.js';
import { dibujaLogo } from './logo.js';
import { PRESENTADOR, PERSONAJES, ERAS, ESPECIALES, FRASES, EXTRAS, PROMOS, PROMOS_LEO, ANUNCIOS, MONOLOGOS, HISTORIA } from './datos.js';
import TXT from './preguntas.txt';
import { VOZ } from './gen.js';
const VERSION = '1.0';
const en = (id) => document.getElementById(id);
const az = (a) => a[Math.floor(Math.random() * a.length)];
const mezcla = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const esc = (s) => String(s).replace(/[&<>"]/g, (e) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[e]);
const APP = !!window.AndroidKb || /; wv\)/.test(navigator.userAgent);
// ---------------- preguntas ----------------
export const PREGUNTAS = [];
{ let nivel = 1; for (const l of TXT.split('\n')) { const m = l.match(/^#(\d)/); if (m) { nivel = +m[1]; continue; } if (!l.trim() || l.startsWith('#')) continue; const [q, c, ...inc] = l.split('|'); PREGUNTAS.push({ nivel, q, c, inc }); } }
const nivelDe = (i) => i < 3 ? 1 : i < 6 ? 2 : i < 10 ? 3 : i < 13 ? 4 : 5;
// ---------------- ajustes ----------------
const it = Object.assign({ music: true, musicVol: .5, sfx: true, sfxVol: .8, voz: true, lee: true, leeVel: 'normal', chistes: true, quality: 'media', era: 'e2020', cabecera: true, publicidad: true, copro: true, especial: 'normal' }, JSON.parse(localStorage.getItem('mm_opts') || '{}'));
const guarda = () => localStorage.setItem('mm_opts', JSON.stringify(it));
const nombreJugador = () => localStorage.getItem('mm_nombre') || 'Iker';
const escaleraPropia = () => JSON.parse(localStorage.getItem('mm_escalera') || 'null');
// ---------------- audio sintetizado ----------------
const F = {
  ctx: new (window.AudioContext || window.webkitAudioContext)(), mus: null,
  tono(f, d, tipo = 'sine', v = .2, t0 = 0) { if (!it.sfx) return; const c = this.ctx, o = c.createOscillator(), g = c.createGain(); o.type = tipo; o.frequency.value = f; g.gain.setValueAtTime(0, c.currentTime + t0); g.gain.linearRampToValueAtTime(v * it.sfxVol, c.currentTime + t0 + .02); g.gain.exponentialRampToValueAtTime(.001, c.currentTime + t0 + d); o.connect(g).connect(c.destination); o.start(c.currentTime + t0); o.stop(c.currentTime + t0 + d + .05); },
  play(n) {
    if (n === 'Tecla') this.tono(880, .08, 'triangle', .15);
    else if (n === 'Bien') [523, 659, 784, 1047].forEach((f, i) => this.tono(f, .6, 'triangle', .25, i * .09));
    else if (n === 'Mal') [300, 220, 160].forEach((f, i) => this.tono(f, .7, 'sawtooth', .12, i * .2));
    else if (n === 'Elige') this.tono(220, 1.2, 'sine', .3);
    else if (n === 'Golpe') { this.tono(55, 1.5, 'sine', .5); this.tono(110, 1, 'triangle', .2); }
    else if (n === 'Fanfarria') [392, 523, 659, 784, 659, 784, 1047].forEach((f, i) => this.tono(f, .5, 'square', .1, i * .14));
  },
  playMusic(tipo = 'menu') {
    this.stopMusic(); if (!it.music) return; const c = this.ctx, g = c.createGain(); g.gain.value = .0001; g.connect(c.destination); g.gain.linearRampToValueAtTime(.07 * it.musicVol, c.currentTime + 2);
    const base = tipo === 'tension' ? [55, 82.4, 110, 116.5] : tipo === 'pregunta' ? [65.4, 98, 130.8, 155.6] : [73.4, 110, 146.8, 174.6];
    const os = base.map((f, i) => { const o = c.createOscillator(), lfo = c.createOscillator(), lg = c.createGain(); o.type = i % 2 ? 'sawtooth' : 'sine'; o.frequency.value = f; lfo.frequency.value = .1 + i * .07; lg.gain.value = f * .006; lfo.connect(lg).connect(o.frequency); const fl = c.createBiquadFilter(); fl.type = 'lowpass'; fl.frequency.value = 700; o.connect(fl).connect(g); o.start(); lfo.start(); return [o, lfo]; });
    let pulso = null; if (tipo !== 'menu') pulso = setInterval(() => this.tono(tipo === 'tension' ? 49 : 65, .25, 'sine', .25), tipo === 'tension' ? 700 : 1000);
    this.mus = { g, os, pulso };
  },
  stopMusic() { const m = this.mus; if (!m) return; clearInterval(m.pulso); try { m.g.gain.linearRampToValueAtTime(0, this.ctx.currentTime + .4); m.os.forEach(([o, l]) => { o.stop(this.ctx.currentTime + .5); l.stop(this.ctx.currentTime + .5); }); } catch (e) {} this.mus = null; },
  aplauso(d = 2) { if (!it.sfx) return; const c = this.ctx, n = c.sampleRate * d, b = c.createBuffer(1, n, c.sampleRate), x = b.getChannelData(0); for (let i = 0; i < n; i++) x[i] = (Math.random() * 2 - 1) * (Math.random() < .3 ? 1 : .2) * Math.min(1, (n - i) / (c.sampleRate * .6)); const s = c.createBufferSource(), g = c.createGain(), f = c.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 2000; g.gain.value = .35 * it.sfxVol; s.buffer = b; s.connect(f).connect(g).connect(c.destination); s.start(); },
};
// ---------------- voz (Piper pregrabada; si no, síntesis del navegador) ----------------
export const fnv = (t) => { t = t.normalize('NFC').trim(); let h = 2166136261; for (let i = 0; i < t.length; i++) { h ^= t.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; } return h.toString(16).padStart(8, '0'); };
let audioVoz = null;
function hablar(texto, quien = 'leo') {
  return new Promise((res) => {
    const fig = plato && plato.figuras[quien]; if (fig) fig.userData.habla = true;
    const fin = () => { if (fig) fig.userData.habla = false; res(); };
    const limpio = texto.replace(/[«»]/g, ''); const k = fnv(limpio), dur = VOZ[k];
    const lectura = Math.max(1600, texto.length * (it.leeVel === 'rapida' ? 45 : 62));
    if (!it.voz || /^\(/.test(texto)) return setTimeout(fin, lectura);
    if (dur) { audioVoz = new Audio('voz/' + k + '.mp3'); audioVoz.playbackRate = it.leeVel === 'rapida' ? 1.15 : 1; audioVoz.onended = fin; audioVoz.onerror = () => setTimeout(fin, lectura); audioVoz.play().catch(() => setTimeout(fin, lectura)); return; }
    if (window.speechSynthesis && speechSynthesis.getVoices().some(v => v.lang.startsWith('es'))) { const u = new SpeechSynthesisUtterance(limpio); u.lang = 'es-ES'; u.rate = it.leeVel === 'rapida' ? 1.2 : 1; u.onend = fin; u.onerror = fin; speechSynthesis.speak(u); setTimeout(fin, lectura * 2.5); return; }
    setTimeout(fin, lectura);
  });
}
const callaVoz = () => { if (audioVoz) audioVoz.pause(); window.speechSynthesis && speechSynthesis.cancel(); };
// ---------------- HUD ----------------
const yn = {
  bocadillo(quien, texto) { const b = en('bubble'); if (!texto) return b.classList.add('hidden'); b.querySelector('b').textContent = (PERSONAJES[quien] || PERSONAJES.leo).nombre; b.querySelector('span').textContent = texto; b.classList.remove('hidden'); b.style.left = '36%'; b.style.top = '8%'; b.style.transform = 'translateX(-50%)'; },
  toast(t, ms = 1800) { const e = en('toast'); e.textContent = t; e.classList.remove('hidden'); clearTimeout(this._t); this._t = setTimeout(() => e.classList.add('hidden'), ms); },
  rotulo(t, sub = '') { const e = en('lower3'); if (!t) return e.classList.add('hidden'); e.innerHTML = `<div><b>${esc(t)}</b>${sub ? `<br><small>${esc(sub)}</small>` : ''}</div>`; e.classList.remove('hidden'); },
  actions(lista) { const e = en('actions'); e.innerHTML = ''; for (const a of lista || []) { const b = document.createElement('button'); b.className = 'btn ' + (a.cls || ''); b.textContent = a.label; b.onclick = (ev) => { ev.stopPropagation(); F.play('Tecla'); a.fn(); }; e.appendChild(b); } },
  limpia() { this.bocadillo(); this.rotulo(); this.actions([]); en('mq').innerHTML = ''; en('hint').classList.add('hidden'); },
};
// ---------------- modos ----------------
let plato = null, jt = null, Gr = 'title';
class Cancel extends Error {}
const sesion = () => { if (jt) jt.alive = false; callaVoz(); const s = { alive: true }; s.espera = (ms) => new Promise((r, x) => setTimeout(() => s.alive ? r() : x(new Cancel()), ms)); s.ok = () => { if (!s.alive) throw new Cancel(); }; jt = s; return s; };
async function di(s, quien, texto, planoCam) { s.ok(); if (planoCam) plato.plano(planoCam); yn.bocadillo(quien, texto); await hablar(texto, quien); s.ok(); await s.espera(250); }
function ii(modo, sub) {
  en('menu').classList.add('hidden'); en('topbar').classList.remove('hidden'); yn.limpia(); Mi = false; F.stopMusic();
  const s = sesion();
  const M = { programa: modoPrograma, entrenamiento: modoPrograma, clasico: modoClasico, explorar: modoExplorar, paseo: modoExplorar, monologos: modoMonologo, oculta: modoEscena, tomas: modoEscena, fuera: modoEscena, promos: modoPromo, promosleo: modoPromo, publicidad: modoPromo, historia: modoHistoria };
  (M[modo] || modoPrograma)(s, modo, sub).catch((e) => { if (!(e instanceof Cancel)) console.error(e); });
}
function salir() { if (jt) jt.alive = false; callaVoz(); yn.limpia(); Lt(Gr === 'title' ? 'main' : Gr); }
// ---------- Programa completo ----------
async function cabecera(s) {
  plato.plano('cenital', .1); F.play('Golpe'); yn.rotulo('¿QUIÉN QUIERE SER MILLONARIO?');
  await s.espera(1200); plato.plano('logo', 2.5); F.playMusic('menu'); await s.espera(2600); plato.plano('wide', 2.5); await s.espera(2600); yn.rotulo();
}
async function modoPrograma(s, modo, sub) {
  const entreno = modo === 'entrenamiento';
  const era = sub === 'propia' && escaleraPropia() ? Object.assign({}, ERAS.e2020, { escalera: escaleraPropia(), nombre: 'Escalera propia' }) : ERAS[(sub && ERAS[sub]) ? sub : it.era];
  const esp = ESPECIALES.find(e => e.id === it.especial) || ESPECIALES[0], nombre = esp.id === 'famosos' ? 'Famoso invitado: ' + nombreJugador() : nombreJugador();
  let seguros = era.seguros.slice();
  plato.sentar(plato.figuras.leo, plato.sillas[1]); plato.figuras.leo.rotation.y = -Math.PI / 2; plato.figuras.conc.visible = true;
  if (!entreno) {
    yn.actions([{ label: 'Saltar ⏭', fn: () => s.saltar = true }]);
    if (it.cabecera) await cabecera(s);
    yn.actions([]);
    if (esp.banner) yn.rotulo(esp.banner, era.cadena);
    await di(s, 'leo', az(FRASES.saludo), 'pres'); F.aplauso();
    if (it.copro) { const c = az(['pili', 'chema', 'marga']); await di(s, c, `¡Hola! Soy ${PERSONAJES[c].nombre}, ${PERSONAJES[c].rol.toLowerCase()} del programa, y hoy acompaño a Leo en la presentación.`, 'wide'); }
    yn.rotulo(nombre, 'Concursante'); await di(s, 'leo', FRASES.presenta, 'silla'); F.aplauso(); yn.rotulo();
    await di(s, 'leo', FRASES['siéntate'], 'dos');
  }
  if (era.eligeSeguro) {
    await di(s, 'leo', FRASES.seguro, 'pres');
    const nv = await new Promise((r) => { const m = en('mq'); m.innerHTML = `<div class="mqzona"><div class="hexo q"><div class="hexi">Elige tu segundo seguro (pregunta 6 a 14)</div></div><div class="segsel"></div></div>`; for (let i = 6; i <= 14; i++) { const b = document.createElement('div'); b.className = 'hexo'; b.innerHTML = `<div class="hexi"><b>${i}:</b>${fmt(era.escalera[i - 1], era)}</div>`; b.onclick = () => { F.play('Tecla'); r(i); }; m.querySelector('.segsel').appendChild(b); } });
    seguros = [5, nv]; en('mq').innerHTML = ''; await di(s, 'leo', `Segundo seguro en la pregunta ${nv}: ${fmt(era.escalera[nv - 1], era, true)}.`, 'pres');
  }
  await di(s, 'leo', FRASES.empezamos, 'consola');
  const usados = {}, comods = era.comodines.slice(); let ganado = 0;
  const pool = {}; for (let n = 1; n <= 5; n++) pool[n] = mezcla(PREGUNTAS.filter(p => p.nivel === n));
  for (let i = 0; i < 15; i++) {
    const p = pool[nivelDe(i)].pop(), resp = mezcla([p.c, ...p.inc]), correcta = resp.indexOf(p.c);
    const r = await juegaPregunta(s, { p, resp, correcta, i, era, seguros, usados, comods });
    if (r === 'planta') { await di(s, 'leo', FRASES.planta, 'pres'); return final(s, ganado, era, true); }
    if (r === 'mal') {
      const seg = seguros.filter(n => n <= i).pop(); const premio = seg ? era.escalera[seg - 1] : 0;
      await di(s, 'leo', az(FRASES.mal), 'pres'); yn.bocadillo('leo', `La correcta era la ${'ABCD'[correcta]}: ${p.c}.`); await s.espera(2500); return final(s, premio, era, false);
    }
    ganado = era.escalera[i];
    if (i === 14) { F.play('Fanfarria'); F.aplauso(4); await di(s, 'leo', FRASES.millon, 'dos'); return final(s, ganado, era, true); }
    if (seguros.includes(i + 1)) await di(s, 'leo', FRASES.seguroOk, 'pres');
  }
}
const fmt = (v, era, largo) => String(v).replace(/\B(?=(\d{3})+(?!\d))/g, '.') + (era.moneda === 'ptas' ? (largo ? ' pesetas' : ' ptas') : ' €');
function pintaEscalera(m, i, era, seguros, comods, usados, onComod) {
  const e = document.createElement('div'); e.className = 'escalera';
  era.escalera.forEach((v, k) => { const d = document.createElement('div'); d.className = (k === i ? 'act ' : '') + (k < i ? 'hecho ' : '') + (seguros.includes(k + 1) ? 'seg' : ''); d.innerHTML = `<span>${k + 1}</span><span>${fmt(v, era)}</span>`; e.appendChild(d); });
  const c = document.createElement('div'); c.className = 'comods';
  const nom = { '5050': '50:50', publico: '👥', llamada: '📞', familiar: '👪' };
  for (const k of comods) { const b = document.createElement('div'); b.className = 'comod' + (usados[k] ? ' usado' : ''); b.textContent = nom[k]; b.title = { '5050': 'Cincuenta por ciento', publico: 'Comodín del público', llamada: 'Llamada', familiar: 'Comodín del acompañante' }[k]; b.onclick = () => !usados[k] && onComod(k); c.appendChild(b); }
  e.appendChild(c); m.appendChild(e);
}
async function juegaPregunta(s, o) {
  const { p, resp, correcta, i, era, seguros, usados, comods } = o; const m = en('mq'); m.innerHTML = '';
  F.playMusic(i < 5 ? 'pregunta' : 'tension'); plato.plano(az(['consola', 'silla', 'dos']), 1.5);
  const zona = document.createElement('div'); zona.className = 'mqzona';
  zona.innerHTML = `<div class="hexo q"><div class="hexi">${esc(p.q)}</div></div><div class="rejilla">${resp.map((r, k) => `<div class="hexo" data-k="${k}"><div class="hexi"><b>${'ABCD'[k]}:</b>${esc(r)}</div></div>`).join('')}</div><div class="mqbtns"></div>`;
  m.appendChild(zona); const quitadas = new Set();
  let elegir; const eleccion = new Promise(r => elegir = r);
  const comodin = async (k) => {
    usados[k] = true; m.querySelector('.escalera').remove(); pintaEscalera(m, i, era, seguros, comods, usados, comodin);
    if (k === '5050') { yn.bocadillo('leo', FRASES.c5050); hablar(FRASES.c5050); const ov = document.createElement('div'); ov.className = 'ovalo5050'; ov.textContent = '50:50'; m.appendChild(ov); await s.espera(1600); ov.remove(); mezcla([0, 1, 2, 3].filter(x => x !== correcta)).slice(0, 2).forEach(x => { quitadas.add(x); zona.querySelector(`[data-k="${x}"]`).classList.add('out'); }); F.play('Elige'); }
    if (k === 'publico') { plato.plano('grada', 1); await di(s, 'leo', FRASES.cpublico); const pc = votos(correcta, i, quitadas); const sd = document.createElement('div'); sd.className = 'sondeo'; sd.innerHTML = `<div class="pct">${pc.map(x => `<span>${x}%</span>`).join('')}</div><div class="barras">${pc.map(() => '<i style="height:0"></i>').join('')}</div><div class="let"><span>A</span><span>B</span><span>C</span><span>D</span></div>`; m.appendChild(sd); await s.espera(60); sd.querySelectorAll('i').forEach((b, k2) => b.style.height = pc[k2] + '%'); plato.plano('consola'); }
    if (k === 'llamada' || k === 'familiar') { await di(s, 'leo', k === 'llamada' ? FRASES.cllamada : FRASES.cfamiliar, 'pres'); const acierta = Math.random() < (1 - i * .045), dice = acierta ? correcta : az([0, 1, 2, 3].filter(x => !quitadas.has(x))); const quien = k === 'llamada' ? 'encarna' : 'conc'; await di(s, quien, `${az(['Creo que es', 'Yo diría', 'Estoy casi segura de que es', 'Ni idea, pero me suena'])} la ${'ABCD'[dice]}: ${resp[dice]}.`, 'silla'); }
  };
  pintaEscalera(m, i, era, seguros, comods, usados, comodin);
  await di(s, 'leo', `Pregunta ${i + 1}, por ${fmt(era.escalera[i], era, true)}.`, 'pres'); if (it.lee) await di(s, 'leo', p.q, 'consola');
  zona.querySelectorAll('.rejilla .hexo').forEach(h => h.onclick = () => { const k = +h.dataset.k; if (quitadas.has(k)) return; F.play('Tecla'); elegir(k); });
  const bt = zona.querySelector('.mqbtns'); const pb = document.createElement('button'); pb.className = 'btn'; pb.textContent = i === 0 ? 'Plantarse (0)' : `Plantarse (${fmt(era.escalera[i - 1], era)})`; pb.onclick = () => { if (i === 0) return yn.toast('Aún no has ganado nada'); elegir('planta'); }; bt.appendChild(pb);
  let k;
  while (true) {
    k = await eleccion.then(v => v); if (k === 'planta') { m.innerHTML = ''; return 'planta'; }
    const h = zona.querySelector(`[data-k="${k}"]`); zona.querySelectorAll('.hexo').forEach(x => x.classList.remove('sel')); h.classList.add('sel');
    if (i < 4) break;
    await di(s, 'leo', FRASES.ultima, 'pres');
    const ok = await new Promise(r => yn.actions([{ label: 'Sí, última', cls: 'gold', fn: () => r(true) }, { label: 'No', fn: () => r(false) }])); yn.actions([]);
    if (ok) break; h.classList.remove('sel'); o.__p = null; await new Promise(r => { const nueva = new Promise(rr => elegir = rr); nueva.then(v => { k = v; r(); }); }); if (k === 'planta') { m.innerHTML = ''; return 'planta'; }
    const h2 = zona.querySelector(`[data-k="${k}"]`); zona.querySelectorAll('.hexo').forEach(x => x.classList.remove('sel')); h2.classList.add('sel'); break;
  }
  F.stopMusic(); F.play('Elige'); plato.plano('silla', 1); await s.espera(i < 5 ? 1200 : 2600);
  const hc = zona.querySelector(`[data-k="${correcta}"]`); hc.classList.remove('sel'); hc.classList.add('ok', 'parpadea'); setTimeout(() => hc.classList.remove('parpadea'), 1200);
  if (k === correcta) { F.play('Bien'); F.aplauso(1.5); await di(s, 'leo', az(FRASES.bien), 'pres'); m.innerHTML = ''; return 'bien'; }
  F.play('Mal'); await s.espera(1500); m.innerHTML = ''; return 'mal';
}
function votos(c, i, quitadas) { const acierto = Math.max(.3, .85 - i * .04); let v = [0, 1, 2, 3].map(k => quitadas.has(k) ? 0 : k === c ? acierto * 100 : Math.random() * 30); const t = v.reduce((a, b) => a + b, 0); v = v.map(x => Math.round(x / t * 100)); v[c] += 100 - v.reduce((a, b) => a + b, 0); return v; }
async function final(s, premio, era, bueno) {
  F.stopMusic(); const m = en('mq'); m.innerHTML = `<div class="cheque"><small>PÁGUESE A ${esc(nombreJugador().toUpperCase())}</small>${fmt(premio, era, true)}<small>¿Quién quiere ser millonario? · ${esc(era.nombre)}</small></div>`;
  plato.plano('dos', 2); if (bueno) F.aplauso(3); await di(s, 'leo', `Te llevas ${fmt(premio, era, true)}. ¡Enhorabuena!`);
  await di(s, 'leo', FRASES.despedida, 'wide'); m.innerHTML = ''; plato.orbita(); F.playMusic('menu');
  yn.actions([{ label: 'Jugar otra vez', cls: 'gold', fn: () => ii('programa') }, { label: 'Menú', fn: () => Lt('play') }]);
}
// ---------- otros modos ----------
function modoClasico() { en('menu').classList.add('hidden'); Mi = false; en('classicWrap').classList.remove('hidden'); en('classic').src = 'clasico/index.html'; }
async function modoExplorar(s, modo) {
  plato.libre(); if (modo === 'paseo') plato.camera.position.set(11, 1.7, 2);
  yn.toast(APP || matchMedia('(pointer:coarse)').matches ? 'Arrastra a la derecha para mirar y usa el joystick para andar' : 'WASD para andar, arrastra para mirar', 3500);
}
async function modoMonologo(s, modo, sub) {
  const lista = sub && sub !== 'azar' ? [MONOLOGOS.find(x => x.id === sub)] : [az(MONOLOGOS)];
  for (const mo of lista) for (const l of mo.lineas) await di(s, 'leo', l, az(['pres', 'dos', 'consola']));
  F.aplauso(); yn.actions([{ label: 'Siguiente ▶', cls: 'gold', fn: () => ii('monologos', 'azar') }, { label: 'Lista', fn: () => Lt('monologos') }]);
}
async function modoEscena(s, a, id) {
  const L = EXTRAS[a], ids = id === 'todas' ? L.map(x => x.id) : [id || L[0].id]; let d;
  for (const x of ids) { d = L.find(e => e.id === x); for (const id2 of new Set(d.pasos.map(p => p[0]))) colocaPersonaje(id2); yn.rotulo(d.titulo, { oculta: 'Cámara oculta', tomas: 'Tomas falsas', fuera: 'Fuera de cámaras' }[a]); for (const [q, t, c] of d.pasos) await di(s, q, t, c); if (/Inocente|Corten/.test(d.pasos.at(-1)[1])) F.aplauso(); await s.espera(800); }
  const sig = L[(L.indexOf(d) + 1) % L.length]; yn.bocadillo();
  yn.actions([{ label: 'Siguiente ▶', cls: 'gold', fn: () => ii(a, sig.id) }, { label: 'Repetir', fn: () => ii(a, d.id) }, { label: 'Lista', fn: () => Lt(a) }]);
}
function colocaPersonaje(id) {
  const f = plato.figuras[id]; if (!f || id === 'leo' || id === 'conc') return; const pos = { pili: [3.5, 0, 3], chema: [-3.5, 0, 3], marga: [1.2, .25, 1.2], ramon: [0, 0, 3.5], encarna: [12, 1.2, 3] }[id] || [0, 0, 3];
  f.position.set(...pos); f.rotation.y = Math.atan2(-pos[0], -pos[2]); f.visible = true;
}
async function modoPromo(s, tipo, id) {
  const L = tipo === 'promos' ? PROMOS : tipo === 'promosleo' ? PROMOS_LEO : ANUNCIOS; const p = L.find(x => x.id === id) || L[0];
  F.playMusic('tension'); plato.plano('cenital', .1); yn.rotulo(tipo === 'publicidad' ? 'PUBLICIDAD' : p.titulo.toUpperCase(), tipo === 'publicidad' ? 'Anuncio inventado' : 'Promo');
  const planos = ['logo', 'wide', 'grada', 'consola', 'pres', 'dos'];
  for (const [k, l] of p.lineas.entries()) await di(s, tipo === 'promosleo' ? 'leo' : 'chema', l, planos[k % planos.length]);
  const m = en('mq'); const c = dibujaLogo(400); c.style.cssText = 'position:absolute;left:50%;top:45%;width:min(40vh,40vw);transform:translate(-50%,-50%);animation:pop2 .6s'; m.appendChild(c); F.play('Golpe'); await s.espera(2500); m.innerHTML = '';
  const sig = L[(L.indexOf(p) + 1) % L.length];
  yn.actions([{ label: 'Siguiente ▶', cls: 'gold', fn: () => ii(tipo, sig.id) }, { label: 'Lista', fn: () => Lt(tipo) }]);
}
async function modoHistoria(s) {
  for (const [a, t, d] of HISTORIA) { yn.rotulo(a + ' · ' + t); await di(s, 'leo', d, az(['wide', 'logo', 'dos', 'grada', 'pres'])); }
  yn.rotulo(); yn.actions([{ label: 'Menú', fn: () => Lt('main') }]);
}
// ---------------- MENÚS (misma estructura que ¡Ahora Caigo! 1.13) ----------------
function ei(a, e, t, n) { const i = document.createElement('button'); i.className = 'mbtn ' + t; i.innerHTML = `<span class="fp"></span><span>${a}${e ? `<small>${e}</small>` : ''}</span>`; i.onclick = (s) => { s.stopPropagation(); F.play('Tecla'); n(); }; return i; }
function Ia(a) { const e = document.createElement('button'); e.className = 'tbtn back'; e.innerHTML = '⟵ Volver'; e.onclick = (t) => { t.stopPropagation(); F.play('Tecla'); Lt(a); }; return e; }
function Pa(a) { const e = document.createElement('h2'); e.textContent = a; return e; }
const caja = (html) => { const d = document.createElement('div'); d.style.cssText = 'background:#0a1a5acc;border:2px solid #3a6aff;border-radius:16px;padding:10px 12px;margin:4px 0;color:#fff;font:14px system-ui'; d.innerHTML = html; return d; };
let Mi = false;
function XA() { if (jt) { jt.alive = false; jt = null; } callaVoz(); if (!Mi) { yn.limpia(); plato.orbita(10.8, 4.8); F.playMusic('menu'); Mi = true; } }
function Lt(a = 'main') {
  Gr = a; XA(); en('topbar').classList.add('hidden');
  const e = en('menu'); e.classList.remove('hidden'); e.innerHTML = ''; e.style.background = 'transparent';
  const t = ESPECIALES.find(x => x.id === it.especial) || ESPECIALES[0];
  if (a === 'title') {
    const u = document.createElement('div'); u.className = 'title'; const h = dibujaLogo(560); h.className = 'tlogo';
    const d = document.createElement('div'); d.className = 'tsub'; d.textContent = 'El juego'; const f = document.createElement('div'); f.className = 'ttap'; f.textContent = 'Toca para empezar'; u.append(h, d, f); e.appendChild(u);
    const p = (v) => { v.stopPropagation(); F.ctx.resume(); F.play('Fanfarria'); e.removeEventListener('pointerup', p); removeEventListener('keydown', p); Lt('main'); };
    e.addEventListener('pointerup', p); addEventListener('keydown', p); return;
  }
  const n = document.createElement('div'); n.className = 'mbox'; const i = document.createElement('div'); i.className = 'logo'; const s = dibujaLogo(560); s.className = 'mlogo'; i.appendChild(s);
  const o = document.createElement('div'); o.className = 'mtag'; o.textContent = t.id === 'normal' ? 'EL JUEGO · 3D' : t.emoji + ' ' + t.banner; i.appendChild(o);
  const r = document.createElement('div'); r.className = 'col ui';
  if (a === 'main') {
    r.append(ei('Jugar', 'Programa completo, entrenamiento, clásico…', 'gold', () => Lt('play')), ei('Promos', 'Promos 3D: esta noche, casting, famosos, leyendas…', '', () => Lt('promos')), ei('Promos de Leo', `${PRESENTADOR} presenta el concurso en el plató`, '', () => Lt('promosleo')),
      ei('Publicidad', 'Pausa publicitaria: anuncios inventados', '', () => Lt('publicidad')), ei('Cámara oculta', 'Bromas a Leo en el plató… ¡Inocente, inocente!', '', () => Lt('oculta')), ei('Tomas falsas', 'Lapsus, comodines rebeldes y «¡Corten!»', '', () => Lt('tomas')), ei('Fuera de cámaras', 'Maquillaje, ensayos, técnicos y la pausa', '', () => Lt('fuera')),
      ei('Paseo', 'Pasea por el plató y sube a la grada', '', () => ii('paseo')), ei('Casting', 'Apúntate y sal como concursante en las partidas', '', () => Lt('casting')), ei('Elige el valor de cada pregunta', 'Crea tu propia escalera de premios', '', () => Lt('escalera')),
      ei('Opciones', 'Sonido, calidad gráfica, pantalla completa', '', () => Lt('options')), ei('La historia de ¿Quién quiere ser millonario?', `${PRESENTADOR} te cuenta la historia del programa`, 'hist', () => Lt('historia')), ei('Cómo se juega', 'Las reglas del concurso', '', () => Lt('help')), ei('Créditos', '', '', () => Lt('credits')));
  } else if (a === 'play') {
    r.append(ei('Programa completo', 'Cabecera, 15 preguntas, comodines y cheque final', 'gold', () => ii('programa')), ei('Entrenamiento', 'Juega sin cabecera, elige la época', '', () => Lt('train')), ei('Clásico', 'El juego original de Scratch', '', () => ii('clasico')), ei('Explorar el plató', 'Pasea libremente por el plató 3D', '', () => ii('explorar')), ei('Monólogos del presentador', 'Sus números de humor: con el público, al teléfono y las normas', '', () => Lt('monologos')));
    r.appendChild(Pa('Época del concurso')); const ue = document.createElement('div'); ue.className = 'themes';
    for (const k in ERAS) { const d = document.createElement('button'); d.className = 'tbtn' + (it.era === k ? ' sel' : ''); d.innerHTML = `<span>${k === 'e1999' ? '₧' : '€'}</span>${ERAS[k].nombre}`; d.onclick = (f) => { f.stopPropagation(); F.play('Tecla'); it.era = k; guarda(); Lt('play'); }; ue.appendChild(d); }
    r.append(ue, Pa('Programa especial')); const u = document.createElement('div'); u.className = 'themes';
    for (const h of ESPECIALES) { const d = document.createElement('button'); d.className = 'tbtn' + (h.id === it.especial ? ' sel' : ''); d.innerHTML = `<span>${h.emoji}</span>${h.name}`; d.onclick = (f) => { f.stopPropagation(); F.play('Tecla'); it.especial = h.id; guarda(); Lt('play'); }; u.appendChild(d); }
    r.append(u, Ia('main'));
  } else if (a === 'train') {
    r.appendChild(Pa('Entrenamiento (sin cabecera)')); const u = (p, v, g, m = '') => ei(v, g, m, () => ii('entrenamiento', p));
    r.append(u('e2020', 'Escalera 2020–2025', 'Hasta 1.000.000 € · tú eliges el segundo seguro', 'gold'), u('e2005', 'Escalera 2005–2007', 'Seguros en 1.000 € y 10.000 €'), u('e1999', 'Escalera 1999–2001 «50 por 15»', 'Hasta 50.000.000 de pesetas'), u('propia', 'Mi escalera', 'La que has creado en «Elige el valor de cada pregunta»'), Ia('play'));
  } else if (a === 'oculta' || a === 'tomas' || a === 'fuera') {
    const MN = { oculta: ['📹', 'Cámara oculta', 'Bromas a Leo en el plató… ¡Inocente, inocente!'], tomas: ['🎬', 'Tomas falsas', 'Lapsus, comodines rebeldes y «¡Corten!»'], fuera: ['🎥', 'Fuera de cámaras', 'Maquillaje, ensayos, técnicos y la pausa'] }[a];
    r.appendChild(Pa(MN[0] + ' ' + MN[1])); r.appendChild(caja(MN[2] + '. Personajes virtuales inventados; todo es ficción.'));
    r.appendChild(ei('▶ Ver todas seguidas', EXTRAS[a].length + ' escenas', 'gold', () => ii(a, 'todas'))); for (const x of EXTRAS[a]) r.appendChild(ei(x.titulo, x.pasos.length + ' frases', '', () => ii(a, x.id))); r.appendChild(Ia('main'));
  } else if (a === 'promos' || a === 'promosleo' || a === 'publicidad') {
    const L = a === 'promos' ? PROMOS : a === 'promosleo' ? PROMOS_LEO : ANUNCIOS; r.appendChild(Pa({ promos: '📺 Promos', promosleo: '🎤 Promos de Leo', publicidad: '📢 Publicidad' }[a]));
    if (a === 'publicidad') r.appendChild(caja('Pausa publicitaria con anuncios <b>inventados</b> (marcas y productos de broma).'));
    for (const x of L) r.appendChild(ei(x.titulo, x.lineas[0], '', () => ii(a, x.id))); r.appendChild(Ia('main'));
  } else if (a === 'monologos') {
    r.appendChild(Pa('Monólogos del presentador')); r.appendChild(ei('🎲 Al azar', 'Uno cualquiera (y luego «Siguiente»)', 'gold', () => ii('monologos', 'azar')));
    const d = document.createElement('div'); d.className = 'monolist'; const ic = { publico: '👏', telefono: '📱', normas: '📜' };
    for (const v of MONOLOGOS) { const g = document.createElement('button'); g.className = 'tbtn'; g.innerHTML = `<span>${ic[v.tipo]}</span><b>${esc(v.titulo)}</b>`; g.onclick = (m) => { m.stopPropagation(); F.play('Tecla'); ii('monologos', v.id); }; d.appendChild(g); }
    const p = document.createElement('p'); p.className = 'mtext onote2'; p.textContent = `${PRESENTADOR} es un presentador virtual inventado con voz sintética genérica.`; r.append(d, p, Ia('play'));
  } else if (a === 'casting') {
    r.classList.add('opts'); r.appendChild(Pa('Casting')); r.appendChild(caja('Escribe tu nombre: saldrá en el rótulo de concursante y en el cheque final.'));
    const inp = document.createElement('input'); inp.value = nombreJugador(); inp.maxLength = 20; inp.style.cssText = 'font:900 20px Arial;padding:8px;border-radius:10px;border:2px solid #3a6aff;background:#02082a;color:#fff'; inp.onclick = (e) => e.stopPropagation();
    r.append(inp, ei('Guardar', '', 'gold', () => { localStorage.setItem('mm_nombre', inp.value.trim() || 'Iker'); yn.toast('¡Apuntado! Te llamaremos… ahora mismo.'); Lt('main'); }), Ia('main'));
  } else if (a === 'escalera') {
    r.classList.add('opts'); r.appendChild(Pa('Elige el valor de cada pregunta')); const base = escaleraPropia() || ERAS.e2020.escalera; const g = document.createElement('div'); g.className = 'segsel';
    base.forEach((v, k) => { const l = document.createElement('label'); l.style.cssText = 'color:#ffd23a;font:900 12px Arial'; l.innerHTML = `${k + 1} <input type="number" value="${v}" style="width:90px">`; l.onclick = (e) => e.stopPropagation(); g.appendChild(l); });
    r.append(g, ei('Guardar escalera', 'Se usa en Entrenamiento › Mi escalera', 'gold', () => { const vals = [...g.querySelectorAll('input')].map(x => Math.max(0, +x.value || 0)); localStorage.setItem('mm_escalera', JSON.stringify(vals)); yn.toast('Escalera guardada'); }), ei('Restablecer', 'Valores de 2020', '', () => { localStorage.removeItem('mm_escalera'); Lt('escalera'); }), Ia('main'));
  } else if (a === 'options') {
    r.classList.add('opts'); r.appendChild(Pa('Opciones'));
    const u = (txt, k, kv) => { const M = document.createElement('div'); M.className = 'orow'; const C = document.createElement('button'), L = () => { C.className = 'tbtn' + (it[k] ? ' sel' : ''); C.textContent = it[k] ? 'Sí' : 'No'; }; C.onclick = (D) => { D.stopPropagation(); it[k] = !it[k]; L(); guarda(); if (k === 'music') { Mi = false; XA(); } F.play('Tecla'); }; L(); const B = document.createElement('input'); B.type = 'range'; B.min = 0; B.max = 100; B.value = Math.round(it[kv] * 100); B.oninput = () => { it[kv] = +B.value / 100; guarda(); }; B.onclick = (e) => e.stopPropagation(); B.onchange = () => { F.play('Tecla'); if (k === 'music') { Mi = false; XA(); } }; const U = document.createElement('label'); U.textContent = txt; M.append(U, C, B); return M; };
    const h = (txt, k) => { const R = document.createElement('div'); R.className = 'orow'; const w = document.createElement('label'); w.textContent = txt; const M = document.createElement('button'), C = () => { M.className = 'tbtn' + (it[k] ? ' sel' : ''); M.textContent = it[k] ? 'Sí' : 'No'; }; M.onclick = (L) => { L.stopPropagation(); it[k] = !it[k]; C(); guarda(); F.play('Tecla'); }; C(); R.append(w, M); return R; };
    const sel = (txt, k, ops, re) => { const d = document.createElement('div'); d.className = 'orow'; const f = document.createElement('label'); f.textContent = txt; d.appendChild(f); for (const [v, l] of ops) { const b = document.createElement('button'); b.className = 'tbtn' + (it[k] === v ? ' sel' : ''); b.textContent = l; b.onclick = (w) => { w.stopPropagation(); it[k] = v; guarda(); F.play('Tecla'); re ? location.reload() : Lt('options'); }; d.appendChild(b); } return d; };
    r.append(u('🎵 Música', 'music', 'musicVol'), u('🔊 Efectos', 'sfx', 'sfxVol'), h('🎤 Voz del presentador', 'voz'), h('📖 El presentador lee las preguntas', 'lee'), sel('⏩ Velocidad de lectura', 'leeVel', [['normal', 'Normal'], ['rapida', 'Rápida']]), h('😄 Chistes del presentador', 'chistes'),
      sel('📅 Época por defecto', 'era', Object.keys(ERAS).map(k => [k, ERAS[k].nombre])), h('🎬 Cabecera 3D en el Programa completo', 'cabecera'), h('📺 Publicidad en el Programa completo', 'publicidad'), h('🎭 Copresentador sorpresa', 'copro'), sel('✨ Calidad gráfica', 'quality', [['baja', 'Baja'], ['media', 'Media'], ['alta', 'Alta']], true));
    const x = document.createElement('div'); x.className = 'orow'; const y = document.createElement('label'); y.textContent = '⛶ Pantalla completa'; const b = document.createElement('button'); b.className = 'tbtn' + (document.fullscreenElement ? ' sel' : ''); b.textContent = document.fullscreenElement ? 'Salir' : 'Activar';
    b.onclick = async (_) => { _.stopPropagation(); try { document.fullscreenElement ? await document.exitFullscreen() : await document.documentElement.requestFullscreen(); } catch (e) {} setTimeout(() => Lt('options'), 300); }; if (APP) { b.disabled = true; b.textContent = 'Siempre (app)'; } x.append(y, b);
    const A = document.createElement('p'); A.className = 'mtext'; A.textContent = 'Si el juego va lento en tu móvil, elige calidad «Baja».'; r.append(x, A, Ia('main'));
  } else if (a === 'historia') {
    r.classList.add('text'); r.append(Ia('main'), Pa('La historia de ¿Quién quiere ser millonario?'), ei('▶ Que me la cuente Leo', 'Recorrido narrado por el plató', 'gold', () => ii('historia')));
    const u = document.createElement('div'); u.className = 'mtext'; u.innerHTML = HISTORIA.map(([y, t, d]) => `<p><b>${esc(y)} · ${esc(t)}</b><br>${esc(d)}</p>`).join(''); r.append(u);
  } else if (a === 'help') {
    r.classList.add('text'); r.append(Ia('main'), Pa('Cómo se juega')); const u = document.createElement('div'); u.className = 'mtext';
    u.innerHTML = `<p><b>Objetivo:</b> responder bien a <b>15 preguntas</b> de dificultad creciente para ganar el gran premio.</p><p><b>Respuestas:</b> toca A, B, C o D. Desde la pregunta 5, ${PRESENTADOR} te preguntará si es tu última respuesta.</p><p><b>Seguros:</b> en 2005–2007 y 1999–2001 están en las preguntas 5 y 10. Desde 2020 solo el primero es fijo (pregunta 5) y <b>tú eliges el segundo</b> antes de empezar.</p><p><b>Comodines:</b> 50:50 (quita dos incorrectas), público (gráfico de barras con los votos), llamada (30 segundos con un amigo) y, desde 2020, el comodín del acompañante.</p><p><b>Plantarse:</b> puedes retirarte con lo ganado en cualquier momento. Si fallas, te llevas el último seguro alcanzado.</p><p><b>Controles 3D:</b> ☰ vuelve al menú, 👁 cambia la cámara, 💡 apaga o enciende los haces de luz.</p>`; r.append(u);
  } else if (a === 'credits') {
    r.classList.add('text'); r.append(Ia('main'), Pa('Créditos')); const u = document.createElement('div'); u.className = 'mtext';
    u.innerHTML = `<p><b>Idea y juego</b><br>Iker</p><p><b>Presentador virtual</b><br>${PRESENTADOR} (personaje inventado)</p><p><b>Voz</b><br>Piper TTS (es_ES-davefx-medium), voz sintética genérica</p><p><b>Motor 3D</b><br>Three.js (MIT)</p><p><b>Modo Clásico</b><br>Juego de Scratch «Quem Quer Ser Um Milionário - Jogo 2025 remix», empaquetado con TurboWarp Packager</p><p class="small">Versión ${VERSION}</p><p class="small">Juego de fans sin ánimo de lucro. «¿Quién quiere ser millonario?» es un formato de sus respectivos propietarios; este juego no está afiliado ni respaldado por ellos.</p>`; r.append(u);
  }
  const l = document.createElement('div'); l.className = 'mver'; l.textContent = 'v' + VERSION; n.appendChild(l); n.append(i, r); e.appendChild(n);
}
// ---------------- arranque ----------------
function arranca() {
  const mq = document.createElement('div'); mq.id = 'mq'; en('hud').appendChild(mq);
  plato = creaPlato(en('c3d'), it.quality);
  let last = performance.now(); const loop = (t) => { plato.frame(Math.min(.05, (t - last) / 1000)); last = t; requestAnimationFrame(loop); }; requestAnimationFrame(loop);
  en('btnMenu').onclick = (s) => { s.stopPropagation(); if (jt && jt.alive && !confirm('¿Volver al menú? Se perderá la partida.')) return; Lt('main'); };
  en('btnLuces').onclick = (s) => { s.stopPropagation(); yn.toast(plato.toggleLuces() ? 'Haces de luz encendidos' : 'Haces de luz apagados', 1000); };
  let ci = 0; en('btnCam').onclick = (s) => { s.stopPropagation(); if (plato.cam.modo === 'libre') return; const k = Object.keys(plato.PLANOS); plato.plano(k[ci++ % k.length]); };
  en('classicBack').onclick = () => { en('classicWrap').classList.add('hidden'); en('classic').src = 'about:blank'; Mi = false; Lt('play'); };
  // controles del modo libre
  const keys = {}; addEventListener('keydown', e => { keys[e.key.toLowerCase()] = 1; upd(); }); addEventListener('keyup', e => { keys[e.key.toLowerCase()] = 0; upd(); });
  const upd = () => { plato.mueve.z = (keys.s ? 1 : 0) - (keys.w ? 1 : 0); plato.mueve.x = (keys.d ? 1 : 0) - (keys.a ? 1 : 0); };
  const tc = en('touch'); let drag = null;
  tc.addEventListener('pointerdown', e => { drag = { x: e.clientX, y: e.clientY, izq: e.clientX < innerWidth / 3 }; });
  addEventListener('pointermove', e => { if (!drag || plato.cam.modo !== 'libre') return; if (drag.izq) { plato.mueve.x = Math.max(-1, Math.min(1, (e.clientX - drag.x) / 60)); plato.mueve.z = Math.max(-1, Math.min(1, (e.clientY - drag.y) / 60)); } else { plato.cam.yaw += (e.clientX - drag.x) * .005; plato.cam.pitch = Math.max(-1, Math.min(1, plato.cam.pitch - (e.clientY - drag.y) * .004)); drag.x = e.clientX; drag.y = e.clientY; } });
  addEventListener('pointerup', () => { if (drag && drag.izq) { plato.mueve.x = plato.mueve.z = 0; } drag = null; });
  en('loading').classList.add('hidden');
  const q = new URLSearchParams(location.search); q.get('mode') ? ii(q.get('mode'), q.get('sub')) : Lt(q.get('screen') || 'title');
  Object.assign(window, { __menu: Lt, __startMode: ii, __plato: plato, __preguntas: PREGUNTAS, __it: it });
}
arranca();
