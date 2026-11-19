import volcanVillarrica from "../assets/volcan-villarrica.jpg";
import senderoLosLagos from "../assets/sendero-los-lagos.jpg";
import reservaElCani from "../assets/reserva-el-cani.jpg";
import sierraNevada from "../assets/sierra-nevada.jpg";
import senderoLasAraucarias from "../assets/sendero-las-araucarias.jpg";
import senderoLagunaBlanca from "../assets/sendero-laguna-blanca.jpg";
import travesiaCumbre from "../assets/travesia-cumbre.jpg";

export const rutas = [
  {
    id: 1,
    nombre: "Sendero Volcán Villarrica",
    imagen: volcanVillarrica,
    alt: "Volcán cubierto de nieve con una columna de humo sobre el cráter.",
    distanciaKm: 12,
    dificultad: "Moderada",
    accesible: false,
  },
  {
    id: 2,
    nombre: "Sendero Los Lagos",
    imagen: senderoLosLagos,
    alt: "Laguna de aguas tranquilas rodeada de árboles, con troncos en la orilla.",
    distanciaKm: 12,
    dificultad: "Moderada",
    accesible: false,
  },
  {
    id: 3,
    nombre: "Mirador El Cañi",
    imagen: reservaElCani,
    alt: "Araucarias y lagunas entre cerros boscosos, con volcanes nevados al fondo.",
    distanciaKm: 18,
    dificultad: "Difícil",
    accesible: false,
  },
  {
    id: 4,
    nombre: "Sierra Nevada",
    imagen: sierraNevada,
    alt: "Ladera nevada con araucarias e instalaciones de un centro de esquí.",
    distanciaKm: 20,
    dificultad: "Difícil",
    accesible: false,
  },
  {
    id: 5,
    nombre: "Sendero Las Araucarias",
    imagen: senderoLasAraucarias,
    alt: "Bosque de araucarias al pie de montañas con nieve.",
    distanciaKm: 4,
    dificultad: "Fácil",
    accesible: true,
  },
  {
    id: 6,
    nombre: "Sendero Laguna Blanca",
    imagen: senderoLagunaBlanca,
    alt: "Laguna entre laderas boscosas, con una montaña nevada al fondo.",
    distanciaKm: 8,
    dificultad: "Moderada",
    accesible: false,
  },
  {
    id: 7,
    nombre: "Sendero del Bosque",
    imagen: senderoLosLagos,
    alt: "Laguna de aguas tranquilas rodeada de árboles, con troncos en la orilla.",
    distanciaKm: 3,
    dificultad: "Fácil",
    accesible: true,
  },
  {
    id: 8,
    nombre: "Sendero Laguna Verde",
    imagen: senderoLagunaBlanca,
    alt: "Laguna entre laderas boscosas, con una montaña nevada al fondo.",
    distanciaKm: 5,
    dificultad: "Fácil",
    accesible: true,
  },
  {
    id: 9,
    nombre: "Travesía de las Cumbres",
    imagen: travesiaCumbre,
    alt: "Terreno rocoso en altura con una persona y un volcán nevado al fondo.",
    distanciaKm: 18,
    dificultad: "Difícil",
    accesible: false,
  },
];
