import { useState } from 'react'
import TarjetaRuta from '../components/TarjetaRuta.jsx'
import { rutas } from '../datos/rutas.js'

export default function ListaRutas() {
  const [dificultad, setDificultad] = useState('todas')

  const rutasFiltradas = rutas.filter((ruta) => {
    const dificultadRuta = ruta.dificultad
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')

    return dificultad === 'todas' || dificultadRuta === dificultad
  })

  return (
    <section className="seccion-rutas" aria-labelledby="titulo-lista-rutas">
      <h2 id="titulo-lista-rutas">Rutas para descubrir</h2>

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
          />
        ))}
      </div>
    </section>
  )
}
