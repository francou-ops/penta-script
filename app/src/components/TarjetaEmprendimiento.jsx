export default function TarjetaEmprendimiento({
  nombre,
  rubro,
  comuna,
}) {
  return (
    <article className="tarjeta-negocio">
      <p>{rubro}</p>
      <h3>{nombre}</h3>
      <p className="comuna-emprendimiento">Comuna: {comuna}</p>
    </article>
  );
}
