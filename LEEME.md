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

## Novedades v1.1 (igual que ¡Ahora Caigo! 1.13)
- **Opciones** con todas las filas de ¡Ahora Caigo!: Música, Cabecera (3D / vídeo propio / plató 3D), Música de la cabecera (elegir audio, probar, quitar), Efectos, Público y Público en las gradas, Voz, Lectura, Velocidad, Chistes, Monólogo, Concursantes (nombres, profesión, presentador, amigo de la llamada y acompañante), Etapa del programa, Cargar sb3/sonidos/sprites, Músicas-sonidos-logo, Publicidad, Copresentador sorpresa, Presentador sorpresa (todo el programa), Cabecera 3D y apertura larga, Plató (4 estilos), Mis preguntas (equivale a «Palabra gallina: mis canciones»), Calidad y Pantalla completa.
- **Publicidad**: el código de Show Time TV de ¡Ahora Caigo! (`src/publicidad.js`, `src/st_datos.js`): cortinillas, 8 anuncios inventados y pausa en mitad del programa (tras las preguntas 5 y 10).
- **Casting** como en ¡Ahora Caigo! (ficha, avatar, IndexedDB, «Jugar como concursante», el casting contesta a la llamada).
- **Personajes** con el modelo del presentador de ¡Ahora Caigo! (`src/personajes.js`): cara pintada, solapas, corbata, manos, zapatos, pelo, gafas, cascos; se sientan, andan y gesticulan.
- **Llamada con reloj de 30 segundos**, apertura larga (Leo entra andando y el concursante va a la silla), créditos finales, icono de rombo dorado.
- Sonidos del Clásico (Scratch) en `www/sb3/snd/` para las músicas del concurso (desactivables).
