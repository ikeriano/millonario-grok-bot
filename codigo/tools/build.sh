#!/bin/sh
# Construye www/js/app.js (IIFE). Requiere esbuild@0.28.2 y three@0.170.0 (npm i --no-save esbuild@0.28.2 three@0.170.0)
set -e
cd "$(dirname "$0")/.."
WWW=${WWW:-../www}
node -e "const fs=require('fs');const p='$WWW/voz/index.json';fs.writeFileSync('src/gen.js','export const VOZ='+(fs.existsSync(p)?fs.readFileSync(p,'utf8'):'{}')+';\n');"
node_modules/.bin/esbuild src/app.js --bundle --minify --charset=utf8 --format=iife --loader:.txt=text --outfile=$WWW/js/app.js --log-level=warning
