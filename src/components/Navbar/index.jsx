import { Link } from "react-router-dom"
import './style.css'
function Navbar() {
  return (
    <>
      <header className="header">
        <Link to="/">Conversor Moeda</Link>
        <Link to={`/distance`}>Conversor Distância</Link>
        <Link to="/temperature">Conversor Temperatura</Link>
        <Link to="/movies">Filmes</Link>
      </header>
    </>
  )
}
export default Navbar