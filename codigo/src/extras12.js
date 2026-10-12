// Extras 1.2 (Millonario / El Cazador): Mis hashtags, Creador de promos, Guardar logo PNG, voz Piper sin conexión.
import { K, SALIDA, especialActual, tituloTexto } from './v12.js';
import { crearExtras } from './extras_comunes.mjs';
import * as THREE from 'three';
export let EX = null;
const LSk = (k) => K.pref + '_' + k;
function conVariante(v, fn) { // dibuja con un especial / título temporal y restaura
  const esp0 = K.it.especial, tit0 = localStorage.getItem(LSk('titulo'));
  try { if (v.tipo === 'especial') K.it.especial = v.id; if (v.tipo === 'original') { K.it.especial = 'normal'; localStorage.removeItem(LSk('titulo')); } return fn(); }
  finally { K.it.especial = esp0; if (tit0 != null) localStorage.setItem(LSk('titulo'), tit0); }
}
let ledMesh = null, ledTex = null, ledCv = null;
export function ledHashtags() { // tira LED del plató con el hashtag que rota
  const P = K.plato, T = THREE; if (!P || !T || !K.ledHT) return;
  if (!ledMesh) { ledCv = document.createElement('canvas'); ledCv.width = 1024; ledCv.height = 128; ledTex = new T.CanvasTexture(ledCv); ledTex.colorSpace = T.SRGBColorSpace;
    ledMesh = new T.Mesh(new T.PlaneGeometry(K.ledHT.w || 6, (K.ledHT.w || 6) / 8), new T.MeshBasicMaterial({ map: ledTex, transparent: true, toneMapped: false }));
    ledMesh.position.set(...K.ledHT.pos); ledMesh.rotation.y = K.ledHT.rotY || 0; P.scene.add(ledMesh);
    setInterval(() => { const s = EX.htActual(); ledMesh.visible = !!s; if (!s) return; const g = ledCv.getContext('2d'); g.clearRect(0, 0, 1024, 128); g.fillStyle = 'rgba(0,0,0,.75)'; g.fillRect(0, 0, 1024, 128); g.fillStyle = K.colorCss || '#f5c542'; g.fillRect(0, 0, 14, 128); g.fillRect(0, 120, 1024, 8);
      g.font = 'bold 76px system-ui'; g.fillStyle = '#fff'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(s, 512, 64, 980); ledTex.needsUpdate = true; }, 1000); }
}
export function instalaExtras() {
  const F = K.F, it = K.it;
  EX = crearExtras({ pref: K.pref, color: K.colorCss, color2: K.colorFondo, titulo: () => tituloTexto(), hashtagDef: K.hashtagDef,
    toast: t => K.yn.toast(t, 2600), especial: () => especialActual().id, especiales: () => K.ESPECIALES.map(e => ({ id: e.id, nombre: e.nombre || e.name || e.id })),
    logoCanvas: async (size, v) => conVariante(v || { tipo: 'actual' }, () => K.dibujaLogo(size)),
    variantesLogo: () => { const L = [{ tipo: 'actual', nombre: 'Actual' }, { tipo: 'original', nombre: 'Original' }]; if (localStorage.getItem(LSk('titulo'))) L.push({ tipo: 'titulo', nombre: 'Título propio' }); for (const e of K.ESPECIALES) if (e.id !== 'normal') { const n = e.nombre || e.name || e.id; L.push({ tipo: 'especial', id: e.id, nombre: /^especial/i.test(n) ? n : 'Especial ' + n }); }; return L; },
    audioCtx: () => F.ctx, salida: () => SALIDA, piperBase: 'piper/', piezasBase: 'voz/pal/', pideArchivo: K.pideArchivo,
    musicas: () => K.musicas, musica: { play: id => F.playMusic(id), stop: () => F.stopMusic(), vol: f => { const m = F.mus; if (!m) return; if (m.a) m.a.volume = Math.min(1, it.musicVol * .8 * f); else if (m.g) m.g.gain.setTargetAtTime(.07 * it.musicVol * f, F.ctx.currentTime, .15); } },
    cabeceras: () => K.RC.cache.video_cabecera ? [{ id: 'propia', nombre: 'Vídeo de la cabecera 3D' }] : [],
    cabeceraUrl: async () => K.RC.cache.video_cabecera ? URL.createObjectURL(K.RC.cache.video_cabecera) : null,
    platoCanvas: async () => { try { K.plato.orbita && K.plato.orbita(); } catch (e) { } return K.plato.renderer.domElement; },
    alEmpezar: () => { try { F.stopMusic(); } catch (e) { } }, enMenu: () => K.enMenu && K.enMenu() });
  K.EX = EX; window.__EX = EX; ledHashtags(); return EX;
}
const filaBtn = (txt, sub, fn) => { const d = document.createElement('div'); d.className = 'ocustom'; const l = document.createElement('div'); l.className = 'olabel'; l.textContent = txt; const r = document.createElement('div'); r.className = 'orow'; r.append(K.boton(sub, fn)); d.append(l, r); return d; };
export function filasExtras() {
  return [filaBtn('# Mis hashtags', 'Editar hashtags', () => EX.panelHashtags()), filaBtn('🎬 Creador de promos', 'Abrir el creador', () => EX.panelPromos()), filaBtn('🖼 Guardar logo (PNG transparente)', 'Guardar logos', () => EX.panelLogo())];
}
export async function entradasPromos(ei, ii) { // botones para el menú PROMOS
  const out = [ei('🎬 Creador de promos', 'Crea, edita, borra y exporta tus promos en vídeo', 'gold', () => EX.panelPromos())];
  for (const p of await EX.promosLista().catch(() => [])) out.push(ei('⭐ ' + p.titulo, [p.dia, p.hora].filter(Boolean).join(' · ') + ' · promo propia', '', () => EX.reproducir(p)));
  return out;
}
