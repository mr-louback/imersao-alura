import { useEffect, useState } from 'react';
import api from '../../services/apiMovie';
import { useNavigate, useParams } from 'react-router-dom'

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
        log(response.data);
      })
      .catch(() => {
        navigate('/movie/:id', {
          replace: true
        });
        return;
      })
      .catch((error) => {
        console.log(error);
      })

    }
    loadFilm();
    return (() => {
      console.log('desmontado');
    })
  }, [id, navigate])
  
  return (
    <div>
      <h1>{movies.title}</h1>
    </div>
  )
}
export default Movie