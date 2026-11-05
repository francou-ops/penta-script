import TarjetaRuta from "./TarjetaRuta.jsx";

export default function ListaRutas({ rutas }) {
  const tarjetas = rutas.map((ruta) => (
    <TarjetaRuta
      key={ruta.id}
      nombre={ruta.nombre}
      imagen={ruta.imagen}
      alt={ruta.alt}
      distanciaKm={ruta.distanciaKm}
      dificultad={ruta.dificultad}
    />
  ));

  const [destacada, ...otrasTarjetas] = tarjetas;

  return (
    <section className="seccion-rutas" id="rutas" aria-labelledby="titulo-rutas">
      <h2 id="titulo-rutas">Rutas para descubrir</h2>

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