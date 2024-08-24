import React from 'react'
import Header from "./component/Header/header.jsx"
import Navbar from './component//Header/Nav/navbar.jsx'
import Slider from './component/Slider/slider.jsx'
import EducationalPrograms from './component/EducationalPrograms/educationprog.jsx'
import OurAdvantages from './component/OurAdvantages/ouradvantages.jsx'
import GraduateThoughts from './component/Graduatethoughts/graduatethoughts.jsx'

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
    <OurAdvantages />
    <GraduateThoughts />
    </>
  )
}
