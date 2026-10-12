-- Show: todo lo que rodea al juego en ¿Quién quiere ser millonario? y El Cazador, igual que en la app:
-- menú rastreado de la app (MenuApp + Pantallas), escenas reales con personajes (Cámara oculta, Tomas falsas,
-- Fuera de cámaras: el mismo generador de 9.600 escenas), promos, promos del presentador, publicidad de la cadena,
-- monólogos, historia, especiales, casting, edición del título y cabecera con vídeo propio (VideoFrame).
local RS = game:GetService("ReplicatedStorage")
local Players = game:GetService("Players")
local TweenService = game:GetService("TweenService")
local Personajes = require(RS:WaitForChild("Personajes"))
local Escena = require(RS:WaitForChild("Escena"))
local MenuApp = require(RS:WaitForChild("MenuApp"))
local EscenasGen = require(RS:WaitForChild("EscenasGen"))
local V3 = Vector3.new
local S = {}

local function rgbN(n) n = tonumber(n) or 0xffffff; return Color3.fromRGB(math.floor(n / 65536) % 256, math.floor(n / 256) % 256, n % 256) end
local function rgbHex(h) h = tostring(h or "#ffffff"):gsub("#", ""); return Color3.fromRGB(tonumber(h:sub(1, 2), 16) or 255, tonumber(h:sub(3, 4), 16) or 255, tonumber(h:sub(5, 6), 16) or 255) end
local function quitaEmoji(t) return (tostring(t):gsub("^[^%wÁÉÍÓÚÑ¡¿«]+", "")) end
local function azar(l) if type(l) ~= "table" then return l end; return l[math.random(#l)] end
S.azar = azar

-- cfg: { C, Pantallas, gui, ui, UI, Luces, CamLibre, Imagenes, btnMenu, suena, musica, presId, centro, titulo0, jugar(t, ctx, S) -> true si lo ha gestionado, alSalir() }
function S.iniciar(cfg)
	local C, ui, UI, gui = cfg.C, cfg.ui, cfg.UI, cfg.gui
	local centro = cfg.centro or V3(0, 0, 0)
	local OP = { especial = "normal", titulo = nil, casting = nil, regidora = true, apertura = true, publicidad = true, video = false, cabecera = "Cabecera 3D", musica = true, efectos = true, subtitulos = true }
	S.OP, S.C, S.cfg = OP, C, cfg
	local suena = function(n) if OP.efectos then cfg.suena(n) end end
	local gen = EscenasGen.nuevo(C.pool, C.escenasCfg)
	S.gen = gen

	-- ---------- personajes (se crean para cada escena y se retiran después) ----------
	local PER = {}
	local function def(id)
		local p = C.personajes[id]; if not p then return nil end
		local a = p.aspecto or {}
		return { id = id, nombre = p.nombre, traje = a.traje, camisa = a.camisa, corbata = a.corbata, pelo = a.pelo, piel = a.piel }
	end
	local function frente() return centro + V3(0, 0, 60) end
	local function sacar(ids)
		local n = #ids; local k = 0
		for _, id in ipairs(ids) do
			if not PER[id] then
				local d = def(id) or (C.cazadoresPorId and C.cazadoresPorId[id]) or { id = id, nombre = id }
				local x = (k - (n - 1) / 2) * 5.5
				d.pos = centro + V3(x, 0, (cfg.filaZ or 14) - math.abs(x) * 0.25)
				PER[id] = Personajes.nuevo(d); PER[id]:mirarA(frente())
			end
			k += 1
		end
	end
	local function retirar() for id, p in pairs(PER) do p:destruir(); PER[id] = nil end end
	S.sacar, S.retirar, S.PER = sacar, retirar, PER

	local function planoDe(p, dist, alto)
		local cab = p.pos + V3(0, 4.4, 0); local f = V3(-math.sin(p.yaw), 0, -math.cos(p.yaw))
		return CFrame.lookAt(cab + f * (dist or 9) + V3(0, alto or 0.6, 0) + V3(math.cos(p.yaw), 0, -math.sin(p.yaw)) * 2, cab)
	end
	local function camara(clave, quien)
		clave = tostring(clave or "wide")
		if clave ~= "wide" and PER[quien] then return planoDe(PER[quien], 9, 0.6) end
		local cw = cfg.camWide or V3(0, 9, 42); return CFrame.lookAt(centro + cw, centro + V3(0, 4, (cfg.filaZ or 14) - 2))
	end
	local esc
	local function efecto(e)
		local k, arg = tostring(e):match("^([^:]+):?(.*)$")
		if k == "risas" then suena("Risas") elseif k == "ooh" then suena("Ooh") elseif k == "aplauso" then suena("Aplausos")
		elseif k == "inocente" then suena("Inocente"); task.spawn(function() esc:rotulo("¡INOCENTE, INOCENTE!", 2) end)
		elseif k == "claqueta" then suena("Claqueta"); task.spawn(function() esc:rotulo("TOMA " .. (arg ~= "" and arg or "1"), 1.2, { Color3.new(1, 1, 1), Color3.new(0, 0, 0) }) end)
		elseif k == "corten" then suena("Corten"); task.spawn(function() esc:rotulo("¡CORTEN!", 1.4, { Color3.fromRGB(255, 60, 60), Color3.new(0, 0, 0) }) end)
		elseif k == "tomafalsa" then task.spawn(function() esc:rotulo("TOMA FALSA", 1.2, { Color3.fromRGB(255, 210, 58), Color3.new(0, 0, 0) }) end)
		elseif k == "silencio" then task.spawn(function() esc:rotulo("¡SILENCIO!", 1.2) end) end
	end
	local nombres = {}; for id, p in pairs(C.personajes) do nombres[id] = p.nombre end
	nombres.locutor = C.cadena or "Show Time TV"
	esc = Escena.nuevo({ gui = gui, personajes = PER, nombres = nombres, camara = camara, efecto = efecto, claveSimple = true })
	S.esc = esc

	-- ---------- título editable y especiales ----------
	local function esp() for _, e in ipairs(C.especiales) do if e.id == OP.especial then return e end end; return C.especiales[1] end
	local function titulo() return OP.titulo or cfg.titulo0 end
	S.esp, S.titulo = esp, titulo
	local function pintaTitulo()
		local t = titulo(); local e = esp()
		for _, d in ipairs(workspace:GetDescendants()) do if d:IsA("TextLabel") and d.Name == "TituloPrograma" then d.Text = t end end
		local et = ui.raiz:FindFirstChild("Etiqueta", true); if et then et.Text = e.id == "normal" and "EL JUEGO · 3D" or ((e.emoji or "") .. " " .. string.upper(e.banner or e.name or "")) end
		local logo = ui.raiz:FindFirstChild("Logo", true)
		if logo and OP.titulo then
			local lineas = {}; local corte = t:find(" [^ ]*$")
			if #t > 12 and corte then lineas = { t:sub(1, corte - 1), t:sub(corte + 1) } else lineas = { t, "" } end
			local n = 0
			for _, c in ipairs(logo:GetChildren()) do if c:IsA("TextLabel") and c.Name ~= "Etiqueta" then n += 1; c.Text = lineas[n] or "" end end
		elseif logo and cfg.logoOriginal then
			local n = 0
			for _, c in ipairs(logo:GetChildren()) do if c:IsA("TextLabel") and c.Name ~= "Etiqueta" then n += 1; c.Text = cfg.logoOriginal[n] or c.Text end end
		end
		if e.luz and e.luz ~= 0 and cfg.Luces and cfg.Luces.color then cfg.Luces.color(rgbN(e.luz)) end
	end
	S.pintaTitulo = pintaTitulo

	-- ---------- cabecera (cámara + rótulo; vídeo propio en un VideoFrame del plató) ----------
	local pantallaVideo
	local function videoFrame()
		if pantallaVideo then return pantallaVideo end
		local p = Instance.new("Part"); p.Name = "PantallaCabecera"; p.Anchored = true; p.CanCollide = false; p.Size = V3(32, 18, 0.4); p.Material = Enum.Material.SmoothPlastic; p.Color = Color3.new(0, 0, 0)
		p.CFrame = CFrame.new(centro + V3(0, 16, -18)); p.Transparency = 1; p.Parent = workspace
		local sg = Instance.new("SurfaceGui"); sg.Face = Enum.NormalId.Back; sg.CanvasSize = Vector2.new(1280, 720); sg.LightInfluence = 0; sg.Parent = p
		local vf = Instance.new("VideoFrame"); vf.Name = "VideoCabecera"; vf.Size = UDim2.fromScale(1, 1); vf.BackgroundColor3 = Color3.new(0, 0, 0); vf.Looped = false; vf.Parent = sg
		pantallaVideo = { part = p, vf = vf }; return pantallaVideo
	end
	function S.cabecera(conVideo)
		local e = esp(); cfg.musica(nil); suena("Cabecera")
		esc.saltar = false; esc.btnSaltar.Visible = true
		local video = cfg.Imagenes.VideoCabecera
		local hayVideo = (conVideo or OP.video or OP.cabecera:find("^Vídeo")) and video and video ~= "" and video ~= "rbxassetid://0"
		local pv
		if hayVideo then pv = videoFrame(); pv.part.Transparency = 0; pv.vf.Video = video; pv.vf.TimePosition = 0; pv.vf:Play()
		elseif conVideo then ui:aviso("Pega el ID de tu vídeo en Imagenes.VideoCabecera para verlo en el plató", 4) end
		local c = centro
		local pts = { CFrame.lookAt(c + V3(0, 70, 130), c + V3(0, 6, 0)), CFrame.lookAt(c + V3(-60, 26, 60), c + V3(0, 8, 0)), CFrame.lookAt(c + V3(-24, 12, 26), c + V3(0, 10, 0)),
			CFrame.lookAt(c + V3(40, 14, 24), c + V3(0, 8, 0)), CFrame.lookAt(c + V3(0, 18, 50), c + V3(0, hayVideo and 14 or 7, hayVideo and -18 or 0)) }
		if cfg.Luces then cfg.Luces.modoSet("fiesta") end
		task.spawn(function() task.wait(1); esc:rotulo(string.upper(titulo()), 3) end)
		esc:camaraRecorrido(pts, hayVideo and 12 or 9)
		if e.id ~= "normal" and not esc.saltar then esc:rotulo((e.emoji or "") .. " " .. string.upper(e.banner or e.name or ""), 2) end
		if pv then pv.vf:Pause(); pv.part.Transparency = 1 end
		if cfg.Luces then cfg.Luces.modoSet("normal") end
		esc.btnSaltar.Visible = false
	end
	function S.regidora(clave)
		if not OP.regidora then return end
		local l = C.regidora and C.regidora.lineas and C.regidora.lineas[clave]; if not l then return end
		sacar({ C.regidora.id or "pili" }); esc:linea(C.regidora.id or "pili", azar(l), "cerca", "habla", "")
	end
	-- apertura del programa completo: cabecera, regidora, saludo (del especial) y entrada del presentador
	function S.apertura()
		local e = esp()
		if OP.apertura then S.cabecera(false) end
		esc.saltar = false
		sacar({ cfg.presId, C.regidora and C.regidora.id or "pili" })
		S.regidora("aire")
		local saludo = (e.saludo and e.saludo ~= "") and e.saludo or azar(C.frases.saludo)
		esc:linea(cfg.presId, saludo, "cerca", "saluda", "aplauso")
		S.regidora("aplausos")
		retirar(); esc:liberarCamara()
	end
	function S.nombre() return OP.casting or Players.LocalPlayer.DisplayName end

	-- ---------- escenas ----------
	local function correrEscena(sk)
		ui:ocultar(); cfg.btnMenu.Visible = true; esc.subtitulos = OP.subtitulos
		local ids, vistos = {}, {}
		for _, p in ipairs(sk.pasos) do if not vistos[p[1]] and C.personajes[p[1]] then vistos[p[1]] = true; table.insert(ids, p[1]) end end
		sacar(ids)
		esc.saltar = false
		if sk.lugar then task.spawn(function() esc:rotulo("📍 " .. sk.lugar, 1.6, { Color3.new(1, 1, 1), Color3.fromRGB(10, 20, 80) }) end); task.wait(1.4) end
		local pasos = {}
		for _, p in ipairs(sk.pasos) do table.insert(pasos, { p[1], p[2], p[3] or "", p[4] or "", p[5] or "" }) end
		esc:correr(pasos, sk.titulo)
		retirar(); esc:liberarCamara()
	end
	S.correrEscena = correrEscena
	local function hablaLista(quien, lineas, titulo, gestos)
		ui:ocultar(); cfg.btnMenu.Visible = true; esc.saltar = false
		if C.personajes[quien] then sacar({ quien }) end
		local pasos = {}
		for i, l in ipairs(lineas) do table.insert(pasos, { quien, l, "cerca", gestos and gestos[(i - 1) % #gestos + 1] or "habla", "" }) end
		esc:correr(pasos, titulo)
		retirar(); esc:liberarCamara()
	end
	-- anuncio inventado de la cadena (tarjeta a pantalla completa con el producto y el locutor)
	local tarjeta = UI.nuevo("Frame", { Name = "Anuncio", Visible = false, BackgroundColor3 = Color3.new(1, 1, 1), Size = UDim2.fromScale(1, 1), ZIndex = 26 }, gui)
	local tMarca = UI.nuevo("TextLabel", { BackgroundTransparency = 1, Font = Enum.Font.FredokaOne, TextScaled = true, TextColor3 = Color3.new(1, 1, 1), Position = UDim2.fromScale(0.1, 0.12), Size = UDim2.fromScale(0.8, 0.22), ZIndex = 27 }, tarjeta)
	UI.nuevo("UIStroke", { Thickness = 4, Color = Color3.new(0, 0, 0) }, tMarca)
	local tProd = UI.nuevo("TextLabel", { BackgroundTransparency = 1, Font = Enum.Font.GothamBold, TextScaled = true, TextWrapped = true, TextColor3 = Color3.new(1, 1, 1), Position = UDim2.fromScale(0.12, 0.4), Size = UDim2.fromScale(0.76, 0.14), ZIndex = 27 }, tarjeta)
	local tLema = UI.nuevo("TextLabel", { BackgroundTransparency = 1, Font = Enum.Font.GothamBlack, TextScaled = true, TextWrapped = true, TextColor3 = Color3.fromRGB(255, 230, 80), Position = UDim2.fromScale(0.12, 0.6), Size = UDim2.fromScale(0.76, 0.1), ZIndex = 27 }, tarjeta)
	local tCad = UI.nuevo("TextLabel", { BackgroundTransparency = 1, Font = Enum.Font.GothamBlack, TextScaled = true, Text = string.upper(C.cadena or ""), TextColor3 = Color3.new(1, 1, 1), Position = UDim2.fromScale(0.02, 0.02), Size = UDim2.fromScale(0.2, 0.05), ZIndex = 27 }, tarjeta)
	local _ = tCad
	local function anuncioST(a)
		tarjeta.Visible = true
		local g = tarjeta:FindFirstChildOfClass("UIGradient"); if g then g:Destroy() end
		UI.degradado(tarjeta, rgbHex(a.color and a.color[1]), rgbHex(a.color and a.color[2]))
		tMarca.Text = a.marca or a.titulo or ""; tProd.Text = a.producto or ""; tLema.Text = a.lema or ""
		for _, l in ipairs(a.lineas or {}) do if esc.saltar then break end; esc:linea("locutor", l, nil, "", "") end
		tarjeta.Visible = false
	end
	local function promoCadena(a) -- promos de la cadena (texto del juego)
		tarjeta.Visible = true; local g = tarjeta:FindFirstChildOfClass("UIGradient"); if g then g:Destroy() end
		UI.degradado(tarjeta, Color3.fromRGB(40, 20, 110), Color3.fromRGB(8, 4, 40))
		tMarca.Text = a.titulo or ""; tProd.Text = "Promo de la cadena"; tLema.Text = ""
		for _, l in ipairs(a.lineas or {}) do if esc.saltar then break end; esc:linea("locutor", l, nil, "", "") end
		tarjeta.Visible = false
	end
	local function cortinilla(clave, seg) task.spawn(function() esc:rotulo(C.cortinillas[clave] or clave, seg or 1.6) end); task.wait(seg or 1.6) end
	function S.pausa(n)
		ui:ocultar(); esc.saltar = false; esc.btnSaltar.Visible = true; cfg.musica(nil); suena("Publicidad")
		tCad.Text = string.upper(C.cadena or "")
		cortinilla("publicidad"); cortinilla(n == 1 and "anuncio1" or "anuncios3")
		local lista = UI.mezcla(C.anunciosST)
		for i = 1, (n or 3) do if esc.saltar then break end; anuncioST(lista[i]) end
		if not esc.saltar then cortinilla("seg30", 1.2) end
		cortinilla("volvemos", 1.8)
		esc.btnSaltar.Visible = false; tarjeta.Visible = false
	end
	S.promoCadena = promoCadena

	-- ---------- páginas de escenas (paginación y búsqueda, como la app) ----------
	local SECS = { ["Cámara oculta"] = "oculta", ["Tomas falsas"] = "tomas", ["Fuera de cámaras"] = "fuera" }
	local pagina = { oculta = 1, tomas = 1, fuera = 1 }
	local menu
	local function rellenaPagina(ruta, lista)
		local P = cfg.Pantallas[ruta]; if not P then return end
		local nuevos, puesto = {}, false
		for _, it in ipairs(P.items) do
			if it.k == "button" and tostring(it.t):find("^Escena %d") then
				if not puesto then
					puesto = true
					for _, e in ipairs(lista) do table.insert(nuevos, { k = "button", t = e.titulo, spans = { e.titulo, e.lugar .. " · " .. #e.pasos .. " frases" }, cls = "mbtn " }) end
				end
			else table.insert(nuevos, it) end
		end
		P.items = nuevos; menu:mostrar({ ruta })
	end
	local function paginaDe(sec)
		local l = {}; local a = (pagina[sec] - 1) * 16
		for n = a + 1, math.min(gen.total, a + 16) do table.insert(l, gen:escena(sec, n)) end
		return l
	end

	-- ---------- acciones del menú ----------
	local function buscar(lista, t) for _, x in ipairs(lista or {}) do if x.titulo == t or x.nombre == t or x.marca == t then return x end end end
	local ACC = {}
	local function enHilo(f) return task.spawn(function() f(); cfg.btnMenu.Visible = false; if menu then menu:mostrar(menu.ruta) end end) end
	ACC.ir = function(ctx)
		local t = quitaEmoji(ctx.titulo); local ruta1 = ctx.ruta[1] or ""
		if cfg.jugar and cfg.jugar(t, ctx, S) then return end
		if t:find("^Cámara libre") then ui:ocultar(); return cfg.CamLibre.abrir(gui, UI, cfg.Luces, function() menu:mostrar({}) end) end
		if t:find("^Explorar") or t == "Paseo" then ui:ocultar(); cfg.btnMenu.Visible = true; esc:liberarCamara(); return ui:aviso("Pasea por el plató · ☰ para volver al menú", 4) end
		-- escenas
		local sec = SECS[ruta1]
		if sec then
			local n = tonumber(t:match("^Escena (%d+)"))
			if n then return enHilo(function() correrEscena(gen:escena(sec, n)) end) end
			if t:find("Ver escena") then local k = tonumber(OP["num_" .. sec] or menu.valores["1"] or "1") or 1; return enHilo(function() correrEscena(gen:escena(sec, k)) end) end
			if t:find("Al azar") then return enHilo(function() correrEscena(gen:azar(sec)) end) end
			if t:find("Anteriores") then pagina[sec] = math.max(1, pagina[sec] - 1); return rellenaPagina(ruta1, paginaDe(sec)) end
			if t:find("^Siguientes") then pagina[sec] = math.min(gen.total // 16, pagina[sec] + 1); return rellenaPagina(ruta1, paginaDe(sec)) end
			local x = buscar(C.extras[sec], t); if x then return enHilo(function() correrEscena(x) end) end
		end
		-- promos
		if t:find("^Cabecera del programa") then return enHilo(function() S.cabecera(false) end) end
		if t:find("^Cabecera 3D con tu vídeo") then return enHilo(function() S.cabecera(true) end) end
		if t:find("^Apertura del programa") then return enHilo(function() S.apertura() end) end
		if t:find("^Entrada del cazador") and cfg.entradaCazador then return enHilo(cfg.entradaCazador) end
		if t:find("^Creador de promos") then local p = azar(C.promos); return enHilo(function() S.cabecera(false); hablaLista(cfg.presId, p.lineas, string.upper(titulo())) end) end
		local p = buscar(C.promos, t); if p then return enHilo(function() hablaLista(cfg.presId, p.lineas, "📺 " .. p.titulo, { "saluda", "senala", "habla" }) end) end
		local pp = buscar(C.promosPres, t); if pp then return enHilo(function() hablaLista(cfg.presId, pp.lineas, "🎤 " .. pp.titulo, { "habla", "senala" }) end) end
		-- publicidad
		if t:find("Pausa publicitaria completa") then return enHilo(function() S.pausa(3) end) end
		if t:find("^Cortinillas") then return enHilo(function() ui:ocultar(); esc.saltar = false; for _, k in ipairs({ "publicidad", "min1", "seg30", "anuncios3", "anuncio1", "volvemos" }) do cortinilla(k) end end) end
		local an = buscar(C.anuncios, t); if an then return enHilo(function() ui:ocultar(); esc.saltar = false; esc.btnSaltar.Visible = true; promoCadena(an); esc.btnSaltar.Visible = false end) end
		-- monólogos
		if ruta1 == "Jugar" and t:find("Al azar") then local m = azar(C.monologos); return enHilo(function() hablaLista(cfg.presId, m.lineas, "🎤 " .. m.titulo, { "habla", "senala", "aplaude" }); suena("Risas") end) end
		-- historia
		if t:find("^Que me la cuente") then
			return enHilo(function()
				ui:ocultar(); cfg.btnMenu.Visible = true; esc.saltar = false; sacar({ cfg.presId })
				local pasos = {}; for _, h in ipairs(C.historia) do table.insert(pasos, { cfg.presId, h[1] .. ". " .. h[2] .. ". " .. h[3], "cerca", "habla", "" }) end
				esc:correr(pasos, "La historia de " .. cfg.titulo0); retirar(); esc:liberarCamara()
			end)
		end
		-- cazadores (El Cazador)
		if cfg.fichaCazador and cfg.fichaCazador(t) then return end
		-- opciones con botón
		if t:find("^Restaurar original") then OP.titulo = nil; pintaTitulo(); return ui:aviso("Título original restaurado", 2) end
		if t == "Guardar" then pintaTitulo(); return ui:aviso("Guardado: «" .. titulo() .. "»", 2) end
		if t:find("^Probar") then return enHilo(function() S.cabecera(true) end) end
		if t:find("^Elegir vídeo") then return ui:aviso("En Roblox: sube el vídeo y pega su ID en Imagenes.VideoCabecera", 4) end
		if t == "Quitar" then OP.video = false; return ui:aviso("Vídeo propio desactivado", 2) end
		if t:find("^Usar en el programa") then OP.video = not OP.video; return ui:aviso("Vídeo propio en el programa: " .. (OP.video and "Sí" or "No"), 2) end
		ui:aviso(t, 2)
	end
	ACC.opcion = function(etq, valor, _m, k)
		local e = tostring(etq):lower(); local v = tostring(valor)
		local si = not (v == "No" or v == "Off")
		local ruta1 = menu and menu.ruta[1] or ""
		if SECS[ruta1] then
			local sec = SECS[ruta1]
			if tostring(etq):find("Buscar") then local l = gen:buscar(sec, v, 16); if #l == 0 then return ui:aviso("Sin resultados", 2) end; return rellenaPagina(ruta1, l) end
			if tonumber(v) then OP["num_" .. sec] = v end
			return
		end
		if e:find("programa especial") or e:find("especial") and not e:find("youtube") then
			for _, x in ipairs(C.especiales) do if x.emoji == v then OP.especial = x.id; pintaTitulo(); return ui:aviso((x.emoji or "") .. " " .. (x.banner or x.name), 2) end end
		end
		if e == "" and ruta1 == "Jugar" and k and menu.ruta[2] == "Monólogos del presentador" then
			local m = C.monologos[k]; if m then return enHilo(function() hablaLista(cfg.presId, m.lineas, "🎤 " .. m.titulo, { "habla", "senala", "aplaude" }); suena("Risas") end) end
		end
		if e == "" and ruta1 == "Publicidad" and k and v == "🛒" then local a = C.anunciosST[k]; if a then return enHilo(function() ui:ocultar(); esc.saltar = false; esc.btnSaltar.Visible = true; anuncioST(a); esc.btnSaltar.Visible = false end) end end
		if e:find("youtube") then OP.tituloYT = valor
		elseif e:find("título") or e:find("titulo") then if valor ~= "" then OP.titulo = valor; pintaTitulo() end
		elseif e:find("nombre") then OP.casting = valor ~= "" and valor or nil; if valor ~= "" then ui:aviso("¡Apuntado! Sales como «" .. valor .. "»", 2) end
		elseif e:find("regidor") then OP.regidora = si
		elseif e:find("publicidad") then OP.publicidad = si
		elseif e:find("subt") then OP.subtitulos = si
		elseif e:find("música") and not e:find("cabecera") then OP.musica = si; cfg.musica(si and cfg.musicaMenu or nil)
		elseif e:find("efectos") then OP.efectos = si
		elseif e:find("cabecera") then OP.cabecera = v; OP.apertura = not v:find("^Plató") end
		if cfg.opcion then cfg.opcion(etq, valor, k) end
	end
	ACC.alMostrar = function(ruta) if #ruta == 0 then cfg.musica(OP.musica and cfg.musicaMenu or nil); cfg.btnMenu.Visible = false end end
	menu = MenuApp.nuevo(ui, UI, cfg.Pantallas, ACC)
	S.menu = menu
	S.hablaLista = hablaLista
	S.anuncioST = anuncioST
	cfg.btnMenu.MouseButton1Click:Connect(function() esc.saltar = true; tarjeta.Visible = false; retirar(); esc:liberarCamara(); if cfg.alSalir then cfg.alSalir() end; menu:mostrar({}) end)
	pintaTitulo()
	return S
end
return S
