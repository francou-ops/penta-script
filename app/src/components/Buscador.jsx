export default function Buscador({ placeholder }) {
  return (
    <div className="buscador">
      <label htmlFor="buscar-ruta">Buscar una ruta</label>
      <input id="buscar-ruta" type="search" placeholder={placeholder} />
      <button type="button">Buscar</button>
    </div>
  )
}
