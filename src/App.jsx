import React from 'react'
import Navbar from './Components/Navbar'
import HomePage from './components/HomePage'
import AboutUs from './components/AboutUs'
import Pedagogical from './components/Pedagogical'
import Opportunity from './components/Opportunity'
import Field from './components/Field'
import Program from './components/Program'
import Distribution from './components/Distribution'
import Language from './components/Language'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HomePage/>
      <AboutUs/>
      <Pedagogical/>
      <Opportunity/>
      <Field/>
      <Program/>
      <Distribution/>
      <Language/>
    </div>
  )
}

export default App
