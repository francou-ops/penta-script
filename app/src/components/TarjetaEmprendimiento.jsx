export default function TarjetaEmprendimiento({
  nombre, // "Artesanías de Pucón"
  rubro,  // "Artesanía local"
  enlace, // vista??
}) {
  return (
    <article className="tarjeta-emprendimiento">
      <p>{rubro}</p>
      <h3>
        <a href={enlace}>{nombre}</a>
      </h3>
    </article>
  );
}
