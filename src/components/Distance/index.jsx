import { useState } from 'react'
import './style.css'

function Distance() {

  const [unidadeTime, setunidadeTime] = useState('')
  const [unidadeDistance, setunidadeDistance] = useState()

  function handleChange(e) {
    e.preventDefault()
    const time = e.target.value
    const timeInSeconds = Number(e.target.value) * 60 * 60 * 24 * 365
    const speedOfLight = 299792458
    const distance = timeInSeconds * speedOfLight
    setunidadeTime(localStorage.setItem('time', time.toString()))
    setunidadeDistance(localStorage.setItem('distance', distance.toString()))
  }
  function handleClick() {
    setunidadeDistance(parseFloat(localStorage.getItem('distance')).toLocaleString().toString())
    setunidadeTime(localStorage.getItem('time'))
  }
  return (
    <>
      <div className='content-distance'>
        <div className="container">
          <h1>À 299.792.458 M/s (velocidade da luz) </h1>
          <div>Que distância você percorre, por um(1) ano ou mais?</div>
          <div>Vamos descobrir.</div>
          <div>Cada unidade representa um(1) ano.</div>
          <div className="input-container">
            <input type="number" onChange={handleChange} name="time" id="time" placeholder="anos/luz" />
            <button onClick={handleClick} >Calcular</button>
          </div>
          <div id='res'>
            <p>(Obs) Sem contar a força G</p>
            <p>
              {
                (unidadeTime == undefined) ? '' : (unidadeTime <= 0) ? 'O número precisar ser maior que zero!' :
                  (unidadeTime == 1) ?
                  (`Em ${unidadeTime} ano a distância total será de ${unidadeDistance} metros.`)
                  :
                  (`Em ${unidadeTime} anos a distância total será de ${unidadeDistance} metros.`)
              }
            </p>
          </div>
        </div>
      </div>

    </>
  )
}
export default Distance 
