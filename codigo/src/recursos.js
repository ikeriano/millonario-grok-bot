// Recursos propios (como «Cargar músicas / Logo / sb3» de ¡Ahora Caigo!): se guardan solo en este dispositivo (IndexedDB).
import { unzipSync } from 'fflate';
const DB = () => new Promise((res, rej) => { const r = indexedDB.open('mm_recursos', 1); r.onupgradeneeded = () => r.result.createObjectStore('r'); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); });
export async function rcGuarda(k, blob) { const d = await DB(); await new Promise((r, j) => { const t = d.transaction('r', 'readwrite'); t.objectStore('r').put(blob, k); t.oncomplete = r; t.onerror = () => j(t.error); }); RC.cache[k] = blob; }
export async function rcBorra(k) { const d = await DB(); await new Promise(r => { const t = d.transaction('r', 'readwrite'); k ? t.objectStore('r').delete(k) : t.objectStore('r').clear(); t.oncomplete = r; t.onerror = r; }); if (k) delete RC.cache[k]; else RC.cache = {}; }
export async function rcCarga() { try { const d = await DB(); await new Promise(r => { const t = d.transaction('r'), s = t.objectStore('r'), q = s.openCursor(); q.onsuccess = () => { const c = q.result; if (c) { RC.cache[c.key] = c.value; c.continue(); } else r(); }; q.onerror = r; }); } catch (e) {} }
export const RC = { cache: {} };
export const RANURAS = [['tema', 'Sintonía del menú'], ['cabecera', 'Cabecera'], ['fase1', 'Preguntas 1-5'], ['fase2', 'Preguntas 6-10'], ['fase3', 'Preguntas 11-15'], ['elige', 'Respuesta elegida'], ['acierto1', 'Acierto'], ['fallo', 'Fallo'], ['c5050', '50:50'], ['comodin', 'Comodín'], ['telefono', 'Llamada (30 s)'], ['publico', 'Votación del público'], ['millon', 'El millón'], ['despedida', 'Despedida'], ['publicidad', 'Vuelta de publicidad']];
/** abre un .sb3 (zip de Scratch) y devuelve sus sonidos: [{nombre, blob}] */
export async function rcLeeSb3(file) {
  const z = unzipSync(new Uint8Array(await file.arrayBuffer())); const pj = JSON.parse(new TextDecoder().decode(z['project.json'])); const out = [], vistos = new Set();
  for (const t of pj.targets) for (const s of t.sounds || []) { if (vistos.has(s.md5ext) || !z[s.md5ext]) continue; vistos.add(s.md5ext); out.push({ nombre: s.name, blob: new Blob([z[s.md5ext]], { type: s.dataFormat === 'mp3' ? 'audio/mpeg' : 'audio/wav' }) }); }
  return out;
}
/** asigna archivos de audio sueltos a las ranuras por su nombre (tema.mp3, fase1.mp3…) */
export async function rcCargaMusicas(files) { let n = 0; for (const f of files) { const k = f.name.replace(/\.[^.]+$/, '').toLowerCase(); if (RANURAS.some(r => r[0] === k)) { await rcGuarda('snd:' + k, f); n++; } } return n; }
