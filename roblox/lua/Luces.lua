-- Luces: coreografía de cabezas móviles como el programa (arco detrás de la grada alta + aro sobre el centro).
-- Modos: "energia" (haces blancos estrechos, barridos rápidos cruzados), "charla" (quietos, baño azul/morado),
-- "fiesta" (cabecera: haces anchos neón que cruzan colores + haces blancos desde el suelo), "presentacion" (oscuro, un haz morado), "manual".
local RunService = game:GetService("RunService")
local L = { modo = "charla", hasta = 0, heads = {}, manual = { pan = 0, tilt = 0.6, vel = 1, color = Color3.new(1, 1, 1) } }
local NEON = { Color3.fromRGB(34, 255, 68), Color3.fromRGB(34, 230, 255), Color3.fromRGB(255, 34, 212), Color3.fromRGB(255, 138, 26), Color3.fromRGB(255, 238, 34) }
local carpeta
local function cabeza(pos, i, aro)
	local p = Instance.new("Part"); p.Name = "CabezaMovil" .. i; p.Size = Vector3.new(2, 2, 2); p.Anchored = true; p.CanCollide = false; p.Material = Enum.Material.Metal; p.Color = Color3.fromRGB(20, 20, 20); p.CFrame = CFrame.new(pos); p.Parent = carpeta
	local a0 = Instance.new("Attachment", p); local fin = Instance.new("Part"); fin.Name = "Destino"; fin.Size = Vector3.new(.2, .2, .2); fin.Transparency = 1; fin.Anchored = true; fin.CanCollide = false; fin.Parent = carpeta
	local a1 = Instance.new("Attachment", fin)
	local b = Instance.new("Beam"); b.Attachment0 = a0; b.Attachment1 = a1; b.FaceCamera = true; b.LightEmission = 1; b.LightInfluence = 0; b.Segments = 1; b.Parent = p
	b.Transparency = NumberSequence.new({ NumberSequenceKeypoint.new(0, 0.35), NumberSequenceKeypoint.new(1, 1) })
	local s = Instance.new("SpotLight", p); s.Range = 60; s.Angle = 25; s.Brightness = 2; s.Face = Enum.NormalId.Bottom
	table.insert(L.heads, { p = p, fin = fin, b = b, s = s, i = i, aro = aro, pan = 0, tilt = 0.5, pan0 = 0, tilt0 = 0.5, panT = 0, tiltT = 0.5, t0 = -1, dur = 1.5, dir = (i % 2 == 0) and 1 or -1 })
end
function L.crear(centro, radioArco, alturaArco, radioAro, alturaAro)
	carpeta = Instance.new("Folder"); carpeta.Name = "CoreografiaLuces"; carpeta.Parent = workspace
	for i = 0, 15 do local a = math.pi * i / 15; cabeza(centro + Vector3.new(math.cos(a) * radioArco, alturaArco, -math.sin(a) * radioArco), i, "semi") end
	for i = 0, 9 do local a = i / 10 * math.pi * 2; cabeza(centro + Vector3.new(math.cos(a) * radioAro, alturaAro, math.sin(a) * radioAro), i, "centro") end
	L.suelo = {}
	for i = 0, 5 do local a = math.pi * (0.15 + i * 0.14); local p = Instance.new("Part"); p.Name = "HazSuelo"; p.Anchored = true; p.CanCollide = false; p.Size = Vector3.new(2.4, 60, 2.4); p.Shape = Enum.PartType.Cylinder
		p.CFrame = CFrame.new(centro + Vector3.new(math.cos(a) * 36, 30, -math.sin(a) * 36)) * CFrame.Angles(0, 0, math.pi / 2); p.Material = Enum.Material.Neon; p.Color = Color3.new(1, 1, 1); p.Transparency = 1; p.Parent = carpeta; table.insert(L.suelo, p) end
	L.centro = centro; L.modoSet("charla")
	RunService.RenderStepped:Connect(function(dt) L.paso(dt, os.clock()) end)
end
function L.modoSet(m)
	L.modo = m
	for _, h in ipairs(L.heads) do
		local e = m == "energia"; local vis = not (m == "fiesta" and h.aro == "semi" and h.i % 2 == 1) and not (m == "presentacion" and not (h.aro == "centro" and h.i == 3))
		local ancho = (m == "energia" or m == "manual") and 0.8 or 3.2
		h.b.Width0 = ancho; h.b.Width1 = ancho * 5; h.b.Enabled = vis; h.s.Enabled = vis; h.s.Angle = e and 12 or 45; h.t0 = -1
		local c = e and Color3.new(1, 1, 1) or (m == "presentacion" and Color3.fromRGB(154, 42, 255)) or ((h.i % 2 == 1) and Color3.fromRGB(58, 42, 255) or Color3.fromRGB(138, 42, 255))
		h.b.Color = ColorSequence.new(c); h.s.Color = c
	end
	for _, p in ipairs(L.suelo or {}) do p.Transparency = m == "fiesta" and 0.85 or 1 end
end
function L.energia(seg) L.hasta = math.max(L.hasta, os.clock() + seg); if L.modo ~= "energia" then L.modoSet("energia") end end
function L.paso(dt, t)
	if L.modo == "energia" and os.clock() > L.hasta then L.modoSet("charla") end
	local M = L.modo
	for _, h in ipairs(L.heads) do
		if M == "energia" then
			if h.t0 < 0 or t - h.t0 > h.dur then h.pan0 = h.pan; h.tilt0 = h.tilt; h.dur = 1 + math.random(); h.dir = -h.dir; h.panT = h.pan + h.dir * (math.pi / 2 + math.random() * math.pi / 2); h.tiltT = 0.25 + math.random() * 0.9; h.t0 = t end
			local k = math.min(1, (t - h.t0) / h.dur); local s = k * k * (3 - 2 * k); h.pan = h.pan0 + (h.panT - h.pan0) * s; h.tilt = h.tilt0 + (h.tiltT - h.tilt0) * s
		elseif M == "fiesta" or M == "presentacion" then
			local v = (0.35 + (h.i % 4) * 0.12) * (M == "presentacion" and 0.6 or 1); local f = h.i * 1.7
			h.pan = math.sin(t * v + f) * 1.4; h.tilt = 0.35 + 0.4 * (1 + math.cos(t * v * 0.8 + f))
			if M == "fiesta" then local c = (t * 0.25 + h.i * 0.37) % #NEON; local a = math.floor(c); local col = NEON[a + 1]:Lerp(NEON[(a + 1) % #NEON + 1], c - a); h.b.Color = ColorSequence.new(col); h.s.Color = col end
		elseif M == "manual" then
			h.pan = L.manual.pan + ((h.i % 2 == 1) and 1 or -1) * math.sin(t * L.manual.vel + h.i) * 0.6; h.tilt = L.manual.tilt; h.b.Color = ColorSequence.new(L.manual.color); h.s.Color = L.manual.color
		end
		-- dirección: hacia abajo inclinada «tilt» y girada «pan»
		local dir = (CFrame.Angles(0, h.pan, 0) * CFrame.Angles(-(math.pi / 2) + h.tilt * (h.aro == "semi" and -1 or 1), 0, 0)).LookVector
		h.p.CFrame = CFrame.lookAt(h.p.Position, h.p.Position + dir) * CFrame.Angles(-math.pi / 2, 0, 0)
		h.fin.Position = h.p.Position + dir * 120
	end
end
return L
