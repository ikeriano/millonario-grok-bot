# Genera Plato-Millonario.rbxlx (formato XML de lugar de Roblox, version 4) con el plató del juego
import math, itertools
from xml.sax.saxutils import escape
ref = itertools.count()
def R(): return 'RBX%08X' % next(ref)
def cf(x, y, z, ry=0.0, rx=0.0, rz=0.0):
    # rotación Y*X*Z
    cy, sy, cx, sx, cz, sz = math.cos(ry), math.sin(ry), math.cos(rx), math.sin(rx), math.cos(rz), math.sin(rz)
    Ry = [[cy,0,sy],[0,1,0],[-sy,0,cy]]; Rx = [[1,0,0],[0,cx,-sx],[0,sx,cx]]; Rz = [[cz,-sz,0],[sz,cz,0],[0,0,1]]
    mul = lambda A, B: [[sum(A[i][k]*B[k][j] for k in range(3)) for j in range(3)] for i in range(3)]
    M = mul(mul(Ry, Rx), Rz)
    v = [x, y, z] + [M[i][j] for i in range(3) for j in range(3)]
    n = ['X','Y','Z','R00','R01','R02','R10','R11','R12','R20','R21','R22']
    return ''.join('<%s>%.4f</%s>' % (a, b, a) for a, b in zip(n, v))
def col(h): return str(0xFF000000 | h)
MAT = {'plastic': 256, 'smooth': 272, 'neon': 288, 'metal': 1088, 'glass': 1568, 'fabric': 1312}
def item(cls, props, children=()):
    return '<Item class="%s" referent="%s"><Properties>%s</Properties>%s</Item>' % (cls, R(), ''.join(props), ''.join(children))
S = lambda n, v: '<string name="%s">%s</string>' % (n, escape(v))
B = lambda n, v: '<bool name="%s">%s</bool>' % (n, 'true' if v else 'false')
F = lambda n, v: '<float name="%s">%g</float>' % (n, v)
T = lambda n, v: '<token name="%s">%d</token>' % (n, v)
C3 = lambda n, h: '<Color3 name="%s"><R>%.4f</R><G>%.4f</G><B>%.4f</B></Color3>' % (n, (h >> 16 & 255) / 255, (h >> 8 & 255) / 255, (h & 255) / 255)
def part(name, pos, size, color, mat='smooth', shape=1, rot=(0, 0, 0), children=(), transp=0.0, cls='Part'):
    p = [S('Name', name), B('Anchored', True), '<CoordinateFrame name="CFrame">%s</CoordinateFrame>' % cf(*pos, *rot),
         '<Vector3 name="size"><X>%.3f</X><Y>%.3f</Y><Z>%.3f</Z></Vector3>' % size, '<Color3uint8 name="Color3uint8">%s</Color3uint8>' % col(color),
         T('Material', MAT[mat]), F('Transparency', transp), B('CastShadow', mat != 'neon'), B('CanCollide', transp < .5)]
    if cls == 'Part': p.append(T('shape', shape))
    return item(cls, p, children)
def model(name, children): return item('Model', [S('Name', name)], children)
def spot(bright, rng, ang, color=0x6aa8ff, face=4): return item('SpotLight', [S('Name', 'Haz'), F('Brightness', bright), F('Range', rng), F('Angle', ang), C3('Color', color), T('Face', face), B('Shadows', False), B('Enabled', True)])
def gui(face, lines, bg=0x2a0c5a, fg=0xFFD24A):
    labels = []
    n = len(lines)
    for i, (txt, scale) in enumerate(lines):
        labels.append(item('TextLabel', [S('Name', 'Texto%d' % (i + 1)), S('Text', txt), B('TextScaled', True), C3('TextColor3', fg), F('BackgroundTransparency', 1), T('Font', 4),
            '<UDim2 name="Size"><XS>%.3f</XS><XO>0</XO><YS>%.3f</YS><YO>0</YO></UDim2>' % (0.9, scale), '<UDim2 name="Position"><XS>0.05</XS><XO>0</XO><YS>%.3f</YS><YO>0</YO></UDim2>' % (sum(s for _, s in lines[:i]) + (1 - sum(s for _, s in lines)) / 2)]))
    return item('SurfaceGui', [S('Name', 'Rotulo'), T('Face', face), F('PixelsPerStud', 50), T('SizingMode', 1), B('LightInfluence', 0) if False else F('LightInfluence', 0)], labels)
