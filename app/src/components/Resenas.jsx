import { useEffect, useRef, useState } from 'react'
import { API_URL } from '../api.js'
import FormularioResena from './FormularioResena.jsx'

function ResenasDeRuta({ rutaId }) {
  const [resenas, setResenas] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')
  const [errorBorrado, setErrorBorrado] = useState('')
  const [borrando, setBorrando] = useState(null)
  const [mensaje, setMensaje] = useState('')
  const tituloResenas = useRef(null)

  useEffect(() => {
    const controlador = new AbortController()

    async function cargarResenas() {
      try {
        const respuesta = await fetch(`${API_URL}/resenas?rutaId=${rutaId}`, {
          signal: controlador.signal,
        })

        if (!respuesta.ok) {
          throw new Error('No se pudieron cargar las reseñas.')
        }

        const datos = await respuesta.json()
        setResenas(datos)
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError('No se pudieron cargar las reseñas. Intenta recargar la página.')
        }
      } finally {
        if (!controlador.signal.aborted) {
          setCargando(false)
        }
      }
    }

    cargarResenas()

    return () => controlador.abort()
  }, [rutaId])

  async function borrarResena(id) {
    setBorrando(id)
    setErrorBorrado('')
    setMensaje('')

    try {
      const respuesta = await fetch(`${API_URL}/resenas/${id}`, {
        method: 'DELETE',
      })

      if (!respuesta.ok) {
        throw new Error('No se pudo borrar la reseña.')
      }

      setResenas((anteriores) => anteriores.filter((resena) => resena.id !== id))
      setMensaje('Reseña borrada.')
      tituloResenas.current?.focus()
    } catch {
      setErrorBorrado('No se pudo borrar la reseña. Inténtalo de nuevo.')
    } finally {
      setBorrando(null)
    }
  }

  function agregarResena(resenaCreada) {
    setResenas((anteriores) => [...anteriores, resenaCreada])
    setMensaje('Reseña agregada.')
  }

  return (
    <section className="resenas" aria-label="Reseñas">
      <h3 ref={tituloResenas} tabIndex={-1}>Reseñas de la ruta</h3>
      {cargando && <p className="estado" role="status">Cargando reseñas…</p>}
      {error && <p className="estado error" role="alert">{error}</p>}
      {errorBorrado && <p className="estado error" role="alert">{errorBorrado}</p>}
      <p className="estado" role="status">{mensaje}</p>

      {!cargando && !error && resenas.length === 0 && <p>Esta ruta todavía no tiene reseñas.</p>}

      <ul aria-label="Reseñas publicadas">
        {resenas.map((resena) => (
          <li className="resena" key={resena.id}>
            <strong>{resena.autor}</strong>
            <p>Nota: {resena.nota} de 5</p>
            {resena.comentario && <p>{resena.comentario}</p>}
            <button
              type="button"
              className="borrar"
              aria-label={`Borrar reseña de ${resena.autor}, número ${resena.id}`}
              disabled={borrando !== null}
              onClick={() => borrarResena(resena.id)}
            >
              {borrando === resena.id ? 'Borrando…' : 'Borrar'}
            </button>
          </li>
        ))}
      </ul>

      {!cargando && !error && <FormularioResena rutaId={rutaId} onCreada={agregarResena} />}
    </section>
  )
}

export default function Resenas({ rutaId }) {
  return <ResenasDeRuta key={rutaId} rutaId={rutaId} />
}
