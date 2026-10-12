# Genera con Piper las voces (clave FNV-1a del texto, igual que app.js). Leo = es_ES-davefx-medium; resto, otras voces genéricas.
import json, os, subprocess, wave, sys, hashlib
from piper import PiperVoice, SynthesisConfig
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__))); OUT = sys.argv[1]
os.makedirs(OUT, exist_ok=True)
def fnv(t):
    import unicodedata; t = unicodedata.normalize('NFC', t).strip(); h = 2166136261
    for ch in t:
        for cu in ([ord(ch)] if ord(ch) < 0x10000 else [0xD800 + ((ord(ch) - 0x10000) >> 10), 0xDC00 + ((ord(ch) - 0x10000) & 0x3FF)]):
            h ^= cu; h = (h * 16777619) & 0xFFFFFFFF
    return '%08x' % h
VOCES = {'leo': 'es_ES-davefx-medium', 'chema': 'es_ES-carlfm-x_low', 'ramon': 'es_ES-mls_9972-low', 'conc': 'es_ES-mls_10246-low', 'pili': 'es_AR-daniela-high', 'marga': 'es_MX-claude-high', 'encarna': 'es_ES-sharvard-medium', 'st_sharvard': 'es_ES-sharvard-medium', 'st_ald': 'es_MX-ald-medium', 'st_daniela': 'es_AR-daniela-high', 'st_carlfm': 'es_ES-carlfm-x_low'}
cache = {}
idx_p = os.path.join(OUT, 'index.json'); idx = json.load(open(idx_p)) if os.path.exists(idx_p) else {}
for q, t in json.load(open(os.path.join(R, 'tools/frases.json'))):
    k = fnv(t)
    if k in idx: continue
    v = VOCES.get(q, VOCES['leo'])
    if v not in cache: cache[v] = PiperVoice.load('/workspace/piper/%s.onnx' % v)
    with wave.open('/tmp/gvm.wav', 'wb') as w: cache[v].synthesize_wav(t, w)
    with wave.open('/tmp/gvm.wav') as w: dur = w.getnframes() / w.getframerate()
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', '/tmp/gvm.wav', '-ac', '1', '-ar', '22050', '-b:a', '32k', os.path.join(OUT, k + '.mp3')], check=True)
    idx[k] = round(dur, 2)
json.dump(idx, open(idx_p, 'w'), separators=(',', ':')); print('voces:', len(idx))
