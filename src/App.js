import React from 'react'
import Header from "./component/Header/header.jsx"
import Navbar from './component/Nav/navbar.jsx'
import Slider from './component/Slider/slider.jsx'
import EducationalPrograms from './component/EducationalPrograms/educationprog.jsx'

export default function App() {
  return (
    
    <>
    <header>
      <Header />
    </header>
    <nav>
      <Navbar />
    </nav>
    <Slider />
    <EducationalPrograms />
    </>
  )
}
