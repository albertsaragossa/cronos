// Temps en "anys enrere" (s = inici, més antic; e = final, més recent; sense e = esdeveniment puntual).
// Y(any) converteix un any del calendari (negatiu = aC) a anys enrere. Totes les dates són aproximades.
const Y = y => 2026 - y;

const TRACKS = [
  { name: "Cosmologia", color: "#7c8cff", items: [
    { n: "Big Bang", s: 13.8e9, d: "Origen de l'Univers observable." },
    { n: "Edat fosca", s: 13.8e9, e: 13.6e9, d: "Abans de les primeres estrelles; l'Univers és fred i opac." },
    { n: "Primeres estrelles", s: 13.6e9, d: "S'encenen les primeres estrelles i comença la reionització." },
    { n: "Primeres galàxies", s: 13.4e9, d: "Es formen les primeres galàxies." },
    { n: "Energia fosca domina", s: 4e9, d: "L'expansió de l'Univers comença a accelerar-se." },
    { n: "Sistema Solar", s: 4.57e9, d: "Es forma el Sol i el disc de planetes." },
    { n: "Sol: seqüència principal", s: 4.57e9, e: 0, d: "El Sol crema hidrogen; ho farà uns 5.000 milions d'anys més." }
  ]},
  { name: "Geologia", color: "#e0914f", items: [
    { n: "Hadeà", s: 4.6e9, e: 4.0e9, d: "Terra jove, calenta i bombardejada." },
    { n: "Arcaic", s: 4.0e9, e: 2.5e9, d: "Primers continents i primera vida." },
    { n: "Proterozoic", s: 2.5e9, e: 538.8e6, d: "Augmenta l'oxigen i apareix la vida pluricel·lular." },
    { n: "Paleozoic", s: 538.8e6, e: 251.9e6, d: "Vida marina diversa, plantes i animals colonitzen la terra." },
    { n: "Mesozoic", s: 251.9e6, e: 66e6, d: "Era dels dinosaures." },
    { n: "Cenozoic", s: 66e6, e: 2.58e6, d: "Era dels mamífers (en sentit ampli inclou el Quaternari)." },
    { n: "Quaternari", s: 2.58e6, e: 11700, d: "Cicles glacials; apareix el gènere Homo." },
    { n: "Holocè", s: 11700, e: 0, d: "Període interglacial actual." },
    { n: "Formació de la Terra", s: 4.54e9, d: "Acreció del planeta." },
    { n: "Formació de la Lluna", s: 4.5e9, d: "Per impacte gegant contra la Terra jove." },
    { n: "Gran Oxidació", s: 2.4e9, d: "L'oxigen s'acumula a l'atmosfera." },
    { n: "Extinció del Permià", s: 251.9e6, d: "La major extinció massiva coneguda." },
    { n: "Extinció del Cretaci", s: 66e6, d: "Desapareixen els dinosaures no aviars." }
  ]},
  { name: "Vida", color: "#5fd08a", items: [
    { n: "Primera vida", s: 3.8e9, d: "Primers microorganismes (data molt incerta)." },
    { n: "Fotosíntesi", s: 2.7e9, d: "Els cianobacteris produeixen oxigen." },
    { n: "Eucariotes", s: 1.8e9, d: "Cèl·lules amb nucli." },
    { n: "Pluricel·lulars", s: 6e8, d: "Primers organismes grans i complexos." },
    { n: "Explosió cambriana", s: 539e6, e: 520e6, d: "Diversificació ràpida dels animals." },
    { n: "Plantes terrestres", s: 470e6, d: "Les plantes colonitzen els continents." },
    { n: "Dinosaures", s: 230e6, e: 66e6, d: "Dominen els ecosistemes terrestres." },
    { n: "Primats", s: 55e6, d: "Primers primats." },
    { n: "Homo sapiens", s: 3e5, d: "Apareix la nostra espècie." }
  ]},
  { name: "Història humana", color: "#e46f9b", items: [
    { n: "Paleolític", s: 3.3e6, e: 11700, d: "Eines de pedra, caça i recol·lecció." },
    { n: "Neolític", s: 11700, e: Y(-3300), d: "Agricultura i ramaderia; primers assentaments." },
    { n: "Edat Antiga", s: Y(-3300), e: Y(476), d: "De l'escriptura a la caiguda de Roma d'Occident." },
    { n: "Edat Mitjana", s: Y(476), e: Y(1492), d: "Del 476 al 1492." },
    { n: "Edat Moderna", s: Y(1492), e: Y(1789), d: "Del 1492 al 1789." },
    { n: "Contemporània", s: Y(1789), e: 0, d: "Des de la Revolució Francesa fins avui." },
    { n: "Foc controlat", s: 1e6, d: "Ús habitual del foc (data discutida)." },
    { n: "Escriptura", s: Y(-3200), d: "Primers sistemes d'escriptura a Mesopotàmia." },
    { n: "Piràmides de Gizeh", s: Y(-2560), d: "Construcció de la Gran Piràmide." },
    { n: "Caiguda de Roma", s: Y(476), d: "Fi de l'Imperi Romà d'Occident." },
    { n: "Impremta", s: Y(1450), d: "Gutenberg desenvolupa la impremta de tipus mòbils." },
    { n: "Amèrica", s: Y(1492), d: "Colom arriba a Amèrica." },
    { n: "Revolució Francesa", s: Y(1789), d: "Inici de l'època contemporània." },
    { n: "Allunatge", s: Y(1969), d: "Apollo 11." },
    { n: "Web", s: Y(1991), d: "Es publica la primera pàgina web." }
  ]}
];
