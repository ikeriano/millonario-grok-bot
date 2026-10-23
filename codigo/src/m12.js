// Datos de la v1.2 de Quién quiere ser millonario: especiales, colores del logo, regidora y escenas.
export const TEMAS_LOGO = { // halo, anillo, banda, oro (4 paradas), deco
  normal: { halo: ['#5a2a9a', '#2a0c5a'], anillo: '#3b1478', banda: '#1a0640', oro: ['#fff3b0', '#e8b830', '#a8740c', '#ffe27a'] },
  famosos: { halo: ['#9a2a7a', '#3a0a3a'], anillo: '#5a0a5a', banda: '#2a0428', oro: ['#ffffff', '#ffd0f0', '#c060a0', '#fff0ff'], deco: '★' },
  leyendas: { halo: ['#2a2a2a', '#0a0a0a'], anillo: '#1a1a1a', banda: '#000000', oro: ['#fff8d0', '#d8b040', '#806010', '#ffe890'], deco: '♛' },
  navidad: { halo: ['#c81a22', '#4a0608'], anillo: '#8a0c12', banda: '#0a3a14', oro: ['#ffffff', '#e8f0e8', '#2fbf4a', '#ffffff'], deco: '❄' },
  aniversario: { halo: ['#c08a20', '#3a1a00'], anillo: '#5a3a00', banda: '#2a1600', oro: ['#fffbe0', '#ffd23a', '#b07a10', '#fff0b0'], deco: '25' },
  halloween: { halo: ['#ff7a1a', '#2a0b45'], anillo: '#3a0a5a', banda: '#140818', oro: ['#ffe0a0', '#ff9a1a', '#a8400c', '#ffc27a'], deco: '☠' },
  sanvalentin: { halo: ['#ff5aa0', '#5a0a2a'], anillo: '#8a0a3a', banda: '#3a0418', oro: ['#ffffff', '#ffb0d0', '#e0306a', '#ffe0ee'], deco: '♥' },
  verano: { halo: ['#33d6d0', '#0a4a6a'], anillo: '#0a6a8a', banda: '#0a3a5a', oro: ['#fff8c0', '#ffb02e', '#ff6a3a', '#ffe08a'], deco: '☀' },
  ninos: { halo: ['#26c2f0', '#0a3a8a'], anillo: '#1a5ad0', banda: '#0a2a6a', oro: ['#ffffff', '#ffd23a', '#ff5fb0', '#fff0a0'], deco: '☺' },
  findeano: { halo: ['#3a3326', '#0a0a0a'], anillo: '#1a1812', banda: '#000000', oro: ['#ffffff', '#ffe28a', '#c9a227', '#fff6c0'], deco: '12' },
  carnaval: { halo: ['#8a1fd0', '#2a0a4a'], anillo: '#4b0f8a', banda: '#1a0430', oro: ['#e0ffe8', '#3dff8a', '#ffd23a', '#c0ffd8'], deco: '✦' },
  primetime: { halo: ['#123a9a', '#06123f'], anillo: '#0a1a5a', banda: '#050a28', oro: ['#ffffff', '#ffe7a0', '#d9a520', '#fff6d0'], deco: '★' },
  nochebuena: { halo: ['#c8a040', '#3a0a10'], anillo: '#5a1018', banda: '#2a0408', oro: ['#fffbe0', '#ffd27a', '#c08a20', '#fff0c0'], deco: '✶' },
  especial300: { halo: ['#e8b830', '#3a1a00'], anillo: '#6a4a00', banda: '#2a1600', oro: ['#ffffff', '#ffe27a', '#d9a520', '#fff6c0'], deco: '300' },
  youtube: { halo: ['#ff3a3a', '#5a0000'], anillo: '#b00000', banda: '#2a0000', oro: ['#ffffff', '#ffffff', '#ffd0d0', '#ffffff'], deco: 'play' },
};
export const ESP_EXTRA = [
  { id: 'halloween', emoji: '🎃', name: 'Halloween', banner: 'ESPECIAL HALLOWEEN', luz: 0xff7a1a, saludo: '¡Buuu! Bienvenidos al especial de Halloween. Esta noche, hasta las preguntas dan miedo.' },
  { id: 'sanvalentin', emoji: '💘', name: 'San Valentín', banner: 'ESPECIAL SAN VALENTÍN', luz: 0xff5aa0, saludo: 'Feliz San Valentín. Hoy jugamos por amor… y por un millón de euros.' },
  { id: 'verano', emoji: '🏖️', name: 'Verano', banner: 'ESPECIAL VERANO', luz: 0x33d6d0, saludo: '¡Qué calor! Bienvenidos al especial de verano. Crema solar, gafas de sol y quince preguntas.' },
  { id: 'ninos', emoji: '🧸', name: 'Niños', banner: 'ESPECIAL NIÑOS', luz: 0x26c2f0, saludo: '¡Hola, chicos y chicas! Bienvenidos al especial infantil. Hoy las preguntas son para los más listos de la casa.' },
  { id: 'findeano', emoji: '🥂', name: 'Fin de Año', banner: 'ESPECIAL FIN DE AÑO', luz: 0xffe28a, saludo: 'Últimas horas del año. Bienvenidos a la gran gala de Fin de Año. Que el año que viene empiece con un millón.' },
  { id: 'carnaval', emoji: '🎭', name: 'Carnaval', banner: 'ESPECIAL CARNAVAL', luz: 0x3dff8a, saludo: '¡Que empiece el Carnaval! Disfraces, confeti y quince preguntas sin máscara.' },
  { id: 'primetime', emoji: '🌟', name: 'Especial Prime Time', banner: 'ESPECIAL PRIME TIME', luz: 0xffd060, saludo: 'Buenas noches y bienvenidos a una edición muy especial en horario de máxima audiencia. Esta noche, en prime time, el millón está más cerca que nunca.' },
  { id: 'nochebuena', emoji: '🕯️', name: 'Nochebuena', banner: 'ESPECIAL NOCHEBUENA', luz: 0xffb040, saludo: 'Feliz Nochebuena a todos. Antes de la cena, quince preguntas y un millón de euros encima de la mesa.' },
  { id: 'especial300', emoji: '🏆', name: 'Especial 300 suscriptores', banner: 'ESPECIAL 300 SUSCRIPTORES', luz: 0xffd23a, saludo: '¡Somos trescientos! Bienvenidos al especial trescientos suscriptores. Gracias por estar ahí; esta noche jugamos para celebrarlo.' },
  { id: 'youtube', emoji: '▶️', name: 'Especial YouTube', banner: 'ESPECIAL YOUTUBE', luz: 0xff2a2a, saludo: 'Muy buenas noches. Hoy celebramos el aniversario de YouTube. Dale al play, que empezamos.' },
];
export const SALUDOS_EXISTENTES = { famosos: 'Bienvenidos al especial famosos. Esta noche, caras conocidas juegan por una buena causa.', leyendas: 'Bienvenidos al especial leyendas. Vuelven los mejores concursantes de la historia del programa.', navidad: '¡Feliz Navidad! Bienvenidos al especial navideño. El mejor regalo: un millón de euros.', aniversario: 'Bienvenidos al especial aniversario. Veinticinco años de preguntas, nervios y millonarios.' };
export const LUCES_EXISTENTES = { famosos: 0xff5ad0, leyendas: 0xffd060, navidad: 0x2fbf4a, aniversario: 0xffc21a };
export const YT_CONCURSANTES = ['Marta «LaCuevaDeMarta»', 'Rubén «ElTallerDeRu»', 'Sofía «SofiCocina»', 'Iván «GamerDelSofá»', 'Nerea «NereViajes»', 'Óscar «ÓscarExplica»'];
export const REGIDORA = { id: 'pili', cam: 'wide', lineas: {
  aire: ['Atención, plató. Entramos en antena en cinco, cuatro, tres…', 'Silencio todo el mundo, que entramos. Tres, dos, uno… ¡dentro!'],
  aplausos: ['¡Aplausos, público! ¡Más fuerte!', '¡Ese aplauso, que se oiga en toda la cadena!'],
  silencio: ['Silencio en plató, por favor. El concursante está pensando.', 'Shhh. Que nadie respire, que vamos a por la pregunta.'],
  pub: ['¡Publicidad! Tres minutos. Leo, agua y respirar.', 'Nos vamos a publicidad. Marga, retoque rápido a Leo.'],
  vuelta: ['Volvemos en cinco segundos. Todos a sus puestos.', 'Fin de la pausa. Público, sonrisas, que volvemos.'],
  final: ['Última pregunta. Silencio absoluto, por favor.'],
  fin: ['¡Y fuera! Buen programa, equipo. Mañana más.', '¡Fuera de antena! Un aplauso para todo el equipo.'],
} };
export const PREGUNTAS_YT = `#1
¿Qué botón se pulsa para ver un vídeo?|Reproducir|Pausa|Detener|Grabar
¿Cómo se llama a quien sube vídeos a una plataforma de forma habitual?|Creador de contenido|Locutor|Redactor|Cámara
#2
¿Qué significa la palabra inglesa «stream» aplicada a internet?|Emisión en directo|Descarga|Archivo|Contraseña
¿En qué año se fundó YouTube?|2005|1999|2010|2001
#3
¿Cómo se titulaba el primer vídeo subido a YouTube?|Me at the zoo|Hello World|First video|My cat
¿Qué empresa compró YouTube en 2006?|Google|Microsoft|Apple|Yahoo
#4
¿En qué zoológico se grabó el primer vídeo de YouTube?|San Diego|Madrid|Londres|Berlín
¿Qué protocolo se usa para cargar páginas web de forma segura?|HTTPS|FTP|SMTP|SSH
#5
¿Qué formato de vídeo de Google se usa mucho en la web junto al códec VP9?|WebM|AVI|MOV|WMV
¿Cuántos fundadores tuvo YouTube?|Tres|Uno|Dos|Cinco`;
