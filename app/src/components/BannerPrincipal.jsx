import Buscador from './Buscador.jsx'

export default function BannerPrincipal({ titulo, subtitulo }) {
  return (
    <section className="presentacion" aria-labelledby="titulo-principal">
      <h2 id="titulo-principal">{titulo}</h2>
      <p>{subtitulo}</p>
      <Buscador placeholder="Ejemplo: Sendero Los Lagos" />
    </section>
  )
}
