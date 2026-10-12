-- CamLibre: cámara libre del menú (como «Cámara libre» de la app): WASD/QE, botón derecho para mirar, rueda = zoom (FOV),
-- en móvil joystick de Roblox + botones ▲▼; velocidad y FOV; ocultar interfaz; panel de control de luces (modo, Pan, Tilt, Velocidad, Color).
local UIS = game:GetService("UserInputService")
local RunService = game:GetService("RunService")
local C = {}
function C.abrir(gui, UI, Luces, alCerrar)
	local cam = workspace.CurrentCamera; local tipo0, cf0, fov0 = cam.CameraType, cam.CFrame, cam.FieldOfView
	cam.CameraType = Enum.CameraType.Scriptable
	local pos, yaw, pitch, vel, sube = cam.CFrame.Position, 0, -0.2, 30, 0
	do local lv = cam.CFrame.LookVector; yaw = math.atan2(-lv.X, -lv.Z); pitch = math.asin(lv.Y) end
	local panel = Instance.new("Frame"); panel.Name = "CamLibre"; panel.BackgroundColor3 = Color3.new(0, 0, 0); panel.BackgroundTransparency = 0.35; panel.Size = UDim2.new(1, 0, 0, 44); panel.ZIndex = 50; panel.Parent = gui
	local lay = Instance.new("UIListLayout", panel); lay.FillDirection = Enum.FillDirection.Horizontal; lay.Padding = UDim.new(0, 6)
	local function b(t, fn, w) local x = Instance.new("TextButton"); x.Text = t; x.Size = UDim2.new(0, w or 96, 1, -8); x.Font = Enum.Font.GothamBold; x.TextScaled = true; x.TextColor3 = Color3.new(1, 1, 1); x.BackgroundColor3 = Color3.fromRGB(30, 60, 170); x.ZIndex = 51; x.Parent = panel; Instance.new("UICorner", x); x.MouseButton1Click:Connect(function() fn(x) end); return x end
	local vivo = true; local con
	b("✕ Salir", function() vivo = false end)
	b("Vel −", function() vel = math.max(5, vel / 1.4) end, 70); b("Vel +", function() vel = math.min(200, vel * 1.4) end, 70)
	b("FOV −", function() cam.FieldOfView = math.max(20, cam.FieldOfView - 8) end, 70); b("FOV +", function() cam.FieldOfView = math.min(110, cam.FieldOfView + 8) end, 70)
	b("▲", function() sube = 1; task.delay(0.4, function() sube = 0 end) end, 44); b("▼", function() sube = -1; task.delay(0.4, function() sube = 0 end) end, 44)
	b("👁 Interfaz", function() for _, x in ipairs(gui:GetChildren()) do if x ~= panel and x:IsA("GuiObject") then x.Visible = not x.Visible end end end, 110)
	-- panel de luces
	local lp = Instance.new("Frame"); lp.Name = "PanelLuces"; lp.BackgroundColor3 = Color3.new(0, 0, 0); lp.BackgroundTransparency = 0.3; lp.Position = UDim2.new(1, -230, 1, -260); lp.Size = UDim2.new(0, 220, 0, 250); lp.ZIndex = 50; lp.Parent = gui
	Instance.new("UICorner", lp); local ll = Instance.new("UIListLayout", lp); ll.Padding = UDim.new(0, 4)
	local function lb(t, fn) local x = Instance.new("TextButton"); x.Text = t; x.Size = UDim2.new(1, -8, 0, 26); x.Font = Enum.Font.GothamBold; x.TextScaled = true; x.TextColor3 = Color3.new(1, 1, 1); x.BackgroundColor3 = Color3.fromRGB(60, 30, 120); x.ZIndex = 51; x.Parent = lp; Instance.new("UICorner", x); x.MouseButton1Click:Connect(function() fn(x) end); return x end
	local MODOS = { { "charla", "Charla (baño azul)" }, { "energia", "Energía (barridos)" }, { "fiesta", "Cabecera / Fiesta" }, { "presentacion", "Presentación" }, { "manual", "Manual" } }
	local mi = 1; lb("💡 Modo: " .. MODOS[1][2], function(x) mi = mi % #MODOS + 1; x.Text = "💡 Modo: " .. MODOS[mi][2]; if MODOS[mi][1] == "energia" then Luces.energia(3600) else Luces.hasta = 0; Luces.modoSet(MODOS[mi][1]) end end)
	local function man() if Luces.modo ~= "manual" then Luces.modoSet("manual") end end
	lb("Pan ◀", function() man(); Luces.manual.pan -= 0.3 end); lb("Pan ▶", function() man(); Luces.manual.pan += 0.3 end)
	lb("Tilt ▲", function() man(); Luces.manual.tilt = math.max(0, Luces.manual.tilt - 0.1) end); lb("Tilt ▼", function() man(); Luces.manual.tilt = math.min(1.3, Luces.manual.tilt + 0.1) end)
	lb("Velocidad +/−", function() man(); Luces.manual.vel = (Luces.manual.vel + 0.5) % 4 end)
	local COL = { Color3.new(1, 1, 1), Color3.fromRGB(34, 230, 255), Color3.fromRGB(255, 34, 212), Color3.fromRGB(34, 255, 68), Color3.fromRGB(255, 138, 26), Color3.fromRGB(255, 238, 34), Color3.fromRGB(154, 42, 255) }
	local ci = 1; lb("🎨 Color", function(x) man(); ci = ci % #COL + 1; Luces.manual.color = COL[ci]; x.BackgroundColor3 = COL[ci] end)
	con = RunService.RenderStepped:Connect(function(dt)
		if not vivo then return end
		if UIS:IsMouseButtonPressed(Enum.UserInputType.MouseButton2) then UIS.MouseBehavior = Enum.MouseBehavior.LockCurrentPosition; local d = UIS:GetMouseDelta(); yaw -= d.X * 0.005; pitch = math.clamp(pitch - d.Y * 0.005, -1.4, 1.4) else UIS.MouseBehavior = Enum.MouseBehavior.Default end
		local rot = CFrame.Angles(0, yaw, 0) * CFrame.Angles(pitch, 0, 0); local mv = Vector3.zero
		if UIS:IsKeyDown(Enum.KeyCode.W) then mv += rot.LookVector end; if UIS:IsKeyDown(Enum.KeyCode.S) then mv -= rot.LookVector end
		if UIS:IsKeyDown(Enum.KeyCode.D) then mv += rot.RightVector end; if UIS:IsKeyDown(Enum.KeyCode.A) then mv -= rot.RightVector end
		local hum = game.Players.LocalPlayer.Character and game.Players.LocalPlayer.Character:FindFirstChildOfClass("Humanoid"); if hum and hum.MoveDirection.Magnitude > 0 then mv += Vector3.new(hum.MoveDirection.X, 0, hum.MoveDirection.Z) end
		local y = sube + (UIS:IsKeyDown(Enum.KeyCode.E) and 1 or 0) - (UIS:IsKeyDown(Enum.KeyCode.Q) and 1 or 0)
		pos += (mv + Vector3.new(0, y, 0)) * vel * dt; cam.CFrame = CFrame.new(pos) * rot
	end)
	local rueda = UIS.InputChanged:Connect(function(i) if i.UserInputType == Enum.UserInputType.MouseWheel then cam.FieldOfView = math.clamp(cam.FieldOfView - i.Position.Z * 4, 20, 110) end end)
	task.spawn(function() while vivo do task.wait(0.1) end; con:Disconnect(); rueda:Disconnect(); panel:Destroy(); lp:Destroy(); cam.CameraType = tipo0; cam.CFrame = cf0; cam.FieldOfView = fov0; Luces.hasta = 0; Luces.modoSet("charla"); if alCerrar then alCerrar() end end)
end
return C
