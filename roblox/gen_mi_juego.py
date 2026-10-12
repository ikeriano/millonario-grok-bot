import sys
sys.path.insert(0, '/workspace/rbx')
from comun import *
from camaras import camaras
import json as _j
sys.path.insert(0, '/workspace/port'); from jsonlua import lua as _jl
_P = _j.load(open('/workspace/rbx/crawl/mi_pantallas.json'))
for _k, _v in _P.items():
    for _it in _v['items']:
        if _it.get('k') == 'txt' and _it.get('t') == 'v1.2': _it['t'] = 'v1.2.1'
_VOCES = '-- VOCES: pega aquí el ID de cada audio subido (clave = FNV-1a del texto, como en la app; ver LEEME-Roblox.txt).\n-- Sin ID, la frase sale en el bocadillo y en los subtítulos.\nreturn {\n}\n'
EXTRA_RS = [script('ModuleScript', n, lua(n + '.lua')) for n in ('Luces', 'CamLibre', 'Personajes', 'Escena', 'MenuApp', 'EscenasGen', 'Show')] + [
    script('ModuleScript', 'Contenido', open('/workspace/port/mi_contenido.lua', encoding='utf-8').read()),
    script('ModuleScript', 'Pantallas', '-- Pantallas del menú rastreadas de la app ¿Quién quiere ser millonario? 1.2.1 (textos, orden y estilos)\nreturn ' + _jl(_P) + '\n'),
    script('ModuleScript', 'Voces', _VOCES)]
niv = {}; n = 1
for l in open('/workspace/millonario/codigo/src/preguntas.txt', encoding='utf-8'):
    l = l.strip()
    if l.startswith('#') and l[1:].isdigit(): n = int(l[1:]); continue
    if not l or l.startswith('#'): continue
    c = l.split('|')
    if len(c) == 5: niv.setdefault(n, []).append(c)
pre = '-- Preguntas de ¿Quién quiere ser millonario? por nivel (1 fácil … 5 muy difícil): { pregunta, correcta, incorrecta, incorrecta, incorrecta }\nreturn {\n' + ''.join(
    '\t[%d] = {\n%s\t},\n' % (k, ''.join('\t\t{ %s },\n' % ', '.join(lua_str(x) for x in c) for c in v)) for k, v in sorted(niv.items())) + '}\n'
plato = importa('/workspace/millonario/Plato-Millonario.rbxlx').replace('<string name="Name">LogoDecal</string>', '<string name="Name">Logo</string>')
img = [('VideoCabecera', 'rbxassetid://0', 'Vídeo propio de la cabecera (se reproduce en un VideoFrame del plató)'), ('LogoMenu', 'rbxassetid://0', 'Logo grande del menú principal'), ('Logo', 'rbxassetid://0', 'Logo redondo del fondo del plató')]
son = [('MusicaMenu', 'rbxassetid://0', 'Música del menú (en bucle)'), ('MusicaPregunta', 'rbxassetid://0', 'Música de fondo de las preguntas 1-9 (en bucle)'), ('MusicaTension', 'rbxassetid://0', 'Música de fondo de las preguntas 10-15 (en bucle)'),
       ('Cabecera', 'rbxassetid://0', 'Sintonía de entrada'), ('Redoble', 'rbxassetid://0', 'Suspense antes de revelar la respuesta'), ('Acierto', 'rbxassetid://0', 'Respuesta correcta'), ('Fallo', 'rbxassetid://0', 'Respuesta incorrecta'),
       ('Comodin', 'rbxassetid://0', 'Usar un comodín'), ('Fanfarria', 'rbxassetid://0', 'Plantarse o ganar el millón'), ('Tecla', 'rbxassetid://0', 'Pulsar un botón')]
cams = camaras([((0, 30, 70), (0, 6, 0)), ((-22, 10, 0), (9, 7, 0)), ((22, 10, 0), (-9, 7, 0)), ((0, 60, 20), (0, 0, 0)), ((0, 16, -40), (0, 8, 0))])
montar('/workspace/millonario/Millonario-Juego.rbxlx', [plato, cams, spawn((0, 1, 40))], imagenes(img), sonidos(son), son, pre, lua('MI_Cliente.lua'), lua('MI_Servidor.lua'), ['Colocar', 'Levantar', 'Pantalla', 'Luces'], 0x0A1030, extra_rs=EXTRA_RS)
print({k: len(v) for k, v in niv.items()})
