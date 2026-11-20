import { useState, useEffect } from 'react'
import TarjetaRuta from '../components/TarjetaRuta.jsx'
import { API_URL } from '../api.js'

export default function ListaRutas() {
  // ── PASO 1 · Preparar el estado ─────────────────────
  const [rutas, setRutas] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')
  const [dificultad, setDificultad] = useState('todas')

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

  const rutasFiltradas = rutas.filter((ruta) => {
    const dificultadRuta = ruta.dificultad
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')

    return dificultad === 'todas' || dificultadRuta === dificultad
  })

  return (
    <section className="seccion-rutas" aria-labelledby="titulo-lista-rutas">
      <h1 id="titulo-lista-rutas" tabIndex={-1}>Rutas para descubrir</h1>
      <p className="aviso-imagenes">Fotografías ilustrativas de paisajes.</p>

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

      <p role="status">Rutas encontradas: {rutasFiltradas.length}</p>

      {rutasFiltradas.length === 0 && (
        <p>No hay rutas con esta dificultad.</p>
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
