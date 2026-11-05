import './App.css'
import ListaRutas from './components/ListaRutas.jsx'
import { rutas } from './datos/rutas.js'
import PiePagina from './components/PiePagina.jsx'
import Encabezado from './components/Encabezado.jsx'
import BannerPrincipal from './components/BannerPrincipal.jsx'

export default function App() {
  return (
    <>
      <Encabezado
        enlaces={['Inicio', 'Rutas', 'Contacto']}
        paginaActual="Inicio"
      />
      <main id="contenido-principal">
        <BannerPrincipal
          titulo="Rutas sostenibles de La Araucanía"
          subtitulo="Senderos y emprendimientos cerca de Temuco"
        />
        <ListaRutas rutas={rutas} />
      </main>
      <PiePagina />
    </>
  )
}
