import { temaLogo, textoLogo, playPropio } from './v12.js';
// Logo procedural: anillo morado y dorado con «QUIÉN QUIERE SER» y «MILLONARIO»
export function dibujaLogo(size = 512) {
  const c = document.createElement('canvas'); c.width = c.height = size; const g = c.getContext('2d');
  const R = size / 2, cx = R, cy = R; g.translate(cx, cy); const TL = temaLogo(), [TOP, BANDA] = textoLogo('QUIÉN QUIERE SER', 'MILLONARIO');
  const oro = (r0, r1) => { const gr = g.createLinearGradient(0, -R, 0, R); gr.addColorStop(0, TL.oro[0]); gr.addColorStop(.35, TL.oro[1]); gr.addColorStop(.6, TL.oro[2]); gr.addColorStop(1, TL.oro[3]); return gr; };
  // halo
  let gr = g.createRadialGradient(0, 0, R * .2, 0, 0, R); gr.addColorStop(0, TL.halo[0]); gr.addColorStop(.85, TL.halo[1]); gr.addColorStop(1, 'rgba(10,0,40,0)');
  g.fillStyle = gr; g.beginPath(); g.arc(0, 0, R * .98, 0, 7); g.fill();
  // anillo dorado exterior
  g.lineWidth = R * .07; g.strokeStyle = oro(); g.beginPath(); g.arc(0, 0, R * .9, 0, 7); g.stroke();
  // anillo morado con texto
  g.lineWidth = R * .2; g.strokeStyle = TL.anillo; g.beginPath(); g.arc(0, 0, R * .74, 0, 7); g.stroke();
  g.lineWidth = R * .03; g.strokeStyle = oro(); g.beginPath(); g.arc(0, 0, R * .63, 0, 7); g.stroke();
  // espiral interior dorada
  g.save(); g.strokeStyle = 'rgba(232,184,48,.55)'; g.lineWidth = R * .012;
  for (let k = 0; k < 24; k++) { g.rotate(Math.PI / 12); g.beginPath(); for (let t = 0; t <= 1; t += .02) { const a = t * 2.2, r = R * .6 * t; g.lineTo(Math.cos(a) * r, Math.sin(a) * r); } g.stroke(); }
  g.restore();
  gr = g.createRadialGradient(0, 0, 0, 0, 0, R * .6); gr.addColorStop(0, 'rgba(120,70,220,.5)'); gr.addColorStop(1, 'rgba(20,0,60,.2)'); g.fillStyle = gr; g.beginPath(); g.arc(0, 0, R * .6, 0, 7); g.fill();
  // texto curvado arriba y abajo
  const curva = (txt, rad, arriba) => {
    g.save(); g.font = `bold ${R * .13}px Arial Black, Arial, sans-serif`; g.fillStyle = oro(); g.textAlign = 'center'; g.textBaseline = 'middle';
    const w = [...txt].map(ch => g.measureText(ch).width + R * .01), tot = w.reduce((a, b) => a + b, 0), ang = tot / rad;
    let a = arriba ? -Math.PI / 2 - ang / 2 : Math.PI / 2 + ang / 2;
    [...txt].forEach((ch, i) => { const da = w[i] / rad; a += arriba ? da / 2 : -da / 2; g.save(); g.rotate(a); g.translate(rad, 0); g.rotate(arriba ? Math.PI / 2 : -Math.PI / 2); g.fillText(ch, 0, 0); g.restore(); a += arriba ? da / 2 : -da / 2; });
    g.restore();
  };
  curva(TOP, R * .74, true); curva('★ ★ ★', R * .74, false);
  // banda central MILLONARIO
  g.save(); g.fillStyle = TL.banda; g.strokeStyle = oro(); g.lineWidth = R * .02;
  g.beginPath(); g.moveTo(-R * .95, -R * .15); g.lineTo(R * .95, -R * .15); g.lineTo(R * .88, R * .15); g.lineTo(-R * .88, R * .15); g.closePath(); g.fill(); g.stroke();
  g.font = `900 ${R * .26}px Arial Black, Impact, sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.lineWidth = R * .03; g.strokeStyle = '#5a3a00'; g.strokeText(BANDA, 0, R * .015, R * 1.7); g.fillStyle = oro(); g.fillText(BANDA, 0, R * .015, R * 1.7);
  g.restore();
  g.font = `900 ${R * .3}px Georgia, serif`; g.fillStyle = 'rgba(255,230,140,.9)'; g.textAlign = 'center'; if (TL.deco === 'play') playPropio(g, 0, R * .45, R * .32); else g.fillText(TL.deco || '?', 0, R * .45);
  return c;
}