SC = 4.0  # 1 m del juego = 4 studs
AZUL, AZULC, ORO, NEGRO, NAVY = 0x2F7DFF, 0x8FD0FF, 0xE0A83A, 0x0A0D18, 0x050A20
# ---- Suelo: disco central dorado con espiral/red ----
suelo = [part('DiscoCentral', (0, 0.1, 0), (0.4, 7 * 2 * SC, 7 * 2 * SC), 0x101A4A, 'glass', 2, rot=(0, 0, math.pi / 2)),
         part('SueloExterior', (0, -0.1, 0), (0.4, 60 * SC, 60 * SC), NAVY, 'smooth', 2, rot=(0, 0, math.pi / 2))]
red = []
for r in [1.0, 2.0, 3.3, 4.6, 5.6, 7.0]:
    n = int(12 + r * 6)
    for k in range(n):
        a = 2 * math.pi * k / n; L = 2 * math.pi * r * SC / n * 1.05
        red.append(part('Anillo', (math.sin(a) * r * SC, 0.32, math.cos(a) * r * SC), (L, 0.05, 0.35 if r < 7 else 0.8), ORO, 'metal', rot=(a + math.pi / 2, 0, 0)))
for s in (-1, 1):
    for k in range(16):
        prev = None
        for t in [i / 10 for i in range(11)]:
            a = 2 * math.pi * k / 16 + s * t * 2.6; r = (0.9 + t * 4.1) * SC; pnt = (math.sin(a) * r, math.cos(a) * r)
            if prev:
                dx, dz = pnt[0] - prev[0], pnt[1] - prev[1]; L = math.hypot(dx, dz)
                red.append(part('Espiral', ((pnt[0] + prev[0]) / 2, 0.33, (pnt[1] + prev[1]) / 2), (L, 0.05, 0.3), ORO, 'metal', rot=(math.atan2(-dz, dx), 0, 0)))
            prev = pnt
suelo.append(model('RedDorada', red))
suelo.append(part('ArcoAzul', (0, 0.36, 0), (0.1, 7.15 * 2 * SC, 7.15 * 2 * SC), AZUL, 'neon', 2, rot=(0, 0, math.pi / 2), transp=0.6))
# ---- Atril: consola central en V con dos monitores ----
atril = [part('Tarima', (0, 0.5, 0), (1, 3.4 * SC, 3.4 * SC), NEGRO, 'metal', 2, rot=(0, 0, math.pi / 2)), part('TarimaLuz', (0, 1.02, 0), (0.1, 3.5 * SC, 3.5 * SC), AZULC, 'neon', 2, rot=(0, 0, math.pi / 2), transp=0.3), part('Pie', (0, 1.4, 0), (1, 3, 3), NEGRO, 'metal', 2, rot=(0, 0, math.pi / 2))]
for s in (-1, 1):
    pts = [(0, 1.0), (s * .25, 1.5), (s * .7, 2.05), (s * 1.05, 2.25)]
    for (x0, y0), (x1, y1) in zip(pts, pts[1:]):
        x0, y0, x1, y1 = x0 * SC * 1.25, y0 * SC, x1 * SC * 1.25, y1 * SC; L = math.hypot(x1 - x0, y1 - y0)
        atril.append(part('Brazo', ((x0 + x1) / 2, (y0 + y1) / 2, 0), (L + 0.3, 1.0, 1.0), NEGRO, 'metal', rot=(0, 0, math.atan2(y1 - y0, x1 - x0))))
        atril.append(part('FiloAzul', ((x0 + x1) / 2, (y0 + y1) / 2, 0.55), (L + 0.3, 0.2, 0.15), AZULC, 'neon', rot=(0, 0, math.atan2(y1 - y0, x1 - x0))))
pantallas = []
for s, nom in ((-1, 'PantallaConcursante'), (1, 'PantallaPresentador')):
    pantallas.append(part(nom, (s * 1.05 * SC * 1.25, 2.4 * SC, 0), (3.4, 0.25, 2.4), 0x1A4AFF, 'neon', rot=(0, 0, s * 0.25),
        children=[gui(1, [('¿Quién quiere ser millonario?', .3), ('A: …   B: …   C: …   D: …', .3)], fg=0xFFFFFF)]))
