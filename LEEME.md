# ¿Quién quiere ser millonario? El juego 3D · versión 1.0 (privada)
Juego de fans creado por Iker. Misma estructura de menús, estilos y opciones que «¡Ahora Caigo! 3D» 1.13. **No hacer público.**
- `www/`: el juego web (fuente del APK). Ábrelo sirviendo la carpeta (p. ej. `python3 -m http.server -d www`).
- `codigo/src`: código (three.js 0.170.0, esbuild 0.28.2). `sh codigo/tools/build.sh` genera `www/js/app.js`.
  - `preguntas.txt`: 300 preguntas originales en 5 niveles de dificultad (60 por nivel).
  - `datos.js`: presentador inventado (Leo Arrieta), escalas por época, escenas, promos, publicidad, monólogos e historia.
  - `plato.js`: plató 3D 2020 (suelo dorado en espiral, consola en V, dos sillas, gradas, haces, logo). `logo.js`: logo procedural.
- Voces: Piper TTS (`codigo/tools/frases.mjs` + `gen_voces.py`), voces genéricas; nada clonado.
- Clásico: el .sb3 «Quem Quer Ser Um Milionário - Jogo 2025 remix» empaquetado con TurboWarp Packager (`codigo/tools/empaquetar_clasico.cjs`) en `www/clasico/`.
- `android/`: proyecto Gradle (AGP 8.5.2, Gradle 8.7, SDK 34), paquete `com.ikeriano.millonario`. Copia `www` a `app/src/main/assets/www`, añade `keystore/` (la de ¡Ahora Caigo!) y `local.properties`, y `./gradlew assembleRelease`.
- `Plato-Millonario.rbxlx` (+ `roblox/gen_rbxlx.py`): el plató para Roblox Studio.

## Versión 1.12
- 📺 Logo de la cadena: **Antena 3 HD** (`www/cadena/antena3_hd.jpg`, el archivo de Iker tal cual) es ahora el logo por defecto de la emisión. Quien ya tuviera la 1.11 con «El del juego» pasa una vez a Antena 3 HD; se puede cambiar en Más opciones («Sin logo», Cuatro, Telecinco, La 2).

## Versión 1.11 · ⚡ Pregunta rápida
- **Pregunta rápida** antes de las 15 preguntas (Programa completo, especiales y Entrenamiento), como en Antena 3: seis candidatos en atriles (tú y cinco rivales virtuales), el plató se pone en rojo oscuro, Leo lee la pregunta y hay 15 segundos para ordenar las 4 respuestas (botón «Borrar»). Panel lateral con tu orden y el correcto, que se enciende en verde uno a uno; luego la lista de acertantes con sus tiempos y el más rápido va a la silla con aplausos. Si fallas o eres más lento, «FIN DEL JUEGO» y puedes jugar otra. Opción «⚡ Pregunta rápida» (Sí por defecto) en Más opciones.
- Código: `codigo/src/rapida.js`, frases `rapida_fr.js`, 127 preguntas de ordenar en `rapida.txt` (`pregunta|1ª|2ª|3ª|4ª`, en el orden correcto). Música propia sintetizada en `www/rapida/`. Voces Piper nuevas (Leo, es_ES-davefx-medium) en `www/voz/`.
- **Emisión de TV** (Sí por defecto): #QQSMElMinijuego arriba a la izquierda, logo de la cadena abajo a la derecha y autopromociones arriba a la derecha; empieza con la cabecera del Programa completo. **📺 Logo de la cadena**: El del juego (por defecto, sin logo), Cuatro, Antena 3 HD, Telecinco o La 2 (archivos de Iker tal cual, en `www/cadena/`).
- Arreglos: el comodín del público sube con porcentajes que siempre suman 100; confirmación al plantarse; los botones de confirmación quedan por encima de la escalera.
- Capturas: `codigo/tools/capturas111.mjs` y `capturas111b.mjs`.

