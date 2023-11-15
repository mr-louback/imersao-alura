import './style.css'

function Distance() {

  return (
    <>
      <form className='form'>
        <h1>Conversor de distância</h1>
        <div>Por determinado tempo à velocidade da lúz</div>
        <div>você terá percorrido que distância?</div>
        <input type="number" name="time" id="time" placeholder='Tempo em minutos' />
        <input type="submit" value="Calcular" />
        <div id='res'>
          Resultado
        </div>
      </form>
    </>
  )
}
export default Distance 
