import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import PopularProduct from './componants/PopularProduct';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<BrowserRouter>
<Routes>
<Route path="/" element={<PopularProduct/>} />
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