pantallas.append(part('VideowallFondo', (0, 8 * SC / 2 + 4, -15.8 * SC), (40, 22, 0.5), 0x040822, 'smooth', children=[gui(5, [('A:  ·  B:  ·  C:  ·  D:', .2)], fg=0xFFB21C)]))
# ---- Sillas: dos sillas altas enfrentadas ----
sillas = []
for s, nom in ((-1, 'SillaConcursante'), (1, 'SillaPresentador')):
    x = s * 2.3 * SC; ry = -s * math.pi / 2
    sillas.append(model(nom, [part('Base', (x, 1.1, 0), (0.2, 3, 3), NEGRO, 'metal', 2, rot=(0, 0, math.pi / 2)), part('Poste', (x, 3, 0), (4, 0.4, 0.4), NEGRO, 'metal', 2, rot=(0, 0, math.pi / 2)),
        part('AroLuz', (x, 2.4, 0), (0.1, 2, 2), AZULC, 'neon', 2, rot=(0, 0, math.pi / 2)), part('Asiento', (x, 5.1, 0), (0.4, 2.4, 2.4), 0x15151F, 'fabric', 2, rot=(0, 0, math.pi / 2)),
        part('Respaldo', (x - s * 1.1, 6.4, 0), (0.25, 2.2, 2.0), 0x15151F, 'fabric', rot=(ry, 0, 0)), item('Seat', [S('Name', 'Asiento sentable'), B('Anchored', True), '<CoordinateFrame name="CFrame">%s</CoordinateFrame>' % cf(x, 5.4, 0, ry), '<Vector3 name="size"><X>2</X><Y>0.3</Y><Z>2</Z></Vector3>', F('Transparency', 1)])]))
# ---- Gradas a ambos lados ----
gradas = []
for lado, nom in ((1, 'GradaDerecha'), (-1, 'GradaIzquierda')):
    filas = []
    for f in range(6):
        r = (12 + f * 1.1) * SC; h = (0.4 + f * 0.55) * SC; a0 = math.pi * (0.2 if lado > 0 else 1.2); n = 14; segm = []
        for k in range(n):
            a = a0 + (k + .5) / n * math.pi * .6; L = 2 * math.pi * r * .3 / n * 1.04
            segm.append(part('Escalon', (math.sin(a) * r, h / 2, math.cos(a) * r), (L, h, 1.1 * SC), 0x0B1230, 'metal', rot=(a + math.pi / 2, 0, 0)))
            segm.append(part('TiraNeon', (math.sin(a) * (r - 2.2), h + 0.05, math.cos(a) * (r - 2.2)), (L, 0.1, 0.15), AZUL, 'neon', rot=(a + math.pi / 2, 0, 0)))
            segm.append(part('Asiento', (math.sin(a) * r, h + 0.6, math.cos(a) * r), (1.8, 1.2, 1.6), 0x1A2A6A, 'fabric', rot=(a + math.pi / 2, 0, 0)))
        filas.append(model('Fila%d' % (f + 1), segm))
    gradas.append(model(nom, filas))
# ---- Logo redondo morado y dorado al fondo ----
LZ = -15.5 * SC; LY = 4.2 * SC
logo = [part('DiscoMorado', (0, LY, LZ), (0.6, 5.2 * SC, 5.2 * SC), 0x3B1478, 'smooth', 2, rot=(math.pi / 2, 0, math.pi / 2)),
        part('Cartel', (0, LY, LZ + 0.6), (5.2 * SC * .9, 3.2 * SC * .9, 0.2), 0x3B1478, 'smooth', transp=1.0,
             children=[gui(5, [('QUIÉN QUIERE SER', .25), ('MILLONARIO', .4), ('★ ★ ★', .15)], fg=0xF2C040),
                       item('Decal', [S('Name', 'LogoDecal'), '<Content name="Texture"><url>rbxasset://textures/face.png</url></Content>', T('Face', 5), F('Transparency', 1)])])]
