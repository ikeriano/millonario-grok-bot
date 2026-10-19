/* Normas sorpresa · catálogo de ¿Quién quiere ser millonario? (62 normas en 8 categorías; 10 por partida, hasta 3 por categoría).
   req: rasgos que el modo tiene que ofrecer (a|b = vale cualquiera). Las cantidades de dinero se calculan
   con la primera pregunta de la escalera de cada etapa (u = 100 € o 10.000 pesetas). */
NS.catalogo({
  juego: '¿Quién quiere ser millonario?', presentador: 'Leo Arrieta', min: 10, max: 10, maxCat: 3,
  intro: '¡Atención, que esta noche hay normas sorpresa en ¿Quién quiere ser millonario? Estas son las normas de hoy.',
  outro: '¡Ya lo sabes todo! Mucha suerte, y a por el millón.',
  cats: [
    { id: 'reloj', n: 'Reloj', ico: '⏱️' }, { id: 'dinero', n: 'Premios', ico: '💰' }, { id: 'escalera', n: 'Escalera', ico: '🪜' },
    { id: 'comod', n: 'Comodines', ico: '🃏' }, { id: 'pistas', n: 'Pistas', ico: '💡' }, { id: 'salva', n: 'Salvavidas', ico: '🛟' },
    { id: 'fiesta', n: 'Fiesta', ico: '🎉' }, { id: 'voz', n: 'Presentador', ico: '🎤' }],
  reglas: [
    // ⏱️ Reloj (la llamada del Programa completo y el reloj del Modo clásico 2010)
    { id: 'r_llamada60', c: 'reloj', n: 'Llamada larga', d: 'La llamada dura un minuto entero, el doble de lo normal.', req: ['llamada'], fx: { llamada: 60 } },
    { id: 'r_llamada45', c: 'reloj', n: 'Llamada tranquila', d: 'La llamada dura cuarenta y cinco segundos.', req: ['llamada'], fx: { llamada: 45 } },
    { id: 'r_llamada20', c: 'reloj', n: 'Llamada exprés', d: '¡Reto! La llamada dura solo veinte segundos.', req: ['llamada'], fx: { llamada: 20 } },
    { id: 'r_doble', c: 'reloj', n: 'Reloj doble', d: 'El reloj de cada pregunta dura el doble.', req: ['reloj'], fx: { tiempo: 2 } },
    { id: 'r_generoso', c: 'reloj', n: 'Reloj generoso', d: 'El reloj de cada pregunta dura la mitad más.', req: ['reloj'], fx: { tiempo: 1.5 } },
    { id: 'r_tranqui', c: 'reloj', n: 'Reloj tranquilo', d: 'El reloj de cada pregunta dura un poquito más.', req: ['reloj'], fx: { tiempo: 1.25 } },
    { id: 'r_prisa', c: 'reloj', n: 'Reloj con prisa', d: '¡Reto! El reloj va más justo: tres cuartos del tiempo.', req: ['reloj'], fx: { tiempo: 0.75 } },
    { id: 'r_prorroga', c: 'reloj', n: 'Prórroga', d: 'Una vez por partida, cuando el reloj llega a cero, te regala diez segundos más.', req: ['reloj'], fx: { prorroga: 10 } },
    { id: 'r_parado', c: 'reloj', n: 'Arranque sin reloj', d: 'En las cinco primeras preguntas no hay reloj: piensa con calma.', req: ['reloj'], fx: { parado: 5 } },
    { id: 'r_bolsa', c: 'reloj', n: 'Tiempo guardado doble', d: 'Los segundos que te sobran en cada pregunta valen el doble para la pregunta final.', req: ['reloj'], fx: { bolsaX: 2 } },
    { id: 'r_prorroga20', c: 'reloj', n: 'Prórroga larga', d: 'Una vez por partida, cuando el reloj llega a cero, te regala veinte segundos más.', req: ['reloj'], fx: { prorroga: 20 } },
    { id: 'r_llamada40', c: 'reloj', n: 'Llamada de cuarenta', d: 'La llamada dura cuarenta segundos.', req: ['llamada'], fx: { llamada: 40 } },
    // 💰 Premios (lo extra va a la hucha, que se suma al premio final pase lo que pase)
    { id: 'd_oro', c: 'dinero', n: 'Pregunta de oro', d: 'Una pregunta brilla en dorado: si la aciertas, la mitad de su valor va a tu hucha.', req: ['hucha'], fx: { oro: true } },
    { id: 'd_racha', c: 'dinero', n: 'Racha de fuego', d: 'Cada tres aciertos seguidos, un premio extra para tu hucha.', req: ['hucha'], fx: { rachaU: 10 } },
    { id: 'd_arranque', c: 'dinero', n: 'Buen arranque', d: 'Tu primer acierto mete un regalo en tu hucha.', req: ['hucha'], fx: { primerU: 5 } },
    { id: 'd_hucha', c: 'dinero', n: 'Hucha del público', d: 'Cada acierto mete un poquito más en tu hucha.', req: ['hucha'], fx: { hucha: 1 } },
    { id: 'd_plantarse', c: 'dinero', n: 'Plantarse con premio', d: 'Si te plantas, te llevas una cuarta parte más.', req: ['plantar'], fx: { plantaMas: 1.25 } },
    { id: 'd_millon', c: 'dinero', n: 'Millón y medio', d: 'Si aciertas la última pregunta, el gran premio vale la mitad más.', req: ['ultima15'], fx: { ultimaMas: 1.5 } },
    { id: 'd_racha2', c: 'dinero', n: 'Racha de oro', d: 'Cada tres aciertos seguidos, un premio extra doble para tu hucha.', req: ['hucha'], fx: { rachaU: 20 } },
    { id: 'd_arranque2', c: 'dinero', n: 'Arranque de lujo', d: 'Tu primer acierto mete un gran regalo en tu hucha.', req: ['hucha'], fx: { primerU: 10 } },
    { id: 'd_hucha2', c: 'dinero', n: 'Hucha generosa', d: 'Cada acierto mete el doble en tu hucha.', req: ['hucha'], fx: { hucha: 2 } },
    { id: 'd_plantarse2', c: 'dinero', n: 'Plantarse de oro', d: 'Si te plantas, te llevas la mitad más.', req: ['plantar'], fx: { plantaMas: 1.5 } },
    { id: 'd_millon2', c: 'dinero', n: 'Dos millones', d: 'Si aciertas la última pregunta, el gran premio vale el doble.', req: ['ultima15'], fx: { ultimaMas: 2 } },
    // 🪜 Escalera
    { id: 's_tercer', c: 'escalera', n: 'Tercer seguro', d: 'La pregunta doce también es un seguro.', req: ['escalera'], fx: { tercerSeguro: 12 } },
    { id: 's_adelanta', c: 'escalera', n: 'Seguro adelantado', d: 'El primer seguro llega antes: en la pregunta tres.', req: ['escalera'], fx: { seguroEn3: true } },
    { id: 's_suave', c: 'escalera', n: 'Arranque suave', d: 'Las cinco primeras preguntas son de las más fáciles.', req: ['escalera'], fx: { suave: true } },
    { id: 's_reto', c: 'escalera', n: 'Escalera exigente', d: '¡Reto! Desde la pregunta seis, las preguntas son un poco más difíciles.', req: ['escalera'], fx: { reto: true } },
    { id: 's_elige', c: 'escalera', n: 'Seguro a tu gusto', d: 'Hoy eliges tú dónde va el segundo seguro, como en la etapa moderna.', req: ['segFijo'], fx: { eligeSeguro: true } },
    { id: 's_trampolin', c: 'escalera', n: 'Pregunta trampolín', d: 'Si aciertas la pregunta siete, saltas directamente a la nueve.', req: ['escalera'], fx: { trampolin: true } },
    // 🃏 Comodines
    { id: 'c_cambio', c: 'comod', n: 'Cambio de pregunta', d: 'Tienes un comodín nuevo: cambia la pregunta por otra del mismo nivel.', req: ['comod'], fx: { cambio: true } },
    { id: 'c_5050x2', c: 'comod', n: 'Cincuenta por ciento doble', d: 'El comodín del cincuenta por ciento se puede usar dos veces.', req: ['comod'], fx: { c5050x2: true } },
    { id: 'c_publicoPro', c: 'comod', n: 'Público experto', d: 'Hoy el público está muy preparado: casi nunca se equivoca.', req: ['comod'], fx: { publicoPro: true } },
    { id: 'c_amigo', c: 'comod', n: 'Amigo sabio', d: 'Tu amigo de la llamada y tu acompañante aciertan casi siempre.', req: ['comod'], fx: { amigo: true } },
    { id: 'c_experto', c: 'comod', n: 'Comodín del experto', d: 'Tienes un comodín nuevo: el experto del programa te da su opinión.', req: ['comod'], fx: { experto: true } },
    { id: 'c_recarga', c: 'comod', n: 'Comodín recargado', d: 'Al superar el primer seguro, recuperas un comodín que ya hayas usado.', req: ['comod'], fx: { recarga: true } },
    { id: 'c_familiar', c: 'comod', n: 'Comodín del acompañante', d: 'Hoy también tienes el comodín del acompañante.', req: ['sinFamiliar'], fx: { familiar: true } },
    { id: 'c_sinpublico', c: 'comod', n: 'Sin comodín del público', d: '¡Reto! Hoy el público no puede ayudarte.', req: ['comod'], fx: { sinPublico: true } },
    // 💡 Pistas
    { id: 'q_tachada', c: 'pistas', n: 'Respuesta tachada', d: 'En las cinco primeras preguntas, una respuesta falsa sale tachada.', req: ['pistas'], fx: { tachada: 5 } },
    { id: 'q_recta', c: 'pistas', n: 'Recta final', d: 'En las tres últimas preguntas, una respuesta falsa desaparece.', req: ['pistas'], fx: { recta: true } },
    { id: 'q_pista', c: 'pistas', n: 'Pista de Leo', d: 'Una vez por partida, pulsa el botón de la pista y quito una respuesta falsa.', req: ['pistas'], fx: { pistaLeo: true } },
    { id: 'q_inicial', c: 'pistas', n: 'Primera letra', d: 'En las cinco primeras preguntas verás por qué letra empieza la respuesta buena.', req: ['pistas'], fx: { inicial5: true } },
    { id: 'q_rapida', c: 'pistas', n: 'Respuesta rápida', d: 'Hoy no te pregunto si es tu última respuesta: la primera que toques, vale.', req: ['confirma'], fx: { rapida: true } },
    { id: 'q_tachada10', c: 'pistas', n: 'Tachada larga', d: 'En las diez primeras preguntas, una respuesta falsa sale tachada.', req: ['pistas'], fx: { tachada: 10 } },
    // 🛟 Salvavidas
    { id: 'a_segunda', c: 'salva', n: 'Segunda oportunidad', d: 'Una vez por partida, si fallas, la respuesta mala se tacha y puedes elegir otra.', req: ['segunda'], fx: { segunda: true } },
    { id: 'a_escudo', c: 'salva', n: 'Escudo', d: 'Tu primer fallo no cuenta: te cambio la pregunta y sigues en el mismo escalón.', req: ['escudo'], fx: { escudo: 1 } },
    { id: 'a_escudo2', c: 'salva', n: 'Doble escudo', d: 'Tus dos primeros fallos no cuentan: te cambio la pregunta y sigues en el mismo escalón.', req: ['escudo'], fx: { escudo: 2 } },
    { id: 'a_red', c: 'salva', n: 'Caída con red', d: 'Si fallas, te llevas la mitad de lo que tenías, si es más que tu seguro.', req: ['red'], fx: { red: true } },
    { id: 'a_consuelo', c: 'salva', n: 'Premio de consolación', d: 'Si fallas, nunca te vas a casa con las manos vacías.', req: ['red'], fx: { consuelo: 5 } },
    { id: 'a_consuelo2', c: 'salva', n: 'Consolación de lujo', d: 'Si fallas, te llevas un buen premio de consolación.', req: ['red'], fx: { consuelo: 10 } },
    // 🎉 Fiesta
    { id: 'f_confeti', c: 'fiesta', n: 'Lluvia de confeti', d: 'Cada acierto se celebra con confeti.', req: [], fx: { fiesta: 'confeti' } },
    { id: 'f_aplausos', c: 'fiesta', n: 'Público entregado', d: 'El público aplaude cada acierto.', req: [], fx: { fiesta: 'aplausos' } },
    { id: 'f_emojis', c: 'fiesta', n: 'Emojis voladores', d: 'Cada acierto hace volar emojis por la pantalla.', req: [], fx: { fiesta: 'emojis' } },
    { id: 'f_fanfarria', c: 'fiesta', n: 'Fanfarria', d: 'Suena una fanfarria con cada acierto.', req: [], fx: { fiesta: 'fanfarria' } },
    { id: 'f_globos', c: 'fiesta', n: 'Globos', d: 'Suben globos con cada acierto.', req: [], fx: { fiesta: 'globos' } },
    { id: 'f_estrellas', c: 'fiesta', n: 'Cazador de estrellas', d: 'Cada acierto te da una estrella. Al final verás cuántas has juntado.', req: [], fx: { fiesta: 'estrellas', estrellas: true } },
    { id: 'f_animo', c: 'fiesta', n: 'Mensajes de ánimo', d: 'Si fallas, aparece un mensaje bonito para animarte.', req: [], fx: { fiesta: 'animo' } },
    { id: 'f_arcoiris', c: 'fiesta', n: 'Marco arcoíris', d: 'La pantalla se pone un marco de colores del arcoíris.', req: [], fx: { fiesta: 'arcoiris' } },
    // 🎤 Presentador
    { id: 'v_bien', c: 'voz', n: 'Presentador animado', d: 'Te felicito en voz alta cuando aciertas.', req: [], fx: { vozBien: true } },
    { id: 'v_animo', c: 'voz', n: 'Presentador que anima', d: 'Te animo en voz alta cuando fallas.', req: [], fx: { vozAnimo: true } },
    { id: 'v_todo', c: 'voz', n: 'Presentador charlatán', d: 'Te felicito cuando aciertas y te animo cuando fallas.', req: [], fx: { vozBien: true, vozAnimo: true } },
    { id: 'v_chistes', c: 'voz', n: 'Leo bromista', d: 'Esta noche cuento más chistes entre pregunta y pregunta.', req: ['chistes'], fx: { chistes: 0.45 } },
    { id: 'v_chistes2', c: 'voz', n: 'Leo muy bromista', d: 'Esta noche cuento chistes casi entre cada pregunta.', req: ['chistes'], fx: { chistes: 0.7 } },
  ],
  // nunca dos retos juntos (además, dos normas que tocan lo mismo —misma clave fx— nunca salen juntas)
  excl: [['r_llamada20', 's_reto'], ['r_llamada20', 'c_sinpublico'], ['s_reto', 'c_sinpublico'], ['r_prisa', 'q_rapida']],
  ev: {
    bien: ['¡Muy bien!', '¡Correcto, sigue así!', '¡Fenomenal!', '¡Eso es, qué crack!'],
    animo: ['¡No pasa nada, lo has hecho genial!', '¡Ánimo, que has llegado muy lejos!', '¡Casi, casi!', '¡Tranquilo, la próxima vez será!'],
    racha: ['¡Racha de fuego! ¡Tres seguidas!', '¡Imparable! ¡Otra racha!'],
    escudo: ['¡El escudo te protege! Ese fallo no cuenta.']
  },
  // tipos de cada modo (las etapas 2005 y 1999 añaden 'segFijo' y 'sinFamiliar')
  modos: {
    'Programa completo': ['llamada', 'hucha', 'plantar', 'ultima15', 'escalera', 'comod', 'pistas', 'confirma', 'segunda', 'escudo', 'red', 'chistes'],
    'Programa completo · 2005/1999': ['llamada', 'hucha', 'plantar', 'ultima15', 'escalera', 'segFijo', 'comod', 'sinFamiliar', 'pistas', 'confirma', 'segunda', 'escudo', 'red', 'chistes'],
    'Entrenamiento': ['llamada', 'hucha', 'plantar', 'ultima15', 'escalera', 'comod', 'pistas', 'confirma', 'segunda', 'escudo', 'red'],
    'Entrenamiento · 2005/1999': ['llamada', 'hucha', 'plantar', 'ultima15', 'escalera', 'segFijo', 'comod', 'sinFamiliar', 'pistas', 'confirma', 'segunda', 'escudo', 'red'],
    'Modo clásico 2010': ['reloj', 'hucha', 'plantar', 'pistas', 'confirma', 'segunda', 'red']
  }
});
