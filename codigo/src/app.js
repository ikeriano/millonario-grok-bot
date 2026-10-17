// ¿Quién quiere ser millonario? El juego 3D — juego de fans de Iker (estructura de menús de ¡Ahora Caigo! 1.13)
import { creaPlato } from './plato.js';
import { dibujaLogo } from './logo.js';
import { PRESENTADOR, PERSONAJES, ERAS, ESPECIALES, FRASES, EXTRAS, PROMOS, PROMOS_LEO, ANUNCIOS, MONOLOGOS, HISTORIA, FRASES2 } from './datos.js';
import { RC, rcGuarda, rcBorra, rcCarga, rcLeeSb3, rcCargaMusicas, RANURAS } from './recursos.js';
import { stCorre, initPublicidad, CADENA, ANUNCIOS_ST, CORTINILLAS } from './publicidad.js';
import TXT from './preguntas.txt';
import { VOZ } from './gen.js';
import { camaraLibre, instalaV12, lucesEspecial, sting, filaTitulo, filaVideo3D, cabVideo3D, regidor, menuEscenas, esGen, escenaGen, bannerDe, tituloTexto, especialActual, K as K12 } from './v12.js';
import { instalaExtras, filasExtras, entradasPromos, EX as EX0 } from './extras12.js';
import { masOpcionesMi, ordenEspeciales135 } from './menu135.js';
import { TEMAS_LOGO, ESP_EXTRA, SALUDOS_EXISTENTES, LUCES_EXISTENTES, REGIDORA, PREGUNTAS_YT, YT_CONCURSANTES } from './m12.js';
const PREG_YT = []; { let nivel = 1; for (const l of PREGUNTAS_YT.split('\n')) { const m = l.match(/^#(\d)/); if (m) { nivel = +m[1]; continue; } if (!l.trim()) continue; const [q, c, ...inc] = l.split('|'); PREG_YT.push({ nivel, q, c, inc }); } }
let regOn = false;
const VERSION = '1.10';
// ---------- v1.9: Normas sorpresa (lib en www/ns; apagadas por defecto: sin normas todo es exactamente igual) ----------
const NSX = () => window.NS || null;
const nsAct = () => { const N = NSX(); return !!(N && N.activas().length); };
const nsFx = (k, d) => nsAct() ? NSX().fx(k, d) : d;
async function nsArranca(entreno, era) {
  const N = NSX(); if (!N) return; N.termina(); N.mudo = !it.voz; N.sonido(it.sfx !== false); { const C = N.cat(); if (C) C.presentador = me.presentador || 'Leo Arrieta'; }
  const t = N.tipos(entreno ? 'Entrenamiento' : 'Programa completo').slice(); if (!era.eligeSeguro) t.push('segFijo'); if (!era.comodines.includes('familiar')) t.push('sinFamiliar');
  await N.empieza(t, { modo: (entreno ? 'Entrenamiento' : 'Programa completo') + ' · ' + era.nombre });
}
const nsTermina = () => { const N = NSX(); if (N) N.termina(); };
const NS_TXT = { cambio: 'Cambiamos la pregunta. Aquí tienes otra del mismo nivel.', pista: 'Te ayudo: esta respuesta no es.', segunda: '¡Segunda oportunidad! Esa no era. Elige otra.',
  trampolin: '¡Pregunta trampolín! Saltamos directamente a la pregunta nueve.', recarga: '¡Comodín recargado! Recuperas un comodín.', premio: '¡Gracias a las normas sorpresa, te llevas un premio especial! ¡Enhorabuena!',
  experto: 'Vamos a pedir la opinión de nuestro experto.', exp: [['A', 'B', 'C', 'D'].map(l => `Yo diría que es la ${l}.`), ['A', 'B', 'C', 'D'].map(l => `No estoy del todo seguro, pero creo que es la ${l}.`)] };
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
const it = Object.assign({ music: true, musicVol: .5, sfx: true, sfxVol: .8, publico: true, publicoVol: .7, gradas: true, voz: true, lee: true, leeVel: 'normal', chistes: true, monologo: true, quality: 'media', era: 'e2020', cabecera: 'cab3d', apertura: true, publicidad: true, copro: true, presSorpresa: false, especial: 'normal', regidor: true, vcab3d: false, plato: '2020', sonidosClasico: true, misPreguntas: true, escaleraSiempre: false }, JSON.parse(localStorage.getItem('mm_opts') || '{}'));
const guarda = () => localStorage.setItem('mm_opts', JSON.stringify(it));
const escaleraPropia = () => JSON.parse(localStorage.getItem('mm_escalera') || 'null');
// ---------------- audio sintetizado ----------------
const F = {
  ctx: new (window.AudioContext || window.webkitAudioContext)(), mus: null, sueltos: new Set(),
  tono(f, d, tipo = 'sine', v = .2, t0 = 0) { if (!it.sfx) return; const c = this.ctx, o = c.createOscillator(), g = c.createGain(); o.type = tipo; o.frequency.value = f; g.gain.setValueAtTime(0, c.currentTime + t0); g.gain.linearRampToValueAtTime(v * it.sfxVol, c.currentTime + t0 + .02); g.gain.exponentialRampToValueAtTime(.001, c.currentTime + t0 + d); o.connect(g).connect(c.destination); o.start(c.currentTime + t0); o.stop(c.currentTime + t0 + d + .05); },
  url(n) { const b = RC.cache['snd:' + n]; if (b) return (this._u = this._u || {})[n] || (this._u[n] = URL.createObjectURL(b)); return it.sonidosClasico ? 'sb3/snd/' + n + '.mp3' : null; },
  /** reproduce un sonido de ranura (propio, del Clásico o nada); devuelve el Audio o null */
  snd(n, { loop = false, tag = 'sfx', vol = 1 } = {}) { if (tag === 'sfx' ? !it.sfx : !it.music) return null; const u = this.url(n); if (!u) return null; const a = new Audio(u); a.loop = loop; a.volume = Math.min(1, vol * (tag === 'sfx' ? it.sfxVol : it.musicVol)); a.play().catch(() => {}); if (tag === 'sfx') { this.sueltos.add(a); a.onended = () => this.sueltos.delete(a); } return a; },
  play(n) {
    const m = { Bien: 'acierto1', Mal: 'fallo', Elige: 'elige', Fanfarria: 'millon', '5050': 'c5050', Comodin: 'comodin' }[n];
    if (m && this.snd(m)) return;
    if (n === 'Tecla') this.tono(880, .08, 'triangle', .15);
    else if (n === 'Bien') [523, 659, 784, 1047].forEach((f, i) => this.tono(f, .6, 'triangle', .25, i * .09));
    else if (n === 'Mal') [300, 220, 160].forEach((f, i) => this.tono(f, .7, 'sawtooth', .12, i * .2));
    else if (n === 'Elige' || n === 'Comodin' || n === '5050') this.tono(220, 1.2, 'sine', .3);
    else if (n === 'Golpe') { this.tono(55, 1.5, 'sine', .5); this.tono(110, 1, 'triangle', .2); }
    else if (n === 'Fanfarria') [392, 523, 659, 784, 659, 784, 1047].forEach((f, i) => this.tono(f, .5, 'square', .1, i * .14));
  },
  stopAll() { this.stopMusic(); this.sueltos.forEach(a => a.pause()); this.sueltos.clear(); },
  playMusic(tipo = 'menu', nivel = 0) {
    this.stopMusic(); if (!it.music) return;
    const ranura = tipo === 'menu' ? 'tema' : tipo === 'cabecera' ? 'cabecera' : tipo === 'despedida' ? 'despedida' : tipo === 'llamada' ? 'telefono' : 'fase' + (nivel < 5 ? 1 : nivel < 10 ? 2 : 3);
    if (tipo === 'cabecera' || tipo === 'despedida') { const b = RC.cache['cabecera_propia']; if (b) { const a = new Audio(URL.createObjectURL(b)); a.volume = it.musicVol; a.play().catch(() => {}); this.mus = { a }; return; } }
    const a = this.snd(ranura, { loop: tipo !== 'cabecera' && tipo !== 'despedida', tag: 'music', vol: .8 }); if (a) { this.mus = { a }; return; }
    const c = this.ctx, g = c.createGain(); g.gain.value = .0001; g.connect(c.destination); g.gain.linearRampToValueAtTime(.07 * it.musicVol, c.currentTime + 2);
    const base = tipo === 'tension' ? [55, 82.4, 110, 116.5] : tipo === 'pregunta' ? [65.4, 98, 130.8, 155.6] : [73.4, 110, 146.8, 174.6];
    const os = base.map((f, i) => { const o = c.createOscillator(), lfo = c.createOscillator(), lg = c.createGain(); o.type = i % 2 ? 'sawtooth' : 'sine'; o.frequency.value = f; lfo.frequency.value = .1 + i * .07; lg.gain.value = f * .006; lfo.connect(lg).connect(o.frequency); const fl = c.createBiquadFilter(); fl.type = 'lowpass'; fl.frequency.value = 700; o.connect(fl).connect(g); o.start(); lfo.start(); return [o, lfo]; });
    let pulso = null; if (tipo === 'tension' || tipo === 'pregunta') pulso = setInterval(() => this.tono(tipo === 'tension' ? 49 : 65, .25, 'sine', .25), tipo === 'tension' ? 700 : 1000);
    this.mus = { g, os, pulso };
  },
  stopMusic() { const m = this.mus; if (!m) return; this.mus = null; if (m.a) { m.a.pause(); return; } clearInterval(m.pulso); try { m.g.gain.linearRampToValueAtTime(0, this.ctx.currentTime + .4); m.os.forEach(([o, l]) => { o.stop(this.ctx.currentTime + .5); l.stop(this.ctx.currentTime + .5); }); } catch (e) {} },
  aplauso(d = 2) { if (!it.sfx || !it.publico) return; const c = this.ctx, n = c.sampleRate * d, b = c.createBuffer(1, n, c.sampleRate), x = b.getChannelData(0); for (let i = 0; i < n; i++) x[i] = (Math.random() * 2 - 1) * (Math.random() < .3 ? 1 : .2) * Math.min(1, (n - i) / (c.sampleRate * .6)); const s = c.createBufferSource(), g = c.createGain(), f = c.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 2000; g.gain.value = .35 * it.publicoVol; s.buffer = b; s.connect(f).connect(g).connect(c.destination); s.start(); },
  oooh() { if (!it.sfx || !it.publico) return; [0, .1, .2].forEach(t => this.tono(180 + Math.random() * 40, 1.4, 'sine', .12 * it.publicoVol, t)); },
};
// ---------------- voz (Piper pregrabada; si no, síntesis del navegador) ----------------
export const fnv = (t) => { t = t.normalize('NFC').trim(); let h = 2166136261; for (let i = 0; i < t.length; i++) { h ^= t.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; } return h.toString(16).padStart(8, '0'); };
let audioVoz = null;
// Mis audios: si el jugador puso SU audio a este momento, suena él en lugar de la frase (el bocadillo se sigue viendo)
const MA_MAP = (() => { const m = new Map(), F = FRASES, F2 = FRASES2 || {}; const pon = (x, k) => (Array.isArray(x) ? x : [x]).forEach(t => typeof t === 'string' && t && m.set(t.replace(/[«»]/g, '').trim(), k));
  pon(F.saludo, 'pres.saludo'); pon(F.ultima, 'pres.ultima'); pon(F.bien, 'pres.acierto'); pon(F.mal, 'pres.fallo'); pon(F.seguroOk, 'pres.seguro'); pon([F.c5050, F.cpublico, F.cllamada, F.cfamiliar], 'pres.comodin');
  pon(F.planta, 'pres.planta'); pon(F.millon, 'pres.victoria'); pon(F.despedida, 'pres.despedida');
  pon(F2.coproBien, 'copro.acierto'); pon(F2.coproMal, 'copro.fallo'); pon(F2.coproPregunta, 'copro.nervios'); return m; })();
function maMom(texto, quien) { try { if (!window.MisAudios || typeof texto !== 'string') return null; const k = MA_MAP.get(texto.replace(/[«»]/g, '').trim()); if (!k) return null; const [pid, mom] = k.split('.');
    if (pid === 'pres' && quien !== 'leo') return null; return window.MisAudios.evento(mom, pid); } catch (e) { return null; } }
function hablar(texto, quien = 'leo') {
  { const ma = maMom(texto, quien); if (ma) { const fig = plato && plato.figuras[quien]; if (fig) fig.userData.habla = true; if (audioVoz) audioVoz.pause(); return Promise.race([ma.done, new Promise(r => setTimeout(r, ma.ms + 2500))]).then(() => { if (fig) fig.userData.habla = false; }); } }
  return new Promise((res) => {
    const fig = plato && plato.figuras[quien]; if (fig) fig.userData.habla = true;
    const fin = () => { if (fig) fig.userData.habla = false; res(); };
    const limpio = texto.replace(/[«»]/g, ''); const k = fnv(limpio), nsv = !VOZ[k] && window.NS_VOZ ? window.NS_VOZ[k] : null, dur = VOZ[k] || (nsv ? 1 : 0);
    const lectura = Math.max(1600, texto.length * (it.leeVel === 'rapida' ? 45 : 62));
    if (!it.voz || /^\(/.test(texto)) return setTimeout(fin, lectura);
    if (dur) { audioVoz = new Audio(nsv ? 'ns/voz/' + nsv + '.mp3' : 'voz/' + k + '.mp3'); audioVoz.playbackRate = it.leeVel === 'rapida' ? 1.15 : 1; audioVoz.onended = fin; audioVoz.onerror = () => setTimeout(fin, lectura); audioVoz.play().catch(() => setTimeout(fin, lectura)); return; }
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
  en('menu').classList.add('hidden'); en('topbar').classList.remove('hidden'); yn.limpia(); Mi = false; F.stopMusic(); K12.EX && K12.EX.ocioMenu(false); if (K12.EX && (modo === 'programa' || modo === 'promos' || modo === 'promosleo' || modo === 'promocadena')) K12.EX.bugMostrar();
  const s = sesion();
  const M = { programa: modoPrograma, entrenamiento: modoPrograma, clasico: modoClasico, clasico2010: modoClasico2010, explorar: modoExplorar, paseo: modoExplorar, monologos: modoMonologo, camlibre: async (s) => { en('topbar').classList.add('hidden'); await camaraLibre(s); Lt('main'); }, oculta: modoEscena, tomas: modoEscena, fuera: modoEscena, promos: modoPromo, promosleo: modoPromo, promocadena: modoPromo, publicidad: modoPublicidad, historia: modoHistoria };
  if (modo !== 'programa' && modo !== 'entrenamiento') { plato.sentar(plato.figuras.conc, plato.sillas[0]); plato.sentar(plato.figuras.leo, plato.sillas[1]); for (const k of ['pili', 'chema', 'marga', 'ramon', 'encarna']) plato.figuras[k].visible = false; }
  (M[modo] || modoPrograma)(s, modo, sub).catch((e) => { if (!(e instanceof Cancel)) console.error(e); });
}
function salir() { if (jt) jt.alive = false; callaVoz(); yn.limpia(); Lt(Gr === 'title' ? 'main' : Gr); }
// ---------- Programa completo ----------
const me = Object.assign({ nombre: 'Iker', profesion: '', ciudad: '', presentador: PRESENTADOR, familiar: 'Mi madre', amigo: 'Mi primo Javi' }, JSON.parse(localStorage.getItem('mm_cons') || '{}'));
const guardaMe = () => localStorage.setItem('mm_cons', JSON.stringify(me));
const nombreJugador = () => me.nombre || 'Iker';
async function videoPropio(s) {
  const b = RC.cache['video_cabecera']; if (!b) return false;
  const v = document.createElement('video'); v.src = URL.createObjectURL(b); v.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;object-fit:contain;background:#000;z-index:60'; v.playsInline = true; document.body.appendChild(v);
  await new Promise(r => { v.onended = r; v.onerror = r; v.onclick = r; v.play().catch(r); const k = setInterval(() => { if (!s.alive || s.saltar) { clearInterval(k); r(); } }, 100); }); v.remove(); return true;
}
async function cabecera(s) {
  F.playMusic('cabecera'); s.saltar = false;
  const esperaS = async (ms) => { const t0 = performance.now(); while (performance.now() - t0 < ms && !s.saltar) await s.espera(80); };
  if (it.vcab3d && await cabVideo3D(s)) { sting(especialActual().id); return; }
  if (it.cabecera === 'video' && await videoPropio(s)) { F.stopMusic(); return; }
  if (it.cabecera === 'plato3d') { plato.orbita(9, 3); yn.rotulo(tituloTexto().toUpperCase()); await esperaS(6000); yn.rotulo(); return; }
  plato.plano('cenital', .1); F.play('Golpe'); sting(especialActual().id); yn.rotulo(tituloTexto().toUpperCase());
  await esperaS(1200); plato.plano('logo', 2.5); await esperaS(2600);
  const m = en('mq'); const c = dibujaLogo(500); c.className = 'cablogo'; m.appendChild(c); F.play('Golpe'); await esperaS(2200); c.remove();
  plato.plano('wide', 2.5); await esperaS(2600); yn.rotulo();
}
async function anda(s, f, desde, hasta, seg) { const P = f.userData; P.anda = true; P.sentado = false; f.visible = true; const t0 = performance.now(); f.rotation.y = Math.atan2(hasta[0] - desde[0], hasta[2] - desde[2]); while (true) { s.ok(); const k = Math.min(1, (performance.now() - t0) / 1000 / seg); f.position.set(desde[0] + (hasta[0] - desde[0]) * k, desde[1], desde[2] + (hasta[2] - desde[2]) * k); if (k >= 1) break; await new Promise(r => requestAnimationFrame(r)); } P.anda = false; }
async function apertura(s) {
  plato.plano('grada', 1); F.aplauso(3); await di(s, 'leo', FRASES2.apertura[0]);
  const leo = plato.figuras.leo; plato.plano('wide', 1.5); await anda(s, leo, [0, 0, -9], [0, 0, 3.4], 3.5); leo.rotation.y = 0; leo.userData.gesto = 1.2; F.aplauso(2);
  await di(s, 'leo', FRASES2.apertura[1], 'pres2');
}
let coproProg = null;
async function comentaCopro(s, tipo) { if (!coproProg || Math.random() < .4) return; await di(s, coproProg, az(FRASES2[tipo]), 'copro'); }
async function modoPrograma(s, modo, sub) {
  const entreno = modo === 'entrenamiento';
  const propia = escaleraPropia(); let era = (sub === 'propia' || (it.escaleraSiempre && !sub)) && propia ? Object.assign({}, ERAS[it.era], { escalera: propia, nombre: 'Escalera propia' }) : ERAS[(sub && ERAS[sub]) ? sub : it.era];
  const esp = ESPECIALES.find(e => e.id === it.especial) || ESPECIALES[0];
  const cast = castingDe(); const nombre = (cast ? cast.nombre : esp.id === 'youtube' ? az(YT_CONCURSANTES) : nombreJugador()); regOn = !entreno;
  aspectoConcursante(cast);
  let seguros = era.seguros.slice(); coproProg = null;
  const leo = plato.figuras.leo, conc = plato.figuras.conc;
  plato.sentar(conc, plato.sillas[0]); plato.sentar(leo, plato.sillas[1]);
  for (const k of ['pili', 'chema', 'marga', 'ramon', 'encarna']) plato.figuras[k].visible = false;
  if (!entreno) {
    await regidor(s, 'aire');
    yn.actions([{ label: 'Saltar ⏭', fn: () => s.saltar = true }]);
    { const mcSust = window.MC3D ? await MC3D.introPrograma({ sess: s }) : false; s.ok(); if (it.apertura && !mcSust) await cabecera(s); }
    yn.actions([]); F.stopMusic();
    if (it.apertura) { conc.visible = false; await apertura(s); }
    if (esp.banner) yn.rotulo(esp.banner, era.cadena);
    await di(s, 'leo', az(FRASES.saludo), 'pres2'); F.aplauso();
    if (esp.saludo) { await di(s, 'leo', esp.saludo, 'pres2'); F.aplauso(); }
    await regidor(s, 'aplausos', .8);
    if (it.monologo && Math.random() < .5) { const mo = az(MONOLOGOS); for (const l of mo.lineas) await di(s, 'leo', l, 'pres2'); F.aplauso(); }
    if (it.copro || it.presSorpresa) { const c = az(['pili', 'chema', 'marga', 'ramon', 'encarna']); plato.dePie(plato.figuras[c], 1.3, .25, 2.2, -.4); plato.figuras[c].userData.gesto = 1; await di(s, c, `¡Hola! Soy ${PERSONAJES[c].nombre}, ${PERSONAJES[c].rol.toLowerCase()} del programa, y hoy acompaño a Leo en la presentación.`, 'copro'); if (it.presSorpresa) coproProg = c; else plato.figuras[c].visible = false; }
    if (it.apertura) { await di(s, 'leo', FRASES2.entraConc, 'wide'); await anda(s, conc, [-9, 0, 3], [-2.3, 0, .6], 3); }
    plato.sentar(conc, plato.sillas[0]); plato.sentar(leo, plato.sillas[1]);
    yn.rotulo(nombre, [cast ? cast.profesion : me.profesion, cast ? cast.ciudad : me.ciudad].filter(Boolean).join(' · ') || 'Concursante'); await di(s, 'leo', FRASES.presenta, 'silla'); F.aplauso();
    if (cast && cast.frase) await di(s, 'conc', cast.frase, 'silla'); yn.rotulo();
    await di(s, 'leo', FRASES['siéntate'], 'dos');
  }
  await nsArranca(entreno, era); s.ok();
  if (era.eligeSeguro || nsFx('eligeSeguro', false)) {
    await di(s, 'leo', FRASES.seguro, 'pres');
    const nv = await new Promise((r) => { const m = en('mq'); m.innerHTML = `<div class="mqzona"><div class="hexo q"><div class="hexi">Elige tu segundo seguro (pregunta 6 a 14)</div></div><div class="segsel"></div></div>`; for (let i = 6; i <= 14; i++) { const b = document.createElement('div'); b.className = 'hexo'; b.innerHTML = `<div class="hexi"><b>${i}:</b>${fmt(era.escalera[i - 1], era)}</div>`; b.onclick = () => { F.play('Tecla'); r(i); }; m.querySelector('.segsel').appendChild(b); } });
    seguros = [5, nv]; en('mq').innerHTML = ''; await di(s, 'leo', `Segundo seguro en la pregunta ${nv}: ${fmt(era.escalera[nv - 1], era, true)}.`, 'pres');
  }
  if (nsFx('seguroEn3', false)) seguros = seguros.map(n => n === 5 ? 3 : n);
  if (nsFx('tercerSeguro', 0) && !seguros.includes(12)) { seguros.push(12); seguros.sort((a, b) => a - b); }
  await di(s, 'leo', FRASES.empezamos, 'consola');
  const usados = {}, comods = era.comodines.slice(); let ganado = 0;
  let nsHucha = 0; const nsU = era.escalera[0], nsOro = nsFx('oro', false) ? 2 + Math.floor(Math.random() * 10) : -1;
  if (nsAct()) { if (nsFx('familiar', false) && !comods.includes('familiar')) comods.push('familiar'); if (nsFx('sinPublico', false) && comods.includes('publico')) comods.splice(comods.indexOf('publico'), 1); if (nsFx('cambio', false)) comods.push('cambio'); if (nsFx('experto', false)) comods.push('experto'); if (nsFx('pistaLeo', false)) comods.push('pista'); }
  const nsNivel = (i) => { let n = nivelDe(i); if (nsFx('suave', false) && i < 5) n = 1; if (nsFx('reto', false) && i >= 5) n = Math.min(5, n + 1); return pool[n].length ? n : nivelDe(i); };
  const pool = {}; const todas = PREGUNTAS.concat(it.misPreguntas ? misPreguntas() : []); for (let n = 1; n <= 5; n++) pool[n] = mezcla(todas.filter(p => p.nivel === n)).concat(esp.id === 'youtube' ? mezcla(PREG_YT.filter(p => p.nivel === n)) : []);
  for (let i = 0; i < 15; i++) {
    const p = pool[nsAct() ? nsNivel(i) : nivelDe(i)].pop(), resp = mezcla([p.c, ...p.inc]), correcta = resp.indexOf(p.c);
    if (coproProg) await comentaCopro(s, 'coproPregunta');
    if (!entreno) { if (i === 14) await regidor(s, 'final'); else if (i >= 5) await regidor(s, 'silencio', .25); }
    const r = await juegaPregunta(s, { p, resp, correcta, i, era, seguros, usados, comods, oro: i === nsOro });
    if (r === 'cambio') { i--; continue; }
    if (r === 'planta') { await di(s, 'leo', FRASES.planta, 'pres'); return final(s, nsAct() && nsFx('plantaMas', 1) !== 1 ? Math.round(ganado * nsFx('plantaMas', 1)) : ganado, era, true, nsHucha); }
    if (r === 'mal' && nsAct() && NSX().fallo().perdon) { F.oooh(); await s.espera(1600); i--; continue; }
    if (r === 'mal') {
      F.oooh(); const seg = seguros.filter(n => n <= i).pop(); let premio = seg ? era.escalera[seg - 1] : 0;
      if (nsAct()) { if (nsFx('red', false) && i > 0) premio = Math.max(premio, Math.floor(era.escalera[i - 1] / 2)); if (nsFx('consuelo', 0)) premio = Math.max(premio, nsFx('consuelo', 0) * nsU); }
      await di(s, 'leo', az(FRASES.mal), 'pres'); yn.bocadillo('leo', `La correcta era la ${'ABCD'[correcta]}: ${p.c}.`); await s.espera(2500);
      if (coproProg) await comentaCopro(s, 'coproMal'); return final(s, premio, era, false, nsHucha);
    }
    ganado = era.escalera[i];
    if (nsAct()) { const N = NSX(); N.acierto(); const e = N.est(); let x = nsFx('hucha', 0) * nsU;
      if (nsFx('primerU', 0) && e.aciertos === 1) x += nsFx('primerU', 0) * nsU;
      if (nsFx('rachaU', 0) && e.racha % 3 === 0) { x += nsFx('rachaU', 0) * nsU; N.aviso('🔥 ¡Racha de 3!'); N.vozEv('racha'); }
      if (i === nsOro) x += Math.round(era.escalera[i] / 2);
      if (x) { nsHucha += x; setTimeout(() => N.aviso('🐷 Hucha +' + fmt(x, era)), 900); } }
    if (coproProg) await comentaCopro(s, 'coproBien');
    if (i === 14) { F.play('Fanfarria'); F.aplauso(4); await di(s, 'leo', FRASES.millon, 'dos'); return final(s, nsAct() ? Math.round(ganado * nsFx('ultimaMas', 1)) : ganado, era, true, nsHucha); }
    if (seguros.includes(i + 1)) await di(s, 'leo', FRASES.seguroOk, 'pres');
    if (nsAct() && nsFx('recarga', false) && i + 1 === seguros[0]) { const k = comods.find(c => usados[c]); if (k) { delete usados[k]; NSX().aviso('🔋 ¡Comodín recargado!'); await di(s, 'leo', NS_TXT.recarga, 'pres'); } }
    if (nsAct() && nsFx('trampolin', false) && i === 6) { await di(s, 'leo', NS_TXT.trampolin, 'pres'); F.aplauso(1); i++; ganado = era.escalera[i]; }
    if (!entreno && i === 7) { await K12.EX.aleatoriaReproduce(.25); s.ok(); K12.EX.bugMostrar(); }
    if (it.chistes && !entreno && Math.random() < (nsFx('chistes', 0) || .18)) { await di(s, 'leo', az(FRASES2.chistes), 'pres'); F.aplauso(1); }
    if (it.publicidad && !entreno && (i === 4 || i === 9)) { await di(s, 'leo', FRASES2.pubSale, 'wide'); await regidor(s, 'pub'); await stCorre(i === 4 ? 'corta' : 'pausa', s); s.ok(); await K12.EX.aleatoriaReproduce(.6); s.ok(); F.snd('publicidad'); plato.plano('wide', .1); await regidor(s, 'vuelta'); await di(s, 'leo', FRASES2.pubVuelve, 'pres2'); }
  }
}
const fmt = (v, era, largo) => String(v).replace(/\B(?=(\d{3})+(?!\d))/g, '.') + (era.moneda === 'ptas' ? (largo ? ' pesetas' : ' ptas') : ' €');
function pintaEscalera(m, i, era, seguros, comods, usados, onComod) {
  const e = document.createElement('div'); e.className = 'escalera';
  era.escalera.forEach((v, k) => { const d = document.createElement('div'); d.className = (k === i ? 'act ' : '') + (k < i ? 'hecho ' : '') + (seguros.includes(k + 1) ? 'seg' : ''); d.innerHTML = `<span>${k + 1}</span><span>${fmt(v, era)}</span>`; e.appendChild(d); });
  const c = document.createElement('div'); c.className = 'comods';
  const nom = { '5050': '50:50', publico: '👥', llamada: '📞', familiar: '👪', cambio: '🔄', experto: '🎓', pista: '💡' };
  for (const k of comods) { const b = document.createElement('div'); b.className = 'comod' + (usados[k] ? ' usado' : ''); b.textContent = nom[k]; b.title = { '5050': 'Cincuenta por ciento', publico: 'Comodín del público', llamada: 'Llamada', familiar: 'Comodín del acompañante', cambio: 'Cambio de pregunta', experto: 'Comodín del experto', pista: 'Pista de Leo' }[k]; b.onclick = () => !usados[k] && onComod(k); c.appendChild(b); }
  e.appendChild(c); m.appendChild(e);
}
/** reloj de 30 segundos de la llamada */
async function cuentaAtras(s, seg, alHablar) {
  const m = en('mq'), r = document.createElement('div'); r.className = 'relojllamada'; r.innerHTML = `<div class="rl"><b>${seg}</b><small>📞 LLAMADA</small></div>`; const col = document.createElement('button'); col.className = 'btn'; col.textContent = 'Colgar'; r.appendChild(col); m.appendChild(r);
  let colgado = false; col.onclick = () => { F.play('Tecla'); colgado = true; };
  F.playMusic('llamada'); const t0 = performance.now(); const habla = alHablar();
  while (true) { s.ok(); const q = Math.max(0, seg - (performance.now() - t0) / 1000); r.querySelector('b').textContent = Math.ceil(q); r.querySelector('.rl').style.setProperty('--p', (q / seg * 360) + 'deg'); if (q <= 5) r.classList.add('ultimos'); if (q <= 0 || colgado) break; await s.espera(100); }
  F.stopMusic(); callaVoz(); r.remove(); await habla.catch(() => {}); if (!colgado) { F.tono(440, .6, 'square', .2); }
}
async function juegaPregunta(s, o) {
  const { p, resp, correcta, i, era, seguros, usados, comods, oro } = o; const m = en('mq'); m.innerHTML = '';
  F.playMusic(i < 5 ? 'pregunta' : 'tension', i); plato.plano(az(['consola', 'silla', 'dos']), 1.5);
  const zona = document.createElement('div'); zona.className = 'mqzona';
  zona.innerHTML = `<div class="hexo q"><div class="hexi">${esc(p.q)}</div></div><div class="rejilla">${resp.map((r, k) => `<div class="hexo" data-k="${k}"><div class="hexi"><b>${'ABCD'[k]}:</b>${esc(r)}</div></div>`).join('')}</div><div class="mqbtns"></div>`;
  m.appendChild(zona); const quitadas = new Set();
  const nsQuita = (oculta) => { const w = [0, 1, 2, 3].filter(x => x !== correcta && !quitadas.has(x)); if (!w.length) return; const x = az(w); quitadas.add(x); zona.querySelector(`[data-k="${x}"]`).classList.add(oculta ? 'out' : 'nstach'); };
  if (nsAct()) { const q = zona.querySelector('.hexo.q .hexi'); if (oro) { q.classList.add('nsgold'); q.textContent = '⭐ ' + p.q; }
    if (nsFx('inicial5', false) && i < 5) q.insertAdjacentHTML('beforeend', `<div class="nspista">💡 Empieza por «${esc(String(p.c).trim().charAt(0).toUpperCase())}»</div>`);
    if (i < nsFx('tachada', 0)) nsQuita(false); if (nsFx('recta', false) && i >= 12) nsQuita(true); }
  let elegir; let eleccion = new Promise(r => elegir = r); let ocupado = false;
  const comodin = async (k) => {
    if (ocupado) return; if (k === '5050' && quitadas.size >= 2) return yn.toast('Úsalo en otra pregunta'); ocupado = true; usados[k] = true; if (k === '5050' && nsFx('c5050x2', false) && !usados._5050b) { usados._5050b = true; usados[k] = false; }
    m.querySelector('.escalera').remove(); pintaEscalera(m, i, era, seguros, comods, usados, comodin);
    if (k === 'cambio') { await di(s, 'leo', NS_TXT.cambio, 'pres'); ocupado = false; elegir('cambio'); return; }
    if (k === 'pista') { await di(s, 'leo', NS_TXT.pista, 'pres'); nsQuita(true); }
    if (k === 'experto') { F.play('Comodin'); await di(s, 'leo', NS_TXT.experto, 'pres'); const ex = plato.figuras.ramon; plato.dePie(ex, -1.6, .25, 1.2, Math.PI / 2); yn.rotulo('🎓 ' + PERSONAJES.ramon.nombre, 'Comodín del experto'); const vale = [0, 1, 2, 3].filter(x => !quitadas.has(x)); const dice = Math.random() < .85 ? correcta : az(vale.filter(x => x !== correcta).length ? vale.filter(x => x !== correcta) : vale); await di(s, 'ramon', NS_TXT.exp[Math.floor(Math.random() * 2)][dice], 'silla'); ex.visible = false; yn.rotulo(); }
    if (k === '5050') { yn.bocadillo('leo', FRASES.c5050); hablar(FRASES.c5050); F.play('5050'); const ov = document.createElement('div'); ov.className = 'ovalo5050'; ov.textContent = '50:50'; m.appendChild(ov); await s.espera(1600); ov.remove(); (() => { const w = [0, 1, 2, 3].filter(x => x !== correcta && !quitadas.has(x)); return mezcla(w).slice(0, Math.min(2, w.length - 1)); })().forEach(x => { quitadas.add(x); zona.querySelector(`[data-k="${x}"]`).classList.add('out'); }); }
    if (k === 'publico') { plato.plano('grada', 1); F.play('Comodin'); await di(s, 'leo', FRASES.cpublico); F.snd('publico'); const pc = votos(correcta, i, quitadas, nsFx('publicoPro', false) ? .95 : 0); const sd = document.createElement('div'); sd.className = 'sondeo'; sd.innerHTML = `<div class="pct">${pc.map(x => `<span>${x}%</span>`).join('')}</div><div class="barras">${pc.map(() => '<i style="height:0"></i>').join('')}</div><div class="let"><span>A</span><span>B</span><span>C</span><span>D</span></div>`; m.appendChild(sd); await s.espera(60); sd.querySelectorAll('i').forEach((b, k2) => b.style.height = pc[k2] + '%'); plato.plano('consola'); }
    if (k === 'llamada' || k === 'familiar') {
      F.play('Comodin'); const acierta = Math.random() < (nsFx('amigo', false) ? .95 : (1 - i * .045)), dice = acierta ? correcta : az([0, 1, 2, 3].filter(x => !quitadas.has(x)));
      const cast = castingDe(1); const quienN = k === 'llamada' ? (cast ? cast.nombre : me.amigo) : me.familiar;
      if (k === 'llamada') { await di(s, 'leo', FRASES.cllamada, 'pres'); yn.rotulo('📞 ' + quienN, `Llamada · ${nsFx('llamada', 30)} segundos`); await cuentaAtras(s, nsFx('llamada', 30), async () => { await di(s, 'leo', `Hola, ${quienN}. Te llamamos desde ¿Quién quiere ser millonario? Tu amigo tiene una pregunta.`, 'pres'); await di(s, 'conc', p.q, 'silla'); await di(s, 'encarna', `${az(['Creo que es', 'Yo diría', 'Estoy casi seguro de que es', 'Ni idea, pero me suena'])} la ${'ABCD'[dice]}: ${resp[dice]}.`, 'silla'); }); yn.rotulo(); await di(s, 'leo', FRASES2.llamadaFin, 'pres'); }
      else { await di(s, 'leo', FRASES.cfamiliar, 'pres'); const fam = plato.figuras.encarna; plato.dePie(fam, -1.6, .25, 1.2, Math.PI / 2); yn.rotulo('👪 ' + quienN, 'Comodín del acompañante'); await di(s, 'encarna', `${az(['Yo creo que es', 'Me suena mucho', 'Ponla, que es'])} la ${'ABCD'[dice]}: ${resp[dice]}.`, 'silla'); fam.visible = false; yn.rotulo(); }
    }
    ocupado = false;
  };
  pintaEscalera(m, i, era, seguros, comods, usados, comodin);
  await di(s, 'leo', `Pregunta ${i + 1}, por ${fmt(era.escalera[i], era, true)}.`, 'pres'); if (it.lee) await di(s, 'leo', p.q, 'consola');
  zona.querySelectorAll('.rejilla .hexo').forEach(h => h.onclick = () => { const k = +h.dataset.k; if (quitadas.has(k) || ocupado) return; F.play('Tecla'); elegir(k); });
  const bt = zona.querySelector('.mqbtns'); const pb = document.createElement('button'); pb.className = 'btn'; pb.textContent = i === 0 ? 'Plantarse (0)' : `Plantarse (${fmt(era.escalera[i - 1], era)})`; pb.onclick = () => { if (i === 0) return yn.toast('Aún no has ganado nada'); elegir('planta'); }; bt.appendChild(pb);
  let k;
  while (true) {
    k = await eleccion; if (k === 'planta') { m.innerHTML = ''; return 'planta'; } if (k === 'cambio') { m.innerHTML = ''; return 'cambio'; }
    const h = zona.querySelector(`[data-k="${k}"]`); zona.querySelectorAll('.hexo').forEach(x => x.classList.remove('sel')); h.classList.add('sel');
    const nsSegunda = async () => { if (k === correcta || !nsFx('segunda', false) || !NSX().una('segunda')) return false; F.stopMusic(); F.play('Elige'); await s.espera(1200); F.play('Mal'); h.classList.remove('sel'); h.classList.add('nstach'); quitadas.add(k); NSX().aviso('🔁 ¡Segunda oportunidad!'); await di(s, 'leo', NS_TXT.segunda, 'pres'); F.playMusic(i < 5 ? 'pregunta' : 'tension', i); eleccion = new Promise(r => elegir = r); return true; };
    if (i < 4 || nsFx('rapida', false)) { if (await nsSegunda()) continue; break; }
    await di(s, 'leo', FRASES.ultima, 'pres');
    const ok = await new Promise(r => yn.actions([{ label: 'Sí, última', cls: 'gold', fn: () => r(true) }, { label: 'No', fn: () => r(false) }])); yn.actions([]);
    if (ok) { if (await nsSegunda()) continue; break; } h.classList.remove('sel'); eleccion = new Promise(r => elegir = r);
  }
  F.stopMusic(); F.play('Elige'); plato.plano('silla', 1); await s.espera(i < 5 ? 1200 : 2600);
  const hc = zona.querySelector(`[data-k="${correcta}"]`); hc.classList.remove('sel'); hc.classList.add('ok', 'parpadea'); setTimeout(() => hc.classList.remove('parpadea'), 1200);
  if (k === correcta) { F.play('Bien'); F.aplauso(1.5); plato.figuras.conc.userData.gesto = 1; await di(s, 'leo', az(FRASES.bien), 'pres'); m.innerHTML = ''; return 'bien'; }
  F.play('Mal'); await s.espera(1500); m.innerHTML = ''; return 'mal';
}
function votos(c, i, quitadas, pro) { const acierto = pro || Math.max(.3, .85 - i * .04); let v = [0, 1, 2, 3].map(k => quitadas.has(k) ? 0 : k === c ? acierto * 100 : Math.random() * 30); const t = v.reduce((a, b) => a + b, 0); v = v.map(x => Math.round(x / t * 100)); v[c] += 100 - v.reduce((a, b) => a + b, 0); return v; }
async function final(s, premio, era, bueno, hucha = 0) {
  premio += hucha;
  F.stopMusic(); const cast = castingDe(); const m = en('mq'); m.innerHTML = `<div class="cheque"><small>PÁGUESE A ${esc((cast ? cast.nombre : nombreJugador()).toUpperCase())}</small>${fmt(premio, era, true)}<small>¿Quién quiere ser millonario? · ${esc(era.nombre)}</small></div>`;
  plato.plano('dos', 2); if (bueno) F.aplauso(3);
  { const t = `Te llevas ${fmt(premio, era, true)}. ¡Enhorabuena!`; if (nsAct() && !VOZ[fnv(t)]) { if (hucha) NSX().aviso('🐷 Hucha de las normas: +' + fmt(hucha, era)); s.ok(); yn.bocadillo('leo', t); await hablar(NS_TXT.premio); s.ok(); await s.espera(400); } else await di(s, 'leo', t); }
  F.playMusic('despedida'); await di(s, 'leo', FRASES.despedida, 'wide'); m.innerHTML = '';
  if (regOn) { regOn = false; await regidor(s, 'fin'); }
  nsTermina(); await creditos(s); plato.orbita(); F.playMusic('menu');
  yn.actions([{ label: 'Jugar otra vez', cls: 'gold', fn: () => ii('programa') }, { label: 'Menú', fn: () => Lt('play') }]);
}
async function creditos(s) {
  const c = en('credits'), r = en('creditsRoll'); r.innerHTML = [['¿Quién quiere ser millonario? El juego', ''], ['Presenta', me.presentador], ['Concursante', (castingDe() || {}).nombre || nombreJugador()], ['Idea y juego', 'Iker'], ['Voces', 'Piper TTS'], ['Motor 3D', 'Three.js']].map(([a, b]) => `<p><b>${esc(a)}</b><br>${esc(b)}</p>`).join('');
  c.classList.remove('hidden'); plato.plano('cenital', 4); await s.espera(5000).finally(() => c.classList.add('hidden'));
}
// ---------- otros modos ----------
async function modoClasico2010() { en('menu').classList.add('hidden'); Mi = false; en('classicWrap').classList.remove('hidden'); en('classic').src = 'clasico2010/index.html'; }
let hayClasico2010 = false; try { fetch('clasico2010/index.html', { method: 'HEAD' }).then(r => { hayClasico2010 = r.ok; }).catch(() => {}); } catch (e) {}
addEventListener('message', e => { if (e.data === 'clasico2010:salir') en('classicBack').click(); });
async function modoClasico() { en('menu').classList.add('hidden'); Mi = false; en('classicWrap').classList.remove('hidden'); en('classic').src = 'clasico/index.html'; }
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
  for (const x of ids) { d = esGen(x) ? escenaGen(a, x) : L.find(e => e.id === x); for (const id2 of new Set(d.pasos.map(p => p[0]))) colocaPersonaje(id2); yn.rotulo(d.titulo, { oculta: 'Cámara oculta', tomas: 'Tomas falsas', fuera: 'Fuera de cámaras' }[a]); for (const [q, t, c] of d.pasos) await di(s, q, t, c); if (/Inocente|Corten/.test(d.pasos.at(-1)[1])) F.aplauso(); await s.espera(800); }
  const sig = d.gen ? { id: 'g' + (d.n % 9600 + 1) } : L[(L.indexOf(d) + 1) % L.length]; yn.bocadillo();
  yn.actions([{ label: 'Siguiente ▶', cls: 'gold', fn: () => ii(a, sig.id) }, { label: 'Repetir', fn: () => ii(a, d.id) }, { label: 'Lista', fn: () => Lt(a) }]);
}
function colocaPersonaje(id) {
  const f = plato.figuras[id]; if (!f || id === 'leo' || id === 'conc') return; const pos = { pili: [3.5, 0, 3], chema: [-3.5, 0, 3], marga: [1.2, .25, 1.2], ramon: [0, 0, 3.5], encarna: [12, 1.2, 3] }[id] || [0, 0, 3];
  plato.dePie(f, ...pos, Math.atan2(-pos[0], -pos[2]));
}
async function modoPublicidad(s, a, que) { await stCorre(que || 'pausa', s); s.ok(); if ((que || 'pausa') === 'pausa') { await K12.EX.aleatoriaReproduce(.7); s.ok(); } F.snd('publicidad'); yn.actions([{ label: 'Otra pausa ▶', cls: 'gold', fn: () => ii('publicidad', 'pausa') }, { label: 'Lista', fn: () => Lt('publicidad') }]); }
async function modoPromo(s, tipo, id) {
  if (id === 'videocab') { s.saltar = false; yn.actions([{ label: 'Saltar ⏭', fn: () => s.saltar = true }]); if (!await cabVideo3D(s)) yn.toast('Primero elige un vídeo en Opciones › ELEGIR VÍDEO PARA LA CABECERA 3D', 3500); yn.actions([{ label: 'Lista', fn: () => Lt('promos') }]); return; }
  if (id === 'cabecera' || id === 'apertura') { it.cabecera === 'video' || (s.saltar = false); yn.actions([{ label: 'Saltar ⏭', fn: () => s.saltar = true }]); if (id === 'cabecera') await cabecera(s); else { plato.figuras.conc.visible = false; await apertura(s); await di(s, 'leo', FRASES2.entraConc, 'wide'); await anda(s, plato.figuras.conc, [-9, 0, 3], [-2.3, 0, .6], 3); plato.sentar(plato.figuras.conc, plato.sillas[0]); plato.plano('dos'); } F.stopMusic(); yn.actions([{ label: 'Repetir', cls: 'gold', fn: () => ii('promos', id) }, { label: 'Lista', fn: () => Lt('promos') }]); return; }
  const L = tipo === 'promos' ? PROMOS : tipo === 'promosleo' ? PROMOS_LEO : ANUNCIOS; const p = L.find(x => x.id === id) || L[0];
  if (tipo === 'promosleo') plato.dePie(plato.figuras.leo, 0, .25, 3.4, 0);
  F.playMusic('tension'); plato.plano('cenital', .1); yn.rotulo(p.titulo.toUpperCase(), tipo === 'promocadena' ? 'Promo de ' + CADENA : 'Promo');
  const planos = tipo === 'promosleo' ? ['pres2', 'wide', 'pres2'] : ['logo', 'wide', 'grada', 'consola', 'pres', 'dos'];
  for (const [k, l] of p.lineas.entries()) await di(s, tipo === 'promosleo' ? 'leo' : 'chema', l, planos[k % planos.length]);
  const m = en('mq'); const c = logoMenu(400); c.style.cssText = 'position:absolute;left:50%;top:45%;width:min(40vh,40vw);transform:translate(-50%,-50%);animation:pop2 .6s'; m.appendChild(c); F.play('Golpe'); await s.espera(2500); m.innerHTML = '';
  const sig = L[(L.indexOf(p) + 1) % L.length];
  yn.actions([{ label: 'Siguiente ▶', cls: 'gold', fn: () => ii(tipo, sig.id) }, { label: 'Lista', fn: () => Lt(tipo) }]);
}
async function modoHistoria(s) {
  for (const [a, t, d] of HISTORIA) { yn.rotulo(a + ' · ' + t); await di(s, 'leo', d, az(['wide', 'logo', 'dos', 'grada', 'pres'])); }
  yn.rotulo(); yn.actions([{ label: 'Menú', fn: () => Lt('main') }]);
}
// ---------------- casting y mis preguntas ----------------
const CASTING = [];
const castingDB = () => new Promise((res, rej) => { const r = indexedDB.open('mm_casting', 1); r.onupgradeneeded = () => r.result.createObjectStore('p', { keyPath: 'id', autoIncrement: true }); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); });
async function castingCarga() { try { const d = await castingDB(); const l = await new Promise(r => { const q = d.transaction('p').objectStore('p').getAll(); q.onsuccess = () => r(q.result || []); q.onerror = () => r([]); }); CASTING.length = 0; CASTING.push(...l.sort((a, b) => a.fecha - b.fecha)); } catch (e) {} }
async function castingGuarda(p) { const d = await castingDB(); await new Promise((r, j) => { const t = d.transaction('p', 'readwrite'); t.objectStore('p').put(p); t.oncomplete = r; t.onerror = () => j(t.error); }); await castingCarga(); }
async function castingBorra(id) { const d = await castingDB(); await new Promise(r => { const t = d.transaction('p', 'readwrite'); t.objectStore('p').delete(id); t.oncomplete = r; t.onerror = r; }); await castingCarga(); }
const castingOn = () => localStorage.getItem('mm_casting_on') !== '0';
/** 0 = concursante (el elegido «como concursante» o, si el casting juega, uno al azar); 1 = amigo de la llamada */
function castingDe(rol = 0) {
  if (rol === 0) { const id = +localStorage.getItem('mm_central') || 0; const p = CASTING.find(x => x.id === id); if (p) return p; return null; }
  if (!castingOn() || !CASTING.length) return null; return CASTING[CASTING.length - 1];
}
function aspectoConcursante(p) {
  const f = plato.figuras.conc, P = f.userData; plato.scene.remove(f);
  const nuevo = plato.recreaFigura('conc', p ? { traje: parseInt(p.color.slice(1), 16), piel: parseInt(p.piel.slice(1), 16), camisa: 0xffffff, corbata: null, pelo: 0x2a1a10, pantalon: 0x22283a } : null);
  return nuevo;
}
const misPreguntas = () => JSON.parse(localStorage.getItem('mm_mispreg') || '[]');
// ---------------- MENÚS (misma estructura que ¡Ahora Caigo! 1.13) ----------------
function ei(a, e, t, n) { const i = document.createElement('button'); i.className = 'mbtn ' + t; i.innerHTML = `<span class="fp"></span><span>${a}${e ? `<small>${e}</small>` : ''}</span>`; i.onclick = (s) => { s.stopPropagation(); F.play('Tecla'); n(); }; return i; }
function Ia(a) { const e = document.createElement('button'); e.className = 'tbtn back'; e.innerHTML = '⟵ Volver'; e.onclick = (t) => { t.stopPropagation(); F.play('Tecla'); Lt(a); }; return e; }
function Pa(a) { const e = document.createElement('h2'); e.textContent = a; return e; }
const caja = (html, css = '') => { const d = document.createElement('div'); d.style.cssText = 'background:#0a1a5acc;border:2px solid #3a6aff;border-radius:16px;padding:10px 12px;margin:4px 0;color:#fff;font:14px system-ui;' + css; if (html) d.innerHTML = html; return d; };
const boton = (txt, fn, sel) => { const b = document.createElement('button'); b.className = 'tbtn' + (sel ? ' sel' : ''); b.innerHTML = txt; b.onclick = ev => { ev.stopPropagation(); F.play('Tecla'); fn(b); }; return b; };
const nota = (t, cls = 'onote') => { const p = document.createElement('p'); p.className = cls; p.textContent = t; return p; };
const pideArchivo = (accept, multiple = false) => new Promise(r => { const i = document.createElement('input'); i.type = 'file'; i.accept = accept; i.multiple = multiple; i.onchange = () => r(multiple ? [...i.files] : i.files[0]); i.click(); });
let Mi = false, yc = null;
addEventListener('beforeinstallprompt', (a) => { a.preventDefault(); yc = a; });
function XA() { if (jt) { jt.alive = false; jt = null; } callaVoz(); nsTermina(); if (!Mi) { F.stopAll(); yn.limpia(); plato.orbita(10.8, 4.8); F.playMusic('menu'); Mi = true; } }
// filas de Opciones (mismos componentes que ¡Ahora Caigo!)
function filaVol(txt, k, kv, id = '') { const M = document.createElement('div'); M.className = 'orow'; if (id) M.id = id; const C = document.createElement('button'), L = () => { C.className = 'tbtn' + (it[k] ? ' sel' : ''); C.textContent = it[k] ? 'Sí' : 'No'; }; C.onclick = (D) => { D.stopPropagation(); it[k] = !it[k]; L(); guarda(); if (k === 'music') { Mi = false; XA(); } F.play('Tecla'); }; L(); const B = document.createElement('input'); B.type = 'range'; B.min = 0; B.max = 100; B.value = Math.round(it[kv] * 100); B.oninput = () => { it[kv] = +B.value / 100; guarda(); }; B.onclick = (e) => e.stopPropagation(); B.onchange = () => { k === 'publico' ? F.aplauso(1.5) : F.play('Tecla'); if (k === 'music') { Mi = false; XA(); } }; const U = document.createElement('label'); U.textContent = txt; M.append(U, C, B); return M; }
function filaSi(txt, k, cb) { const R = document.createElement('div'); R.className = 'orow'; const w = document.createElement('label'); w.textContent = txt; const M = document.createElement('button'), C = () => { M.className = 'tbtn' + (it[k] ? ' sel' : ''); M.textContent = it[k] ? 'Sí' : 'No'; }; M.onclick = (L) => { L.stopPropagation(); it[k] = !it[k]; C(); guarda(); F.play('Tecla'); cb && cb(); }; C(); R.append(w, M); return R; }
function filaSiNo(txt, k) { const R = document.createElement('div'); R.className = 'orow'; const w = document.createElement('label'); w.textContent = txt; R.appendChild(w); for (const [v, t] of [[true, 'Sí'], [false, 'No']]) R.appendChild(boton(t, () => { it[k] = v; guarda(); R.querySelectorAll('button').forEach((x, j) => x.classList.toggle('sel', (j === 0) === v)); }, it[k] === v)); return R; }
function filaOpc(txt, k, ops, cb, id = '', wrap = false) { const d = document.createElement('div'); d.className = 'orow' + (wrap ? ' orow-wrap' : ''); if (id) d.id = id; const f = document.createElement('label'); f.textContent = txt; d.appendChild(f); for (const [v, l] of ops) { const b = document.createElement('button'); b.className = 'tbtn' + (it[k] === v ? ' sel' : ''); b.textContent = l; b.dataset.v = v; b.onclick = (w) => { w.stopPropagation(); it[k] = v; guarda(); F.play('Tecla'); d.querySelectorAll('button').forEach(x => x.classList.toggle('sel', x.dataset.v === String(v))); cb && cb(v); }; d.appendChild(b); } return d; }
function optCabeceraMusica() {
  const a = document.createElement('div'); a.className = 'ocustom'; a.id = 'optCustom'; const e = document.createElement('div'); e.className = 'olabel'; e.textContent = '🎶 Música de la cabecera'; a.appendChild(e);
  const t = document.createElement('div'); t.className = 'oname'; const b = RC.cache['cabecera_propia']; t.textContent = b ? 'Audio propio: ' + (b.name || 'cargado') : 'Sin audio propio: suena la música del Clásico (Scratch)'; a.appendChild(t);
  const r = document.createElement('div'); r.className = 'orow obtns'; let prueba = null;
  r.append(boton('📂 Elegir audio de mi dispositivo', async () => { const f = await pideArchivo('audio/*'); if (!f) return; await rcGuarda('cabecera_propia', f); Lt('options'); }, true), boton('▶ Probar', () => { if (prueba) { prueba.pause(); prueba = null; return; } const bb = RC.cache['cabecera_propia']; const u = bb ? URL.createObjectURL(bb) : F.url('cabecera'); if (u) { prueba = new Audio(u); prueba.volume = it.musicVol; prueba.play(); } else yn.toast('No hay música de cabecera'); }), boton('🗑 Quitar', async () => { await rcBorra('cabecera_propia'); Lt('options'); }));
  a.append(r, nota('El audio se queda solo en este dispositivo; no se sube ni se comparte.'), nota('Suena en la cabecera y en la despedida del Programa completo, con los mismos movimientos de cámara.', 'onote small')); return a;
}
function optPublico() { const e = document.createElement('div'); e.className = 'ocustom opub'; e.id = 'optPublico'; e.appendChild(filaVol('👏 Público', 'publico', 'publicoVol', 'rowPublico')); e.appendChild(filaSi('👥 Público en las gradas', 'gradas', () => plato.gradas(it.gradas))); e.appendChild(nota('Aplausos, vítores y «oooh» del público. Son sonidos sintetizados por el propio juego (no son grabaciones). Si tu móvil va justo, quitar el público de las gradas ayuda.')); return e; }
function optConcursantes() { const a = document.createElement('div'); a.className = 'ocustom'; a.id = 'optConcursantes'; const e = document.createElement('div'); e.className = 'olabel'; e.textContent = '👥 Concursantes'; const t = document.createElement('div'); t.className = 'oname'; t.textContent = `Tú: ${me.nombre}${me.profesion ? ' · ' + me.profesion : ''} · Presenta: ${me.presentador} · Llamada: ${me.amigo} · Acompañante: ${me.familiar}`; const n = document.createElement('div'); n.className = 'orow obtns'; n.appendChild(boton('✏️ Nombres y profesiones', () => Lt('concursantes'), true)); a.append(e, t, n); return a; }
const ETAPA_NOTA = { e2020: 'Plató azul con suelo dorado en espiral y consola en V. Primer seguro en la 5; el segundo lo eliges tú. Comodines: 50:50, público, llamada y acompañante.', e2005: 'Antena 3: escalera en euros hasta 1.000.000 €, seguros fijos en 1.000 € y 10.000 €. Comodines: 50:50, público y llamada.', e1999: 'Telecinco «50 por 15»: 15 preguntas hasta 50.000.000 de pesetas. Seguros en 100.000 y 3.200.000 ptas.' };
function filaPersonajes() { const d = document.createElement('div'); d.className = 'orow'; d.id = 'rowPersonajes'; const f = document.createElement('label'); f.textContent = '🧑 Personajes'; d.appendChild(f); const act = (() => { try { return localStorage.getItem('personajes3d') === 'personas' ? 'personas' : 'monigotes'; } catch (e) { return 'monigotes'; } })();
  for (const [v, l] of [['monigotes', 'Monigotes'], ['personas', 'Personas 3D']]) { const b = document.createElement('button'); b.className = 'tbtn' + (act === v ? ' sel' : ''); b.textContent = l; b.dataset.v = v; b.onclick = (w) => { w.stopPropagation(); if (v === act) return; try { localStorage.setItem('personajes3d', v); } catch (e) { } F.play('Tecla'); d.querySelectorAll('button').forEach(x => x.classList.toggle('sel', x.dataset.v === v)); try { sessionStorage.setItem('volverOpc', '1'); } catch (e) { } setTimeout(() => location.reload(), 250); }; d.appendChild(b); } return d; }
function filaEtapa() { const w = document.createElement('div'); const n = nota(ETAPA_NOTA[it.era]); w.append(filaOpc('📅 Etapa del programa', 'era', Object.keys(ERAS).map(k => [k, ERAS[k].nombre]), (v) => n.textContent = ETAPA_NOTA[v], 'rowEtapa'), n); return w; }
function filaRecursos() {
  const w = document.createElement('div'); const r1 = document.createElement('div'); r1.className = 'orow'; const l1 = document.createElement('label'); l1.textContent = '📦 Cargar sb3 / sonidos / sprites'; r1.append(l1, boton('Abrir ▶', () => Lt('recursos')));
  const r2 = document.createElement('div'); r2.className = 'orow orow-wrap'; const l2 = document.createElement('label'); l2.textContent = '🎶 Músicas, sonidos y gráficos del Clásico'; r2.appendChild(l2);
  r2.append(boton('📂 Cargar músicas', async () => { const fs = await pideArchivo('audio/*', true); if (!fs || !fs.length) return; const n = await rcCargaMusicas(fs); yn.toast(n ? `✅ ${n} sonidos cargados` : 'Nombra los archivos como las ranuras: tema.mp3, fase1.mp3…', 3000); Lt('options'); }), boton('🖼️ Logo', async () => { const f = await pideArchivo('image/*'); if (!f) return; await rcGuarda('logo', f); aplicaLogo(); Lt('options'); }), boton('🗑️ Borrar', async () => { await rcBorra(); location.reload(); }));
  const propios = Object.keys(RC.cache).filter(k => k.startsWith('snd:')).length;
  const n = document.createElement('p'); n.className = 'onote'; n.innerHTML = (it.sonidosClasico ? '✅ Sonidos y músicas: los del Clásico (Scratch) incluidos en esta copia' : '⬜ Sonidos del Clásico desactivados: música sintetizada') + (propios ? `<br>✅ ${propios} sonidos propios cargados` : '') + (RC.cache.logo ? '<br>✅ Logo propio' : '<br>✅ Logo: el del juego (dibujado)');
  w.append(r1, r2, filaSi('🎼 Usar los sonidos del Clásico', 'sonidosClasico', () => { Mi = false; XA(); Lt('options'); }), n); return w;
}
const PLATO_NOTA = { '2020': 'El plató de 2020: azul oscuro, haces de luz y logo morado y dorado. Prueba también el «Plató virtual».', '2005': 'Luces moradas y lilas, como en la etapa de Antena 3.', '1999': 'Azul y oro, como en los tiempos de las pesetas.', virtual: 'Plató virtual: neón cian y magenta.' };
function filaPlato() { const w = document.createElement('div'); const n = nota(PLATO_NOTA[it.plato]); w.append(filaOpc('🏟️ Plató', 'plato', [['2020', '2020-2025'], ['2005', 'Antena 3 2005-08'], ['1999', 'Telecinco 1999'], ['virtual', 'Plató virtual']], v => { plato.aplicaEstilo(v); n.textContent = PLATO_NOTA[v]; }, 'rowPlato'), n); return w; }
function optMisPreguntas() { const a = document.createElement('div'); a.className = 'ocustom'; const e = document.createElement('div'); e.className = 'olabel'; e.textContent = '❓ Mis preguntas'; const n = document.createElement('div'); n.className = 'orow obtns'; n.appendChild(boton('✏️ Gestionar mis preguntas', () => Lt('mispreguntas'), true)); a.append(e, n, nota(`Escribe tus propias preguntas (${misPreguntas().length} guardadas) con su nivel de dificultad; se mezclan con las 300 del juego. Se quedan solo en este dispositivo.`)); return a; }
function aplicaLogo() { const b = RC.cache.logo; if (!b) return; const img = new Image(); img.onload = () => plato.ponLogo(img); img.src = URL.createObjectURL(b); }
function logoMenu(size) { const b = RC.cache.logo; if (b) { const i = new Image(); i.src = URL.createObjectURL(b); i.style.cssText = 'max-width:100%;max-height:60vh;border-radius:50%'; return i; } return dibujaLogo(size); }
function Lt(a = 'main') {
  Gr = a; XA(); en('topbar').classList.add('hidden'); K12.EX && (K12.EX.bugOcultar(), K12.EX.ocioMenu(a === 'main'));
  const e = en('menu'); e.classList.remove('hidden'); e.innerHTML = ''; e.style.background = 'transparent';
  const t = ESPECIALES.find(x => x.id === it.especial) || ESPECIALES[0];
  if (a === 'title') {
    const u = document.createElement('div'); u.className = 'title'; const h = logoMenu(560); h.className = 'tlogo';
    const d = document.createElement('div'); d.className = 'tsub'; d.textContent = 'El juego'; const f = document.createElement('div'); f.className = 'ttap'; f.textContent = 'Toca para empezar'; u.append(h, d, f); e.appendChild(u);
    const p = (v) => { v.stopPropagation(); F.ctx.resume(); F.play('Fanfarria'); e.removeEventListener('pointerup', p); removeEventListener('keydown', p); let vo = false; try { vo = sessionStorage.getItem('volverOpc') === '1'; sessionStorage.removeItem('volverOpc'); } catch (e) { } Lt(vo ? 'options' : 'main'); };
    e.addEventListener('pointerup', p); addEventListener('keydown', p); return;
  }
  const n = document.createElement('div'); n.className = 'mbox'; const i = document.createElement('div'); i.className = 'logo'; const s = logoMenu(560); s.className = 'mlogo'; i.appendChild(s);
  const o = document.createElement('div'); o.className = 'mtag'; o.textContent = t.id === 'normal' ? 'EL JUEGO · 3D' : t.emoji + ' ' + bannerDe(t); i.appendChild(o);
  const r = document.createElement('div'); r.className = 'col ui';
  if (a === 'main') {
    r.append(ei('Jugar', 'Programa completo, entrenamiento, clásico…', 'gold', () => Lt('play')), ei('Promos', 'Promos 3D con Leo Arrieta: cabecera, apertura, casting, esta noche…', '', () => Lt('promos')), ei('Promos de Leo', `${me.presentador} presenta ¿Quién quiere ser millonario? en el plató: próximo programa, seguro, consola`, '', () => Lt('promosleo')),
      ei('Publicidad', `Pausa de ${CADENA}: anuncios inventados, cortinillas y promos de la cadena`, '', () => Lt('publicidad')), ei('Cámara oculta', 'Bromas a Leo en el plató… ¡Inocente, inocente!', '', () => Lt('oculta')), ei('Tomas falsas', 'Lapsus, comodines rebeldes y «¡Corten!»', '', () => Lt('tomas')), ei('Fuera de cámaras', 'Maquillaje, ensayos, técnicos y la pausa', '', () => Lt('fuera')),
      ei('Paseo', 'Pasea por el plató y sube a la grada', '', () => ii('paseo')), ei('Casting', 'Apúntate y sal como concursante en las partidas', '', () => Lt('casting')), ei('Elige el valor de cada pregunta', 'Coloca los 15 premios de la escalera', '', () => Lt('escalera')),
      ei('Cámara libre', 'Vuela por el plató 3D, marca puntos y graba tu propia cabecera', '', () => ii('camlibre')),
      ei('Opciones', 'Sonido, calidad gráfica, pantalla completa', '', () => Lt('options')), ei('La historia de ¿Quién quiere ser millonario?', `${me.presentador} te cuenta la historia del programa`, 'hist', () => Lt('historia')), ei('Cómo se juega', 'Las reglas del concurso', '', () => Lt('help')), ei('Créditos', '', '', () => Lt('credits')));
    if (!APP) r.append(ei('Instalar app', 'Juega sin conexión desde tu pantalla de inicio', 'inst', () => { yc ? yc.prompt() : yn.toast('Usa «Añadir a pantalla de inicio» en el menú del navegador', 3000); }));
  } else if (a === 'play') {
    r.append(ei('Programa completo', 'Cabecera, apertura, 15 preguntas, comodines, cheque y despedida', 'gold', () => ii('programa')), ei('Entrenamiento', 'Juega sin cabecera ni publicidad, elige la escalera', '', () => Lt('train')), ei('Clásico', 'El juego original de Scratch', '', () => ii('clasico')), ...(hayClasico2010 ? [ei('Modo clásico 2010', '¿Quién quiere ser millonario? 2010: el juego de móvil original, en español', '', () => ii('clasico2010'))] : []), ei('Explorar el plató', 'Pasea libremente por el plató 3D', '', () => ii('explorar')), ei('Monólogos del presentador', 'Sus números de humor: con el público, al teléfono y las normas', '', () => Lt('monologos')));
    r.appendChild(Pa('Programa especial')); const u = document.createElement('div'); u.className = 'themes';
    for (const h of ESPECIALES) { const d = document.createElement('button'); d.className = 'tbtn' + (h.id === it.especial ? ' sel' : ''); d.innerHTML = `<span>${h.emoji}</span>${h.name}`; d.onclick = (f) => { f.stopPropagation(); F.play('Tecla'); it.especial = h.id; guarda(); lucesEspecial(); sting(h.id); Lt('play'); }; u.appendChild(d); }
    r.append(u, Ia('main'));
  } else if (a === 'train') {
    r.appendChild(Pa('Entrenamiento (sin cabecera)')); const u = (p, v, g, m = '') => ei(v, g, m, () => ii('entrenamiento', p));
    r.append(u('e2020', 'Escalera 2020–2025', 'Hasta 1.000.000 € · tú eliges el segundo seguro', 'gold'), u('e2005', 'Escalera 2005–2007', 'Seguros en 1.000 € y 10.000 €'), u('e1999', 'Escalera 1999–2001 «50 por 15»', 'Hasta 50.000.000 de pesetas'), u('propia', 'Mi escalera', 'La de «Elige el valor de cada pregunta»'));
    const h = document.createElement('div'); h.className = 'mrow'; h.append(boton(it.misPreguntas ? '<span>❓</span>Preguntas: las del juego + las mías' : '<span>📜</span>Preguntas: solo las del juego', b => { it.misPreguntas = !it.misPreguntas; guarda(); b.innerHTML = it.misPreguntas ? '<span>❓</span>Preguntas: las del juego + las mías' : '<span>📜</span>Preguntas: solo las del juego'; b.classList.toggle('sel', it.misPreguntas); }, it.misPreguntas), Ia('play')); r.appendChild(h);
  } else if (a === 'oculta' || a === 'tomas' || a === 'fuera') {
    const MN = { oculta: ['📹', 'Cámara oculta', 'Bromas a Leo en el plató… ¡Inocente, inocente!'], tomas: ['🎬', 'Tomas falsas', 'Lapsus, comodines rebeldes y «¡Corten!»'], fuera: ['🎥', 'Fuera de cámaras', 'Maquillaje, ensayos, técnicos y la pausa'] }[a];
    r.appendChild(Pa(MN[0] + ' ' + MN[1])); r.appendChild(caja(MN[2] + '. Personajes virtuales inventados; todo es ficción.'));
    if (a === 'tomas' && window.Ep3000) r.appendChild(ei(window.Ep3000.titulo, window.Ep3000.sub, 'gold', () => window.Ep3000.abrir()));
    menuEscenas(a, r); r.appendChild(ei('▶ Ver todas seguidas', EXTRAS[a].length + ' escenas', 'gold', () => ii(a, 'todas'))); for (const x of EXTRAS[a]) r.appendChild(ei(x.titulo, x.pasos.length + ' frases', '', () => ii(a, x.id))); r.appendChild(Ia('main'));
  } else if (a === 'promos') {
    r.appendChild(Pa('Promos')); r.appendChild(caja(`Promos de ¿Quién quiere ser millonario? en 3D, en tiempo real, con nuestro presentador virtual <b>${esc(me.presentador)}</b> (personajes virtuales, sin personas reales).`));
    r.append(ei('🎬 Cabecera del programa', 'La cabecera de cada programa', '', () => ii('promos', 'cabecera')), ei('🎬 Apertura del programa', 'Plató, público, Leo entra y el concursante a la silla', '', () => ii('promos', 'apertura')), ei('🎥 Cabecera 3D con tu vídeo', 'Tu vídeo en las pantallas, la pared curva y el panel flotante del plató', '', () => ii('promos', 'videocab')));
    for (const x of PROMOS) r.appendChild(ei('📺 ' + x.titulo, x.lineas[0], x.id === 'estanoche' ? 'gold' : '', () => ii('promos', x.id)));
    const zp = document.createElement('div'); zp.className = 'col'; r.appendChild(zp); entradasPromos(ei, ii).then(L => zp.append(...L));
    r.appendChild(Ia('main'));
  } else if (a === 'promosleo') {
    r.appendChild(Pa('Promos de Leo')); r.appendChild(caja(`Promos en 3D en el plató: nuestro presentador virtual <b>${esc(me.presentador)}</b> presenta ¿Quién quiere ser millonario? en ${CADENA}. (Personaje virtual, voz sintética.)`));
    for (const x of PROMOS_LEO) r.appendChild(ei('🎤 ' + x.titulo, x.lineas[0], x.id === 'pl1' ? 'gold' : '', () => ii('promosleo', x.id))); r.appendChild(Ia('main'));
  } else if (a === 'publicidad') {
    r.appendChild(Pa('Publicidad · ' + CADENA)); r.appendChild(caja(`Pausa publicitaria de <b>${CADENA}</b> con anuncios <b>inventados</b> (marcas y productos de broma) y promos de la cadena. También puede salir en mitad del Programa completo.`));
    r.appendChild(ei('📺 Pausa publicitaria completa', 'Cortinillas, 3 anuncios y ¡volvemos!', 'gold', () => ii('publicidad', 'pausa')));
    r.appendChild(ei('⏱️ Cortinillas', 'Publicidad · Volvemos en 1 minuto · 30 segundos · 3 anuncios · 1 anuncio', '', () => ii('publicidad', 'cortinillas')));
    r.appendChild(Pa('Promos de la cadena')); for (const x of ANUNCIOS) r.appendChild(ei('📺 ' + x.titulo, 'Promo de la cadena', '', () => ii('promocadena', x.id)));
    r.appendChild(Pa('Anuncios inventados')); const g = document.createElement('div'); g.className = 'themes';
    for (const d of ANUNCIOS_ST) { const b = document.createElement('button'); b.className = 'tbtn'; b.innerHTML = `<span>🛒</span>${esc(d.marca)}`; b.title = d.producto; b.onclick = ev => { ev.stopPropagation(); ii('publicidad', 'anuncio:' + d.id); }; g.appendChild(b); }
    r.append(g, filaSiNo('📺 Publicidad en el Programa completo', 'publicidad'), Ia('main'));
  } else if (a === 'monologos') {
    r.appendChild(Pa('Monólogos del presentador')); r.appendChild(ei('🎲 Al azar', 'Uno cualquiera (y luego «Siguiente»)', 'gold', () => ii('monologos', 'azar')));
    const d = document.createElement('div'); d.className = 'monolist'; const ic = { publico: '👏', telefono: '📱', normas: '📜' }, nm = { publico: 'Con el público', telefono: 'Al teléfono', normas: 'Cambiando las normas' };
    for (const v of MONOLOGOS) { const g = document.createElement('button'); g.className = 'tbtn'; g.innerHTML = `<span>${ic[v.tipo]}</span><b>${esc(v.titulo)}</b><small>${nm[v.tipo]}</small>`; g.onclick = (m) => { m.stopPropagation(); F.play('Tecla'); ii('monologos', v.id); }; d.appendChild(g); }
    r.append(d, nota(`${me.presentador} es un presentador virtual inventado con voz sintética genérica. Toca el bocadillo para pasar de frase, o el plató para saltar el monólogo.`, 'mtext onote2'), Ia('play'));
  } else if (a === 'casting') {
    r.appendChild(Pa('Casting')); r.appendChild(caja('¡Apúntate al casting de <b>¿Quién quiere ser millonario?</b>! Rellena tu ficha y podrás jugar como concursante, con tu nombre, tu profesión y tu avatar; los apuntados también contestan al <b>comodín de la llamada</b>. Se guarda solo en este dispositivo.'));
    const f = caja(''); const campo = (id, et, tipo = 'text', ph = '', max = 24) => { const l = document.createElement('label'); l.style.cssText = 'display:block;margin:6px 0 2px;font-weight:700'; l.textContent = et; const i2 = document.createElement('input'); i2.type = tipo; i2.id = id; i2.placeholder = ph; i2.maxLength = max; i2.style.cssText = 'width:100%;box-sizing:border-box;padding:8px 10px;border-radius:10px;border:2px solid #3a6aff;background:#fff;color:#111;font:16px system-ui'; i2.addEventListener('keydown', ev => ev.stopPropagation()); i2.addEventListener('pointerup', ev => ev.stopPropagation()); f.append(l, i2); return i2; };
    const iN = campo('cNombre', 'Nombre', 'text', 'Tu nombre', 18), iE = campo('cEdad', 'Edad', 'number', '25', 3), iC = campo('cCiudad', 'Ciudad', 'text', 'Tu ciudad', 24), iP = campo('cProf', 'Profesión', 'text', 'A qué te dedicas', 40), iF = campo('cFrase', 'Tu frase', 'text', '¡Voy a por el millón!', 80);
    const colores = ['#2a6aff', '#e8102a', '#ff7a1a', '#3ac85a', '#ffd21a', '#d04aff', '#ff5fb0', '#1a1a1a', '#ffffff'], pieles = ['#f6d2b8', '#e0a880', '#a8704a', '#6a4028', '#e8eef8'];
    let col = colores[0], piel = pieles[0]; const paleta = (et, l, set, get) => { const d = document.createElement('div'); d.style.cssText = 'margin:8px 0 2px'; d.innerHTML = `<b>${et}</b><br>`; l.forEach(c => { const b = document.createElement('button'); b.style.cssText = `width:34px;height:34px;margin:4px;border-radius:50%;border:3px solid ${c === get() ? '#ffd21a' : '#0008'};background:${c};cursor:pointer`; b.onclick = ev => { ev.preventDefault(); ev.stopPropagation(); set(c); d.querySelectorAll('button').forEach(x => x.style.borderColor = '#0008'); b.style.borderColor = '#ffd21a'; }; d.appendChild(b); }); f.appendChild(d); };
    paleta('Color de la ropa del avatar', colores, c => col = c, () => col); paleta('Aspecto (tono de piel del avatar)', pieles, c => piel = c, () => piel);
    const msg = document.createElement('p'); msg.className = 'onote';
    const ok = boton('✅ Apuntarme al casting', async () => { const nombre = iN.value.trim(); if (!nombre) { msg.textContent = 'Escribe al menos tu nombre.'; return; } await castingGuarda({ nombre: nombre.slice(0, 18), edad: Math.max(0, Math.min(120, +iE.value || 0)), ciudad: iC.value.trim(), profesion: iP.value.trim(), frase: iF.value.trim(), color: col, piel, fecha: Date.now() }); Lt('casting'); });
    f.append(document.createElement('br'), ok, msg); r.appendChild(f);
    const cen = +localStorage.getItem('mm_central') || 0;
    const lis = caja('<b>Apuntados (' + CASTING.length + ')</b>');
    CASTING.slice().reverse().forEach(p => { const d = document.createElement('div'); d.style.cssText = 'display:flex;align-items:center;gap:8px;margin:6px 0;flex-wrap:wrap'; d.innerHTML = `<span style="width:22px;height:22px;border-radius:50%;background:${p.color};border:4px solid ${p.piel}"></span><span><b>${esc(p.nombre)}</b>${p.edad ? ', ' + p.edad : ''}${p.ciudad ? ' · ' + esc(p.ciudad) : ''}${p.profesion ? ' · ' + esc(p.profesion) : ''}${p.frase ? '<br><i>«' + esc(p.frase) + '»</i>' : ''}</span>`; d.append(boton(cen === p.id ? '✅ Es el concursante' : '🎮 Jugar como concursante', () => { localStorage.setItem('mm_central', cen === p.id ? '0' : String(p.id)); Lt('casting'); }, cen === p.id), boton('🗑️', async () => { await castingBorra(p.id); Lt('casting'); })); lis.appendChild(d); });
    r.appendChild(lis);
    const fila = document.createElement('div'); fila.className = 'mrow'; fila.append(boton(castingOn() ? '✅ El casting juega en las partidas' : '⬜ El casting no juega en las partidas', b => { localStorage.setItem('mm_casting_on', castingOn() ? '0' : '1'); b.innerHTML = castingOn() ? '✅ El casting juega en las partidas' : '⬜ El casting no juega en las partidas'; }), Ia('main')); r.appendChild(fila);
  } else if (a === 'escalera') {
    r.appendChild(Pa('Elige el valor de cada pregunta')); r.appendChild(caja('Coloca los 15 premios de la escalera. Toca dos premios para <b>intercambiarlos</b> o mantén pulsado uno para <b>escribir</b> otra cifra. Los dorados son los <b>seguros</b> de la época elegida. Se usan en <b>Entrenamiento › Mi escalera</b> (o en todos los programas).'));
    let v = (escaleraPropia() || ERAS[it.era].escalera).slice(), sel = -1; const pir = caja('', 'text-align:center');
    const pinta = () => { pir.innerHTML = ''; for (let k = 14; k >= 0; k--) { const b = document.createElement('button'); b.textContent = `${k + 1} · ${fmt(v[k], ERAS[it.era])}`; b.style.cssText = `display:block;min-width:180px;margin:2px auto;padding:5px 10px;border-radius:16px;border:2px solid ${sel === k ? '#ffffff' : '#1a1000'};background:${ERAS[it.era].seguros.includes(k + 1) || k === 14 ? '#ffd21a' : '#5aa8ff'};color:#1a1000;font:900 12px system-ui;cursor:pointer;transform:${sel === k ? 'scale(1.08)' : 'none'}`; let tl; b.onpointerdown = () => tl = setTimeout(() => { tl = 'x'; const n2 = prompt('Premio de la pregunta ' + (k + 1), v[k]); if (n2 && +n2 >= 0) { v[k] = Math.round(+n2); localStorage.setItem('mm_escalera', JSON.stringify(v)); pinta(); } }, 650); b.onclick = ev => { ev.stopPropagation(); if (tl === 'x') return; clearTimeout(tl); F.play('Tecla'); if (sel < 0) sel = k; else { [v[sel], v[k]] = [v[k], v[sel]]; sel = -1; localStorage.setItem('mm_escalera', JSON.stringify(v)); } pinta(); }; pir.appendChild(b); } };
    pinta(); r.appendChild(pir);
    const fila = document.createElement('div'); fila.className = 'mrow'; fila.append(boton('🔀 Al azar', () => { for (let i2 = v.length - 1; i2 > 0; i2--) { const j = Math.floor(Math.random() * (i2 + 1)); [v[i2], v[j]] = [v[j], v[i2]]; } localStorage.setItem('mm_escalera', JSON.stringify(v)); pinta(); }), boton('↕️ Ordenar', () => { v.sort((x, y) => x - y); localStorage.setItem('mm_escalera', JSON.stringify(v)); pinta(); }), boton('↩️ Como en el programa', () => { v = ERAS[it.era].escalera.slice(); localStorage.removeItem('mm_escalera'); pinta(); }), boton('▶️ Jugar con mi escalera', () => { localStorage.setItem('mm_escalera', JSON.stringify(v)); ii('entrenamiento', 'propia'); }));
    r.appendChild(fila);
    const f2 = document.createElement('div'); f2.className = 'mrow'; f2.append(boton((it.escaleraSiempre ? '✅' : '⬜') + ' Usar mi escalera en todos los programas', b => { it.escaleraSiempre = !it.escaleraSiempre; guarda(); b.innerHTML = (it.escaleraSiempre ? '✅' : '⬜') + ' Usar mi escalera en todos los programas'; }), Ia('main')); r.appendChild(f2);
  } else if (a === 'options') {
    r.classList.add('opts'); r.appendChild(Pa('Opciones'));
    r.append(filaTitulo(), filaVideo3D(), ...filasExtras(), filaSiNo('🎬 La regidora (Pili) habla en el Programa completo', 'regidor'));
    r.append(filaVol('🎵 Música', 'music', 'musicVol'), filaOpc('🎬 Cabecera', 'cabecera', [['cab3d', 'Cabecera 3D'], ['video', RC.cache.video_cabecera ? 'Vídeo propio' : 'Vídeo propio (cárgalo)'], ['plato3d', 'Plató 3D']], async v => { if (v === 'video' && !RC.cache.video_cabecera) { const f = await pideArchivo('video/*'); if (f) { await rcGuarda('video_cabecera', f); Lt('options'); } } }, 'rowCabecera', true),
      ...(window.MC3D ? [MC3D.fila()] : []), optCabeceraMusica(), filaVol('🔊 Efectos', 'sfx', 'sfxVol'), optPublico(), filaSi('🎤 Voz del presentador', 'voz'), filaSi('📖 El presentador lee las preguntas', 'lee'), filaOpc('⏩ Velocidad de lectura', 'leeVel', [['normal', 'Normal'], ['rapida', 'Rápida']], null, 'rowLeeVel'), filaSi('😄 Chistes del presentador', 'chistes'), filaSi('🎭 Monólogo del presentador', 'monologo'),
      optConcursantes(), filaEtapa(), filaPersonajes(), filaRecursos(), filaSiNo('📺 Publicidad en el Programa completo', 'publicidad'), filaSiNo('🎤 Copresentador sorpresa', 'copro'), filaSiNo('🎙️ Presentador sorpresa (todo el programa)', 'presSorpresa'), filaSiNo('🎬 Cabecera 3D y apertura larga en el Programa completo', 'apertura'), filaPlato(), optMisPreguntas(), ...(window.NS ? [NSX().fila('orow', 'tbtn'), nota('🎲 Con «Normas sorpresa», al empezar cada partida (Programa completo, especiales, entrenamiento y Modo clásico 2010) se sortean de 2 a 4 normas nuevas entre 51 (más de 75.000 combinaciones) y Leo Arrieta te las anuncia.')] : []),
      filaOpc('✨ Calidad gráfica', 'quality', [['baja', 'Baja'], ['media', 'Media'], ['alta', 'Alta']], () => location.reload()));
    const x = document.createElement('div'); x.className = 'orow'; const y = document.createElement('label'); y.textContent = '⛶ Pantalla completa'; const b = document.createElement('button'); b.className = 'tbtn' + (document.fullscreenElement ? ' sel' : ''); b.textContent = document.fullscreenElement ? 'Salir' : 'Activar';
    b.onclick = async (_) => { _.stopPropagation(); try { document.fullscreenElement ? await document.exitFullscreen() : await document.documentElement.requestFullscreen(); } catch (e) {} setTimeout(() => Lt('options'), 300); }; if (APP) { b.disabled = true; b.textContent = 'Siempre (app)'; } x.append(y, b);
    r.append(x, nota(`Rendimiento actual: ${Math.round(fps)} fps. Si el juego va lento en tu móvil, elige calidad «Baja».`, 'mtext'), Ia('main')); masOpcionesMi(r, F);
  } else if (a === 'concursantes') {
    r.classList.add('opts'); r.appendChild(Pa('Concursantes'));
    const campo = (et, k, ph) => { const R = document.createElement('div'); R.className = 'orow ofield'; const l = document.createElement('label'); l.textContent = et; const z = document.createElement('input'); z.type = 'text'; z.className = 'otext'; z.value = me[k]; z.placeholder = ph; z.maxLength = 24; z.addEventListener('input', () => { me[k] = z.value; guardaMe(); }); z.addEventListener('keydown', ev => { ev.stopPropagation(); ev.key === 'Enter' && z.blur(); }); z.addEventListener('pointerdown', ev => ev.stopPropagation()); z.addEventListener('pointerup', ev => ev.stopPropagation()); R.append(l, z); return R; };
    const c1 = document.createElement('div'); c1.className = 'ocustom'; c1.innerHTML = '<div class="olabel">🙋 Tú, el concursante</div>'; c1.append(campo('Tu nombre', 'nombre', 'Iker'), campo('Tu profesión', 'profesion', 'Estudiante'), campo('Tu ciudad', 'ciudad', 'Madrid'), nota(`${me.presentador} te presentará al empezar el Programa completo. Tu nombre sale en el rótulo, en el cheque y en los créditos.`));
    const c2 = document.createElement('div'); c2.className = 'ocustom'; c2.innerHTML = '<div class="olabel">🎤 El presentador</div>'; c2.append(campo('Nombre del presentador', 'presentador', PRESENTADOR), nota('Personaje inventado con voz sintética genérica.'));
    const c3 = document.createElement('div'); c3.className = 'ocustom'; c3.innerHTML = '<div class="olabel">📞 Tus comodines</div>'; c3.append(campo('Amigo de la llamada', 'amigo', 'Mi primo Javi'), campo('Acompañante (comodín del familiar)', 'familiar', 'Mi madre'));
    r.append(c1, c2, c3, Ia('options'));
  } else if (a === 'recursos') {
    r.classList.add('opts'); r.appendChild(Pa('Cargar sb3 / sonidos / sprites'));
    r.appendChild(caja('Abre un proyecto de Scratch (<b>.sb3</b>) y elige qué sonido suena en cada momento del concurso, o carga archivos de audio sueltos. Todo se queda solo en este dispositivo.'));
    const lista = caja(''); let sonidos = [];
    const pintaR = () => { lista.innerHTML = ''; for (const [k, nom] of RANURAS) { const R = document.createElement('div'); R.className = 'orow orow-wrap'; const l = document.createElement('label'); l.textContent = (RC.cache['snd:' + k] ? '✅ ' : (it.sonidosClasico ? '🎼 ' : '⬜ ')) + nom; R.appendChild(l); if (sonidos.length) { const se = document.createElement('select'); se.innerHTML = '<option value="">— elegir del sb3 —</option>' + sonidos.map((x, j) => `<option value="${j}">${esc(x.nombre)}</option>`).join(''); se.onclick = ev => ev.stopPropagation(); se.onchange = async () => { if (se.value === '') return; await rcGuarda('snd:' + k, sonidos[+se.value].blob); pintaR(); }; R.appendChild(se); } R.append(boton('📂', async () => { const f = await pideArchivo('audio/*'); if (f) { await rcGuarda('snd:' + k, f); pintaR(); } }), boton('▶', () => { const u = F.url(k); u ? new Audio(u).play() : yn.toast('Sin sonido'); }), boton('🗑', async () => { await rcBorra('snd:' + k); pintaR(); })); lista.appendChild(R); } };
    const fila = document.createElement('div'); fila.className = 'mrow'; fila.append(boton('📦 Abrir .sb3', async () => { const f = await pideArchivo('.sb3,application/zip'); if (!f) return; try { sonidos = await rcLeeSb3(f); yn.toast(`${sonidos.length} sonidos en el proyecto`); } catch (e) { yn.toast('No se pudo leer el .sb3'); } pintaR(); }, true), boton('🖼️ Logo', async () => { const f = await pideArchivo('image/*'); if (f) { await rcGuarda('logo', f); aplicaLogo(); } }), boton('🎬 Vídeo de cabecera', async () => { const f = await pideArchivo('video/*'); if (f) { await rcGuarda('video_cabecera', f); yn.toast('Vídeo guardado: elige «Vídeo propio» en Cabecera'); } }));
    pintaR(); r.append(fila, lista, nota('✅ propio · 🎼 el del Clásico (Scratch) · ⬜ sintetizado'), Ia('options'));
  } else if (a === 'mispreguntas') {
    r.classList.add('opts'); r.appendChild(Pa('Mis preguntas')); const L2 = misPreguntas();
    const f = caja(''); const campo = (et, ph) => { const l = document.createElement('label'); l.style.cssText = 'display:block;margin:6px 0 2px;font-weight:700'; l.textContent = et; const z = document.createElement('input'); z.placeholder = ph; z.style.cssText = 'width:100%;box-sizing:border-box;padding:8px 10px;border-radius:10px;border:2px solid #3a6aff;background:#fff;color:#111;font:16px system-ui'; z.addEventListener('keydown', ev => ev.stopPropagation()); z.addEventListener('pointerup', ev => ev.stopPropagation()); f.append(l, z); return z; };
    const q = campo('Pregunta', '¿…?'), c = campo('Respuesta correcta', ''), i1 = campo('Incorrecta 1', ''), i2 = campo('Incorrecta 2', ''), i3 = campo('Incorrecta 3', ''); let nv = 1;
    const niv = document.createElement('div'); niv.className = 'orow'; niv.innerHTML = '<label>Nivel</label>'; for (let k = 1; k <= 5; k++) niv.appendChild(boton(['Fácil', 'Normal', 'Media', 'Difícil', 'Muy difícil'][k - 1], b => { nv = k; niv.querySelectorAll('button').forEach(x => x.classList.toggle('sel', x === b)); }, k === 1)); f.appendChild(niv);
    f.appendChild(boton('➕ Guardar pregunta', () => { if (!q.value.trim() || !c.value.trim() || !i1.value.trim() || !i2.value.trim() || !i3.value.trim()) return yn.toast('Rellena todos los campos'); L2.push({ nivel: nv, q: q.value.trim(), c: c.value.trim(), inc: [i1.value.trim(), i2.value.trim(), i3.value.trim()] }); localStorage.setItem('mm_mispreg', JSON.stringify(L2)); Lt('mispreguntas'); }, true));
    r.appendChild(f); const lis = caja(`<b>Guardadas (${L2.length})</b>`); L2.forEach((p, k) => { const d = document.createElement('div'); d.style.cssText = 'display:flex;gap:8px;align-items:center;margin:4px 0'; d.innerHTML = `<span>N${p.nivel} · ${esc(p.q)} <i>(${esc(p.c)})</i></span>`; d.appendChild(boton('🗑️', () => { L2.splice(k, 1); localStorage.setItem('mm_mispreg', JSON.stringify(L2)); Lt('mispreguntas'); })); lis.appendChild(d); }); r.append(lis, Ia('options'));
  } else if (a === 'historia') {
    r.classList.add('text'); r.append(Ia('main'), Pa('La historia de ¿Quién quiere ser millonario?'), ei('▶ Que me la cuente Leo', 'Recorrido narrado por el plató', 'gold', () => ii('historia')));
    const u = document.createElement('div'); u.className = 'mtext'; u.innerHTML = HISTORIA.map(([y, t2, d]) => `<p><b>${esc(y)} · ${esc(t2)}</b><br>${esc(d)}</p>`).join(''); r.append(u);
  } else if (a === 'help') {
    r.classList.add('text'); r.append(Ia('main'), Pa('Cómo se juega')); const u = document.createElement('div'); u.className = 'mtext';
    u.innerHTML = `<p><b>Objetivo:</b> responder bien a <b>15 preguntas</b> de dificultad creciente para ganar el gran premio.</p><p><b>Respuestas:</b> toca A, B, C o D. Desde la pregunta 5, ${esc(me.presentador)} te preguntará si es tu última respuesta.</p><p><b>Seguros:</b> en 2005–2007 y 1999–2001 están en las preguntas 5 y 10. Desde 2020 solo el primero es fijo (pregunta 5) y <b>tú eliges el segundo</b> antes de empezar.</p><p><b>Comodines:</b> 50:50 (quita dos incorrectas), público (gráfico de barras con los votos), llamada (<b>30 segundos</b> con reloj) y, desde 2020, el comodín del acompañante.</p><p><b>Plantarse:</b> puedes retirarte con lo ganado en cualquier momento. Si fallas, te llevas el último seguro alcanzado.</p><p><b>Controles 3D:</b> ☰ vuelve al menú, 👁 cambia la cámara, 💡 apaga o enciende los haces de luz. «Saltar» pasa la cabecera.</p>`; r.append(u);
  } else if (a === 'credits') {
    r.classList.add('text'); r.append(Ia('main'), Pa('Créditos')); const u = document.createElement('div'); u.className = 'mtext';
    u.innerHTML = `<p><b>Idea y juego</b><br>Iker</p><p><b>Presentador virtual</b><br>${esc(me.presentador)} (personaje inventado)</p><p><b>Voz</b><br>Piper TTS (es_ES-davefx-medium y otras), voces sintéticas genéricas</p><p><b>Motor 3D</b><br>Three.js (MIT)</p><p><b>Menús, publicidad de ${CADENA} y personajes</b><br>Basados en «¡Ahora Caigo! 3D» 1.13 de Iker</p><p><b>Modo Clásico y sonidos</b><br>Juego de Scratch «Quem Quer Ser Um Milionário - Jogo 2025 remix», empaquetado con TurboWarp Packager</p><p class="small">Versión ${VERSION}</p><p class="small">Juego de fans sin ánimo de lucro. «¿Quién quiere ser millonario?» es un formato de sus respectivos propietarios; este juego no está afiliado ni respaldado por ellos.</p>`; r.append(u);
  }
  const l = document.createElement('div'); l.className = 'mver'; l.textContent = 'v' + VERSION; n.appendChild(l); n.append(i, r); e.appendChild(n);
}
let fps = 60;
// ---------------- arranque ----------------
async function arranca() {
  if (typeof it.cabecera === 'boolean') it.cabecera = 'cab3d';
  await Promise.all([rcCarga(), castingCarga()]); initPublicidad(F, hablar);
  const mq = document.createElement('div'); mq.id = 'mq'; en('hud').appendChild(mq);
  for (const e of ESPECIALES) { if (SALUDOS_EXISTENTES[e.id]) e.saludo = SALUDOS_EXISTENTES[e.id]; if (LUCES_EXISTENTES[e.id]) e.luz = LUCES_EXISTENTES[e.id]; }
  instalaV12({ ESPECIALES, extra: ESP_EXTRA, temasLogo: TEMAS_LOGO, it, guarda, F, plato: null, RC, rcGuarda, rcBorra, pideArchivo, boton, nota, caja, ei, ii, Lt, yn, di, colocaPersonaje, dibujaLogo, pref: 'mm', colorCss: '#e8b830', colorFondo: '#1a0a4a', hashtagDef: '#QuienQuiereSerMillonario', ledHT: { pos: [0, 6.2, -9], w: 7 }, musicas: [['menu', 'Tema principal'], ['cabecera', 'Cabecera'], ['pregunta', 'Pregunta'], ['tension', 'Tensión'], ['despedida', 'Despedida']], enMenu: () => Mi && Gr === 'main' && !en('menu').classList.contains('hidden'), tituloOriginal: '¿Quién quiere ser millonario?', regidor: REGIDORA, colorMarco: 0x8a4aff,
    escenas: { roles: { P: 'leo', R: 'pili', T: 'chema', M: 'marga', J: 'ramon', C: 'conc' }, nombres: { P: 'Leo', R: 'Pili', T: 'Chema', M: 'Marga', J: 'jefe', C: 'concursante', SHOW: '¿Quién quiere ser millonario?' }, cam: { P: 'pres', C: 'silla' }, camDef: 'wide' } });
  ordenEspeciales135(ESPECIALES);
  plato = creaPlato(en('c3d'), it.quality, it.plato); window.__miPlato = plato; K12.plato = plato; K12.yn = yn; instalaExtras(); lucesEspecial(); plato.gradas(it.gradas); aplicaLogo();
  let last = performance.now(); let fr = 0, ft = performance.now(); const loop = (t) => { fr++; if (t - ft > 1000) { fps = fr * 1000 / (t - ft); fr = 0; ft = t; } plato.frame(Math.min(.05, (t - last) / 1000)); last = t; requestAnimationFrame(loop); }; requestAnimationFrame(loop);
  en('btnMenu').onclick = (s) => { s.stopPropagation(); if (jt && jt.alive && !confirm('¿Volver al menú? Se perderá la partida.')) return; document.getElementById('showtime')?.remove(); Lt('main'); };
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

// ---------- «Mi cabecera 3D» (mc3d/mc3d.js): la IA analiza tu vídeo y lo vuelve a rodar en el plató 3D del juego ----------
if (window.MC3D) MC3D.config({ app: 'millonario', nombre: "¿Quién quiere ser millonario?", titulo: "¿Quién quiere ser millonario?", hashtagDef: '#Millonario', sintoniaJuego: () => { F.playMusic('cabecera'); return () => F.stopMusic(); }, logo: () => null,
  palabrasLogo: ["millonario", "ahora", "caigo"], creditos: () => ["Juego creado por Iker", "Presenta: {PRES} (presentador virtual)", "Formato original: ¿Quién quiere ser millonario?"].map(x => x.replace('{PRES}', me.presentador || '')),
  recrear: (pl, op) => { let propia = false, modo0 = null; const P3 = plato, V0 = a => [a.x, a.y, a.z], PL = P3.PLANOS || {};
    const w = PL.wide || [new P3.THREE.Vector3(0, 5, 14), new P3.THREE.Vector3(0, 1.5, 0)], c = w[1], R0 = Math.max(5, w[0].distanceTo(w[1]) * 0.75);
    const dL = PL.logo ? PL.logo[0].distanceTo(PL.logo[1]) : 0, lpos = PL.logo ? PL.logo[1].clone().lerp(PL.logo[0], 0.3).add(new P3.THREE.Vector3(0, -dL * 0.2, 0)) : null; // letras debajo del emblema, sin tapar su rótulo
    const lg = PL.logo ? [V0(lpos), V0(lpos.clone().add(PL.logo[1].clone().sub(PL.logo[0])))] : null, lc = PL.logo ? [V0(PL.logo[0]), V0(PL.logo[1])] : null;
    const pub = ['grada', 'publico', 'transeuntes', 'expertos'].filter(k => PL[k]).map(k => V0(PL[k][1]));
    return MC3D.recrearGenerico({ THREE: P3.THREE, scene: P3.scene, camera: P3.camera, mira: P3.cam.mira, centro: [c.x, Math.max(1.2, c.y), c.z], radio: R0, altura: Math.max(2.6, w[0].y * 0.8), texto: "¿Quién quiere ser millonario?",
      concursantes: () => Object.entries(P3.figuras).filter(([k, f]) => f.visible && k !== 'leo').map(([, f]) => V0(f.position)),
      presentador: () => P3.figuras['leo'] ? V0(P3.figuras['leo'].position) : [c.x, 0, c.z], publico: () => pub, logo: lg, logoCam: lc,
      antes: () => { if (!op.ctx || !op.ctx.sess) { propia = true; sesion(); en('menu').classList.add('hidden'); F.stopAll && F.stopAll(); typeof colocaBase === 'function' && colocaBase(); } F.stopMusic && F.stopMusic(); },
      toma: () => { modo0 = P3.cam.modo; P3.cam.modo = 'mc3d'; }, suelta: () => { P3.cam.modo = modo0 === 'mc3d' ? 'orbita' : modo0 || 'orbita'; },
      despues: () => { if (propia) { jt && (jt.alive = false); Lt('options'); } } })(pl, op); } });
