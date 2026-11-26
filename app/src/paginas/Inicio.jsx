import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import BannerPrincipal from '../components/BannerPrincipal.jsx'
import ListaRutas from '../components/ListaRutas.jsx'
import LuzDelDia from '../components/LuzDelDia.jsx'
import { API_URL } from '../api.js'

export default function Inicio() {
  const [rutas, setRutas] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function cargarRutas() {
      try {
        const respuesta = await fetch(`${API_URL}/rutas`)
        if (!respuesta.ok) {
          throw new Error(`La API respondió ${respuesta.status}`)
        }
        setRutas(await respuesta.json())
      } catch {
        setError('No se pudieron cargar las rutas. ¿Está corriendo la API?')
      } finally {
        setCargando(false)
      }
    }
    cargarRutas()
  }, [])

  return (
    <>
      <BannerPrincipal
        titulo="Descubre la Araucanía sustentable"
        subtitulo="Explora rutas reales del sur de Chile y encuentra servicios cercanos para preparar tu recorrido."
      />

      {cargando && <p className="estado estado-inicio" role="status">Cargando rutas…</p>}
      {error && <p className="estado estado-inicio error" role="alert">{error}</p>}
      {!cargando && !error && <ListaRutas rutas={rutas.slice(0, 3)} />}

      <LuzDelDia />

      <p>
        <Link to="/rutas" className="enlace-ruta">
          Ver todas las rutas
        </Link>
      </p>
    </>
  )
}
