import { useEffect, useState } from 'react'
import './style.css'

function Distance() {
  const [unidadeTime, setunidadeTime] = useState()
  const [unidadeDistance, setunidadeDistance] = useState()
  const [message, setMessage] = useState()
  useEffect(() => {
    if (unidadeTime <= 0) {
      setMessage('O número precisar ser maior que zero!')
    } else if (unidadeTime !== undefined) {
      if (unidadeTime == 1) {
        setMessage(`Em ${unidadeTime} ano a velocidade da luz, a distância total será de ${unidadeDistance} metros.`)
      } else {
        setMessage(`Em ${unidadeTime} anos a velocidade da luz, a distância total será de ${unidadeDistance} metros.`)
      }
    }
  }, [unidadeDistance])
  function handleChange(e) {
    let time = e.target.value
    let timeInSeconds = Number(time) * 60 * 60 * 24 * 365
    const speedOfLight = 299792458
    const distance = timeInSeconds * speedOfLight
    setunidadeTime(localStorage.setItem('time', time.toString()))
    setunidadeDistance(localStorage.setItem('distance', distance.toString()))
    setMessage()
  }
  function handleClick() {
    setunidadeDistance(parseFloat(localStorage.getItem('distance')).toLocaleString().toString())
    setunidadeTime(localStorage.getItem('time'))
  }
  return (
    <div className='content-distance'>
      <div className="container-distance">
        <h1>À 299.792.458 M/s (velocidade da luz) </h1>
        <div>Que distância você percorre, por um(1) ano ou mais?</div>
        <div>Vamos descobrir!</div>
        <div>Cada unidade representa um(1) ano.</div>
        <div className="input-distance">
          <input type="number" onChange={handleChange} name="time" id="time" placeholder="anos/luz" />
          <button onClick={handleClick} >Calcular</button>
        </div>
        <div className='res-distance'>
          <p>(Obs) Sem contar a força G</p>
          <p>{message}</p>
        </div>
      </div>
    </div>
  )
}
export default Distance 
