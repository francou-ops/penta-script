import { useState } from 'react'
import { API_URL } from '../api.js'

export default function FormularioResena({ rutaId, onCreada }) {
  const [autor, setAutor] = useState('')
  const [nota, setNota] = useState('5')
  const [comentario, setComentario] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [errorValidacion, setErrorValidacion] = useState('')
  const [enviando, setEnviando] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setErrorValidacion('')
    setMensaje('')

    const autorLimpio = autor.trim()
    if (!autorLimpio) {
      setErrorValidacion('El nombre del autor es obligatorio.')
      return
    }
    if (autorLimpio.length > 20) {
      setErrorValidacion('El autor no puede superar los 20 caracteres.')
      return
    }

    const notaNum = Number(nota)
    if (!notaNum || notaNum < 1 || notaNum > 5 || !Number.isInteger(notaNum)) {
      setErrorValidacion('La nota debe ser un número entero entre 1 y 5.')
      return
    }

    if (comentario && comentario.length > 300) {
      setErrorValidacion('El comentario no puede superar los 300 caracteres.')
      return
    }

    setEnviando(true)

    try {
      const cuerpo = {
        rutaId: Number(rutaId),
        autor: autorLimpio,
        nota: notaNum,
      }

      if (comentario.trim()) {
        cuerpo.comentario = comentario.trim()
      }

      const respuesta = await fetch(`${API_URL}/resenas`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cuerpo),
      })

      if (respuesta.status !== 201) {
        throw new Error(`La API respondió ${respuesta.status}`)
      }

      const nuevaResena = await respuesta.json()

      // Limpiar formulario
      setAutor('')
      setNota('5')
      setComentario('')
      setMensaje('¡Tu reseña ha sido enviada con éxito!')

      // Avisar al componente padre
      if (typeof onCreada === 'function') {
        onCreada(nuevaResena)
      }
    } catch {
      setErrorValidacion('No se pudo guardar la reseña. ¿Está corriendo la API?')
    } finally {
      setEnviando(false)
    }
  }

  return (
    <form className="formulario formulario-resena" onSubmit={handleSubmit} noValidate>
      <h4>Deja tu reseña</h4>

      {mensaje && (
        <p className="mensaje mensaje-exito" role="status">
          {mensaje}
        </p>
      )}

      {errorValidacion && (
        <p className="mensaje estado error mensaje-error" role="alert">
          {errorValidacion}
        </p>
      )}

      <div>
        <label htmlFor="autor">Tu nombre (máx. 20 caracteres):</label>
        <input
          id="autor"
          type="text"
          value={autor}
          maxLength={20}
          required
          onChange={(e) => setAutor(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="nota">Nota (1 a 5):</label>
        <select
          id="nota"
          value={nota}
          onChange={(e) => setNota(e.target.value)}
        >
          <option value="1">1 - Muy mala</option>
          <option value="2">2 - Mala</option>
          <option value="3">3 - Regular</option>
          <option value="4">4 - Buena</option>
          <option value="5">5 - Excelente</option>
        </select>
      </div>

      <div>
        <label htmlFor="comentario">Comentario (opcional, máx. 300 caracteres):</label>
        <textarea
          id="comentario"
          rows="3"
          value={comentario}
          maxLength={300}
          onChange={(e) => setComentario(e.target.value)}
        />
      </div>

      <button className="boton" type="submit" disabled={enviando}>
        {enviando ? 'Enviando…' : 'Enviar reseña'}
      </button>
    </form>
  )
}
