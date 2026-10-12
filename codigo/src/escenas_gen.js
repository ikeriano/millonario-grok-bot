// Generador procedural de escenas (Fuera de cámaras · Tomas falsas · Cámara oculta).
// Determinista: «Escena n» (1..9600) siempre es la misma. Combina lugar × situación × reacción × final.
// Uso: const G = EscenasGen(POOL, { roles:{P:'adrian',R:'reg',T:'tec',M:'maq',J:'jefe',C:'conc'}, nombres:{P:'Adrián',R:'Toni',T:'Rober',M:'Nuria',J:'el jefe',SHOW:'¡Ahora caigo!'}, cam:{P:'host'}, camDef:'cerca' });
//      G.total, G.escena('fuera', 123) -> {id:'g123', n, titulo, lugar, pasos:[[voz,texto,cam,gesto,efecto],...]}, G.buscar('tomas','micro'), G.azar('oculta'), G.textos()
export function EscenasGen(POOL, cfg) {
  const NL = POOL.lugares.length, NS = 30, NF = 16, TOTAL = NL * NS * NF, A = 7919, B = 1237;
  const sub = (t) => t.replace(/\{(P|R|T|M|J|C|SHOW)\}/g, (_, k) => (cfg.nombres || {})[k] || k).replace(/([!?])\./g, '$1');
  const voz = (r) => (cfg.roles || {})[r] || r, cam = (r) => (cfg.cam || {})[r] || cfg.camDef || 'wide';
  const rng = (seed) => () => { seed = (seed + 0x6D2B79F5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const SEC = { fuera: 1, tomas: 2, oculta: 3 };
  const NOMBRE = { fuera: 'Fuera de cámaras', tomas: 'Tomas falsas', oculta: 'Cámara oculta' };
  const cache = {};
  function escena(sec, n) {
    n = Math.max(1, Math.min(TOTAL, n | 0)); const k = sec + n; if (cache[k]) return cache[k];
    const S = POOL.secciones[sec], x = ((n - 1) * A + B) % TOTAL, li = x % NL, si = Math.floor(x / NL) % NS, fi = Math.floor(x / (NL * NS));
    const r = rng(n * 977 + SEC[sec] * 104729), L = POOL.lugares[li], [tit, ls] = S.sit[si], F = S.fin[fi];
    const P = (rol, t, g = '', ef = '') => [voz(rol), sub(t), cam(rol), g, ef];
    const pasos = [P(L[1], L[2], 'habla', sec === 'tomas' ? 'claqueta:1' : '')];
    pasos.push(P(ls[0][0], ls[0][1], 'habla'), P(ls[1][0], ls[1][1], 'senala'));
    const usados = new Set(ls.map(l => l[0]).concat(F.map(l => l[0])));
    const cand = POOL.reacciones.filter(q => usados.has(q[0])), q = cand[Math.floor(r() * cand.length)];
    pasos.push(P(q[0], q[1], q[2], q[3]));
    pasos.push(P(ls[2][0], ls[2][1], 'habla'), P(ls[3][0], ls[3][1], r() < 0.5 ? 'encoge' : 'habla', sec === 'tomas' ? 'tomafalsa' : ''));
    if (r() < 0.35) { const q2 = cand[Math.floor(r() * cand.length)]; if (q2 !== q) pasos.push(P(q2[0], q2[1], q2[2], q2[3])); }
    pasos.push(P(F[0][0], F[0][1], 'senala', { tomas: 'corten', oculta: 'inocente', fuera: '' }[sec]), P(F[1][0], F[1][1], 'aplaude', sec === 'fuera' ? 'aplauso' : 'risas'));
    return cache[k] = { id: 'g' + n, n, gen: true, seccion: NOMBRE[sec], titulo: 'Escena ' + n + ' · ' + tit, sub: L[0], lugar: L[0], pasos };
  }
  const norm = (t) => t.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  function buscar(sec, q, max = 60) {
    q = norm(String(q || '').trim()); const out = []; if (!q) return out;
    const num = /^\d+$/.test(q) ? +q : 0; if (num >= 1 && num <= TOTAL) out.push(escena(sec, num));
    for (let n = 1; n <= TOTAL && out.length < max; n++) { if (n === num) continue; const e = escena(sec, n); if (norm(e.titulo + ' ' + e.lugar).includes(q) || e.pasos.some(p => norm(p[1]).includes(q))) out.push(e); }
    return out;
  }
  function textos() { // todas las frases (voz, texto) para pregrabar con Piper
    const m = new Map(), add = (r, t) => { const s = sub(t); m.set(voz(r) + '|' + s, [voz(r), s]); };
    for (const L of POOL.lugares) add(L[1], L[2]); for (const q of POOL.reacciones) add(q[0], q[1]);
    for (const S of Object.values(POOL.secciones)) { for (const [, ls] of S.sit) for (const l of ls) add(l[0], l[1]); for (const F of S.fin) for (const l of F) add(l[0], l[1]); }
    return [...m.values()];
  }
  return { total: TOTAL, escena, buscar, azar: (sec) => escena(sec, 1 + Math.floor(Math.random() * TOTAL)), textos, nombre: NOMBRE };
}
