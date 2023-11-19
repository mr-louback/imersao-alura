import { useEffect, useState } from 'react';
import api from '../../services/apiMovie';
import { useNavigate, useParams } from 'react-router-dom'
import './style.css'

function Movie() {
  const [movies, setMovies] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const apiKey = '83ec4b446f7ef33b231016fb87bf4279';
  useEffect(() => {
    async function loadFilm() {
      await api.get(`movie/${id}`, {
        params: {
          api_key: apiKey,
          language: 'pt-BR'
        }
      })
        .then((response) => {
          setMovies(response.data);
          console.log(response.data);
        })
        
    }
    loadFilm();
    return (() => {
      console.log('desmontado');
    })
  }, [id, navigate])
  // Area de validações
  return (
    <div className='movies-container'>
      <h1 className='movies-title'>{movies.title}</h1>
      <img className='movies-img' src={`https://image.tmdb.org/t/p/w300${movies.backdrop_path}`} alt={movies.title} />
      <h3 className='movies-sinopse' >Sinopse</h3>
      <span className='movies-overview'>{movies.overview}</span>
      <strong className='movies-rank'>Avaliação: {Math.floor(movies.vote_average)} de 10</strong>
      <button className='movies-button'>
        <a href={`https://www.youtube.com/results?search_query=${movies.title}+trailer`} target='blank' rel='noreferrer external noopener'>Trailer</a>
      </button>
    </div>
  )
}
export default Movie