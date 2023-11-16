// import Movies from '../../components/Movies'
import { useEffect, useState } from 'react'
import api from '../../services/apiMovie'
import './style.css'
import { Link } from 'react-router-dom'
function PageMovies() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    async function loadMovies() {
      const apiKey = '83ec4b446f7ef33b231016fb87bf4279' // bad way to get key
      const res = await api.get('movie/now_playing', {
        params: {
          api_key: apiKey,
          language: 'pt-BR',
          page: 1
        }
      })
      setMovies(res.data.results.slice(0, 10));
    }
    loadMovies()
  }, [])
  return (
    <div className='listFilms'>
      {
        movies.map((movie) => {
          return (
            <article key={movie}>
              <span>
                {movie.title}
              </span>
                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
              <Link to={`/movie/${movie.id}`}>Ver detalhes</Link>
            </article>
          )
        })
      }
    </div>
  )
}

export default PageMovies