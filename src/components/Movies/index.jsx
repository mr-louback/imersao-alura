import { useEffect, useState } from 'react'
import api from '../../services/api'
import './style.css'


function Movies() {
  const [movies, setMovies] = useState()
  // api.get('urlMovies')
console.log(api.get('urlMovies'));
  useEffect(() => {
    async function loadDollar() {
      const res = await api.get()
     
    }
    loadDollar()
  }, [])
  const handleRadioCurrency = (e) => {
   
  }

  function handleChange(e) {
    
  }

  function handleClick() {
    switch (selectedCurrency) {
      case 'bitcoin':
        
        break;
      case 'dollar':
        
        break;
      default:
        alert('Você precisa selecionar uma moeda!')
        break;
    }
    
  }

  return (
    <div className='content-coin'>
      <div className='container'>
        {/* <h2>Valor atual do {selectedCurrency} hoje é de $ {(selectedCurrency === 'dollar') ? valueDollar : valueBitcoin}</h2> */}
        <div>
          {/* <span>Você escolheu {selectedCurrency}</span> */}
        </div>
        {/* <div className='input-container'>
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
        </div> */}
        {/* <div className='result-convertion'>
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
        </div> */}
      </div>
    </div>
  )
}

export default Movies