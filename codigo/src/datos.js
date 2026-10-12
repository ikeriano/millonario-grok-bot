// Textos del juego: presentador inventado, escenas extra, promos, publicidad, monólogos e historia.
export const PRESENTADOR = 'Leo Arrieta';
export const PERSONAJES = {
  leo: { nombre: 'Leo Arrieta', rol: 'Presentador', traje: 0x1b2340, pelo: 0x3a2a1c, piel: 0xe0b08c },
  pili: { nombre: 'Pili', rol: 'Regidora', traje: 0x222222, pelo: 0x8a3b1a, piel: 0xf0c4a0 },
  chema: { nombre: 'Chema', rol: 'Técnico de sonido', traje: 0x3d5a2a, pelo: 0x111111, piel: 0xc89870 },
  marga: { nombre: 'Marga', rol: 'Maquilladora', traje: 0x8a1f5c, pelo: 0xd9b25a, piel: 0xf2c8a8 },
  ramon: { nombre: 'Don Ramón', rol: 'El jefe', traje: 0x4a4a4a, pelo: 0xcccccc, piel: 0xe8b898 },
  encarna: { nombre: 'Encarna', rol: 'Público', traje: 0xb04a2a, pelo: 0x5a3a2a, piel: 0xe8c0a0 },
  conc: { nombre: 'Concursante', rol: 'Concursante', traje: 0x2a6a8a, pelo: 0x2a1a10, piel: 0xd8a880 },
};
export const ERAS = {
  e2020: { id: 'e2020', nombre: '2020–2025', cadena: 'Antena 3 / laSexta', moneda: '€', escalera: [100,250,500,750,1500,2500,5000,10000,15000,20000,30000,50000,100000,300000,1000000], seguros: [5], eligeSeguro: true, comodines: ['5050','publico','llamada','familiar'], tiempo: false },
  e2005: { id: 'e2005', nombre: '2005–2007', cadena: 'Antena 3', moneda: '€', escalera: [100,200,300,500,1000,2000,4000,6500,10000,15000,25000,50000,100000,300000,1000000], seguros: [5,10], eligeSeguro: false, comodines: ['5050','publico','llamada'], tiempo: false },
  e1999: { id: 'e1999', nombre: '1999–2001', cadena: 'Telecinco', moneda: 'ptas', escalera: [10000,20000,30000,50000,100000,200000,400000,800000,1600000,3200000,6250000,12500000,25000000,37500000,50000000], seguros: [5,10], eligeSeguro: false, comodines: ['5050','publico','llamada'], tiempo: false },
};
export const ESPECIALES = [
  { id: 'normal', emoji: '💰', name: 'Normal' },
  { id: 'famosos', emoji: '⭐', name: 'Famosos', banner: 'ESPECIAL FAMOSOS · por una ONG' },
  { id: 'leyendas', emoji: '🏆', name: 'Leyendas', banner: 'ESPECIAL LEYENDAS' },
  { id: 'navidad', emoji: '🎄', name: 'Navidad', banner: 'ESPECIAL NAVIDAD' },
  { id: 'aniversario', emoji: '🎂', name: 'Aniversario', banner: 'ESPECIAL 25 AÑOS' },
];
export const FRASES = {
  saludo: ['¡Buenas noches y bienvenidos a ¿Quién quiere ser millonario?!', '¡Hola a todos! Esto es ¿Quién quiere ser millonario?, y yo soy Leo Arrieta.'],
  presenta: 'Esta noche nos acompaña un concursante que viene dispuesto a todo. ¡Un aplauso para él!',
  siéntate: 'Siéntate, ponte cómodo. Ya conoces las normas: quince preguntas, y una sola respuesta correcta en cada una.',
  seguro: 'El primer seguro está en la pregunta cinco. Pero en este formato eres tú quien elige el segundo seguro. ¿Dónde lo pones?',
  empezamos: '¡Pues vamos allá! Primera pregunta.',
  ultima: '¿Es tu última respuesta?',
  bien: ['¡Correcto!', '¡Es correcta! ¡Muy bien!', '¡Sí señor! ¡Respuesta correcta!', '¡Bravo! ¡Lo has clavado!'],
  mal: ['Lo siento muchísimo, no era esa.', 'Ay… no. Esa no era la respuesta correcta.'],
  seguroOk: '¡Has llegado a un seguro! Ese dinero ya no te lo quita nadie.',
  c5050: 'Comodín del cincuenta por ciento. Ordenador, quita dos respuestas incorrectas.',
  cpublico: 'Comodín del público. Público, votad ahora en vuestros mandos.',
  cllamada: 'Vamos a llamar por teléfono. Tienes treinta segundos.',
  cfamiliar: 'Comodín del acompañante: tu familiar baja de la grada y te ayuda a pensar.',
  planta: 'Te plantas. Respeto absoluto: te llevas lo que has ganado.',
  millon: '¡Increíble! ¡Acabas de ganar el gran premio! ¡Eres millonario!',
  despedida: 'Esto ha sido todo por hoy. ¡Gracias por estar al otro lado! Hasta la próxima, en ¿Quién quiere ser millonario?',
};
// Escenas: [quién, texto, cámara]
const S = (id, titulo, pasos) => ({ id, titulo, pasos });
export const EXTRAS = {
  oculta: [
    S('o1', 'La silla que gira', [['pili', 'Leo, hoy probamos sillas nuevas. Siéntate, que hay que ajustarlas.', 'silla'], ['leo', 'Qué cómoda… oye, ¿esto gira solo?', 'silla'], ['chema', 'Uy, se me ha ido el mando. ¡Vuelta y vuelta!', 'wide'], ['leo', '¡Paradlo, que me mareo! ¡Que veo cuatro respuestas por duplicado!', 'silla'], ['pili', '¡Inocente, inocente! ¡Cámara oculta!', 'wide']]),
    S('o2', 'El millón de chocolate', [['ramon', 'Leo, hoy entregamos el cheque del millón en directo. Aquí lo tienes.', 'pres'], ['leo', 'Huele… raro. ¿Este cheque huele a cacao?', 'pres'], ['marga', 'Es que es de chocolate, cariño. Y lo tienes derretido en la mano.', 'pres'], ['leo', '¡Mi traje nuevo!', 'pres'], ['ramon', '¡Inocente, inocente!', 'wide']]),
    S('o3', 'El comodín del público mudo', [['leo', 'Público, ¡votad ahora!', 'grada'], ['encarna', '(El público entero se cruza de brazos y silba una canción)', 'grada'], ['leo', '¿Nadie vota? ¿Ni uno? ¿Pero qué pasa aquí?', 'pres'], ['encarna', '¡Es que somos todos actores, Leo! ¡Cámara oculta!', 'grada']]),
    S('o4', 'La llamada a la abuela', [['leo', 'Llamamos al comodín de la llamada. ¿Hola?', 'consola'], ['encarna', '¿Leo? Soy tu abuela. ¿Has comido? ¿Por qué no me llamas nunca?', 'consola'], ['leo', 'Abuela, ¡que estoy grabando!', 'pres'], ['pili', '¡Hemos llamado a tu abuela de verdad! ¡Inocente!', 'wide']]),
    S('o5', 'El concursante que lo sabe todo', [['conc', 'La respuesta es la B. Y la siguiente será la C. Y la de después, la A.', 'silla'], ['leo', '¿Pero cómo sabes las siguientes si no las he leído?', 'silla'], ['conc', 'Porque soy el guionista disfrazado, Leo.', 'silla'], ['leo', '¡Ya decía yo que ese bigote se movía!', 'pres'], ['pili', '¡Cámara oculta!', 'wide']]),
    S('o6', 'Las luces disco', [['chema', 'Leo, prueba de luces para la pregunta final.', 'wide'], ['leo', 'Venga, dale el ambiente de tensión de siempre.', 'pres'], ['chema', '¡Marchando! (Se encienden bolas de discoteca y suena una canción del verano)', 'wide'], ['leo', '¡Esto no es la pregunta del millón, esto es una verbena!', 'pres'], ['chema', '¡Inocente, inocente!', 'wide']]),
    S('o7', 'El atril que se encoge', [['pili', 'Hoy el atril se ajusta automáticamente a tu altura.', 'consola'], ['leo', 'Pues está bajando… y bajando… ¡Que me tengo que poner de rodillas!', 'consola'], ['pili', '¡Inocente! Lo controla Chema con un mando de garaje.', 'wide']]),
  ],
  tomas: [
    S('t1', 'El millón de pesetas… euros… lo que sea', [['leo', 'Por un millón de pesetas… perdón, de euros… ¡Ay, que me he ido al año noventa y nueve!', 'pres'], ['pili', '¡Corten! Leo, que ya no existen las pesetas.', 'wide'], ['leo', 'Es la nostalgia, Pili. Repetimos.', 'pres']]),
    S('t2', 'La pregunta imposible de leer', [['leo', '¿Cuál es el nombre del otorrinolaringólogo que esternocleidomas… estermo… esto…', 'pres'], ['pili', '¡Corten! ¿Quién ha escrito esta pregunta?', 'wide'], ['chema', 'El becario, que es nuevo.', 'wide']]),
    S('t3', 'La silla traicionera', [['leo', 'Siéntate y… ¡uy!', 'silla'], ['conc', '¡La silla es muy alta! ¡No llego!', 'silla'], ['pili', '¡Corten! ¡Traed el escalón!', 'wide'], ['leo', 'Esto en la tele parece más fácil.', 'pres']]),
    S('t4', 'Risa contagiosa', [['leo', 'Es tu… última… (se ríe)… ¿Es tu última respuesta?', 'pres'], ['conc', '(Se ríe también) ¡No puedo mirarte!', 'silla'], ['pili', '¡Corten! Diez minutos de descanso y agua para todos.', 'wide']]),
    S('t5', 'El móvil del público', [['leo', 'Silencio absoluto en el plató. La tensión es máxima…', 'pres'], ['encarna', '(Suena un móvil con un reguetón a todo volumen)', 'grada'], ['encarna', '¡Perdón, perdón! ¡Es mi hijo!', 'grada'], ['pili', '¡Corten! Móviles en modo avión, por favor.', 'wide']]),
    S('t6', 'Gafas equivocadas', [['leo', 'Respuesta A: la torre Eiffel… espera, ¿esto es una A o una H?', 'consola'], ['marga', '¡Leo, que llevas mis gafas de cerca!', 'pres'], ['pili', '¡Corten!', 'wide']]),
    S('t7', 'El cincuenta por ciento rebelde', [['leo', 'Ordenador, quita dos respuestas incorrectas.', 'consola'], ['chema', 'Uy… ha quitado las cuatro.', 'wide'], ['leo', 'Pues entonces la respuesta es… ¿ninguna?', 'pres'], ['pili', '¡Corten! ¡Reiniciad el ordenador!', 'wide']]),
  ],
  fuera: [
    S('f1', 'En maquillaje', [['marga', 'Quieto, Leo, que te brilla la frente como el logo.', 'pres'], ['leo', 'Es el foco, Marga. Esos focos azules calientan un montón.', 'pres'], ['marga', 'Pues más polvos. Hoy vas de mate total.', 'pres']]),
    S('f2', 'Ensayo de la sintonía', [['chema', 'Probando la música de tensión… ¿se oye bien en la grada?', 'grada'], ['encarna', '¡Se oye tanto que me tiembla el bocadillo!', 'grada'], ['chema', 'Perfecto, entonces está en su punto.', 'wide']]),
    S('f3', 'El catering', [['leo', '¿Qué hay hoy de comer?', 'wide'], ['pili', 'Tortilla, croquetas y un pastel con forma de logo.', 'wide'], ['leo', 'Me pido la letra D, que es la más grande.', 'pres']]),
    S('f4', 'Repaso de preguntas', [['leo', 'Pili, la pregunta doce, ¿cómo se pronuncia este apellido?', 'consola'], ['pili', 'Ni idea. Pregunta al público, que para eso está el comodín.', 'wide'], ['leo', 'Muy graciosa.', 'pres']]),
    S('f5', 'El jefe visita el plató', [['ramon', 'Leo, el programa va de maravilla. Pero hay que dar más emoción.', 'pres'], ['leo', '¿Más emoción? Si ayer un señor se jugó trescientos mil euros.', 'pres'], ['ramon', 'Pues que mañana se juegue el plató entero.', 'wide']]),
    S('f6', 'Calentando al público', [['pili', 'Público, cuando encienda el piloto rojo, aplauso fuerte. ¡Probamos!', 'grada'], ['encarna', '¡Bravooo! ¡Leo, guapo!', 'grada'], ['pili', 'Sin piropos, Encarna, que luego hay que cortarlo.', 'grada']]),
    S('f7', 'Pausa en la consola', [['chema', 'Leo, el monitor izquierdo hace cosas raras.', 'consola'], ['leo', 'Ya veo, me sale el tiempo de Albacete en lugar de la pregunta.', 'consola'], ['chema', 'Al menos sabemos que mañana hace sol.', 'wide']]),
  ],
};
export const PROMOS = [
  { id: 'estanoche', titulo: 'Esta noche', lineas: ['Esta noche, a las diez…', 'Quince preguntas. Cuatro respuestas. Un millón de euros.', '¿Quién quiere ser millonario? Con Leo Arrieta.'] },
  { id: 'casting', titulo: 'Casting', lineas: ['¿Te sabes la capital de Mongolia?', '¿Sabrías dónde poner tu segundo seguro?', 'Apúntate al casting de ¿Quién quiere ser millonario?'] },
  { id: 'famosos', titulo: 'Especial famosos', lineas: ['Este sábado, edición especial con famosos.', 'Todo lo que ganen será para una ONG.', '¿Quién quiere ser millonario? Especial famosos.'] },
  { id: 'vuelve', titulo: 'Vuelve el concurso', lineas: ['Las luces azules se encienden de nuevo.', 'Vuelve el concurso que todos quieren jugar desde el sofá.', 'Muy pronto, ¿Quién quiere ser millonario?'] },
  { id: 'leyendas', titulo: 'Leyendas', lineas: ['Ellos ya estuvieron en la silla caliente.', 'Ahora vuelven a por todo.', 'Especial leyendas. Solo aquí.'] },
];
export const PROMOS_LEO = [
  { id: 'pl1', titulo: 'Próximo programa', lineas: ['Hola, soy Leo Arrieta. Mañana tenemos a una concursante que quiere ir a por el millón sin usar comodines.', '¿Lo conseguirá? No te lo pierdas.'] },
  { id: 'pl2', titulo: 'El segundo seguro', lineas: ['¿Sabías que ahora eres tú quien elige el segundo seguro?', 'Arriesgar o asegurar. Esa es la cuestión. Te espero.'] },
  { id: 'pl3', titulo: 'Desde la consola', lineas: ['Esta es mi consola: dos pantallas, todas las preguntas y ninguna respuesta… bueno, alguna sí.', 'Siéntate en casa y juega con nosotros.'] },
];
export const ANUNCIOS = [
  { id: 'a1', titulo: 'Detergente Blancura Total', lineas: ['¿Manchas de café en la camisa del concurso?', 'Blancura Total: lava tan blanco que deslumbra a los focos.'] },
  { id: 'a2', titulo: 'Seguros Comodín', lineas: ['Con Seguros Comodín, si fallas, te quedas con lo que tenías.', 'Seguros Comodín. Elige tú tu segundo seguro.'] },
  { id: 'a3', titulo: 'Turrones La Pregunta', lineas: ['Turrones La Pregunta: duro, blando… o cincuenta por ciento.', 'Esta Navidad, la respuesta correcta.'] },
  { id: 'a4', titulo: 'Teléfono Llamada Perfecta', lineas: ['Treinta segundos dan para mucho con el nuevo Llamada Perfecta.', 'Batería para todo el concurso.'] },
];
export const MONOLOGOS = [
  { id: 'm1', tipo: 'publico', titulo: 'Los votos del público', lineas: ['El público de este programa es el mejor del mundo.', 'Una vez votó un setenta por ciento a la respuesta D… y era la A.', 'Pero lo hicieron con muchísimo cariño.'] },
  { id: 'm2', tipo: 'telefono', titulo: 'La llamada eterna', lineas: ['Treinta segundos de llamada.', 'El primo tardó veinte en coger el teléfono, cinco en saludar a toda la familia…', 'y los últimos cinco los dedicó a preguntar qué ponían en la tele.'] },
  { id: 'm3', tipo: 'normas', titulo: 'Las normas cambian', lineas: ['Cuando empecé, había seguros fijos.', 'Luego dijeron: que el concursante elija el segundo.', 'Ahora estoy esperando a que el concursante elija también el presentador.'] },
];
export const HISTORIA = [
  ['1998', 'El formato nace en el Reino Unido', 'El concurso de las quince preguntas y los comodines se estrena en la televisión británica y se exporta a más de cien países.'],
  ['1999–2001', 'Telecinco: «50 por 15»', 'Llega a España en Telecinco con el nombre de «¿Quiere ser millonario? 50 por 15»: cincuenta millones de pesetas por quince preguntas. Comodines: 50:50, público y llamada.'],
  ['2005–2008', 'Antena 3', 'Vuelve en Antena 3 ya con euros y un millón como gran premio. Seguros fijos en las preguntas 5 y 10. La escalera empieza en 100 € y pasa por 6.500 €.'],
  ['2009', 'Una etapa breve', 'El concurso hace una nueva temporada corta, con cambios de escenografía y reglas para dar más ritmo.'],
  ['2012', 'laSexta: «El millonario» (Hot Seat)', 'laSexta emite «El millonario», la versión Hot Seat: varios concursantes se turnan en la silla caliente y responden contra el reloj.'],
  ['2020', 'El gran regreso en Antena 3', 'Regresa con un plató renovado: azul oscuro, haces de luz, suelo dorado en espiral y una consola en V con dos monitores. El concursante elige su segundo seguro.'],
  ['2020', 'Nuevas reglas', 'Solo el primer seguro es fijo; el segundo lo decide el concursante. Además del 50:50, el público y la llamada, aparece el comodín del acompañante o familiar.'],
  ['2021–2025', 'De Antena 3 a laSexta', 'El concurso continúa en el grupo y pasa a laSexta, con ediciones especiales de famosos que juegan por ONG y programas de «leyendas» con antiguos concursantes.'],
  ['Hoy', 'Este juego', 'Un juego de fans hecho por Iker. Presentador inventado (Leo Arrieta) con voz sintética genérica. No es oficial ni está afiliado al programa.'],
];
