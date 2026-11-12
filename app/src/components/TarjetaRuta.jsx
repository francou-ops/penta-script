import { Link } from 'react-router'

export default function TarjetaRuta({
  id,
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
      {id !== undefined && (
        <Link className="enlace-ruta" to={`/rutas/${id}`}>
          Ver detalle
        </Link>
      )}
    </article>
  )
}
