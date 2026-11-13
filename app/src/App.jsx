import { Route, Routes } from 'react-router'
import './App.css'
import Encabezado from './components/Encabezado.jsx'
import PiePagina from './components/PiePagina.jsx'
import Inicio from './paginas/Inicio.jsx'
import Rutas from './paginas/Rutas.jsx'
import DetalleRuta from './paginas/DetalleRuta.jsx'
import Emprendimientos from './paginas/Emprendimientos.jsx'
import NoEncontrada from './paginas/NoEncontrada.jsx'

export default function App() {
  const enlaces = ['Inicio', 'Rutas', 'Emprendimientos', 'Contacto']

  return (
    <>
      <Encabezado enlaces={enlaces} paginaActual="Inicio" />
      <main id="contenido-principal">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/rutas" element={<Rutas />} />
          <Route path="/rutas/:id" element={<DetalleRuta />} />
          <Route path="/emprendimientos" element={<Emprendimientos />} />
          <Route path="*" element={<NoEncontrada />} />
        </Routes>
      </main>
      <PiePagina />
    </>
  )
}
