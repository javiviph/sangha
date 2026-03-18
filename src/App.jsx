import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatIsGIM from './components/WhatIsGIM'
import ForWhom from './components/ForWhom'
import HowItWorks from './components/HowItWorks'
import Modalities from './components/Modalities'
import ValueQuote from './components/ValueQuote'
import Credibility from './components/Credibility'
import Trainers from './components/Trainers'
import CommercialInfo from './components/CommercialInfo'
import CaptureForm from './components/CaptureForm'
import FAQ from './components/FAQ'
import FinalClose from './components/FinalClose'
import Testimonials from './components/Testimonials'
import Locations from './components/Locations'

function App() {
  return (
    <>
      <Navbar />
      {/* Increased padding-top to prevent layout shifts or overlap with fixed nav */}
      <main style={{ paddingTop: '90px' }}>
        <Hero />
        <WhatIsGIM />
        <ForWhom />
        <Testimonials />
        <HowItWorks />
        <Modalities />
        <ValueQuote />
        <Credibility />
        <Locations />
        <Trainers />
        <CommercialInfo />
        <CaptureForm />
        <FAQ />
        <FinalClose />
      </main>
    </>
  )
}

export default App
