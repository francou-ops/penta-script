import { Link } from 'react-router'

// Encargo A: se muestra cuando la dirección no existe (ruta "*").
export default function NoEncontrada() {
  return (
    <section className="seccion-rutas">
      <h2>Página no encontrada</h2>
      <p>La dirección que escribiste no existe en EcoRuta.</p>
      <Link to="/" className="boton">Volver al inicio</Link>
    </section>
  )
}
