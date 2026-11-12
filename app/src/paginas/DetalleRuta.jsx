import { useParams, Link } from 'react-router'
import { rutas } from '../datos/rutas.js'

export default function DetalleRuta() {
  const { id } = useParams()
  const ruta = rutas.find((r) => r.id === Number(id))

  if (!ruta) {
    return (
      <main id="contenido-principal">
        <section className="seccion-rutas">
          <h2>Ruta no encontrada</h2>
          <p>No existe ninguna ruta con el identificador proporcionado.</p>
          <Link to="/rutas">Volver a la lista de rutas</Link>
        </section>
      </main>
    )
  }

  return (
    <main id="contenido-principal">
      <section className="presentacion" aria-labelledby="titulo-principal">
        <h1 id="titulo-principal">{ruta.nombre}</h1>
      </section>

      <section className="seccion-rutas" id="detalle-ruta" aria-labelledby="titulo-detalle">
        <h2 id="titulo-detalle">Sobre esta ruta</h2>

        <article className="tarjeta-ruta">
          <img src={ruta.imagen} alt={ruta.alt} />
          <p>
            <strong>Dificultad:</strong> {ruta.dificultad}
          </p>
          {ruta.descripcion && <p>{ruta.descripcion}</p>}

          <dl className="datos-ruta">
            <div>
              <dt>Distancia</dt>
              <dd>{ruta.distanciaKm} km</dd>
            </div>
            <div>
              <dt>Accesible</dt>
              <dd>{ruta.accesible ? 'Sí' : 'No'}</dd>
            </div>
          </dl>
        </article>

        <div>
          <Link to="/rutas">← Volver a la lista de rutas</Link>
        </div>
      </section>
    </main>
  )
}
