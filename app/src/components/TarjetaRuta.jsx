import { Link } from 'react-router'

// Encargo D: Enlace a DetalleRuta (/rutas/:id)
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
      {/* Criterio C1 / Encargo D: Enlace con Link hacia /rutas/:id */}
      {id !== undefined && (
        <Link className="enlace-ruta" to={`/rutas/${id}`}>
          Ver detalle
        </Link>
      )}
    </article>
  )
}
