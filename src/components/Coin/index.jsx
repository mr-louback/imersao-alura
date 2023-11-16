import { useEffect, useState } from 'react'
import api from '../../services/api'
import './style.css'


function Coin() {
  const [valueDollar, setValueDollar] = useState()
  const [valueBitcoin, setValueBitcoin] = useState()
  const [valueTobeConverted, setValueTobeConverted] = useState('')
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
    setValueConverted()
  }

  function handleChange(e) {
    const valueSanitized = e.target.value
    const valueFormatted = valueSanitized.includes('.', ',') ? parseFloat(valueSanitized).toFixed(2) : valueSanitized
    setValueTobeConverted(valueFormatted)
    setValueConverted()
  }

  function handleClick() {
    switch (selectedCurrency) {
      case 'bitcoin':
        const convertedBit = valueTobeConverted / valueBitcoin
        localStorage.setItem('@to-be-converted', valueTobeConverted.toString())
        localStorage.setItem('@current-name', selectedCurrency)
        localStorage.setItem('@coin', convertedBit.toFixed(8).toString())
        break;
      case 'dollar':
        const convertedDollar = valueTobeConverted / valueDollar
        localStorage.setItem('@to-be-converted', valueTobeConverted.toString())
        localStorage.setItem('@current-name', selectedCurrency)
        localStorage.setItem('@coin', convertedDollar.toFixed(2).toString())
        break;
      default:
        alert('Você precisa selecionar uma moeda!')
        break;
    }
    setValueConverted(localStorage.getItem('@coin'))
    setValueTobeConverted(localStorage.getItem('@to-be-converted'))
  }

  return (
    <div className='content-coin'>
      <div className='container'>
        <h2>Valor atual do {selectedCurrency} hoje é de $ {(selectedCurrency === 'dollar') ? valueDollar : valueBitcoin}</h2>
        <div>
          <span>Você escolheu {selectedCurrency}</span>
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
            <span>Por favor digite o valor em reais </span>
          </div>
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
        <div className='result-convertion'>
          <p>
            {
              (valueConverted <= 0) ?
                'O número precisa ser maior que zero!' :
                (valueConverted == undefined) ? '' :
                  (valueTobeConverted == 1) ?
                    (`${valueTobeConverted} Real(R$) é ($) ${valueConverted} em ${selectedCurrency}.`)
                    :
                    (`${valueTobeConverted} Reais(R$) sao ($) ${valueConverted} em ${selectedCurrency}.`)
            }
          </p>
        </div>
      </div>
    </div>
  )
}

export default Coin