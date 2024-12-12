import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import TopBrands from './componants/TopBrands.jsx';



function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<TopBrands/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App