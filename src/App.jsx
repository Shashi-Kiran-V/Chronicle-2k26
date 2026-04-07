import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Events from './components/Events'
import Timeline from './components/Timeline'
import Sponsors from './components/Sponsors'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import CustomCursor from './components/CustomCursor'
import MagicBackground from './components/MagicBackground'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen scroll-smooth bg-hp-bg font-sans text-hp-text-light overflow-x-hidden cursor-none">
      <CustomCursor />
      
      {/* Global Magical Animated Background */}
      <MagicBackground />

      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" onLoadingComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div className={`relative z-10 transition-opacity duration-1000 ${isLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        <Navbar />
        <main>
          <Hero />
          <Events />
          <Timeline />
          <Sponsors />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
