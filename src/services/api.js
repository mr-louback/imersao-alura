import axios from 'axios'
const api = axios.create({
  baseURL: `https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL`,
  urlMovies: 'https://api.themoviedb.org/3/'
})
export default api