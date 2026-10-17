// ===== Menú igual que ¡Ahora Caigo! 1.35 =====
// · Jugar › Programa especial: los especiales en el orden de 1.35 (los propios del Millonario van detrás).
// · Opciones: «🎬 Más opciones del programa» plegado, con las filas en el mismo orden que ¡Ahora Caigo! 1.35.
const ORDEN135 = ['normal', 'primetime', 'halloween', 'ninos', 'nochebuena', 'navidad', 'carnaval', 'findeano', 'verano', 'especial300'];
export function ordenEspeciales135(L) {
  const pos = (e) => { const i = ORDEN135.indexOf(e.id); return i < 0 ? 100 + L0.indexOf(e) : i; }; const L0 = L.slice();
  L.sort((a, b) => pos(a) - pos(b));
}
const MAS135 = { abierto: false };
(function () { const s = document.createElement('style'); s.textContent = '#menu .ofold>.olabel{cursor:pointer;display:flex;align-items:center;gap:8px}#menu .ofold>.olabel:after{content:"▸";margin-left:auto;transition:transform .15s}#menu .ofold.open>.olabel:after{transform:rotate(90deg)}#menu .ofold:not(.open)>:not(.olabel){display:none}#menu .ofold.open{display:flex;flex-direction:column;gap:8px}'; document.head.appendChild(s); })();
// filas que van dentro (por cómo empieza su título), en el orden de ¡Ahora Caigo! 1.35
const DENTRO = ['📦 Cargar sb3', '📺 Publicidad en el Programa', '🎤 Copresentador sorpresa', '🎙️ Presentador sorpresa', '🎬 La regidora', '🎬 Cabecera 3D y apertura',
  '✏️ Editar título', '🎥 ELEGIR VÍDEO', '🎥 Mi cabecera 3D', '# Mis hashtags', '🎬 Creador de promos', '🖼 Guardar logo', '🏟️ Plató', '❓ Mis preguntas', '🎲 Normas sorpresa'];
export function masOpcionesMi(r, F) {
  const kids = [...r.children], txt = (x) => ((x.querySelector && x.querySelector('label,.olabel')) || x).textContent.trim();
  const fin = kids.find((x) => txt(x).startsWith('✨ Calidad gráfica')); if (!fin) return;
  const b = document.createElement('div'); b.className = 'ocustom ofold' + (MAS135.abierto ? ' open' : '');
  const l = document.createElement('div'); l.className = 'olabel'; l.textContent = '🎬 Más opciones del programa';
  l.onclick = (e) => { e.stopPropagation(); MAS135.abierto = b.classList.toggle('open'); try { F && F.play('Tecla'); } catch (x) {} };
  b.appendChild(l); let n = 0;
  for (const d of DENTRO) {
    const i = kids.findIndex((x) => x.parentNode === r && txt(x).startsWith(d)); if (i < 0) continue;
    b.appendChild(kids[i]); n++;
    // la nota que va justo detrás de su fila (p. ej. la de «Normas sorpresa» o la del Plató) se queda con ella
    for (let k = i + 1; k < kids.length && kids[k].parentNode === r && /onote|mtext|ominfo/.test(kids[k].className) && kids[k] !== fin && !/Rendimiento actual/.test(kids[k].textContent); k++) b.appendChild(kids[k]);
  }
  if (n) r.insertBefore(b, fin);
}
