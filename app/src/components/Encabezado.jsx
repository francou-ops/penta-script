import { Link, NavLink } from 'react-router'

// Encargo A: el menú ahora vive dentro del Encabezado y usa NavLink.
// NavLink cambia de vista sin recargar la página y marca con la clase
// "activo" el enlace de la página en la que estamos.
const enlaces = [
  { texto: 'Inicio', ruta: '/' },
  { texto: 'Rutas', ruta: '/rutas' },
  { texto: 'Emprendimientos', ruta: '/emprendimientos' },
]

function irASeccion(evento) {
  evento.preventDefault()
  const id = evento.currentTarget.hash.slice(1)
  const destino = document.getElementById(id)

  if (destino) {
    destino.focus({ preventScroll: true })
    destino.scrollIntoView({ block: 'start' })
  }
}

export default function Encabezado() {
  return (
    <header className="cabecera">
      <a className="saltar-contenido" href="#contenido-principal" onClick={irASeccion}>
        Saltar al contenido principal
      </a>
      <nav className="menu" aria-label="Navegación principal">
        <Link className="logo" to="/" aria-label="Ir al inicio de EcoRuta Temuco">EcoRuta</Link>
        <ul className="enlaces">
          {enlaces.map((enlace) => (
            <li key={enlace.ruta}>
              <NavLink
                to={enlace.ruta}
                end={enlace.ruta === '/'}
                className={({ isActive }) => (isActive ? 'activo' : '')}
              >
                {enlace.texto}
              </NavLink>
            </li>
          ))}
          <li><a href="#contacto" onClick={irASeccion}>Contacto</a></li>
        </ul>
      </nav>
    </header>
  )
}
