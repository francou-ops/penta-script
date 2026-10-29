const climaa =
  "https://api.open-meteo.com/v1/forecast" +
  "?latitude=-39.28&longitude=-71.98" +
  "&current=temperature_2m,wind_speed_10m,weather_code" +
  "&timezone=America%2FSantiago";

const estado = document.querySelector("#estado");
const temperatura = document.querySelector("#temperatura");
const viento = document.querySelector("#viento");
const cielo = document.querySelector("#cielo");
const aviso = document.querySelector("#aviso-clima");

function describirCielo(codigo) {
  if (codigo === 0) return "despejado, dia lindo";
  if (codigo <= 3) return "parcialmente nublado";
  if (codigo === 45 || codigo === 48) return "niebla";
  if (codigo >= 51 && codigo <= 57) return "llovizna";
  if (codigo >= 61 && codigo <= 67) return "lluvia";
  if (codigo >= 71 && codigo <= 77) return "nieve";
  if (codigo >= 80 && codigo <= 82) return "chispeando";
  if (codigo >= 95) return "tormenta";
  return "condiciones del clima variables";
}

function mostrarAviso(clima) {
  if (clima.temperature_2m < 8) {
    aviso.textContent = "hace frio: lleva chaqueta";
  } else if (clima.wind_speed_10m > 40) {
    aviso.textContent = "viento fuerte: usa gorrito";
  } else {
    aviso.textContent = "buen clima para salir";
  }
  aviso.hidden = false;
}

async function mostrarClima() {
  estado.textContent = "cargando el clima";
  try {
    const respuesta = await fetch(climaa);
    if (!respuesta.ok) throw new Error("la api respondio con error");

    const datos = await respuesta.json();
    const clima = datos.current;
    temperatura.textContent = `${clima.temperature_2m} ${datos.current_units.temperature_2m}`;
    viento.textContent = `${clima.wind_speed_10m} ${datos.current_units.wind_speed_10m}`;
    cielo.textContent = describirCielo(clima.weather_code);
    mostrarAviso(clima);
    estado.textContent = "clima actual";
  } catch (error) {
    console.error(error);
  estado.textContent = "No se pudo cargar el clima. Revisa tu conexión e inténtalo nuevamente.";
  }
}

mostrarClima();
