import { useEffect, useState } from 'react'
import ListaEmprendimientos from '../components/ListaEmprendimientos.jsx'
import { API_URL } from '../api.js'

export default function Emprendimientos() {
  const [emprendimientos, setEmprendimientos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')
  const [comuna, setComuna] = useState('todas')

  useEffect(() => {
    async function cargarEmprendimientos() {
      try {
        const respuesta = await fetch(`${API_URL}/emprendimientos`)
        if (!respuesta.ok) {
          throw new Error(`La API respondió ${respuesta.status}`)
        }
        setEmprendimientos(await respuesta.json())
      } catch {
        setError('No se pudieron cargar los emprendimientos. ¿Está corriendo la API?')
      } finally {
        setCargando(false)
      }
    }
    cargarEmprendimientos()
  }, [])

  const filtrados = emprendimientos.filter(
    (emprendimiento) => comuna === 'todas' || emprendimiento.comuna === comuna,
  )

  return (
    <section className="seccion-rutas">
      <h1 tabIndex={-1}>Emprendimientos</h1>

      {cargando && <p className="estado" role="status">Cargando emprendimientos…</p>}
      {error && <p className="estado error" role="alert">{error}</p>}

      {!cargando && !error && (
        <>
          <div className="filtros">
            <label htmlFor="filtro-comuna">Filtrar por comuna</label>
            <select
              id="filtro-comuna"
              value={comuna}
              onChange={(evento) => setComuna(evento.target.value)}
            >
              <option value="todas">Todas</option>
              <option value="Pucón">Pucón</option>
              <option value="Villarrica">Villarrica</option>
            </select>
          </div>

          <ListaEmprendimientos emprendimientos={filtrados} />
        </>
      )}
    </section>
  )
}
