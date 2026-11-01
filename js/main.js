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
  if (codigo === 0) return "Despejado";
  if (codigo === 1) return "Mayormente despejado";
  if (codigo === 2) return "Parcialmente nublado";
  if (codigo === 3) return "Nublado";
  if (codigo === 45 || codigo === 48) return "Niebla";
  if (codigo === 51 || codigo === 53 || codigo === 55) return "Llovizna";
  if (codigo === 56 || codigo === 57) return "Llovizna helada";
  if (codigo === 61 || codigo === 63 || codigo === 65) return "Lluvia";
  if (codigo === 66 || codigo === 67) return "Lluvia helada";
  if (codigo === 71 || codigo === 73 || codigo === 75 || codigo === 77) return "Nieve";
  if (codigo === 80 || codigo === 81 || codigo === 82) return "Chubascos";
  if (codigo === 85 || codigo === 86) return "Chubascos de nieve";
  if (codigo === 95 || codigo === 97) return "Tormenta";
  if (codigo === 96 || codigo === 99) return "Tormenta con granizo";
  return "Información del cielo no disponible";
}

function mostrarAviso(clima, aviso) {
  if (!clima || !Number.isFinite(clima.temperature_2m) || !Number.isFinite(clima.wind_speed_10m)) {
    aviso.textContent = "No hay datos suficientes para mostrar avisos.";
    aviso.hidden = false;
    return;
  }

  let mensaje = "";

  if (clima.temperature_2m < 8) {
    mensaje = "Hace frío: lleva abrigo. ";
  }

  if (clima.wind_speed_10m > 40) {
    mensaje += "Viento fuerte: evita sectores expuestos.";
  }

  if (mensaje === "") {
    mensaje = "Sin avisos por temperatura o viento.";
  }

  aviso.textContent = mensaje.trim();
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
    mostrarAviso(clima, aviso);
    estado.textContent = "clima actual";
  } catch (error) {
    console.error(error);
  estado.textContent = "No se pudo cargar el clima. Revisa tu conexión e inténtalo nuevamente.";
  }
}

mostrarClima();
