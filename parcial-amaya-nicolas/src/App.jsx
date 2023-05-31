import './styles/App.css'
import React, { useState } from 'react'
import Card from './Components/Card'
import Form from './components/Form'

function App() {

  const [nombre, setNombre] = useState('')
  const [libro, setLibro] = useState('')
  const [mensajeError, setMensajeError] = useState('')
  const [show, setShow] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (nombre === undefined || nombre === null || nombre.length <= 3 ||
      libro === undefined || libro === null || libro.length <= 6) {
      setMensajeError('Por favor chequea que la información sea correcta')
      setShow(false)
    }
    else {
      setMensajeError('')
      setShow(true)
    }
  }


  return (
    <div className='app'>
      <h2>Eliga su libro favorito</h2>
      <Form setNombre={setNombre} setLibro={setLibro} handleSubmit={handleSubmit} />
      {show ? <Card nombre={nombre} libro={libro} /> : <h3 style={{ color: 'red' }}>{mensajeError}</h3>}
    </div>
  )
}

export default App
