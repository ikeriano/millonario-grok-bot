// Personajes al estilo de ¡Ahora Caigo! 1.13 (función e2 del presentador, portada): piernas y brazos en cápsula con pivote,
// chaqueta con solapas, camisa, corbata o pajarita, cara pintada en lienzo, pelo, orejas, gafas y sombreros.
import { P3D, p3dOn } from './p3d_mi.js';
import * as THREE from 'three';
const L = (color, emissive = 0) => new THREE.MeshLambertMaterial({ color, emissive });
const tex = (w, h, f) => { const c = document.createElement('canvas'); c.width = w; c.height = h; f(c.getContext('2d'), w, h); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t; };
function miembro(r, l, m) { const g = new THREE.Group(), me = new THREE.Mesh(new THREE.CapsuleGeometry(r, l, 3, 8), m); me.position.y = -l / 2 - r * .5; g.add(me); return g; }
function cara(g, boca) {
  g.fillStyle = '#1a1a1a'; g.beginPath(); g.ellipse(42, 54, 9, 12, 0, 0, 7); g.fill(); g.beginPath(); g.ellipse(86, 54, 9, 12, 0, 0, 7); g.fill();
  g.fillStyle = '#fff'; g.beginPath(); g.arc(45, 50, 3.5, 0, 7); g.fill(); g.beginPath(); g.arc(89, 50, 3.5, 0, 7); g.fill();
  g.strokeStyle = '#3a2414'; g.lineWidth = 5; g.lineCap = 'round'; g.beginPath(); g.moveTo(30, 34); g.lineTo(54, 30); g.stroke(); g.beginPath(); g.moveTo(74, 30); g.lineTo(98, 34); g.stroke();
  if (boca) { g.fillStyle = '#8a1c1c'; g.beginPath(); g.moveTo(38, 82); g.quadraticCurveTo(64, 112, 90, 82); g.closePath(); g.fill(); g.fillStyle = '#fff'; g.fillRect(44, 82, 40, 7); }
  else { g.strokeStyle = '#8a1c1c'; g.lineWidth = 5; g.beginPath(); g.moveTo(44, 86); g.quadraticCurveTo(64, 96, 84, 86); g.stroke(); }
}
/** a: { piel, traje, camisa, corbata, pelo, pajarita, gafas, falda, melena, sombrero } */
// Personas 3D (Opciones › Personajes): personas realistas con caras inventadas. Cada personaje conserva su identidad (misma persona siempre).
const FIJOS = { leo: 'Business_Male_02', pili: 'Female_Adult_08', chema: 'Male_Adult_13', marga: 'Business_Female_03', ramon: 'Business_Male_06', encarna: 'Female_Adult_11' };
const VIVOS = new Map(); let hablaHook = false;
function creaP3D(a, id) {
  const api = P3D(); if (!hablaHook) { hablaHook = true; api.setHabla(h => { const P = VIVOS.get(h); return !!(P && P.habla); }); }
  const f = api.persona({ avatar: FIJOS[id], g: a.melena || a.falda ? 'f' : 'm', seed: FIJOS[id] ? id : (a.p3dSeed || JSON.stringify(a)) });
  const { root, body, legL, legR, armL, armR, head } = f;
  const P = { root, body, legL, legR, armL, armR, head, habla: false, sentado: false, t: Math.random() * 10, gesto: 0, p3d: f }; VIVOS.set(head, P);
  P.update = (dt) => { P.t += dt; const t = P.t;
    head.rotation.y = Math.sin(t * .7) * .1 + (P.habla ? Math.sin(t * 3.1) * .06 : 0); head.rotation.x = 0;
    f.sentado = P.sentado ? 0.86 : undefined;
    if (P.sentado) { legL.rotation.x = legR.rotation.x = 0; armL.rotation.x = armR.rotation.x = -.5; }
    else if (P.anda) { const w = Math.sin(t * 8) * .45; legL.rotation.x = w; legR.rotation.x = -w; armL.rotation.x = -w * .7; armR.rotation.x = w * .7; }
    else { legL.rotation.x = legR.rotation.x = 0; armL.rotation.x = 0; armR.rotation.x = P.habla ? -.3 + Math.sin(t * 2.5) * .2 : (a.tarjetas ? -.5 : 0); }
    if (P.gesto > 0) { P.gesto -= dt; armR.rotation.z = .12 + 2.6 * Math.min(1, P.gesto); armL.rotation.z = -.12 - 2.6 * Math.min(1, P.gesto); } else { armR.rotation.z = .12; armL.rotation.z = -.12; } };
  return P;
}
export function creaPersonaje(a, id) {
  if (p3dOn()) return creaP3D(a || {}, id);
  const piel = L(a.piel ?? 0xf2c8a0, 0x2a1408), traje = L(a.traje ?? 0x1b2340, 0x050710), camisa = L(a.camisa ?? 0xffffff), corb = L(a.corbata ?? 0x2a5aff, 0x0a1a40), zap = L(0x111111), pelo = L(a.pelo ?? 0x3a2414);
  const root = new THREE.Group(), body = new THREE.Group(); root.add(body);
  const pierna = a.falda ? piel : L(a.pantalon ?? a.traje ?? 0x1b2340);
  const legL = miembro(.09, .62, pierna), legR = miembro(.09, .62, pierna); legL.position.set(-.11, .88, 0); legR.position.set(.11, .88, 0); body.add(legL, legR);
  for (const p of [legL, legR]) { const z = new THREE.Mesh(new THREE.BoxGeometry(.13, .08, .26), zap); z.position.set(0, -.84, .05); p.add(z); }
  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(.21, .42, 4, 12), traje); torso.position.y = 1.17; torso.scale.set(1, 1, .72); body.add(torso);
  if (a.falda) { const f = new THREE.Mesh(new THREE.CylinderGeometry(.2, .32, .45, 16), traje); f.position.y = .82; body.add(f); }
  const pechera = new THREE.Mesh(new THREE.PlaneGeometry(.16, .36), camisa); pechera.position.set(0, 1.3, .155); body.add(pechera);
  if (a.pajarita) for (const s of [-1, 1]) { const c = new THREE.Mesh(new THREE.ConeGeometry(.045, .08, 4), corb); c.rotation.z = s * Math.PI / 2; c.position.set(s * .04, 1.46, .165); body.add(c); }
  else if (a.corbata !== null) { const c = new THREE.Mesh(new THREE.PlaneGeometry(.06, .3), corb); c.position.set(0, 1.29, .158); body.add(c); }
  for (const s of [-1, 1]) { const sol = new THREE.Mesh(new THREE.PlaneGeometry(.06, .3), traje); sol.position.set(s * .075, 1.3, .16); sol.rotation.z = s * .25; body.add(sol); }
  const armL = miembro(.07, .5, traje), armR = miembro(.07, .5, traje); armL.position.set(-.29, 1.44, 0); armL.rotation.z = -.12; armR.position.set(.29, 1.44, 0); armR.rotation.z = .12; body.add(armL, armR);
  for (const b of [armL, armR]) { const m = new THREE.Mesh(new THREE.SphereGeometry(.07, 8, 6), piel); m.position.y = -.66; b.add(m); }
  const cuello = new THREE.Mesh(new THREE.CylinderGeometry(.06, .07, .12, 8), piel); cuello.position.y = 1.52; body.add(cuello);
  const head = new THREE.Group(); head.position.y = 1.7; body.add(head);
  const cab = new THREE.Mesh(new THREE.SphereGeometry(.16, 16, 12), piel); cab.scale.set(.92, 1.08, .98); head.add(cab);
  const caraA = tex(128, 128, g => cara(g, true)), caraB = tex(128, 128, g => cara(g, false));
  const face = new THREE.Mesh(new THREE.CircleGeometry(.13, 20), new THREE.MeshBasicMaterial({ map: caraB, transparent: true })); face.position.set(0, -.01, .152); head.add(face);
  const casquete = new THREE.Mesh(new THREE.SphereGeometry(.165, 14, 8, 0, Math.PI * 2, 0, Math.PI * .55), pelo); casquete.position.y = .03; casquete.scale.set(1, 1.05, 1.02); head.add(casquete);
  const tupe = new THREE.Mesh(new THREE.ConeGeometry(.08, .16, 8), pelo); tupe.position.set(.02, .17, .08); tupe.rotation.set(.9, 0, -.3); head.add(tupe);
  if (a.melena) { const m = new THREE.Mesh(new THREE.CylinderGeometry(.17, .2, .32, 14, 1, true, Math.PI * .25, Math.PI * 1.5), pelo); m.material.side = THREE.DoubleSide; m.position.set(0, -.1, -.02); head.add(m); }
  for (const s of [-1, 1]) { const o = new THREE.Mesh(new THREE.SphereGeometry(.035, 6, 6), piel); o.scale.set(.6, 1, 1); o.position.set(s * .15, -.01, 0); head.add(o); }
  if (a.gafas) { const m = new THREE.MeshBasicMaterial({ color: 0x111111 }); for (const s of [-1, 1]) { const l = new THREE.Mesh(new THREE.RingGeometry(.035, .05, 12), m); l.position.set(s * .055, .02, .158); head.add(l); } const p = new THREE.Mesh(new THREE.BoxGeometry(.2, .012, .01), m); p.position.set(0, .03, .16); head.add(p); }
  if (a.cascos) { const m = L(0x222222); const d = new THREE.Mesh(new THREE.TorusGeometry(.17, .02, 6, 16, Math.PI), m); d.position.y = .02; head.add(d); for (const s of [-1, 1]) { const c = new THREE.Mesh(new THREE.CylinderGeometry(.05, .05, .04, 12), m); c.rotation.z = Math.PI / 2; c.position.set(s * .17, 0, 0); head.add(c); } }
  if (a.tarjetas) { const t = new THREE.Mesh(new THREE.BoxGeometry(.1, .14, .01), L(0x2a5aff, 0x0a1a40)); t.position.set(0, -.7, .06); t.rotation.x = -.5; armR.add(t); }
  const P = { root, body, legL, legR, armL, armR, head, face, caraA, caraB, habla: false, sentado: false, t: Math.random() * 10, gesto: 0 };
  P.update = (dt) => {
    P.t += dt; const t = P.t;
    face.material.map = P.habla && Math.sin(t * 16) > 0 ? caraA : caraB;
    head.rotation.y = Math.sin(t * .7) * .12 + (P.habla ? Math.sin(t * 3.1) * .08 : 0); head.rotation.x = P.habla ? Math.sin(t * 5) * .05 : 0;
    body.position.y = P.sentado ? 0 : Math.sin(t * 1.6) * .006;
    if (P.sentado) { legL.rotation.x = legR.rotation.x = -1.45; armL.rotation.x = armR.rotation.x = -.6; }
    else if (P.anda) { const w = Math.sin(t * 8) * .5; legL.rotation.x = w; legR.rotation.x = -w; armL.rotation.x = -w * .8; armR.rotation.x = w * .8; body.position.y = Math.abs(Math.cos(t * 8)) * .03; }
    else { legL.rotation.x = legR.rotation.x = 0; armL.rotation.x = 0; armR.rotation.x = P.habla ? -.3 + Math.sin(t * 2.5) * .25 : 0; }
    if (P.gesto > 0) { P.gesto -= dt; armR.rotation.z = .12 + 2.6 * Math.min(1, P.gesto); armL.rotation.z = -.12 - 2.6 * Math.min(1, P.gesto); } else { armR.rotation.z = .12; armL.rotation.z = -.12; }
  };
  return P;
}
