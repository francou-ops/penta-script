import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router'
import TarjetaRuta from '../components/TarjetaRuta.jsx'
import { API_URL } from '../api.js'

function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .replace(/\s+/g, ' ')
}

export default function ListaRutas() {
  // ── PASO 1 · Preparar el estado ─────────────────────
  const [rutas, setRutas] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')
  const [dificultad, setDificultad] = useState('todas')
  const [parametrosBusqueda] = useSearchParams()
  // La URL conserva la búsqueda al recargar y al volver con el historial.
  const busqueda = (parametrosBusqueda.get('buscar') || '').trim()

  // ── PASO 2 · Programar la carga (después de dibujar) ─
  useEffect(() => {
    async function cargarRutas() {
      // ── PASO 3 · Pedir y guardar ─────────────────────
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

  // ── PASO 4 · Dibujar según el estado ────────────────
  if (cargando) {
    return (
      <section className="seccion-rutas" aria-labelledby="titulo-lista-rutas">
        <h1 id="titulo-lista-rutas" tabIndex={-1}>Rutas para descubrir</h1>
        <p className="lista estado" role="status">Cargando rutas…</p>
      </section>
    )
  }

  if (error) {
    return (
      <section className="seccion-rutas" aria-labelledby="titulo-lista-rutas">
        <h1 id="titulo-lista-rutas" tabIndex={-1}>Rutas para descubrir</h1>
        <p className="lista estado error" role="alert">{error}</p>
      </section>
    )
  }

  const nombreBuscado = normalizarTexto(busqueda)

  const rutasFiltradas = rutas.filter((ruta) => {
    const coincideDificultad = dificultad === 'todas' || normalizarTexto(ruta.dificultad) === dificultad
    const coincideNombre = normalizarTexto(ruta.nombre).includes(nombreBuscado)

    return coincideDificultad && coincideNombre
  })

  return (
    <section className="seccion-rutas" aria-labelledby="titulo-lista-rutas">
      <h1 id="titulo-lista-rutas" tabIndex={-1}>Rutas para descubrir</h1>
      <p className="aviso-imagenes">Fotografías ilustrativas de paisajes.</p>
      {busqueda && <p>Resultados para «{busqueda}».</p>}

      <div className="filtros">
        <label htmlFor="filtro-dificultad">Filtrar por dificultad</label>
        <select
          id="filtro-dificultad"
          value={dificultad}
          onChange={(evento) => setDificultad(evento.target.value)}
        >
          <option value="todas">Todas</option>
          <option value="facil">Fácil</option>
          <option value="moderada">Moderada</option>
          <option value="dificil">Difícil</option>
        </select>
      </div>

      <p>
        <Link to="/rutas" className="enlace-ruta" onClick={() => setDificultad('todas')}>
          Limpiar filtros
        </Link>
      </p>

      <p role="status">Rutas encontradas: {rutasFiltradas.length}</p>

      {rutasFiltradas.length === 0 && (
        <p>
          {busqueda
            ? 'No hay rutas que coincidan con la búsqueda y la dificultad seleccionada.'
            : 'No hay rutas con esta dificultad.'}
        </p>
      )}

      <div className="rutas-grid">
        {rutasFiltradas.map((ruta) => (
          <TarjetaRuta
            key={ruta.id}
            id={ruta.id}
            nombre={ruta.nombre}
            imagen={ruta.imagen}
            alt={ruta.alt}
            distanciaKm={ruta.distanciaKm}
            dificultad={ruta.dificultad}
            accesible={ruta.accesible}
            nivelTitulo={2}
          />
        ))}
      </div>
    </section>
  )
}
