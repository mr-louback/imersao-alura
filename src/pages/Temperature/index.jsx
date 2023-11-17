import { useState } from 'react'
import './style.css'


function Temperature() {
  const [value, setValue] = useState()
  const [valueTobeConverted, setValueTobeConverted] = useState()
  const [selectedCurrency, setSelectedCurrency] = useState('celsius')


  const handleRadioCurrency = (e) => {
    setSelectedCurrency(e.target.id)
    setValueTobeConverted()
  }
  function handleChange(e) {
    const valueSanitized = e.target.value.replace(/[^0-9.]/g, '')
    const valueFormatted = valueSanitized.includes('.', ',') ? parseFloat(valueSanitized).toFixed(1) : valueSanitized
    setValueTobeConverted(valueFormatted)
    setValue()

  }
  function handleClick() {
    switch (selectedCurrency) {
      case 'fahrenheit':
        const fahrenheit = (valueTobeConverted * 9 / 5) + 32
        setValue(fahrenheit)
        localStorage.setItem('@to-be-converted', valueTobeConverted.toString())
        localStorage.setItem('@current-name', selectedCurrency)
        localStorage.setItem('@content', fahrenheit.toString())
        break;
      case 'celsius':
        const celsius = (valueTobeConverted - 32) * 5 / 9
        setValue(celsius)
        localStorage.setItem('@to-be-converted', valueTobeConverted.toString())
        localStorage.setItem('@current-name', selectedCurrency)
        localStorage.setItem('@content', celsius.toString())
        break;
      default:
        alert('Você precisa selecionar uma moeda!')
        break;
    }
    setValue(Number(localStorage.getItem('@content')).toFixed(1).toString())
    setValueTobeConverted(localStorage.getItem('@to-be-converted'))
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
              defaultChecked
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
          <p>
            {
              (value == undefined || valueTobeConverted == undefined) ?
                '' :
                (valueTobeConverted <= 0) ?
                  'O número precisar ser maior que zero!' :
                  (selectedCurrency == 'celsius') ?
                    (`${valueTobeConverted}º ${selectedCurrency} é o mesmo que ${value}º fahrenheit.`) :
                    (selectedCurrency == 'fahrenheit') &&
                    (`${valueTobeConverted}º ${selectedCurrency} é o mesmo que ${value}º celsius.`)
            }
          </p>
        </div>
      </div>
    </div>
  )
}

export default Temperature