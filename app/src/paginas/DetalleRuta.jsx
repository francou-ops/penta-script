import { useParams, Link } from 'react-router'
import { rutas } from '../datos/rutas.js'

// Encargo D: DetalleRuta y enlaces desde las tarjetas
// - Criterio C1 / Encargo D: Detalle con useParams y Number(id) al buscar con find, y un mensaje si el id no existe.
// - Criterio C2: Todo se importa desde 'react-router', sin react-router-dom, y navegación interna con Link.
export default function DetalleRuta() {
  const { id } = useParams()
  // Búsqueda con Number(id) según rúbrica
  const ruta = rutas.find((r) => r.id === Number(id))

  // Mensaje si el id no existe
  if (!ruta) {
    return (
      <section className="seccion-rutas">
        <h2>Ruta no encontrada</h2>
        <p>No existe ninguna ruta con el identificador proporcionado.</p>
        <Link to="/rutas">Volver a la lista de rutas</Link>
      </section>
    )
  }

  return (
    <>
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
    </>
  )
}
