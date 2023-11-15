import { useState } from 'react'
import './style.css'

function Distance() {

  const [unidadeTime, setunidadeTime] = useState()
  const [unidadeDistance, setunidadeDistance] = useState()

  function handleChange(e) {
    e.preventDefault()
    const time = Number(e.target.value)
    const distance = time * 299792458
    setunidadeTime(localStorage.setItem('time', time.toString()))
    setunidadeDistance(localStorage.setItem('distance', distance.toString()))
  }
  function handleClick() {
    setunidadeDistance(localStorage.getItem('distance'))
    setunidadeTime(localStorage.getItem('time'))
  }
  return (
    <>
      <div className='content-distance'>
        <div className="container">
          <h1>Conversor de distância</h1>
          <div>Por um determinado tempo à velocidade da luz</div>
          <div>você terá percorrido que distância?</div>
          <div className="input-container">
            <input type="number" onChange={handleChange} name="time" id="time" placeholder='Tempo em minutos' />
            <button onClick={handleClick} >Calcular</button>
          </div>
          <div id='res'>
            <h2>
              Na velocidade da luz, você irá percorrer...
            </h2>
            <p>
              {` Km ${unidadeDistance ?? 0} em ${unidadeTime ?? 0} minutos.`}
            </p>
          </div>
        </div>
      </div>

    </>
  )
}
export default Distance 
