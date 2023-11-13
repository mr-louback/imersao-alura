import api from '../../services/api'
import { useEffect, useState } from 'react'
import './style.css'

function FormComponent() {
  const [valueDollar, setValueDollar] = useState('')
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
    setValueConverted(valueTobeConverted / valueDollar)
  }
  return (
    <div>
      <form className='form'   >
        <span htmlFor="valorEmReal">Valor em real</span>
        <input
          type='number'
          onChange={(e) => {
            setValueTobeConverted(e.target.value)
          }}
          value={valueTobeConverted}
          name='valorEmReal' placeholder='Valor a ser convertido'
        />
        <span htmlFor="valorCotacao">Valor atual do dólar</span>
        <input name="valorCotacao" type='text' value={valueDollar} disabled />
        <input type="submit" onClick={handleClick} value="Converter" />
      </form>
      O valor convertido aparecerá aqui
      <div>
        {valueConverted}
      </div>
    </div>
  )
}

export default FormComponent 