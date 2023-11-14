import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/index'
import PageDistance from './pages/PageDistance/index'
import PageTemperature from './pages/PageTemperature/index'
import Navbar from './components/Navbar/index'
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
          <Route path='*' element={<Erro />} />
        </Routes>
      </BrowserRouter>
      </>
  )
}
export default RoutesApp