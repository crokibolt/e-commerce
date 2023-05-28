import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'

function App() {
  return (
    <div>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          {/* <Route path='/products' element={Products} /> */}
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
