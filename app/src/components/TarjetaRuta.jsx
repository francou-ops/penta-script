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
  nivelTitulo = 3,
}) {
  const Titulo = nivelTitulo === 2 ? 'h2' : 'h3'

  return (
    <article className="tarjeta-ruta">
      <img src={imagen} alt={alt} />
      <Titulo>{nombre}</Titulo>
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
          Ver detalle de {nombre}
        </Link>
      )}
    </article>
  )
}
