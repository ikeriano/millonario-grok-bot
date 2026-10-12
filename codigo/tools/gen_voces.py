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
# 1.2 auditoría: voces es_ES claras, tono ±3 st, length 1.0-1.05, loudnorm -16 LUFS
FIX = {'ramon': ('es_ES-davefx-medium', 0, 1.05, -2.5), 'conc': ('es_ES-sharvard-medium', 0, 1.0, 1.5)}
def tono(st): f = 2 ** (st / 12); return f'asetrate=22050*{f:.4f},aresample=22050,atempo={1/f:.4f},' if st else ''
REHACER = set(sys.argv[2].split(',')) if len(sys.argv) > 2 else set()
cache = {}
idx_p = os.path.join(OUT, 'index.json'); idx = json.load(open(idx_p)) if os.path.exists(idx_p) else {}
for q, t in json.load(open(os.path.join(R, 'tools/frases.json'))):
    k = fnv(t)
    if k in idx and q not in REHACER: continue
    if q in FIX:
        mod, spk, ls2, st = FIX[q]; dst = os.path.join(OUT, k + '.mp3')
        if mod not in cache: cache[mod] = PiperVoice.load('/workspace/piper/%s.onnx' % mod)
        with wave.open('/tmp/gvfix.wav', 'wb') as w: cache[mod].synthesize_wav(t, w, syn_config=SynthesisConfig(length_scale=ls2, speaker_id=spk))
        subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', '/tmp/gvfix.wav', '-af', tono(st) + 'loudnorm=I=-16:TP=-1.5:LRA=11', '-ac', '1', '-ar', '22050', '-b:a', '40k', dst], check=True)
        idx[k] = round(float(subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', dst], capture_output=True, text=True).stdout), 2); continue
    v = VOCES.get(q, VOCES['leo'])
    if v not in cache: cache[v] = PiperVoice.load('/workspace/piper/%s.onnx' % v)
    with wave.open('/tmp/gvm.wav', 'wb') as w: cache[v].synthesize_wav(t, w)
    with wave.open('/tmp/gvm.wav') as w: dur = w.getnframes() / w.getframerate()
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', '/tmp/gvm.wav', '-ac', '1', '-ar', '22050', '-b:a', '32k', os.path.join(OUT, k + '.mp3')], check=True)
    idx[k] = round(dur, 2)
json.dump(idx, open(idx_p, 'w'), separators=(',', ':')); print('voces:', len(idx))
