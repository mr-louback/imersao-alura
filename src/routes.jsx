import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Distance from './pages/Distance'
import Temperature from './pages/Temperature'
import Navbar from './components/Navbar'
import Movies from './pages/Movies'
import Erro from './pages/Error'
import Movie from './pages/Movie'
function RoutesApp() {
  return (
      <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/distance' element={<Distance />} />
          <Route path='/temperature' element={<Temperature />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/movie/:id' element={<Movie />} />
          <Route path='*' element={<Erro />} />
        </Routes>
      </BrowserRouter>
      </>
  )
}
export default RoutesApp
//https://reg.githubuniverse.com/flow/github/universe23/attendee-portal/page/welcome