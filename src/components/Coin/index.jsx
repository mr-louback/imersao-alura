import { useEffect, useState } from 'react'
import api from '../../services/api'
import './style.css'


function Coin() {
  const [valueDollar, setValueDollar] = useState(0)
  const [valueBitcoin, setValueBitcoin] = useState(0)
  const [valueTobeConverted, setValueTobeConverted] = useState(0)
  let [valueConverted, setValueConverted] = useState(0)
  const [selectedCurrency, setSelectedCurrency] = useState(localStorage.getItem('@value-current-name'))

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
  function handleClick() {
    if (valueTobeConverted > 0) {
      let newValue = 0
      switch (selectedCurrency) {
        case 'bitcoin':
          newValue = (valueBitcoin / valueTobeConverted).toFixed(1)
          break;
        case 'dolar':
          newValue = (valueTobeConverted / valueDollar).toFixed(2)
          break;
        default:
          alert('Você precisa selecionar uma moeda!')
          break;
      }
      localStorage.setItem('@value-converted', newValue.toString())
      localStorage.setItem('@value-converted-to-be', valueTobeConverted.toString())
      localStorage.setItem('@value-current-name', selectedCurrency)

    } else if (valueConverted <= 0) {
      alert('Você precisa fornecer um valor maior que zero!')
    }
  }
  function handleChange(e) {
    setValueTobeConverted(e.target.value)
  }
  return (
    <div className='form-coin'>
      <form className='form'>
        <h2 htmlFor="valorCotacao">Valor atual do dólar é de R$ {valueDollar}</h2>

        Escolha a moeda para qual moeda voce deseja converter
        <div className='inputCheckBoxContainer'>
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
          <label htmlFor="dolar">
            <input
              type="radio"
              name="dolar"
              id="dolar"
              checked={selectedCurrency === 'dolar'}
              onChange={handleRadioCurrency}
            />
            Real para Dolar
          </label>
        </div>
        <span htmlFor="valorEmReal">Por favor digite o valor em reais a ser convertido</span>

        <input
          type='number'
          onChange={handleChange}
          value={valueTobeConverted}
          name='valorEmReal'
          placeholder='Valor a ser convertido'
        />
        <input type="submit" onClick={handleClick} value="Converter" />

      </form>
      <div className='result-convertion'>
        {
          `R$ ${localStorage.getItem('@value-converted-to-be') ?? '0,00'} em ${localStorage.getItem('@value-current-name') ?? 'moeda'} é $${localStorage.getItem('@value-converted') ?? '0,00'}`
        }

      </div>
    </div>
  )
}

export default Coin