import { Link } from "react-router-dom"
import './style.css'
function Navbar() {
  return (
    <>
      <header className="header">
        <Link to="/">Moeda</Link>
        <Link to={`/distance`}>Distância</Link>
        <Link to="/temperature">Temperatura</Link>
        <Link to="/movies">Filmes</Link>
      </header>
    </>
  )
}
export default Navbar