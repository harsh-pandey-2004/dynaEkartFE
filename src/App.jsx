import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
    
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
