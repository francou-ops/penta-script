export default function Encabezado({ enlaces, paginaActual }) {
  return (
    <header className="cabecera" id="inicio">
      <a className="saltar-contenido" href="#contenido-principal">
        Saltar al contenido principal
      </a>
      <nav className="menu" aria-label="Navegación principal">
        <h1><a className="logo" href="#inicio">EcoRuta</a></h1>
        <ul className="enlaces">
          {enlaces.map((enlace) => (
            <li key={enlace}>
              <a
                href={'#' + enlace.toLowerCase()}
                className={enlace === paginaActual ? 'activo' : ''}
                aria-current={enlace === paginaActual ? 'page' : undefined}
              >
                {enlace}
              </a>
            </li>
          ))}
        </ul>
        <a className="boton-emergencia" href="#emergencia">Emergencia</a>
      </nav>
    </header>
  )
}
