import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router'
import { API_URL } from '../api.js'
import Resenas from '../components/Resenas.jsx'

const nombresDificultad = {
  facil: 'Fácil',
  moderada: 'Moderada',
  dificil: 'Difícil',
}

// Encargo C (semana 12): el detalle viene de GET /rutas/:id.
// Un 404 significa que la ruta no existe; otros fallos muestran el error de carga.
function DetalleDeRuta({ id }) {
  const [ruta, setRuta] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controlador = new AbortController()

    async function cargarRuta() {
      try {
        const respuesta = await fetch(`${API_URL}/rutas/${id}`, {
          signal: controlador.signal,
        })

        if (respuesta.status === 404) {
          setRuta(null)
          return
        }

        if (!respuesta.ok) {
          throw new Error(`La API respondió ${respuesta.status}`)
        }

        setRuta(await respuesta.json())
      } catch (errorCarga) {
        if (errorCarga.name !== 'AbortError') {
          setError('No se pudo cargar la ruta. ¿Está corriendo la API?')
        }
      } finally {
        if (!controlador.signal.aborted) {
          setCargando(false)
        }
      }
    }

    cargarRuta()
    return () => controlador.abort()
  }, [id])

  let titulo = 'Detalle de ruta'
  if (!cargando) {
    titulo = error ? 'Error al cargar la ruta' : ruta?.nombre || 'Ruta no encontrada'
  }

  useEffect(() => {
    // App orienta el foco al h1 al navegar; este mismo nodo se conserva al cargar.
    document.title = `${titulo} — EcoRuta Temuco`
  }, [titulo])

  return (
    <>
      <section className="presentacion" aria-labelledby="titulo-principal">
        <h1 id="titulo-principal" tabIndex={-1}>{titulo}</h1>
      </section>

      <section className="seccion-rutas" id="detalle-ruta" aria-labelledby="titulo-detalle">
        <h2 id="titulo-detalle">Sobre esta ruta</h2>

        {cargando && <p className="estado" role="status">Cargando ruta…</p>}
        {!cargando && error && <p className="estado error" role="alert">{error}</p>}
        {!cargando && !error && !ruta && (
          <p className="estado" role="status">
            No existe ninguna ruta con el identificador proporcionado.
          </p>
        )}

        {!cargando && !error && ruta && (
          <div>
            <article className="tarjeta-ruta">
              <figure className="imagen-ruta">
                <img src={ruta.imagen} alt={ruta.alt} />
                <figcaption>Fotografía ilustrativa del paisaje.</figcaption>
              </figure>
              <p>
                <strong>Dificultad:</strong> {nombresDificultad[ruta.dificultad] || ruta.dificultad}
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

            <Resenas rutaId={ruta.id} />
          </div>
        )}

        <div>
          <Link to="/rutas">← Volver a la lista de rutas</Link>
        </div>
      </section>
    </>
  )
}

export default function DetalleRuta() {
  const { id } = useParams()
  // Al cambiar el id, la clave reinicia los estados y evita mostrar la ruta anterior.
  return <DetalleDeRuta key={id} id={id} />
}
