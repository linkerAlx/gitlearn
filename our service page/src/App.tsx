import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Servicepage from './pages/servicepage'
import React from 'react'

const App  : React.FC= () => {
  return (
    <div>
   < BrowserRouter >
    <Routes>
      <Route path='/' Component={Servicepage}>
      </Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
