import Buscador from './Buscador.jsx'

export default function BannerPrincipal({ titulo, subtitulo }) {
  return (
    <section className="presentacion" aria-labelledby="titulo-principal">
      <h1 id="titulo-principal" className="titulo-inicio" tabIndex={-1}>{titulo}</h1>
      <p>{subtitulo}</p>
      <Buscador placeholder="Ejemplo: Sendero Los Lagos" />
    </section>
  )
}
