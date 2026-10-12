-- EscenasGen: el mismo generador procedural de escenas de la app (Fuera de cámaras · Tomas falsas · Cámara oculta).
-- Determinista y calcado de escenas_gen.js: «Escena n» (1..9600) es exactamente la misma que en la app.
local G = {}
G.__index = G
local M32 = 4294967296
local function u(x) return x % M32 end
local function imul(a, b) a = u(a); b = u(b); local lo, hi = a % 65536, a // 65536; return u(((hi * b) % 65536) * 65536 + lo * b) end
local function xor(a, b) return bit32.bxor(u(a), u(b)) end
local function bor(a, b) return bit32.bor(u(a), u(b)) end
local function shr(a, n) return bit32.rshift(u(a), n) end
local function rng(seed)
	seed = u(seed)
	return function()
		seed = u(seed + 0x6D2B79F5)
		local t = imul(xor(seed, shr(seed, 15)), bor(1, seed))
		t = xor(u(t + imul(xor(t, shr(t, 7)), bor(61, t))), t)
		return xor(t, shr(t, 14)) / M32
	end
end
local SEC = { fuera = 1, tomas = 2, oculta = 3 }
G.NOMBRE = { fuera = "Fuera de cámaras", tomas = "Tomas falsas", oculta = "Cámara oculta" }
function G.nuevo(POOL, cfg)
	local self = setmetatable({ P = POOL, cfg = cfg, cache = {} }, G)
	self.NL = #POOL.lugares; self.NS, self.NF = 30, 16; self.total = self.NL * 30 * 16
	return self
end
function G:sub(t)
	local n = self.cfg.nombres or {}
	t = tostring(t):gsub("{(%u+)}", function(k) return n[k] or k end)
	t = t:gsub("([!?])%.", "%1")
	return t
end
function G:voz(r) return (self.cfg.roles or {})[r] or r end
function G:cam(r) return (self.cfg.cam or {})[r] or self.cfg.camDef or "wide" end
function G:escena(sec, n)
	n = math.max(1, math.min(self.total, math.floor(tonumber(n) or 1)))
	local k = sec .. n; if self.cache[k] then return self.cache[k] end
	local S = self.P.secciones[sec]; local x = ((n - 1) * 7919 + 1237) % self.total
	local li, si, fi = x % self.NL, (x // self.NL) % self.NS, x // (self.NL * self.NS)
	local r = rng(n * 977 + SEC[sec] * 104729)
	local L = self.P.lugares[li + 1]; local sit = S.sit[si + 1]; local tit, ls = sit[1], sit[2]; local F = S.fin[fi + 1]
	local function P(rol, t, g, ef) return { self:voz(rol), self:sub(t), self:cam(rol), g or "", ef or "" } end
	local pasos = { P(L[2], L[3], "habla", sec == "tomas" and "claqueta:1" or "") }
	table.insert(pasos, P(ls[1][1], ls[1][2], "habla")); table.insert(pasos, P(ls[2][1], ls[2][2], "senala"))
	local usados = {}; for _, l in ipairs(ls) do usados[l[1]] = true end; for _, l in ipairs(F) do usados[l[1]] = true end
	local cand = {}; for _, q in ipairs(self.P.reacciones) do if usados[q[1]] then table.insert(cand, q) end end
	local q = cand[math.floor(r() * #cand) + 1]
	table.insert(pasos, P(q[1], q[2], q[3], q[4]))
	table.insert(pasos, P(ls[3][1], ls[3][2], "habla"))
	table.insert(pasos, P(ls[4][1], ls[4][2], r() < 0.5 and "encoge" or "habla", sec == "tomas" and "tomafalsa" or ""))
	if r() < 0.35 then local q2 = cand[math.floor(r() * #cand) + 1]; if q2 ~= q then table.insert(pasos, P(q2[1], q2[2], q2[3], q2[4])) end end
	table.insert(pasos, P(F[1][1], F[1][2], "senala", ({ tomas = "corten", oculta = "inocente", fuera = "" })[sec]))
	table.insert(pasos, P(F[2][1], F[2][2], "aplaude", sec == "fuera" and "aplauso" or "risas"))
	local e = { id = "g" .. n, n = n, seccion = G.NOMBRE[sec], titulo = "Escena " .. n .. " · " .. tit, sub = L[1], lugar = L[1], pasos = pasos }
	self.cache[k] = e; return e
end
local function norm(t)
	t = string.lower(tostring(t))
	for a, b in pairs({ ["á"] = "a", ["é"] = "e", ["í"] = "i", ["ó"] = "o", ["ú"] = "u", ["ü"] = "u", ["Á"] = "a", ["É"] = "e", ["Í"] = "i", ["Ó"] = "o", ["Ú"] = "u" }) do t = t:gsub(a, b) end
	return t
end
function G:buscar(sec, q, max)
	q = norm((tostring(q or ""):gsub("^%s+", ""):gsub("%s+$", ""))); max = max or 60; local out = {}
	if q == "" then return out end
	local num = tonumber(q); if num and num >= 1 and num <= self.total then table.insert(out, self:escena(sec, num)) end
	for n = 1, self.total do
		if #out >= max then break end
		if n ~= num then
			local e = self:escena(sec, n); local hay = string.find(norm(e.titulo .. " " .. e.lugar), q, 1, true) ~= nil
			if not hay then for _, p in ipairs(e.pasos) do if string.find(norm(p[2]), q, 1, true) then hay = true break end end end
			if hay then table.insert(out, e) end
		end
	end
	return out
end
function G:azar(sec) return self:escena(sec, math.random(1, self.total)) end
return G
