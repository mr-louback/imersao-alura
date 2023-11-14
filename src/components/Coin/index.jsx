import api from '../../services/api'
import { useEffect, useState } from 'react'
import './style.css'

function Coin() {
  const [valueDollar, setValueDollar] = useState(0)
  const [valueTobeConverted, setValueTobeConverted] = useState(0)
  const [valueConverted, setValueConverted] = useState(0)

  useEffect(() => {
    async function loadDollar() {
      const res = await api.get()
      const data = Number(res.data.USDBRL.bid).toFixed(2)
      setValueDollar(data)
    }
    loadDollar()
  }, [])

  function handleClick() {
    if (valueTobeConverted > 0) {
      let newValue = (valueTobeConverted / valueDollar).toFixed(2)
      localStorage.setItem('@value-converted-to-be', valueTobeConverted.toString())
      setValueTobeConverted(localStorage.getItem('@value-converted-to-be'))

      localStorage.setItem('@value-converted', newValue.toString())
      setValueConverted(localStorage.getItem('@value-converted'))
    } else {
      alert('Valor não pode ser zero ou menor que zero!')
    }
  }
  function handleChange(e) {
    e.preventDefault()
    setValueTobeConverted(e.target.value)
  }
  return (
    <div style={{ backgroundColor: 'blue', margin: '0 15px', borderRadius: '10px', padding: '10px'}}>
      <form className='form'   >
        <h2 htmlFor="valorCotacao">Valor atual do dólar é de R$ {valueDollar}</h2>
        <span htmlFor="valorEmReal">Por favor digite o valor em reais a ser convertido</span>
        <input
          type='number'
          onChange={e => handleChange(e)}
          value={valueTobeConverted}
          name='valorEmReal'
          placeholder='Valor a ser convertido'
        />
        <input type="submit" onClick={handleClick} value="Converter" />
      </form>
      <div>
        {`
        R$ ${localStorage.getItem('@value-converted-to-be') == null ? 0 : localStorage.getItem('@value-converted-to-be')} em reais é $${localStorage.getItem('@value-converted') == null ? 0 : localStorage.getItem('@value-converted')} dólares.
        `}
      </div>
    </div>
  )
}

export default Coin 