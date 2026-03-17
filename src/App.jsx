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
import SecondaryCTA from './components/SecondaryCTA'
import FAQ from './components/FAQ'
import FinalClose from './components/FinalClose'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <>
      <Navbar />
      {/* Add padding-top to main so Hero content isn't hidden behind fixed nav */}
      <main style={{ paddingTop: '64px' }}>
        <Hero />
        <WhatIsGIM />
        <ForWhom />
        <Testimonials />
        <HowItWorks />
        <Modalities />
        <ValueQuote />
        <Credibility />
        <Trainers />
        <CommercialInfo />
        <CaptureForm />
        <SecondaryCTA />
        <FAQ />
        <FinalClose />
      </main>
    </>
  )
}

export default App
