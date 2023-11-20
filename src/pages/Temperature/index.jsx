import {  useState } from 'react'
import './style.css'


function Temperature() {
  const [valueTobeConverted, setValueTobeConverted] = useState()
  const [selectedCurrency, setSelectedCurrency] = useState('celsius')
  const [message, setMessage] = useState()
  function handleRadioCurrency(e) {
    setSelectedCurrency(e.target.id)
    setValueTobeConverted()
    setMessage()
  }
  function handleChange(e) {
    const valueSanitized = e.target.value
    setValueTobeConverted(valueSanitized)
    setMessage()

  }
  function handleClick() {
    if (valueTobeConverted <= 0) {
      setMessage('O número precisar ser maior que zero!')
    } else if (valueTobeConverted !== undefined) {
      switch (selectedCurrency) {
        case 'celsius':
          const fahrenheit = (valueTobeConverted * 9 / 5) + 32
          localStorage.setItem('@to-be-converted', valueTobeConverted.toString())
          localStorage.setItem('@current-name', selectedCurrency)
          localStorage.setItem('@content', fahrenheit.toString())
          setMessage(`${valueTobeConverted}º ${selectedCurrency} é o mesmo que ${Number(localStorage.getItem('@content')).toFixed(1).toString()}º fahrenheit.`)
          setValueTobeConverted(localStorage.getItem('@to-be-converted'))
          break;
        case 'fahrenheit':
          const celsius = (valueTobeConverted - 32) * 5 / 9
          localStorage.setItem('@to-be-converted', valueTobeConverted.toString())
          localStorage.setItem('@current-name', selectedCurrency)
          localStorage.setItem('@content', celsius.toString())
          setMessage(`${valueTobeConverted}º ${selectedCurrency} é o mesmo que ${Number(localStorage.getItem('@content')).toFixed(1).toString()}º celsius.`)
          setValueTobeConverted(localStorage.getItem('@to-be-converted'))
          break;
        default:
          alert('Você precisa selecionar uma moeda!')
          break;
      }
    }
  }
  return (
    <div className='content-temperature'>
      <div className='container-temperature'>
        <h2>Conversor Temperatura</h2>
        <div className='input-temperature'>
          <label htmlFor="fahrenheit">

            <input
              type="radio"
              name="fahrenheit"
              id="fahrenheit"
              checked={selectedCurrency === 'fahrenheit'}
              onChange={handleRadioCurrency}
            /> Fahrenheit
          </label>
          <label htmlFor="celsius">
            <input
              type="radio"
              name="celsius"
              id="celsius"
              checked={selectedCurrency === 'celsius'}
              onChange={handleRadioCurrency}
            />
            Celsius
          </label>
          <div>
            <span>Para {selectedCurrency}.</span>
          </div>
          <div className="value">
            <input
              type='number'
              onChange={handleChange}
              name='valueInReal'
              placeholder='Valor a ser convertido'
            />
            <button
              onClick={handleClick}
            >Converter
            </button>
          </div>
        </div>
        <div className='res-temperature'>
          <p>{message}</p>
        </div>
      </div>
    </div>
  )
}

export default Temperature