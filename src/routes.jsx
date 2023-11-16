import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PageDistance from './pages/PageDistance'
import PageTemperature from './pages/PageTemperature'
import Navbar from './components/Navbar'
import PageMovies from './pages/PageMovies'
import Erro from './pages/Error'
function RoutesApp() {
  return (
      <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/distance' element={<PageDistance />} />
          <Route path='/temperature' element={<PageTemperature />} />
          <Route path='/movies' element={<PageMovies />} />
          <Route path='*' element={<Erro />} />
        </Routes>
      </BrowserRouter>
      </>
  )
}
export default RoutesApp