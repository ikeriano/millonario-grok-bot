// Lista todas las frases con voz pregrabada -> tools/frases.json
import fs from 'fs';
import * as D from '../src/datos.js';
const fmt = (v, era, largo) => String(v).replace(/\B(?=(\d{3})+(?!\d))/g, '.') + (era.moneda === 'ptas' ? (largo ? ' pesetas' : ' ptas') : ' €');
const T = new Set(); const add = (t, q = 'leo') => T.add(JSON.stringify([q, t]));
for (const v of Object.values(D.FRASES)) (Array.isArray(v) ? v : [v]).forEach(t => add(t));
for (const L of Object.values(D.EXTRAS)) for (const e of L) for (const [q, t] of e.pasos) if (!t.startsWith('(')) add(t, q);
for (const L of [D.PROMOS, D.ANUNCIOS]) for (const p of L) p.lineas.forEach(t => add(t, 'chema'));
for (const p of D.PROMOS_LEO) p.lineas.forEach(t => add(t));
for (const m of D.MONOLOGOS) m.lineas.forEach(t => add(t));
for (const h of D.HISTORIA) add(h[2]);
for (const v of Object.values(D.FRASES2)) (Array.isArray(v) ? v : [v]).forEach(t => add(t, 'leo'));
for (const c of ['pili', 'chema', 'marga', 'ramon', 'encarna']) for (const k of ['coproBien', 'coproMal', 'coproPregunta']) D.FRASES2[k].forEach(t => add(t, c));
const ST = await import('../src/st_datos.js');
for (const a of ST.ST_DATOS.anuncios) a.lineas.forEach(t => add(t, 'st_' + a.voz));
for (const t of Object.values(ST.ST_DATOS.cortinillas)) add(t, 'st_daniela'); add('Volvemos con ¿Quién quiere ser millonario?', 'st_daniela');
for (const c of ['pili', 'chema', 'marga', 'ramon', 'encarna']) add(`¡Hola! Soy ${D.PERSONAJES[c].nombre}, ${D.PERSONAJES[c].rol.toLowerCase()} del programa, y hoy acompaño a Leo en la presentación.`, c);
for (const c of []) add(`¡Hola! Soy ${D.PERSONAJES[c].nombre}, ${D.PERSONAJES[c].rol.toLowerCase()} del programa, y hoy acompaño a Leo en la presentación.`, c);
for (const era of Object.values(D.ERAS)) { era.escalera.forEach((v, i) => { add(`Pregunta ${i + 1}, por ${fmt(v, era, true)}.`); add(`Te llevas ${fmt(v, era, true)}. ¡Enhorabuena!`); if (era.eligeSeguro && i >= 5 && i <= 13) add(`Segundo seguro en la pregunta ${i + 1}: ${fmt(v, era, true)}.`); }); add(`Te llevas ${fmt(0, era, true)}. ¡Enhorabuena!`); }
for (const l of fs.readFileSync(new URL('../src/preguntas.txt', import.meta.url), 'utf8').split('\n')) if (l.includes('|')) add(l.split('|')[0]);
const out = [...T].map(x => JSON.parse(x)).map(([q, t]) => [q, t.replace(/[«»]/g, '')]);
fs.writeFileSync(new URL('frases.json', import.meta.url), JSON.stringify(out, null, 0)); console.log(out.length, 'frases');
