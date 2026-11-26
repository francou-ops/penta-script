import { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import './App.css'
import AvisoPublicacion from './components/AvisoPublicacion.jsx'
import Encabezado from './components/Encabezado.jsx'
import PiePagina from './components/PiePagina.jsx'
import Inicio from './paginas/Inicio.jsx'
import ListaRutas from './paginas/ListaRutas.jsx'
import DetalleRuta from './paginas/DetalleRuta.jsx'
import Emprendimientos from './paginas/Emprendimientos.jsx'
import NoEncontrada from './paginas/NoEncontrada.jsx'

export default function App() {
  const { pathname } = useLocation()
  const contenidoPrincipal = useRef(null)
  const rutaAnterior = useRef(pathname)

  useEffect(() => {
    // La orientación al volver con el historial sigue la misma regla que los enlaces.
    const restauracionAnterior = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'

    return () => {
      window.history.scrollRestoration = restauracionAnterior
    }
  }, [])

  useEffect(() => {
    const titulo = contenidoPrincipal.current?.querySelector('h1')
    document.title = `${titulo?.textContent.trim() || 'Inicio'} — EcoRuta Temuco`

    // Al navegar, el título de la nueva vista orienta al teclado y al lector.
    // La carga inicial conserva el recorrido desde el enlace de salto.
    if (rutaAnterior.current !== pathname) {
      titulo?.focus({ preventScroll: true })
      window.scrollTo(0, 0)
    }

    rutaAnterior.current = pathname
  }, [pathname])

  return (
    <>
      <Encabezado />
      <main id="contenido-principal" ref={contenidoPrincipal} tabIndex={-1}>
        <AvisoPublicacion />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/rutas" element={<ListaRutas />} />
          <Route path="/rutas/:id" element={<DetalleRuta />} />
          <Route path="/emprendimientos" element={<Emprendimientos />} />
          <Route path="*" element={<NoEncontrada />} />
        </Routes>
      </main>
      <PiePagina />
    </>
  )
}
