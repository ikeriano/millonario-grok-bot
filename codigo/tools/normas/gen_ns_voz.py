# Normas sorpresa · voces de Leo Arrieta (Piper es_ES-davefx-medium, ajustes por defecto, igual que codigo/tools/gen_voces.py)
# y del experto (Don Ramón: davefx, length 1.05, -2.5 st, loudnorm, como FIX['ramon']). Salida: www/ns/voz/<id>.mp3 + www/ns/vozx.js
import json, os, subprocess, wave, sys, unicodedata
from piper import PiperVoice, SynthesisConfig
OUT = sys.argv[1]; os.makedirs(OUT + '/voz', exist_ok=True)
def fnv(t):
    t = unicodedata.normalize('NFC', t).strip(); h = 2166136261
    for ch in t:
        for cu in ([ord(ch)] if ord(ch) < 0x10000 else [0xD800 + ((ord(ch) - 0x10000) >> 10), 0xDC00 + ((ord(ch) - 0x10000) & 0x3FF)]):
            h ^= cu; h = (h * 16777619) & 0xFFFFFFFF
    return '%08x' % h
v = PiperVoice.load('/workspace/tts/es_ES-davefx-medium.onnx')
def tono(st): f = 2 ** (st / 12); return f'asetrate=22050*{f:.4f},aresample=22050,atempo={1/f:.4f},' if st else ''
mapa = {}
for id_, quien, t in json.load(open('voces.json')):
    dst = f'{OUT}/voz/{id_}.mp3'
    if quien == 'ramon':
        with wave.open('/tmp/nsv.wav', 'wb') as w: v.synthesize_wav(t, w, syn_config=SynthesisConfig(length_scale=1.05, speaker_id=0))
        subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', '/tmp/nsv.wav', '-af', tono(-2.5) + 'loudnorm=I=-16:TP=-1.5:LRA=11', '-ac', '1', '-ar', '22050', '-b:a', '40k', dst], check=True)
    else:
        with wave.open('/tmp/nsv.wav', 'wb') as w: v.synthesize_wav(t, w)
        subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', '/tmp/nsv.wav', '-ac', '1', '-ar', '22050', '-b:a', '32k', dst], check=True)
    if id_.startswith('x_'): mapa[fnv(t.replace('«', '').replace('»', ''))] = id_
open(f'{OUT}/vozx.js', 'w').write('/* Normas sorpresa · frases nuevas de Leo y del experto (clave FNV-1a del texto -> ns/voz/<id>.mp3) */\nwindow.NS_VOZ=' + json.dumps(mapa, separators=(',', ':')) + ';\n')
print(len(mapa), 'x_ frases')
