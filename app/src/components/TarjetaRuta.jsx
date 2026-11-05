export default function TarjetaRuta({
  nombre,
  imagen,
  alt,
  distanciaKm,
  dificultad,
  accesible,
}) {
  return (
    <article className="tarjeta-ruta">
      <img src={imagen} alt={alt} />
      <h3>{nombre}</h3>
      <dl className="datos-ruta">
        <div>
          <dt>Distancia</dt>
          <dd>{distanciaKm} km</dd>
        </div>
        <div>
          <dt>Dificultad</dt>
          <dd>{dificultad}</dd>
        </div>
      </dl>
      {accesible && <span className="sello">Accesible</span>}
    </article>
  )
}
