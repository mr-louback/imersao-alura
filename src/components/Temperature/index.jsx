import { useEffect, useState } from 'react'
import api from '../../services/api'
import './style.css'


function Temperature() {
  const [valueDollar, setValueDollar] = useState()
  const [valueBitcoin, setValueBitcoin] = useState()
  const [valueTobeConverted, setValueTobeConverted] = useState()
  const [valueConverted, setValueConverted] = useState()
  const [selectedCurrency, setSelectedCurrency] = useState('dollar')

  useEffect(() => {
    async function loadDollar() {
      const res = await api.get()
      const datadollar = Number(res.data.USDBRL.bid).toFixed(2)
      const databitcoin = Number(res.data.BTCBRL.bid).toFixed(2)
      setValueDollar(datadollar)
      setValueBitcoin(databitcoin)
    }
    loadDollar()
  }, [])
  const handleRadioCurrency = (e) => {
    setSelectedCurrency(e.target.id)
  }
  function handleChange(e) {
    const valueSanitized = e.target.value.replace(/[^0-9.]/g, '')
    const valueFormatted = valueSanitized.includes('.', ',') ? parseFloat(valueSanitized).toFixed(2) : valueSanitized
    setValueTobeConverted(valueFormatted)
  }
  function handleClick() {
    switch (selectedCurrency) {
      case 'bitcoin':
        const convertedBit = valueTobeConverted / valueBitcoin
        localStorage.setItem('@to-be-converted', valueTobeConverted.toString())
        localStorage.setItem('@current-name', selectedCurrency)
        localStorage.setItem('@converted', convertedBit.toFixed(8).toString())
        break;
      case 'dollar':
        const convertedDollar = valueTobeConverted / valueDollar
        localStorage.setItem('@to-be-converted', valueTobeConverted.toString())
        localStorage.setItem('@current-name', selectedCurrency)
        localStorage.setItem('@converted', convertedDollar.toFixed(2).toString())
        break;
      default:
        alert('Você precisa selecionar uma moeda!')
        break;
    }
    setValueConverted(localStorage.getItem('@converted'))

  }
  return (
    <div className='content-coin'>
      <div className='container'>
        <h2>Valor atual do {selectedCurrency} hoje é de $ {(selectedCurrency === 'dollar') ? valueDollar : valueBitcoin}</h2>
        <div>
          <span>Escolha a moeda para qual moeda voce deseja converter</span>
        </div>
        <div className='input-container'>
          <label htmlFor="bitcoin">
            Real para Bitcoin
            <input
              type="radio"
              name="bitcoin"
              id="bitcoin"
              checked={selectedCurrency === 'bitcoin'}
              onChange={handleRadioCurrency}
              defaultChecked
            />
          </label>
          <label htmlFor="dollar">
            <input
              type="radio"
              name="dollar"
              id="dollar"
              checked={selectedCurrency === 'dollar'}
              onChange={handleRadioCurrency}
            />
            Real para Dollar
          </label>
          <div>
            <span>Por favor digite o valor em reais a ser convertido</span>
          </div>
          <input
            type='number'
            onChange={handleChange}
            name='valueInReal'
            placeholder='Valor a ser convertido'
          />
          <button
            onClick={handleClick}
          >Converter"
          </button>
        </div>

        <div className='result-convertion'>
          {
            `R$ ${Number(localStorage.getItem('@to-be-converted')).toFixed(2) ?? '0,00'} em ${selectedCurrency ?? 'moeda'} é $${valueConverted ?? '0,00'}`
          }
        </div>
      </div>
    </div>
  )
}

export default Temperature
