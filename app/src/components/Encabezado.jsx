import { Link, NavLink } from 'react-router'

// Encargo A: el menú ahora vive dentro del Encabezado y usa NavLink.
// NavLink cambia de vista sin recargar la página y marca con la clase
// "activo" el enlace de la página en la que estamos.
const enlaces = [
  { texto: 'Inicio', ruta: '/' },
  { texto: 'Rutas', ruta: '/rutas' },
  { texto: 'Emprendimientos', ruta: '/emprendimientos' },
]

export default function Encabezado() {
  return (
    <header className="cabecera">
      <nav className="menu" aria-label="Navegación principal">
        <h1><Link className="logo" to="/">EcoRuta</Link></h1>
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
        </ul>
      </nav>
    </header>
  )
}
