import json, sys, re
sys.path.insert(0, '/workspace/port')
from jsonlua import lua
ST = json.loads(re.search(r'ST_DATOS = (\{.*\});', open('/workspace/millonario/codigo/src/st_datos.js', encoding='utf-8').read()).group(1))
for g, ex in (('millonario', 'm12'), ('cazador', 'c12')):
    D = json.load(open(f'/workspace/port/{g}_datos.json')); X = json.load(open(f'/workspace/port/{g}_12.json'))
    pool = json.load(open(f'/workspace/{g}/codigo/src/escenas_pool.json'))
    app = open(f'/workspace/{g}/codigo/src/app.js', encoding='utf-8').read()
    m = re.search(r"escenas: \{ roles: (\{[^}]*\}), nombres: (\{[^}]*\}), cam: (\{[^}]*\}), camDef: '(\w+)' \}", app)
    js = lambda s: json.loads(re.sub(r"(\w+):", r'"\1":', s).replace("'", '"'))
    esp = []
    for e in D['ESPECIALES'] + X['ESP_EXTRA']:
        e = dict(e); e.setdefault('saludo', X['SALUDOS_EXISTENTES'].get(e['id'], '')); e.setdefault('luz', X['LUCES_EXISTENTES'].get(e['id'], 0))
        esp.append({k: v for k, v in e.items() if isinstance(v, (str, int, float))})
    cont = {'presentador': D['PRESENTADOR'], 'personajes': {k: {'nombre': v['nombre'], 'rol': v['rol'], 'aspecto': {a: b for a, b in v.get('aspecto', {}).items() if b is not None}} for k, v in D['PERSONAJES'].items()},
            'especiales': esp, 'frases': D['FRASES'], 'frases2': D['FRASES2'], 'extras': D['EXTRAS'], 'promos': D['PROMOS'], 'promosPres': D['PROMOS_LEO'],
            'anuncios': D['ANUNCIOS'], 'anunciosST': ST['anuncios'], 'cortinillas': ST['cortinillas'], 'cadena': ST['cadena'], 'monologos': D['MONOLOGOS'], 'historia': D['HISTORIA'],
            'regidora': X['REGIDORA'], 'eras': D['ERAS'], 'pool': pool,
            'escenasCfg': {'roles': js(m.group(1)), 'nombres': js(m.group(2)), 'cam': js(m.group(3)), 'camDef': m.group(4)}}
    if 'CAZADORES' in D: cont['cazadores'] = D['CAZADORES']; cont['companeros'] = D['COMPAÑEROS']; cont['famosos'] = D['FAMOSOS']; cont['ongs'] = D['ONGS']
    src = f'-- Contenido de la app {g} 1.2.1 (escenas, promos, publicidad, historia, especiales). Generado desde el código fuente.\nreturn ' + lua(cont) + '\n'
    out = f'/workspace/port/{g[:2]}_contenido.lua'; open(out, 'w', encoding='utf-8').write(src); print(out, len(src), cont['escenasCfg'])
