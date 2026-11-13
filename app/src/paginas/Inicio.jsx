import { Link } from 'react-router'
import BannerPrincipal from '../components/BannerPrincipal.jsx'
import ListaRutas from '../components/ListaRutas.jsx'
import { rutas } from '../datos/rutas.js'

export default function Inicio() {
  return (
    <>
      <BannerPrincipal
        titulo="Descubre la Araucanía sustentable"
        subtitulo="Explora rutas reales del sur de Chile y encuentra servicios cercanos para preparar tu recorrido."
      />
      <ListaRutas rutas={rutas.slice(0, 3)} />
      <p>
        <Link to="/rutas" className="enlace-ruta">
          Ver todas las rutas
        </Link>
      </p>
    </>
  )
}
