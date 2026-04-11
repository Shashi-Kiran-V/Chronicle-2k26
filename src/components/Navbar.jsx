import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', sectionId: 'home' },
    { name: 'About Us', sectionId: 'about-us' },
    { name: 'Contact Us', sectionId: 'contact-us', isContact: true },
  ];

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full z-50 bg-hp-bg-card/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-hp-gold-700/20 py-2 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-hp-gold-500/50 shadow-[0_0_15px_rgba(212,175,55,0.4)] flex items-center justify-center shrink-0 bg-hp-bg">
              <img src="/bookcult_logo.jpeg" alt="Bookcult Logo" className="w-full h-full object-cover scale-[1.7]" />
            </div>
            <span className="font-serif text-2xl font-bold text-hp-gold-300 tracking-wider">
              The Bookcult
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) =>
              link.isContact ? (
                <button
                  key={link.name}
                  onClick={onContactClick}
                  className="text-hp-text-light font-sans font-medium text-xl hover:text-hp-gold-500 transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-hp-gold-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ) : (
                <a
                  key={link.name}
                  href={`#${link.sectionId}`}
                  onClick={(e) => scrollToSection(e, link.sectionId)}
                  className="text-hp-text-light font-sans font-medium text-xl hover:text-hp-gold-500 transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-hp-gold-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-hp-gold-500 hover:text-hp-gold-300 transition-colors focus:outline-none"
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Full Screen */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-hp-bg z-[49] overflow-y-auto flex flex-col justify-center items-center px-4"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {/* Close button in menu */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-hp-gold-500 hover:text-hp-gold-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Menu Links */}
            <div className="flex flex-col space-y-8 text-center">
              {navLinks.map((link, index) =>
                link.isContact ? (
                  <motion.button
                    key={link.name}
                    onClick={() => {
                      setIsMenuOpen(false);
                      onContactClick();
                    }}
                    className="text-4xl font-serif font-bold text-hp-gold-300 hover:text-hp-gold-500 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    {link.name}
                  </motion.button>
                ) : (
                  <motion.a
                    key={link.name}
                    href={`#${link.sectionId}`}
                    onClick={(e) => {
                      scrollToSection(e, link.sectionId);
                      setIsMenuOpen(false);
                    }}
                    className="text-4xl font-serif font-bold text-hp-gold-300 hover:text-hp-gold-500 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    {link.name}
                  </motion.a>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
