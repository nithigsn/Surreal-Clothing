import React from 'react'
import { Route, Routes } from 'react-router-dom'

//Component
import Header from './Components/Header'

// Pages
import Hero from './Pages/Hero'



const App: React.FC = () => {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Hero />} />
      </Routes>
    </>
  )
}

export default App
