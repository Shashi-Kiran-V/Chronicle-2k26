import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LoadingScreen from './components/LoadingScreen'
import CustomCursor from './components/CustomCursor'
import MagicBackground from './components/MagicBackground'
import ContactUs from './components/ContactUs'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="relative min-h-screen scroll-smooth bg-hp-bg font-sans text-hp-text-light overflow-x-hidden cursor-none">
      <CustomCursor />
      
      {/* Global Magical Animated Background */}
      <MagicBackground />

      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" onLoadingComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div className={`relative z-10 transition-opacity duration-1000 ${isLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        <Navbar onContactClick={() => setIsContactOpen(true)} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </main>
      </div>

      {/* Contact Us Modal */}
      <ContactUs isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  )
}

export default App

