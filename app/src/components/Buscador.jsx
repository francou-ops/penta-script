import { useState } from 'react'
import { useNavigate } from 'react-router'

export default function Buscador({ placeholder }) {
  const [busqueda, setBusqueda] = useState('')
  const navigate = useNavigate()

  function buscar(evento) {
    evento.preventDefault()
    const texto = busqueda.trim()
    const parametros = new URLSearchParams()

    if (texto) {
      parametros.set('buscar', texto)
    }

    navigate({
      pathname: '/rutas',
      search: texto ? `?${parametros.toString()}` : '',
    })
  }

  return (
    <form className="buscador" role="search" aria-label="Buscar rutas por nombre" onSubmit={buscar}>
      <label htmlFor="buscar-ruta">Buscar una ruta</label>
      <input
        id="buscar-ruta"
        name="buscar"
        type="search"
        placeholder={placeholder}
        value={busqueda}
        onChange={(evento) => setBusqueda(evento.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  )
}
