import TarjetaEmprendimiento from "./TarjetaEmprendimiento.jsx";

export default function ListaEmprendimientos({ emprendimientos }) {
  return (
    <section className="negocios" id="emprendimientos" aria-labelledby="titulo-emprendimientos">
      <h2 id="titulo-emprendimientos">Tiendas y servicios cercanos</h2>

      {emprendimientos.map((emprendimiento) => (
        <TarjetaEmprendimiento
          key={emprendimiento.id}
          nombre={emprendimiento.nombre}
          rubro={emprendimiento.rubro}
          enlace={emprendimiento.enlace}
        />
      ))}
    </section>
  );
}
