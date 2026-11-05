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
    alt: "Paisaje natural de la ruta del volcán Villarrica",
    distanciaKm: 12,
    dificultad: "Moderada",
    accesible: false,
  },
  {
    id: 2,
    nombre: "Sendero Los Lagos",
    imagen: senderoLosLagos,
    alt: "Bosque nativo en Huerquehue",
    distanciaKm: 12,
    dificultad: "Moderada",
    accesible: false,
  },
  {
    id: 3,
    nombre: "Mirador El Cañi",
    imagen: reservaElCani,
    alt: "Bosque nativo de El Cañi",
    distanciaKm: 18,
    dificultad: "Difícil",
    accesible: false,
  },
  {
    id: 4,
    nombre: "Sierra Nevada",
    imagen: sierraNevada,
    alt: "Paisaje del Parque Nacional Conguillío",
    distanciaKm: 20,
    dificultad: "Difícil",
    accesible: false,
  },
  {
    id: 5,
    nombre: "Sendero Las Araucarias",
    imagen: senderoLasAraucarias,
    alt: "Sendero entre araucarias",
    distanciaKm: 4,
    dificultad: "Fácil",
    accesible: true,
  },
  {
    id: 6,
    nombre: "Sendero Laguna Blanca",
    imagen: senderoLagunaBlanca,
    alt: "Sendero de montaña en Malalcahuello",
    distanciaKm: 8,
    dificultad: "Moderada",
    accesible: false,
  },
  {
    id: 7,
    nombre: "Sendero del Bosque",
    imagen: senderoLosLagos,
    alt: "Sendero entre bosque nativo de Huerquehue",
    distanciaKm: 3,
    dificultad: "Fácil",
    accesible: true,
  },
  {
    id: 8,
    nombre: "Sendero Laguna Verde",
    imagen: senderoLagunaBlanca,
    alt: "Laguna rodeada de bosque en Malalcahuello",
    distanciaKm: 5,
    dificultad: "Fácil",
    accesible: true,
  },
  {
    id: 9,
    nombre: "Travesía de las Cumbres",
    imagen: travesiaCumbre,
    alt: "Travesía de las cumbres",
    distanciaKm: 18,
    dificultad: "Difícil",
    accesible: false,
  },
];