## Versión 1.9 · 🎲 Normas sorpresa
- **Opciones › 🎲 Normas sorpresa** («No (normas de siempre)» por defecto). En «Sí», al empezar cada partida (Programa completo y especiales, Entrenamiento y Modo clásico 2010) se sortean de 2 a 4 normas entre **51** (8 categorías, una por categoría como mucho, nunca dos retos juntos; 75.648 combinaciones) y Leo Arrieta las anuncia con voz y subtítulos. «🎲 N normas» (arriba a la izquierda) las recuerda.
- Motor común `www/ns/ns.js` (el mismo de El Cazador 1.10 y Pasapalabra 2.15), catálogo `www/ns/cat.js`, voces nuevas en `www/ns/voz/` (Piper es_ES-davefx-medium como Leo; el experto con la voz de Don Ramón) y `www/ns/vozx.js`. Las voces del juego (`www/voz/`) no cambian.
- Herramientas: `codigo/tools/normas/` (gen_ns_voz.py, voces.json, asr.py, regen.py, CATALOGO.md).
- El Clásico de Scratch no cambia.

## Versión 1.2.1
- **Roblox: port completo como ¡Ahora Caigo!** El menú de Roblox es el mismo de la app, sacado del rastreo de sus pantallas (mismos textos, orden y estilos). Todo lo que antes decía «está en la app» ahora tiene escena real en el plató con personajes animados:
  - Cámara oculta, Tomas falsas y Fuera de cámaras usan el mismo generador de 9.600 escenas (verificado frase a frase contra la app), con páginas, «al azar», búsqueda y «Ver escena n».
  - Promos y Promos del presentador.
  - Publicidad de Show Time TV: pausa completa, cortinillas, promos de la cadena y anuncios inventados.
  - Monólogos y la historia contada por el presentador.
  - Casting: el nombre que pongas sale en las partidas.
  - Especiales, con su saludo y su rótulo.
  - Edición del título del programa, con «Restaurar original».
  - Cabecera 3D y cabecera con vídeo propio en un VideoFrame del plató (`Imagenes.VideoCabecera`).
- **Roblox, partida:** el Programa completo arranca con cabecera, regidora y saludo, y tiene pausa publicitaria a mitad. En Entrenamiento eliges la escalera de cada etapa (2020–2025, 2005–2007, 1999–2001 en pesetas).
- **Voces:** sin cambios en esta versión. La tasa de error (WER) se volvió a comprobar con Whisper.

## Novedades v1.1 (igual que ¡Ahora Caigo! 1.13)
- **Opciones** con todas las filas de ¡Ahora Caigo!: Música, Cabecera (3D / vídeo propio / plató 3D), Música de la cabecera (elegir audio, probar, quitar), Efectos, Público y Público en las gradas, Voz, Lectura, Velocidad, Chistes, Monólogo, Concursantes (nombres, profesión, presentador, amigo de la llamada y acompañante), Etapa del programa, Cargar sb3/sonidos/sprites, Músicas-sonidos-logo, Publicidad, Copresentador sorpresa, Presentador sorpresa (todo el programa), Cabecera 3D y apertura larga, Plató (4 estilos), Mis preguntas (equivale a «Palabra gallina: mis canciones»), Calidad y Pantalla completa.
- **Publicidad**: el código de Show Time TV de ¡Ahora Caigo! (`src/publicidad.js`, `src/st_datos.js`): cortinillas, 8 anuncios inventados y pausa en mitad del programa (tras las preguntas 5 y 10).
- **Casting** como en ¡Ahora Caigo! (ficha, avatar, IndexedDB, «Jugar como concursante», el casting contesta a la llamada).
- **Personajes** con el modelo del presentador de ¡Ahora Caigo! (`src/personajes.js`): cara pintada, solapas, corbata, manos, zapatos, pelo, gafas, cascos; se sientan, andan y gesticulan.
- **Llamada con reloj de 30 segundos**, apertura larga (Leo entra andando y el concursante va a la silla), créditos finales, icono de rombo dorado.
- Sonidos del Clásico (Scratch) en `www/sb3/snd/` para las músicas del concurso (desactivables).
