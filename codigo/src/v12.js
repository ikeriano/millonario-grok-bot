// v1.2 (Millonario / El Cazador): más especiales (logo, cabecera, sintonía y luces propias), título editable,
// vídeo propio en la cabecera 3D (THREE.VideoTexture en el plató), regidor/a con voz y 9600 escenas por sección.
import * as THREE from 'three';
import { EscenasGen } from './escenas_gen.js';
import POOL from './escenas_pool.json';
export let K = null; // contexto de la app (lo rellena instalaV12)
export let SALIDA = null;
export function instalaV12(ctx) { K = ctx; try { const ac = ctx.F.ctx, real = ac.destination; SALIDA = ac.createGain(); SALIDA.connect(real); Object.defineProperty(ac, 'destination', { value: SALIDA, configurable: true }); } catch (e) { } ctx.ESPECIALES.push(...ctx.extra.filter(e => !ctx.ESPECIALES.some(x => x.id === e.id))); GEN = EscenasGen(POOL, ctx.escenas); return GEN; }
export let GEN = null;
const LS = (k, v) => { try { if (v === undefined) return localStorage.getItem(k) || ''; v ? localStorage.setItem(k, v) : localStorage.removeItem(k); } catch (e) { return ''; } };
// ---------- título ----------
export const tituloPropio = () => LS(K.pref + '_titulo').trim();
export const ytTitulo = () => LS(K.pref + '_yt_titulo').trim() || 'ESPECIAL YOUTUBE';
export function especialActual() { return K.ESPECIALES.find(e => e.id === K.it.especial) || K.ESPECIALES[0]; }
export function bannerDe(e) { return e.id === 'youtube' ? ytTitulo() : e.banner; }
export function tituloTexto() { return tituloPropio() || K.tituloOriginal; }
// ---------- sintonía corta del especial (WebAudio, propia) ----------
const STING = { halloween: [220, 262, 311, 233], sanvalentin: [659, 784, 988, 1319], verano: [523, 659, 784, 1047], carnaval: [587, 740, 880, 1175], findeano: [523, 784, 1047, 1568], ninos: [659, 880, 659, 1047], famosos: [392, 523, 659, 784], aniversario: [523, 659, 784, 1047, 1319], youtube: [880, 1175, 880, 1760], navidad: [784, 988, 1175, 1568], leyendas: [392, 494, 587, 784], noche: [196, 233, 294, 392] };
export function sting(id) {
  const n = STING[id]; if (!n || !K.it.sfx) return; const ctx = K.F.ctx; if (!ctx) return; const t0 = ctx.currentTime + 0.05;
  n.forEach((f, i) => { const o = ctx.createOscillator(), g = ctx.createGain(); o.type = id === 'halloween' ? 'sawtooth' : 'triangle'; o.frequency.value = f; g.gain.setValueAtTime(0, t0 + i * 0.16); g.gain.linearRampToValueAtTime(0.18 * (K.it.sfxVol ?? 0.8), t0 + i * 0.16 + 0.02); g.gain.exponentialRampToValueAtTime(0.001, t0 + i * 0.16 + 0.5); o.connect(g).connect(ctx.destination); o.start(t0 + i * 0.16); o.stop(t0 + i * 0.16 + 0.55); });
}
// ---------- luces del plató según el especial ----------
let lucesOrig = null;
export function lucesEspecial() {
  const e = especialActual(), sc = K.plato.scene; if (!lucesOrig) { lucesOrig = []; sc.traverse(o => { if (o.isPointLight || o.isSpotLight || o.isHemisphereLight) lucesOrig.push([o, o.color.getHex()]); }); }
  for (const [o, c] of lucesOrig) o.color.setHex(e.luz && !o.isHemisphereLight ? e.luz : c);
  try { K.plato.ponLogo(K.dibujaLogo(512)); } catch (x) { }
}
// ---------- filas de Opciones ----------
function fila(txt) { const d = document.createElement('div'); d.className = 'ocustom'; const l = document.createElement('div'); l.className = 'olabel'; l.textContent = txt; d.appendChild(l); return d; }
function campoTxt(val, ph, max = 40) { const z = document.createElement('input'); z.type = 'text'; z.className = 'otext'; z.value = val; z.placeholder = ph; z.maxLength = max; z.addEventListener('keydown', e => e.stopPropagation()); z.addEventListener('pointerup', e => e.stopPropagation()); return z; }
export function filaTitulo() {
  const d = fila('✏️ Editar título del programa'), r = document.createElement('div'); r.className = 'orow';
  const z = campoTxt(tituloPropio(), K.tituloOriginal); r.append(z, K.boton('Guardar', () => { LS(K.pref + '_titulo', z.value.trim()); lucesEspecial(); K.Lt('options'); }), K.boton('Restaurar original', () => { LS(K.pref + '_titulo', ''); lucesEspecial(); K.Lt('options'); }));
  const r2 = document.createElement('div'); r2.className = 'orow'; const z2 = campoTxt(LS(K.pref + '_yt_titulo'), 'ESPECIAL YOUTUBE'); r2.append(z2, K.boton('Guardar', () => { LS(K.pref + '_yt_titulo', z2.value.trim()); K.Lt('options'); }));
  d.append(r, K.nota('Se usa en el logo del menú, la cabecera 3D y las pantallas del plató, con el mismo diseño del logo.', 'mtext'), (() => { const l = document.createElement('div'); l.className = 'olabel'; l.textContent = '▶️ Título del Especial YouTube'; return l; })(), r2); return d;
}
export function filaVideo3D() {
  const d = fila('🎥 ELEGIR VÍDEO PARA LA CABECERA 3D'), r = document.createElement('div'); r.className = 'orow orow-wrap'; const hay = !!K.RC.cache.video_cabecera;
  r.append(K.boton(hay ? 'Cambiar vídeo…' : 'Elegir vídeo…', async () => { const f = await K.pideArchivo('video/*'); if (f) { await K.rcGuarda('video_cabecera', f); K.it.vcab3d = true; K.guarda(); K.Lt('options'); } }),
    K.boton('▶ Probar', () => hay ? K.ii('promos', 'videocab') : K.yn.toast('Primero elige un vídeo', 2500)),
    K.boton('Quitar', async () => { await K.rcBorra('video_cabecera'); K.it.vcab3d = false; K.guarda(); K.Lt('options'); }),
    K.boton('Usar en el programa: ' + (K.it.vcab3d ? 'Sí' : 'No'), () => { K.it.vcab3d = !K.it.vcab3d; K.guarda(); K.Lt('options'); }));
  d.append(r, K.nota(hay ? 'Vídeo guardado en este dispositivo. Se ve en pantallas LED, pared curva y panel flotante del plató 3D.' : 'Elige un vídeo del móvil: se guarda solo en este dispositivo.', 'mtext')); return d;
}
// ---------- cabecera 3D con el vídeo del usuario ----------
export async function cabVideo3D(s) {
  const b = K.RC.cache.video_cabecera; if (!b) return false; const P = K.plato, sc = P.scene, cam = P.camera;
  const v = document.createElement('video'); v.src = URL.createObjectURL(b); v.playsInline = true; v.crossOrigin = 'anonymous'; v.loop = false; v.muted = false; v.volume = K.it.music ? (K.it.musicVol ?? .5) : 0;
  try { await v.play(); } catch (e) { v.muted = true; try { await v.play(); } catch (x) { return false; } }
  K.F.stopMusic && K.F.stopMusic(); const tx = new THREE.VideoTexture(v); tx.colorSpace = THREE.SRGBColorSpace;
  const G = new THREE.Group(); const mat = new THREE.MeshBasicMaterial({ map: tx, side: THREE.DoubleSide, toneMapped: false });
  const pared = new THREE.Mesh(new THREE.CylinderGeometry(K.vcabR || 11, K.vcabR || 11, 6.2, 64, 1, true, Math.PI - 0.9, 1.8), mat); pared.position.set(0, 3.4, -2); G.add(pared);
  const marco = new THREE.Mesh(new THREE.BoxGeometry(4.6, 2.75, 0.12), new THREE.MeshStandardMaterial({ color: 0x0a0a14, emissive: K.colorMarco || 0x2a6aff, emissiveIntensity: 0.6 })); const panel = new THREE.Mesh(new THREE.PlaneGeometry(4.4, 2.5), mat); panel.position.z = 0.07; marco.add(panel); marco.position.set(0, 2.6, 1.5); G.add(marco);
  for (const sx of [-1, 1]) { const led = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 1.4), mat); led.position.set(sx * 5.2, 3.4, -0.5); led.rotation.y = -sx * 0.5; G.add(led); }
  const luces = [0xff3a3a, 0x3a8aff, 0xffd23a, 0xff4ad0].map((c, i) => { const l = new THREE.PointLight(c, 30, 14); G.add(l); return l; });
  sc.add(G); const modo0 = P.cam.modo; P.cam.modo = 'v12'; K.yn.rotulo(tituloTexto().toUpperCase(), bannerDe(especialActual()) || '');
  const dur = Math.min(isFinite(v.duration) && v.duration > 1 ? v.duration : 12, 16); const t0 = performance.now();
  await new Promise(res => { const paso = () => { const t = (performance.now() - t0) / 1000; if (t >= dur || v.ended || s.saltar || !s.alive) return res();
    const k = t / dur; const tramo = Math.floor(k * 4), u = k * 4 - tramo; let p, m;
    if (tramo === 0) { p = [Math.sin(u * 1.2 - 0.6) * 8, 2 + u * 2, 11 - u * 4]; m = [0, 3, -2]; }
    else if (tramo === 1) { p = [-6 + u * 12, 3.2, 6]; m = [0, 2.8, 1.5]; }
    else if (tramo === 2) { p = [Math.sin(u * 3) * 2, 2.6, 4.4 - u * 1.2]; m = [0, 2.6, 1.5]; }
    else { p = [0, 6 - u * 3, 9 + u * 3]; m = [0, 3, -1]; }
    cam.position.set(...p); P.cam.mira.set(...m); marco.rotation.y = Math.sin(t * 0.7) * 0.25; marco.position.y = 2.6 + Math.sin(t * 1.3) * 0.12; // parallax: el panel flota delante de la pared
    luces.forEach((l, i) => l.position.set(Math.sin(t * 0.9 + i * 1.6) * 6, 4 + Math.sin(t * 1.4 + i) * 1.2, Math.cos(t * 0.9 + i * 1.6) * 4 + 1));
    requestAnimationFrame(paso); }; paso(); });
  v.pause(); sc.remove(G); tx.dispose(); URL.revokeObjectURL(v.src); P.cam.modo = modo0; K.yn.rotulo(); return true;
}
// ---------- regidor/a ----------
export async function regidor(s, clave, prob = 1) {
  const L = K.regidor.lineas[clave]; if (!L || Math.random() > prob || K.it.regidor === false) return;
  const id = K.regidor.id, f = K.plato.figuras[id]; const vis = f && f.visible; if (f && !vis) { K.colocaPersonaje(id); f.visible = true; }
  await K.di(s, id, L[Math.floor(Math.random() * L.length)], K.regidor.cam || 'wide'); if (f && !vis) f.visible = false;
}
// ---------- escenas generadas ----------
export function menuEscenas(a, r) {
  const box = K.caja(''); box.innerHTML = `<b>🎲 ${GEN.total} escenas más</b> (Escena 1 … Escena ${GEN.total}). Elige número, busca o pide una al azar.`;
  const fl = document.createElement('div'); fl.className = 'orow orow-wrap'; const num = campoTxt(LS(K.pref + '_escn_' + a) || '1', '1', 5); num.type = 'number'; num.style.maxWidth = '90px';
  const ver = (n) => { LS(K.pref + '_escn_' + a, String(n)); K.ii(a, 'g' + n); };
  fl.append(num, K.boton('▶ Ver escena', () => ver(Math.max(1, Math.min(GEN.total, +num.value || 1)))), K.boton('🎲 Al azar', () => ver(GEN.azar(a).n)));
  const q = campoTxt('', '🔎 Buscar (palabra, lugar o número)…', 40); q.type = 'search'; const res = document.createElement('div');
  let pag = 1; const lista = (L) => { res.innerHTML = ''; for (const e of L) res.appendChild(K.ei(e.titulo, e.lugar + ' · ' + e.pasos.length + ' frases', '', () => ver(e.n))); };
  const pagina = () => { const L = []; for (let n = (pag - 1) * 20 + 1; n <= Math.min(GEN.total, pag * 20); n++) L.push(GEN.escena(a, n)); lista(L); };
  q.oninput = () => { clearTimeout(q._t); q._t = setTimeout(() => q.value.trim() ? lista(GEN.buscar(a, q.value, 40)) : pagina(), 250); };
  const nav = document.createElement('div'); nav.className = 'orow'; nav.append(K.boton('◀ Anteriores', () => { pag = Math.max(1, pag - 1); pagina(); }), K.boton('Siguientes ▶', () => { pag = Math.min(GEN.total / 20, pag + 1); pagina(); }));
  box.append(fl, q, nav, res); r.appendChild(box); pagina();
}
export const esGen = (id) => /^g\d+$/.test(String(id || ''));
export const escenaGen = (a, id) => GEN.escena(a, +String(id).slice(1));
// ---------- icono «play» propio (no es ningún logotipo de marca) ----------
export function playPropio(g, x, y, r) {
  g.save(); g.fillStyle = '#ffffff'; g.beginPath(); g.arc(x, y, r * 0.5, 0, 7); g.fill(); g.strokeStyle = '#e8102a'; g.lineWidth = r * 0.09; g.beginPath(); g.arc(x, y, r * 0.43, 0, 7); g.stroke();
  g.setLineDash([r * 0.06, r * 0.05]); g.lineWidth = r * 0.03; g.beginPath(); g.arc(x, y, r * 0.34, 0, 7); g.stroke(); g.setLineDash([]);
  g.fillStyle = '#e8102a'; g.beginPath(); g.moveTo(x - r * 0.13, y - r * 0.2); g.lineTo(x + r * 0.22, y); g.lineTo(x - r * 0.13, y + r * 0.2); g.closePath(); g.fill(); g.restore();
}
// ---------- logo: colores del especial y texto propio ----------
export function temaLogo() { const T = (K && K.temasLogo) || {}; const id = K ? especialActual().id : 'normal'; return Object.assign({}, T.normal, T[id] || {}); }
export function textoLogo(defTop, defBanda) {
  const t = K ? tituloPropio() : ''; if (!t) return [defTop, defBanda];
  const w = t.replace(/[¿?¡!]/g, '').trim().toUpperCase().split(/\s+/).filter(Boolean); if (w.length < 2) return ['★', w[0] || defBanda];
  return [w.slice(0, -1).join(' '), w[w.length - 1]];
}
// ---------- cámara libre (cabeceras propias) ----------
import { abrirCamaraLibre } from './camlibre.mjs';
export function camaraLibre(s) {
  const P = K.plato, modo0 = P.cam.modo; P.cam.modo = 'v12'; const mira0 = P.cam.mira.clone();
  K.F.playMusic && K.F.playMusic('cabecera'); let luces = true;
  return new Promise(res => abrirCamaraLibre({ canvas: P.renderer.domElement, camera: P.camera, mira: mira0, audio: { ctx: K.F.ctx, nodo: SALIDA }, toast: (t) => K.yn.toast(t, 2200),
    aplicar: (p, m) => { P.camera.position.set(p.x, p.y, p.z); P.cam.mira.set(m.x, m.y, m.z); },
    toggles: { '💡 Luces': (on) => { if (on !== luces) { P.toggleLuces(); luces = on; } }, '👥 Público': (on) => P.gradas(on), '🖼 Logo': (on) => P.scene.traverse(o => { if (o.isMesh && o.geometry && o.geometry.type === 'CircleGeometry' && o.material && o.material.map) o.visible = on; }), '🎵 Música': (on) => on ? K.F.playMusic('cabecera') : K.F.stopMusic() },
    guardarPromo: (b) => K.EX && K.EX.guardarTomaCamLibre(b), guardarArchivo: (n, b) => K.EX ? K.EX.guardar(n, b, 'Movies') : null,
    guardarCabecera: async (blob) => { await K.rcGuarda('video_cabecera', blob); K.it.vcab3d = true; K.guarda(); },
    soltar: () => { P.cam.modo = modo0; K.F.stopMusic && K.F.stopMusic(); res(); } }));
}
