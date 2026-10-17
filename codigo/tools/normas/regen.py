import json,subprocess,wave,sys
sys.argv=['x','/workspace/handoff/millonario-grok-bot/www/ns']
from piper import PiperVoice, SynthesisConfig
from faster_whisper import WhisperModel
exec(open('asr.py').read().split("m=WhisperModel")[0])
v=PiperVoice.load('/workspace/tts/es_ES-davefx-medium.onnx'); m=WhisperModel('small',device='cpu',compute_type='int8')
def tono(st): f = 2 ** (st / 12); return f'asetrate=22050*{f:.4f},aresample=22050,atempo={1/f:.4f},' if st else ''
IDS=set('c_amigo x_seg_e1999_13 x_seg_e2005_11 x_exp1B ev_racha_1 c_familiar x_recarga ev_bien_3 x_seg_e1999_9 x_seg_e1999_10'.split())
for id_,q,t in json.load(open('voces.json')):
    if id_ not in IDS: continue
    best=None
    for k in range(5):
        tmp='/tmp/rg_%d.mp3'%k
        if q=='ramon':
            with wave.open('/tmp/rg.wav','wb') as w: v.synthesize_wav(t,w,syn_config=SynthesisConfig(length_scale=1.05,speaker_id=0))
            subprocess.run(['ffmpeg','-y','-loglevel','error','-i','/tmp/rg.wav','-af',tono(-2.5)+'loudnorm=I=-16:TP=-1.5:LRA=11','-ac','1','-ar','22050','-b:a','40k',tmp],check=True)
        else:
            with wave.open('/tmp/rg.wav','wb') as w: v.synthesize_wav(t,w)
            subprocess.run(['ffmpeg','-y','-loglevel','error','-i','/tmp/rg.wav','-ac','1','-ar','22050','-b:a','32k',tmp],check=True)
        segs,_=m.transcribe(load(tmp),language='es'); h=' '.join(s.text for s in segs); w_=wer(norm(t),norm(h))
        if best is None or w_<best[0]: best=(w_,tmp,h); subprocess.run(['cp',tmp,'/tmp/best.mp3'])
        if w_<=0.1: break
    subprocess.run(['cp','/tmp/best.mp3','/workspace/handoff/millonario-grok-bot/www/ns/voz/%s.mp3'%id_])
    print(id_, round(best[0],2), '|', best[2], flush=True)
