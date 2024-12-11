import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import PopularProducts from './componants/PopularProducts';
function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<PopularProducts/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
