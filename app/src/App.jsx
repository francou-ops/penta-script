import './App.css'
import BannerPrincipal from './components/BannerPrincipal.jsx'
import Encabezado from './components/Encabezado.jsx'
import ListaEmprendimientos from './components/ListaEmprendimientos.jsx'
import ListaRutas from './components/ListaRutas.jsx'
import PiePagina from './components/PiePagina.jsx'
import { emprendimientos } from './datos/emprendimientos.js'
import { rutas } from './datos/rutas.js'

export default function App() {
  const enlaces = ['Inicio', 'Rutas', 'Emprendimientos', 'Contacto']

  return (
    <>
      <Encabezado enlaces={enlaces} paginaActual="Inicio" />
      <main id="contenido-principal">
        <BannerPrincipal
          titulo="Descubre la Araucanía sustentable"
          subtitulo="Explora rutas reales del sur de Chile y encuentra servicios cercanos para preparar tu recorrido."
        />
        <ListaRutas rutas={rutas} />
        <ListaEmprendimientos emprendimientos={emprendimientos} />
      </main>
      <PiePagina />
    </>
  )
}
