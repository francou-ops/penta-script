export default function TarjetaEmprendimiento({
  nombre,
  rubro,
  comuna,
  enlace,
}) {
  return (
    <article className="tarjeta-negocio">
      <p>{rubro}</p>
      <h3>
        <a href={enlace}>{nombre}</a>
      </h3>
      <p className="comuna-emprendimiento">Comuna: {comuna}</p>
    </article>
  );
}
