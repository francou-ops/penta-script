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

async function cargarClima(latitud, longitud, tarjeta) {
  const estado = tarjeta.querySelector(".estado-clima");
  const temperatura = tarjeta.querySelector(".temperatura");
  const viento = tarjeta.querySelector(".viento");
  const cielo = tarjeta.querySelector(".cielo");
  const aviso = tarjeta.querySelector(".aviso-clima");

  // Evita acceder a elementos que no existen.
  if (!estado || !temperatura || !viento || !cielo || !aviso) {
    return;
  }

  estado.textContent = "Cargando clima…";
  temperatura.textContent = "--";
  viento.textContent = "--";
  cielo.textContent = "--";
  aviso.textContent = "";
  aviso.hidden = true;

  try {
    const parametros = new URLSearchParams({
      latitude: latitud,
      longitude: longitud,
      current: "temperature_2m,wind_speed_10m,weather_code",
      temperature_unit: "celsius",
      wind_speed_unit: "kmh",
      timezone: "America/Santiago"
    });

    const url = `https://api.open-meteo.com/v1/forecast?${parametros}`;

    const respuesta = await fetch(url);

    if (!respuesta.ok) {
      throw new Error("La API respondió con un error");
    }

    const datos = await respuesta.json();
    const clima = datos.current;

    // Comprueba que los datos necesarios sean números válidos.
    if (
      !clima ||
      ![
        clima.temperature_2m,
        clima.wind_speed_10m,
        clima.weather_code
      ].every(Number.isFinite)
    ) {
      throw new Error("La API devolvió datos incompletos");
    }

    temperatura.textContent = `${clima.temperature_2m} °C`;
    viento.textContent = `${clima.wind_speed_10m} km/h`;
    cielo.textContent = describirCielo(clima.weather_code);

    mostrarAviso(clima, aviso);

    estado.textContent = "Clima actualizado.";
  } catch {
    temperatura.textContent = "--";
    viento.textContent = "--";
    cielo.textContent = "--";
    aviso.textContent = "";
    aviso.hidden = true;

    estado.textContent =
      "No se pudo cargar el clima. Revisa tu conexión y recarga la página.";
  }
}

document.querySelectorAll(
  ".tarjeta-ruta[data-lat][data-lon], .tarjeta-clima[data-lat][data-lon]"
).forEach((tarjeta) => {
  const latitud = tarjeta.dataset.lat;
  const longitud = tarjeta.dataset.lon;

  cargarClima(latitud, longitud, tarjeta);
});

