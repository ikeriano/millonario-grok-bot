// Pausa publicitaria de Show Time TV: portada de ¡Ahora Caigo! 1.13 (showtime.js): misma pantalla, cortinillas y anuncios inventados.
import { ST_DATOS } from './st_datos.js';
export const CORTINILLAS = Object.assign({}, ST_DATOS.cortinillas, { volvemos: 'Volvemos con Quién quiere ser millonario' });
export const CADENA = ST_DATOS.cadena || 'Show Time TV';
export const ANUNCIOS_ST = ST_DATOS.anuncios;
let F, hablar;
export const initPublicidad = (f, h) => { F = f; hablar = h; };
class Corte extends Error {}
const _rr = (g, x, y, w, h, r) => { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); };
function stJingle(tipo = 'entra') {
  try { const c = F.ctx, t0 = c.currentTime + 0.02, notas = tipo === 'entra' ? [523, 659, 784, 1047] : tipo === 'sale' ? [1047, 784, 659, 880] : [784, 988];
    notas.forEach((f, i) => { const o = c.createOscillator(), g = c.createGain(); o.type = 'triangle'; o.frequency.value = f; g.gain.setValueAtTime(0, t0 + i * 0.13); g.gain.linearRampToValueAtTime(0.18, t0 + i * 0.13 + 0.02); g.gain.exponentialRampToValueAtTime(0.001, t0 + i * 0.13 + 0.5); o.connect(g); g.connect(c.destination); o.start(t0 + i * 0.13); o.stop(t0 + i * 0.13 + 0.55); });
  } catch (e) { }
}
function stLogo(g, x, y, s, alfa = 1) {
  g.save(); g.globalAlpha = alfa; g.translate(x, y); const R = s * 0.5;
  g.fillStyle = '#ffd23a'; g.beginPath(); for (let i = 0; i < 10; i++) { const r = i % 2 ? R * 0.45 : R, a = -Math.PI / 2 + i * Math.PI / 5; g.lineTo(Math.cos(a) * r, Math.sin(a) * r); } g.closePath(); g.fill(); g.lineWidth = s * 0.05; g.strokeStyle = '#a0500a'; g.stroke();
  g.font = `900 ${s * 0.34}px "Arial Black", Arial, sans-serif`; g.textAlign = 'left'; g.textBaseline = 'middle'; g.lineWidth = s * 0.08; g.strokeStyle = '#2a0a5a'; g.strokeText('SHOW TIME', R * 1.15, -s * 0.12); g.fillStyle = '#fff'; g.fillText('SHOW TIME', R * 1.15, -s * 0.12);
  g.font = `900 ${s * 0.28}px "Arial Black", Arial, sans-serif`; g.fillStyle = '#ff5ad0'; g.strokeText('TV', R * 1.15, s * 0.24); g.fillText('TV', R * 1.15, s * 0.24); g.restore();
}
function stTexto(g, t, x, y, px, col = '#fff', borde = '#1a0a3a', max) { g.font = `900 ${px}px "Arial Black", Arial, sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.lineJoin = 'round'; g.lineWidth = px * 0.16; g.strokeStyle = borde; g.strokeText(t, x, y, max); g.fillStyle = col; g.fillText(t, x, y, max); }
function stSub(g, w, h, t) { if (!t) return; g.save(); g.font = `700 ${Math.round(h * 0.04)}px system-ui, Arial`; const tw = Math.min(w * 0.9, g.measureText(t).width + 30); g.fillStyle = 'rgba(0,0,0,.6)'; g.fillRect((w - tw) / 2, h * 0.88, tw, h * 0.07); g.fillStyle = '#fff'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(t, w / 2, h * 0.915, w * 0.88); g.restore(); }
class StPantalla {
  constructor(ses) {
    this.ses = ses; this.vivo = true; this.dibujo = null; this.t0 = performance.now(); this.sub = '';
    const d = this.div = document.createElement('div'); d.id = 'showtime'; d.style.cssText = 'position:fixed;inset:0;z-index:70;background:#000;cursor:pointer';
    this.c = document.createElement('canvas'); this.c.style.cssText = 'position:absolute;inset:0;width:100%;height:100%';
    const sk = document.createElement('button'); sk.className = 'tbtn'; sk.id = 'stSaltar'; sk.textContent = 'Saltar ⏭'; sk.style.cssText = 'position:absolute;right:14px;bottom:14px;z-index:2';
    sk.onclick = ev => { ev.stopPropagation(); this.vivo = false; };
    d.append(this.c, sk); document.body.appendChild(d);
    const tam = () => { const k = Math.min(2, devicePixelRatio || 1); this.c.width = innerWidth * k; this.c.height = innerHeight * k; }; tam(); this.tam = tam; addEventListener('resize', tam);
    const bucle = () => { if (!this.div.isConnected) return; const g = this.c.getContext('2d'), w = this.c.width, h = this.c.height, t = (performance.now() - this.t0) / 1000; g.clearRect(0, 0, w, h); try { this.dibujo && this.dibujo(g, w, h, t); } catch (e) { } if (this.marca) stLogo(g, w * 0.86, h * 0.07, h * 0.06, 0.85); stSub(g, w, h, this.sub); requestAnimationFrame(bucle); }; requestAnimationFrame(bucle);
  }
  w(ms) { return new Promise((r, x) => { const t0 = performance.now(); const tick = () => { if (!this.vivo || !this.ses.alive) return x(new Corte()); performance.now() - t0 >= ms ? r() : setTimeout(tick, 50); }; tick(); }); }
  async habla(texto, quien) { const p = hablar(texto, quien); await Promise.race([p, new Promise((r, x) => { const k = setInterval(() => { if (!this.vivo || !this.ses.alive) { clearInterval(k); x(new Corte()); } }, 60); p.then(() => { clearInterval(k); r(); }); })]); }
  escena(f, marca = true) { this.dibujo = f; this.t0 = performance.now(); this.marca = marca; this.sub = ''; }
  cerrar() { removeEventListener('resize', this.tam); this.div.style.transition = 'opacity .3s'; this.div.style.opacity = '0'; setTimeout(() => this.div.remove(), 320); }
}
async function stCortinilla(P, tipo) {
  const txt = { publicidad: ['PUBLICIDAD', ''], min1: ['VOLVEMOS EN', '1 MINUTO'], seg30: ['VOLVEMOS EN', '30 SEGUNDOS'], anuncios3: ['3', 'ANUNCIOS'], anuncio1: ['1', 'ANUNCIO'], volvemos: ['VOLVEMOS CON', 'QUIÉN QUIERE SER MILLONARIO'] }[tipo];
  stJingle(tipo === 'volvemos' ? 'sale' : 'entra');
  P.escena((g, w, h, t) => {
    const gr = g.createLinearGradient(0, 0, w, h); gr.addColorStop(0, '#2a0a6a'); gr.addColorStop(0.6, '#8a1ab0'); gr.addColorStop(1, '#ff3a9a'); g.fillStyle = gr; g.fillRect(0, 0, w, h);
    g.save(); g.translate(w / 2, h / 2); g.rotate(t * 0.3); for (let i = 0; i < 16; i++) { g.rotate(Math.PI / 8); g.fillStyle = i % 2 ? 'rgba(255,210,60,.12)' : 'rgba(255,255,255,.05)'; g.beginPath(); g.moveTo(0, 0); g.lineTo(-w * 0.12, -w); g.lineTo(w * 0.12, -w); g.fill(); } g.restore();
    const k = Math.min(1, t / 0.45), e = 1 - Math.pow(1 - k, 3);
    stLogo(g, w * 0.5 - h * 0.17, h * 0.2, h * 0.16 * e);
    const grande = /^\d$/.test(txt[0]);
    if (grande) { g.save(); g.translate(w / 2, h * 0.55); g.scale(e, e); g.fillStyle = '#ffd23a'; g.beginPath(); g.arc(0, 0, h * 0.16, 0, 7); g.fill(); g.lineWidth = h * 0.02; g.strokeStyle = '#fff'; g.stroke(); g.lineWidth = h * 0.012; g.beginPath(); g.arc(0, 0, h * 0.2, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * Math.min(1, t / 2.6)); g.stroke(); g.restore(); stTexto(g, txt[0], w / 2, h * 0.56, h * 0.22 * e, '#2a0a5a', '#fff'); stTexto(g, txt[1], w / 2, h * 0.82, h * 0.09 * e, '#fff'); }
    else { stTexto(g, txt[0], w / 2 - (1 - e) * w, h * 0.52, h * (txt[1] ? 0.1 : 0.17), '#fff', '#2a0a5a', w * 0.9); if (txt[1]) stTexto(g, txt[1], w / 2 + (1 - e) * w, h * 0.68, h * 0.09, '#ffd23a', '#2a0a5a', w * 0.9); }
  }, false);
  await P.habla(CORTINILLAS[tipo], 'st_daniela'); await P.w(500);
}
function stProducto(g, tipo, x, y, s, t, c) {
  g.save(); g.translate(x, y); g.rotate(Math.sin(t * 2) * 0.08); const brillo = (xx, yy, ww, hh) => { g.fillStyle = 'rgba(255,255,255,.35)'; g.fillRect(xx, yy, ww, hh); };
  const caja = (w, h, col, r = 0.1) => { _rr(g, -w / 2, -h / 2, w, h, s * r); g.fillStyle = col; g.fill(); g.lineWidth = s * 0.03; g.strokeStyle = '#0008'; g.stroke(); };
  if (tipo === 'botella') { caja(s * 0.5, s * 0.9, c[0]); g.fillStyle = c[1]; g.fillRect(-s * 0.1, -s * 0.62, s * 0.2, s * 0.18); brillo(-s * 0.18, -s * 0.35, s * 0.08, s * 0.6); }
  else if (tipo === 'bolsa') { g.beginPath(); g.moveTo(-s * 0.4, -s * 0.5); g.lineTo(s * 0.4, -s * 0.5); g.lineTo(s * 0.46, s * 0.5); g.lineTo(-s * 0.46, s * 0.5); g.closePath(); g.fillStyle = c[0]; g.fill(); g.lineWidth = s * 0.03; g.strokeStyle = '#0008'; g.stroke(); for (let i = 0; i < 5; i++) { g.fillStyle = '#ffe08a'; g.beginPath(); g.ellipse(-s * 0.2 + i * s * 0.1, s * 0.1 + Math.sin(t * 4 + i) * s * 0.05, s * 0.08, s * 0.05, i, 0, 7); g.fill(); } }
  else if (tipo === 'colchon') { caja(s * 1.1, s * 0.35, '#f4f4ff', 0.12); g.strokeStyle = c[0]; g.lineWidth = s * 0.02; for (let i = -4; i <= 4; i++) { g.beginPath(); g.moveTo(i * s * 0.12, -s * 0.15); g.lineTo(i * s * 0.12, s * 0.15); g.stroke(); } for (let i = 0; i < 3; i++) { g.fillStyle = 'rgba(255,255,255,.9)'; g.beginPath(); g.arc(-s * 0.3 + i * s * 0.3, -s * 0.4 - Math.sin(t * 2 + i) * s * 0.05, s * 0.12, 0, 7); g.fill(); } }
  else if (tipo === 'calcetin') { for (const dx of [-0.2, 0.2]) { g.save(); g.translate(dx * s, 0); g.fillStyle = c[0]; g.fillRect(-s * 0.12, -s * 0.45, s * 0.24, s * 0.6); g.beginPath(); g.ellipse(dx < 0 ? -s * 0.05 : s * 0.05, s * 0.2, s * 0.22, s * 0.13, 0, 0, 7); g.fill(); g.fillStyle = '#fff'; g.fillRect(-s * 0.12, -s * 0.45, s * 0.24, s * 0.08); g.restore(); } }
  else if (tipo === 'yogur') { g.beginPath(); g.moveTo(-s * 0.3, -s * 0.35); g.lineTo(s * 0.3, -s * 0.35); g.lineTo(s * 0.24, s * 0.4); g.lineTo(-s * 0.24, s * 0.4); g.closePath(); g.fillStyle = '#fff'; g.fill(); g.strokeStyle = '#0006'; g.lineWidth = s * 0.03; g.stroke(); g.fillStyle = c[0]; g.fillRect(-s * 0.27, -s * 0.1, s * 0.54, s * 0.2); g.fillStyle = '#c0c4cc'; g.fillRect(-s * 0.33, -s * 0.42, s * 0.66, s * 0.08); }
  else if (tipo === 'movil') { caja(s * 0.5, s * 0.9, '#7a4a2a', 0.04); caja(s * 0.36, s * 0.5, '#1a2a4a', 0.03); brillo(-s * 0.15, -s * 0.2, s * 0.05, s * 0.4); }
  else if (tipo === 'gominolas') { for (let i = 0; i < 7; i++) { const yy = -Math.abs(Math.sin(t * 5 + i)) * s * 0.4; g.fillStyle = ['#ff3a3a', '#ffd23a', '#3ac85a', '#3a8aff', '#ff5ad0'][i % 5]; g.beginPath(); g.ellipse(-s * 0.45 + i * s * 0.15, s * 0.2 + yy, s * 0.07, s * 0.1, 0, 0, 7); g.fill(); } }
  else if (tipo === 'robot') { g.fillStyle = c[0]; g.beginPath(); g.arc(0, 0, s * 0.42, 0, 7); g.fill(); g.lineWidth = s * 0.04; g.strokeStyle = c[1]; g.stroke(); g.fillStyle = c[1]; g.beginPath(); g.arc(0, -s * 0.1, s * 0.12, 0, 7); g.fill(); g.fillStyle = '#3aff8a'; g.beginPath(); g.arc(0, -s * 0.1, s * 0.05, 0, 7); g.fill(); }
  g.restore();
}
async function stAnuncio(P, a) {
  let fase = 0;
  P.escena((g, w, h, t) => {
    const gr = g.createRadialGradient(w / 2, h / 2, 10, w / 2, h / 2, w * 0.7); gr.addColorStop(0, a.color[0]); gr.addColorStop(1, a.color[1]); g.fillStyle = gr; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 24; i++) { g.fillStyle = 'rgba(255,255,255,.08)'; g.beginPath(); g.arc((i * 137 % 100) / 100 * w, ((i * 71 + t * 40) % 100) / 100 * h, h * 0.02 + (i % 4) * h * 0.01, 0, 7); g.fill(); }
    const e = Math.min(1, t / 0.6);
    stProducto(g, a.dibujo, w * (fase < 2 ? 0.3 : 0.5), h * (fase < 2 ? 0.5 : 0.42), h * 0.45 * (0.6 + 0.4 * e), t, a.color);
    if (fase < 2) { stTexto(g, a.marca.toUpperCase(), w * 0.68, h * 0.38, h * 0.12, '#fff', '#000', w * 0.5); stTexto(g, a.producto, w * 0.68, h * 0.52, h * 0.045, '#ffe', '#000', w * 0.55); }
    else { stTexto(g, a.marca.toUpperCase(), w / 2, h * 0.14, h * 0.11, '#fff', '#000', w * 0.8); stTexto(g, a.lema, w / 2, h * 0.74, h * 0.05, '#ffd23a', '#000', w * 0.92); }
    g.font = `600 ${h * 0.022}px system-ui`; g.fillStyle = 'rgba(255,255,255,.7)'; g.textAlign = 'left'; g.fillText('Anuncio inventado · marca y producto ficticios', w * 0.02, h * 0.97);
  });
  for (let i = 0; i < a.lineas.length; i++) { fase = i; P.sub = a.lineas[i]; await P.habla(a.lineas[i], 'st_' + a.voz); await P.w(250); }
  await P.w(900);
}
const azar = l => l.slice().sort(() => Math.random() - 0.5);
/** que: 'pausa' | 'corta' | 'anuncio:<id>' | 'cortinillas' */
export async function stCorre(que = 'pausa', ses) {
  const P = new StPantalla(ses); F.stopMusic();
  try {
    if (que.startsWith('anuncio:')) await stAnuncio(P, ANUNCIOS_ST.find(a => a.id === que.slice(8)) || ANUNCIOS_ST[0]);
    else if (que === 'cortinillas') { for (const c of ['publicidad', 'min1', 'anuncios3', 'seg30', 'anuncio1', 'volvemos']) await stCortinilla(P, c); }
    else if (que === 'corta') { const ads = azar(ANUNCIOS_ST); await stCortinilla(P, 'publicidad'); await stCortinilla(P, 'anuncio1'); await stAnuncio(P, ads[0]); await stCortinilla(P, 'volvemos'); }
    else { const ads = azar(ANUNCIOS_ST); await stCortinilla(P, 'publicidad'); await stCortinilla(P, 'min1'); await stCortinilla(P, 'anuncios3'); await stAnuncio(P, ads[0]); await stAnuncio(P, ads[1]); await stCortinilla(P, 'seg30'); await stCortinilla(P, 'anuncio1'); await stAnuncio(P, ads[2]); await stCortinilla(P, 'volvemos'); }
  } catch (e) { if (!(e instanceof Corte)) { P.cerrar(); throw e; } }
  P.cerrar();
}
