import './App.css'
import ListaRutas from './components/ListaRutas.jsx'
import { rutas } from './datos/rutas.js'
import PiePagina from './components/PiePagina.jsx'
import Encabezado from './components/Encabezado.jsx'
import BannerPrincipal from './components/BannerPrincipal.jsx'
import ListaEmprendimientos from './components/ListaEmprendimientos.jsx'
import { emprendimientos } from './datos/emprendimientos.js'

export default function App() {
  return (
    <>
      <Encabezado
        enlaces={['Inicio', 'Rutas', 'Emprendimientos', 'Contacto']}
        paginaActual="Inicio"
      />
      <main id="contenido-principal" tabIndex={-1}>
        <BannerPrincipal
          titulo="Rutas sostenibles de La Araucanía"
          subtitulo="Senderos y emprendimientos cerca de Temuco"
        />
        <ListaRutas rutas={rutas} />
        <ListaEmprendimientos emprendimientos={emprendimientos} />
        <section className="emergencia-react" id="emergencia" aria-labelledby="titulo-emergencia">
          <h2 id="titulo-emergencia">Contacto de emergencia</h2>
          <p>Si ocurre una emergencia durante el recorrido, comunícate con los servicios de emergencia.</p>
          <a href="tel:133">Llamar al 133</a>
        </section>
      </main>
      <PiePagina />
    </>
  )
}
