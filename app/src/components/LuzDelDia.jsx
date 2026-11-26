import { useEffect, useState } from 'react'

const URL_LUZ_DIA =
  'https://api.open-meteo.com/v1/forecast' +
  '?latitude=-39.42&longitude=-71.93' +
  '&daily=sunrise,sunset' +
  '&timezone=America/Santiago' +
  '&forecast_days=1'

function extraerHora(fechaIso) {
  if (typeof fechaIso !== 'string' || !fechaIso.includes('T')) {
    return '--:--'
  }
  return fechaIso.split('T')[1]
}

export default function LuzDelDia() {
  const [luz, setLuz] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function cargarLuzDelDia() {
      try {
        const respuesta = await fetch(URL_LUZ_DIA)
        if (!respuesta.ok) {
          throw new Error(`Open-Meteo respondió ${respuesta.status}`)
        }
        const datos = await respuesta.json()
        const amanecer = datos?.daily?.sunrise?.[0]
        const atardecer = datos?.daily?.sunset?.[0]
        if (!amanecer || !atardecer) {
          throw new Error('Open-Meteo devolvió datos incompletos')
        }
        setLuz({
          amanecer: extraerHora(amanecer),
          atardecer: extraerHora(atardecer),
        })
      } catch {
        setError('No pudimos cargar los horarios de luz del día. Revisa tu conexión.')
      } finally {
        setCargando(false)
      }
    }
    cargarLuzDelDia()
  }, [])

  return (
    <section className="clima" aria-labelledby="titulo-luz-dia">
      <h2 id="titulo-luz-dia">Luz del día en la ruta</h2>
      {cargando && <p className="estado" role="status">Cargando luz del día…</p>}
      {error && <p className="estado error" role="alert">{error}</p>}
      {luz && (
        <>
          <p>Salida del sol: {luz.amanecer} hrs</p>
          <p>Puesta del sol: {luz.atardecer} hrs</p>
          <p>Planifica tu regreso antes de las {luz.atardecer} hrs para evitar caminar sin luz natural.</p>
          <p className="fuente">
            Datos de <a href="https://open-meteo.com/">Open-Meteo</a>
          </p>
        </>
      )}
    </section>
  )
}
