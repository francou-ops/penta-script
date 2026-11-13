import TarjetaRuta from "./TarjetaRuta.jsx";

export default function ListaRutas({ rutas, titulo = "Rutas para descubrir" }) {
  // Encargo D: pasa la prop id={ruta.id} a cada TarjetaRuta
  const tarjetas = rutas.map((ruta) => (
    <TarjetaRuta
      key={ruta.id}
      id={ruta.id}
      nombre={ruta.nombre}
      imagen={ruta.imagen}
      alt={ruta.alt}
      distanciaKm={ruta.distanciaKm}
      dificultad={ruta.dificultad}
      accesible={ruta.accesible}
    />
  ));

  const [destacada, ...otrasTarjetas] = tarjetas;

  return (
    <section className="seccion-rutas" id="rutas" aria-labelledby="titulo-rutas">
      <h2 id="titulo-rutas">{titulo}</h2>

      <div className="listado-rutas">
        {destacada && (
          <div className="ruta-destacada">
            <p className="etiqueta-ruta">Ruta destacada</p>
            {destacada}
          </div>
        )}

        <div className="rutas-grid">{otrasTarjetas}</div>
      </div>
    </section>
  );
}
