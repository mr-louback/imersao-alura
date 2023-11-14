import { Link } from "react-router-dom"
import './style.css'
function Navbar() {
  return (
    <>
      <header className="header">
        <Link to="/">Conversor de Moeda</Link>
        <Link to="/distance">Conversor de Distância</Link>
        <Link to="/temperature">Conversor de Temperatura</Link>
      </header>
    </>
  )
}
export default Navbar