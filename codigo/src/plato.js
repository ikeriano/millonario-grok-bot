import * as THREE from 'three';
import { dibujaLogo } from './logo.js';
import { PERSONAJES } from './datos.js';
import { creaPersonaje } from './personajes.js';
// Plató 2020: azul oscuro, haces de luz, suelo dorado en espiral, consola en V, dos sillas, gradas y logo al fondo
export function creaPlato(canvas, calidad = 'media', estilo = '2020') {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: calidad !== 'baja', preserveDrawingBuffer: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, calidad === 'alta' ? 2 : 1)); renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.15;
  const scene = new THREE.Scene(); scene.background = new THREE.Color(0x01030e); scene.fog = new THREE.Fog(0x01030e, 22, 48);
  const camera = new THREE.PerspectiveCamera(50, 1, .1, 200);
  scene.add(new THREE.HemisphereLight(0x6080ff, 0x101830, 1.1)); const clave = new THREE.DirectionalLight(0xdde6ff, 1.4); clave.position.set(0, 8, 10); scene.add(clave);
  const azul = new THREE.MeshBasicMaterial({ color: 0x2f7dff }), azulClaro = new THREE.MeshBasicMaterial({ color: 0x8fd0ff });
  const negro = new THREE.MeshStandardMaterial({ color: 0x0a0d18, metalness: .7, roughness: .25 });
  // ---------- suelo central con espiral/red dorada ----------
  const ct = document.createElement('canvas'); ct.width = ct.height = 1024; const g = ct.getContext('2d');
  g.fillStyle = '#05091c'; g.fillRect(0, 0, 1024, 1024); g.translate(512, 512);
  const grd = g.createRadialGradient(0, 0, 50, 0, 0, 512); grd.addColorStop(0, '#13205a'); grd.addColorStop(1, '#03061a'); g.fillStyle = grd; g.beginPath(); g.arc(0, 0, 512, 0, 7); g.fill();
  g.strokeStyle = '#e0a83a'; g.lineCap = 'round';
  for (let s = -1; s <= 1; s += 2) for (let k = 0; k < 16; k++) { g.lineWidth = 7; g.beginPath(); for (let t = 0; t <= 1; t += .01) { const a = k / 16 * Math.PI * 2 + s * t * 2.6, r = 90 + t * 410; g.lineTo(Math.cos(a) * r, Math.sin(a) * r); } g.stroke(); }
  for (const r of [90, 180, 300, 420, 500]) { g.lineWidth = r === 500 ? 14 : 5; g.beginPath(); g.arc(0, 0, r, 0, 7); g.stroke(); }
  g.fillStyle = '#e0a83a'; g.beginPath(); g.arc(0, 0, 60, 0, 7); g.fill();
  const texSuelo = new THREE.CanvasTexture(ct); texSuelo.colorSpace = THREE.SRGBColorSpace; texSuelo.anisotropy = 4;
  const suelo = new THREE.Mesh(new THREE.CircleGeometry(7, 96), new THREE.MeshStandardMaterial({ map: texSuelo, metalness: .45, roughness: .3, emissive: 0xffffff, emissiveMap: texSuelo, emissiveIntensity: .35 }));
  suelo.rotation.x = -Math.PI / 2; suelo.position.y = .02; scene.add(suelo);
  const anilloAzul = new THREE.Mesh(new THREE.RingGeometry(7, 7.15, 128), azul); anilloAzul.rotation.x = -Math.PI / 2; anilloAzul.position.y = .03; scene.add(anilloAzul);
  const exterior = new THREE.Mesh(new THREE.RingGeometry(7.15, 30, 96), new THREE.MeshStandardMaterial({ color: 0x050a20, metalness: .6, roughness: .35 })); exterior.rotation.x = -Math.PI / 2; scene.add(exterior);
  for (let i = 0; i < 24; i++) { const a = i / 24 * Math.PI * 2, l = new THREE.Mesh(new THREE.BoxGeometry(.06, .02, 5), azul); l.position.set(Math.sin(a) * 9.8, .03, Math.cos(a) * 9.8); l.rotation.y = a; scene.add(l); }
  for (const r of [7.6, 12.5]) { const m = new THREE.Mesh(new THREE.TorusGeometry(r, .04, 6, 160), azul); m.rotation.x = Math.PI / 2; m.position.y = .05; scene.add(m); }
  // tarima central
  const tarima = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.7, .25, 48), negro); tarima.position.y = .12; scene.add(tarima);
  const tarimaLuz = new THREE.Mesh(new THREE.TorusGeometry(1.65, .03, 6, 64), azulClaro); tarimaLuz.rotation.x = Math.PI / 2; tarimaLuz.position.y = .25; scene.add(tarimaLuz);
  // ---------- consola central en V curvada con dos monitores ----------
  const consola = new THREE.Group(); scene.add(consola); consola.position.y = .25; consola.scale.setScalar(1.25);
  for (const s of [-1, 1]) {
    const curva = new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0, 0), new THREE.Vector3(s * .25, .5, 0), new THREE.Vector3(s * .7, 1.05, 0), new THREE.Vector3(s * 1.05, 1.25, 0)]);
    const brazo = new THREE.Mesh(new THREE.TubeGeometry(curva, 30, .12, 10), negro); consola.add(brazo);
    const filo = new THREE.Mesh(new THREE.TubeGeometry(curva, 30, .03, 6), azulClaro); filo.position.z = .12; consola.add(filo);
    const mon = new THREE.Mesh(new THREE.BoxGeometry(.7, .05, .5), negro); mon.position.set(s * 1.05, 1.3, 0); mon.rotation.z = s * .25; consola.add(mon);
    const pant = new THREE.Mesh(new THREE.PlaneGeometry(.62, .42), new THREE.MeshBasicMaterial({ color: 0x1a4aff })); pant.rotation.x = -Math.PI / 2; pant.rotation.y = s * .25; pant.position.set(s * 1.05, 1.33, 0); consola.add(pant);
  }
  const pie = new THREE.Mesh(new THREE.CylinderGeometry(.35, .5, .15, 24), negro); consola.add(pie);
  // ---------- dos sillas altas enfrentadas ----------
  const sillas = [];
  for (const s of [-1, 1]) {
    const silla = new THREE.Group(); silla.position.set(s * 2.3, .25, 0); silla.rotation.y = -s * Math.PI / 2; scene.add(silla); sillas.push(silla);
    const poste = new THREE.Mesh(new THREE.CylinderGeometry(.05, .05, 1, 12), negro); poste.position.y = .5; silla.add(poste);
    const base = new THREE.Mesh(new THREE.CylinderGeometry(.35, .4, .05, 24), negro); silla.add(base);
    const aro = new THREE.Mesh(new THREE.TorusGeometry(.25, .015, 6, 24), azulClaro); aro.rotation.x = Math.PI / 2; aro.position.y = .35; silla.add(aro);
    const asiento = new THREE.Mesh(new THREE.CylinderGeometry(.3, .28, .1, 24), new THREE.MeshStandardMaterial({ color: 0x15151f, roughness: .6 })); asiento.position.y = 1.02; silla.add(asiento);
    const resp = new THREE.Mesh(new THREE.BoxGeometry(.5, .55, .06), asiento.material); resp.position.set(0, 1.35, -.28); resp.rotation.x = -.15; silla.add(resp);
  }
  // ---------- gradas con público a ambos lados ----------
  const persona = new THREE.CapsuleGeometry(.16, .3, 3, 6), cabeza = new THREE.SphereGeometry(.12, 8, 6);
  const nPub = calidad === 'baja' ? 160 : 360; const cuerpos = new THREE.InstancedMesh(persona, new THREE.MeshStandardMaterial({ roughness: .8 }), nPub), cabezas = new THREE.InstancedMesh(cabeza, new THREE.MeshStandardMaterial({ color: 0xd8a888, roughness: .8 }), nPub);
  scene.add(cuerpos, cabezas); const gradasPub = [cuerpos, cabezas]; const m4 = new THREE.Matrix4(), col = new THREE.Color(); let np = 0; const publico = [];
  for (const lado of [-1, 1]) for (let fila = 0; fila < 6; fila++) {
    const r = 12 + fila * 1.1, h = .4 + fila * .55;
    const grada = new THREE.Mesh(new THREE.CylinderGeometry(r + .55, r + .55, h, 48, 1, true, lado > 0 ? Math.PI * .18 : Math.PI * 1.18, Math.PI * .64), new THREE.MeshStandardMaterial({ color: 0x0b1230, side: THREE.DoubleSide, metalness: .4, roughness: .5 }));
    grada.position.y = h / 2; scene.add(grada);
    const borde = new THREE.Mesh(new THREE.TorusGeometry(r - .5, .025, 4, 80, Math.PI * .64), azul); borde.rotation.x = Math.PI / 2; borde.rotation.z = -(lado > 0 ? Math.PI * .18 : Math.PI * 1.18) + Math.PI / 2 - Math.PI * .64; borde.position.y = h + .01; scene.add(borde);
    for (let k = 0; k < 30 && np < nPub; k++) {
      const a = (lado > 0 ? Math.PI * .2 : Math.PI * 1.2) + k / 29 * Math.PI * .6, x = Math.sin(a) * r, z = Math.cos(a) * r;
      if (Math.random() < .12) continue;
      m4.makeTranslation(x, h + .35, z); cuerpos.setMatrixAt(np, m4); cuerpos.setColorAt(np, col.setHSL(Math.random(), .45, .25 + Math.random() * .3));
      m4.makeTranslation(x, h + .75, z); cabezas.setMatrixAt(np, m4); publico.push({ x, y: h, z }); np++;
    }
  }
  cuerpos.count = cabezas.count = np;
  // ---------- fondo: logo redondo, columnas de luz y arcos ----------
  const texLogo = new THREE.CanvasTexture(dibujaLogo(1024)); texLogo.colorSpace = THREE.SRGBColorSpace;
  const logo = new THREE.Mesh(new THREE.CircleGeometry(2.6, 64), new THREE.MeshBasicMaterial({ map: texLogo, transparent: true })); logo.position.set(0, 4.2, -15.5); scene.add(logo);
  const muro = new THREE.Mesh(new THREE.CylinderGeometry(17, 17, 12, 64, 1, true, Math.PI * .8, Math.PI * .4), new THREE.MeshStandardMaterial({ color: 0x040822, side: THREE.BackSide })); muro.position.y = 6; scene.add(muro);
  for (let i = -6; i <= 6; i++) { if (i === 0) continue; const a = Math.PI + i * .055, col = new THREE.Mesh(new THREE.BoxGeometry(.12, 9, .12), i % 2 ? azul : azulClaro); col.position.set(Math.sin(a) * 16.5, 4.5, Math.cos(a) * 16.5); scene.add(col); }
  for (const r of [3, 3.4]) { const arco = new THREE.Mesh(new THREE.TorusGeometry(r, .05, 6, 80), azul); arco.position.set(0, 4.2, -15.4); scene.add(arco); }
  // anillo de techo y haces de luz
  const techo = new THREE.Mesh(new THREE.TorusGeometry(8, .12, 8, 96), azul); techo.rotation.x = Math.PI / 2; techo.position.y = 10; scene.add(techo);
  const haces = []; const matHaz = new THREE.MeshBasicMaterial({ color: 0x3a8cff, transparent: true, opacity: .09, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
  for (let i = 0; i < 14; i++) {
    const haz = new THREE.Mesh(new THREE.ConeGeometry(1.2, 14, 20, 1, true), matHaz); haz.geometry.translate(0, -7, 0);
    const a = i / 14 * Math.PI * 2; haz.position.set(Math.sin(a) * 8, 10, Math.cos(a) * 8); haz.userData = { a, f: .3 + Math.random() * .4 }; scene.add(haz); haces.push(haz);
  }
  const foco = new THREE.SpotLight(0xa8c8ff, 260, 30, .45, .5, 1); foco.position.set(0, 12, 4); foco.target.position.set(0, 0, 0); scene.add(foco, foco.target);
  const foco2 = new THREE.PointLight(0x2f6bff, 25, 25); foco2.position.set(0, 5, -8); scene.add(foco2);
  // ---------- personajes (figuras inventadas, sin parecido con nadie real) ----------
  const figuras = {};
  const creaFigura = (id) => {
    const p = PERSONAJES[id], P = creaPersonaje(p.aspecto || {}); P.root.userData = P; P.root.visible = false; scene.add(P.root); figuras[id] = P.root; return P.root;
  };
  Object.keys(PERSONAJES).forEach(creaFigura);
  const recreaFigura = (id, aspecto) => { const v = figuras[id]; const pos = v.position.clone(), rot = v.rotation.y, vis = v.visible, sen = v.userData.sentado; scene.remove(v); const P = creaPersonaje(aspecto || PERSONAJES[id].aspecto); P.root.userData = P; scene.add(P.root); figuras[id] = P.root; P.root.position.copy(pos); P.root.rotation.y = rot; P.root.visible = vis; P.sentado = sen; return P.root; };
  const sentar = (f, silla) => { f.position.copy(silla.position).add(new THREE.Vector3(0, .24, 0)); f.rotation.y = silla.rotation.y; f.visible = true; f.userData.sentado = true; };
  const dePie = (f, x, y, z, ry) => { f.position.set(x, y, z); f.rotation.y = ry; f.visible = true; f.userData.sentado = false; };
  sentar(figuras.leo, sillas[1]); sentar(figuras.conc, sillas[0]);
  // ---------- cámaras ----------
  const PLANOS = {
    wide: [new THREE.Vector3(0, 4.5, 13), new THREE.Vector3(0, 1.8, -2)], pres: [new THREE.Vector3(-.6, 2, 2.6), new THREE.Vector3(2.3, 1.95, 0)],
    silla: [new THREE.Vector3(.6, 2, 2.6), new THREE.Vector3(-2.3, 1.85, 0)], consola: [new THREE.Vector3(0, 2.8, 3.2), new THREE.Vector3(0, 1.4, 0)],
    grada: [new THREE.Vector3(3, 2.5, 4), new THREE.Vector3(12, 2, 4)], pres2: [new THREE.Vector3(0, 1.9, 7), new THREE.Vector3(0, 1.6, 3.2)], copro: [new THREE.Vector3(-.5, 1.9, 5.5), new THREE.Vector3(1.3, 1.6, 2.2)], logo: [new THREE.Vector3(0, 4, -6), new THREE.Vector3(0, 4.2, -15.5)],
    dos: [new THREE.Vector3(0, 2.4, 5.5), new THREE.Vector3(0, 1.6, 0)], cenital: [new THREE.Vector3(0, 14, .1), new THREE.Vector3(0, 0, 0)],
  };
  const cam = { modo: 'orbita', t: 0, desde: null, hacia: null, mira: new THREE.Vector3(), dur: 1.4, orbitR: 13, orbitH: 5, yaw: 0, pitch: 0 };
  camera.position.copy(PLANOS.wide[0]); camera.lookAt(PLANOS.wide[1]);
  const plano = (n, dur = 1.2) => { const p = PLANOS[n] || PLANOS.wide; cam.modo = 'plano'; cam.t = 0; cam.dur = dur; cam.desde = [camera.position.clone(), cam.mira.clone()]; cam.hacia = p; };
  const orbita = (r = 13, h = 5) => { cam.modo = 'orbita'; cam.orbitR = r; cam.orbitH = h; };
  const libre = () => { cam.modo = 'libre'; camera.position.set(0, 1.7, 9); cam.yaw = 0; cam.pitch = 0; };
  let ancho = 0, alto = 0, tiempo = 0, luces = true;
  const mueve = { x: 0, z: 0 };
  function frame(dt) {
    tiempo += dt; const w = canvas.clientWidth, h = canvas.clientHeight;
    if (w !== ancho || h !== alto) { ancho = w; alto = h; renderer.setSize(w, h, false); camera.aspect = w / h; camera.fov = w / h < 1.2 ? 65 : 50; camera.updateProjectionMatrix(); }
    for (const hz of haces) { const u = hz.userData; hz.rotation.x = Math.sin(tiempo * u.f + u.a) * .45; hz.rotation.z = Math.cos(tiempo * u.f * .8 + u.a) * .45; hz.visible = luces; }
    for (const id in figuras) if (figuras[id].visible) figuras[id].userData.update(dt);
    if (cam.modo === 'orbita') { const a = tiempo * .08; camera.position.set(Math.sin(a) * cam.orbitR, cam.orbitH + Math.sin(tiempo * .3) * .5, Math.cos(a) * cam.orbitR); cam.mira.set(0, 1.5, 0); }
    else if (cam.modo === 'plano') { cam.t = Math.min(1, cam.t + dt / cam.dur); const e = cam.t < .5 ? 2 * cam.t * cam.t : 1 - Math.pow(-2 * cam.t + 2, 2) / 2; camera.position.lerpVectors(cam.desde[0], cam.hacia[0], e); cam.mira.lerpVectors(cam.desde[1], cam.hacia[1], e); camera.position.x += Math.sin(tiempo * .4) * .05; }
    else if (cam.modo === 'libre') { const f = new THREE.Vector3(Math.sin(cam.yaw), 0, -Math.cos(cam.yaw)), r = new THREE.Vector3(-f.z, 0, f.x); camera.position.addScaledVector(f, -mueve.z * dt * 4).addScaledVector(r, mueve.x * dt * 4); camera.position.y = 1.7; cam.mira.copy(camera.position).add(new THREE.Vector3(Math.sin(cam.yaw) * Math.cos(cam.pitch), Math.sin(cam.pitch), -Math.cos(cam.yaw) * Math.cos(cam.pitch))); }
    camera.lookAt(cam.mira); renderer.render(scene, camera);
  }
    const ESTILOS = { '2020': [0x2f7dff, 0x8fd0ff, 0x01030e, 0x3a8cff], '2005': [0x7a3cff, 0xd0a0ff, 0x06021a, 0x9a6aff], '1999': [0x1a5aff, 0xffd060, 0x000510, 0xffc040], virtual: [0x00e0ff, 0xff4ad0, 0x05001a, 0x40ffff] };
  const aplicaEstilo = (e) => { const [c1, c2, fondo, haz] = ESTILOS[e] || ESTILOS['2020']; azul.color.setHex(c1); azulClaro.color.setHex(c2); scene.background.setHex(fondo); scene.fog.color.setHex(fondo); matHaz.color.setHex(haz); };
  aplicaEstilo(estilo);
  const ponLogo = (img) => { const t = new THREE.Texture(img); t.colorSpace = THREE.SRGBColorSpace; t.needsUpdate = true; logo.material.map = t; logo.material.needsUpdate = true; };
  return { recreaFigura, aplicaEstilo, ponLogo, dePie, gradas: (v) => gradasPub.forEach(m => m.visible = v), renderer, scene, camera, frame, plano, orbita, libre, cam, mueve, figuras, sillas, publico, PLANOS, toggleLuces: () => (luces = !luces), sentar };
}