for k in range(48):
    a = 2 * math.pi * k / 48; r = 2.75 * SC
    logo.append(part('AroDorado', (math.cos(a) * r, LY + math.sin(a) * r, LZ + 0.3), (2 * math.pi * r / 48 * 1.1, 0.8, 0.8), ORO, 'metal', rot=(0, 0, a + math.pi / 2)))
    if k % 2 == 0: logo.append(part('ArcoNeon', (math.cos(a) * (r + 2), LY + math.sin(a) * (r + 2), LZ + 0.1), (2 * math.pi * (r + 2) / 24, 0.3, 0.3), AZUL, 'neon', rot=(0, 0, a + math.pi / 2)))
# ---- Luces: columnas neón, anillo del techo y haces (SpotLights) ----
luces = []
for i in range(-6, 7):
    if i == 0: continue
    a = math.pi + i * .055
    luces.append(part('ColumnaNeon', (math.sin(a) * 16.5 * SC, 4.5 * SC, math.cos(a) * 16.5 * SC), (0.5, 9 * SC, 0.5), AZUL if i % 2 else AZULC, 'neon'))
for i in range(24):
    a = 2 * math.pi * i / 24
    luces.append(part('TiraSuelo', (math.sin(a) * 9.8 * SC, 0.15, math.cos(a) * 9.8 * SC), (0.25, 0.1, 5 * SC), AZUL, 'neon', rot=(a, 0, 0)))
    luces.append(part('AnilloTecho', (math.sin(a) * 8 * SC, 10 * SC, math.cos(a) * 8 * SC), (2 * math.pi * 8 * SC / 24, 0.5, 0.5), AZUL, 'neon', rot=(a + math.pi / 2, 0, 0)))
haces = []
for i in range(14):
    a = 2 * math.pi * i / 14
    haces.append(part('Foco%d' % (i + 1), (math.sin(a) * 8 * SC, 10 * SC - 1, math.cos(a) * 8 * SC), (1.5, 1, 1.5), 0x111111, 'metal', rot=(0, 0.35 * math.sin(a * 3), 0.35 * math.cos(a * 2)), children=[spot(6, 60, 35)]))
luces.append(model('HacesDeLuz', haces))
luces.append(part('FocoCentral', (0, 12 * SC, 4 * SC), (2, 1, 2), 0x111111, 'metal', children=[spot(4, 80, 45, 0xA8C8FF)]))
plato = model('PlatoMillonario', [model('Suelo', suelo), model('Atril', atril), model('Pantallas', pantallas), model('Sillas', sillas), model('Gradas', gradas), model('Logo', logo), model('Luces', luces)])
spawn = item('SpawnLocation', [S('Name', 'Entrada'), B('Anchored', True), '<CoordinateFrame name="CFrame">%s</CoordinateFrame>' % cf(0, 0.6, 12 * SC - 10), '<Vector3 name="size"><X>6</X><Y>1</Y><Z>6</Z></Vector3>', '<Color3uint8 name="Color3uint8">%s</Color3uint8>' % col(NAVY), F('Transparency', 0.3), B('Neutral', True)])
ws = item('Workspace', [S('Name', 'Workspace'), F('Gravity', 196.2)], [plato, spawn])
lighting = item('Lighting', [S('Name', 'Lighting'), C3('Ambient', 0x0A1030), C3('OutdoorAmbient', 0x050818), F('Brightness', 0.2), F('ClockTime', 0), F('ExposureCompensation', 0.3), C3('FogColor', 0x01030E), F('FogEnd', 260), F('FogStart', 120), B('GlobalShadows', True), T('Technology', 3)],
    [item('BloomEffect', [S('Name', 'Bloom'), F('Intensity', 1), F('Size', 30), F('Threshold', 0.8), B('Enabled', True)]), item('ColorCorrectionEffect', [S('Name', 'TonoAzul'), C3('TintColor', 0xC8D8FF), F('Contrast', 0.15), B('Enabled', True)])])
xml = '<roblox xmlns:xmime="http://www.w3.org/2005/05/xmlmime" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://www.roblox.com/roblox.xsd" version="4">' + \
      '<Meta name="ExplicitAutoJoints">true</Meta>' + ws + lighting + item('SoundService', [S('Name', 'SoundService')]) + item('StarterPlayer', [S('Name', 'StarterPlayer')]) + '</roblox>'
open('/workspace/millonario/Plato-Millonario.rbxlx', 'w', encoding='utf-8').write(xml)
print('items:', xml.count('<Item '))
