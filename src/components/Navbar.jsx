import React, { useState } from 'react';
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

          {/* Mobile Menu Button - Custom Animated Hamburger */}
          <div className="md:hidden flex items-center">
            <motion.button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-hp-gold-500 hover:text-hp-gold-300 focus:outline-none p-2"
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {/* Top line - rotates to form top-left of X */}
                <motion.line
                  x1="3"
                  y1="3"
                  x2="21"
                  y2="21"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  animate={{
                    opacity: isMenuOpen ? 1 : 0,
                    rotate: 0,
                  }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  style={{ transformOrigin: '12px 12px' }}
                />
                {/* Bottom line - rotates to form bottom-left of X */}
                <motion.line
                  x1="21"
                  y1="3"
                  x2="3"
                  y2="21"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  animate={{
                    opacity: isMenuOpen ? 1 : 0,
                    rotate: 0,
                  }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  style={{ transformOrigin: '12px 12px' }}
                />
                {/* Top hamburger line */}
                <motion.line
                  x1="4"
                  y1="6"
                  x2="20"
                  y2="6"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  animate={{
                    opacity: isMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                />
                {/* Middle hamburger line */}
                <motion.line
                  x1="4"
                  y1="12"
                  x2="20"
                  y2="12"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  animate={{ 
                    opacity: isMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
                {/* Bottom hamburger line */}
                <motion.line
                  x1="4"
                  y1="18"
                  x2="20"
                  y2="18"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  animate={{
                    opacity: isMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Full Screen */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-hp-bg z-[49] overflow-y-auto flex flex-col justify-center items-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            {/* Menu Links Container */}
            <motion.div 
              className="flex flex-col w-full max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              {navLinks.map((link, index) => (
                <motion.div key={link.name} className="w-full">
                  {link.isContact ? (
                    <motion.button
                      onClick={() => {
                        setIsMenuOpen(false);
                        onContactClick();
                      }}
                      className="w-full text-center py-6 text-3xl font-serif font-bold text-hp-gold-300 hover:text-hp-gold-500 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.name}
                    </motion.button>
                  ) : (
                    <motion.a
                      href={`#${link.sectionId}`}
                      onClick={(e) => {
                        scrollToSection(e, link.sectionId);
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-center py-6 text-3xl font-serif font-bold text-hp-gold-300 hover:text-hp-gold-500 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.name}
                    </motion.a>
                  )}
                  {/* Divider line - except for last item */}
                  {index < navLinks.length - 1 && (
                    <motion.div
                      className="h-px bg-gradient-to-r from-transparent via-hp-gold-500/30 to-transparent w-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                      style={{ transformOrigin: 'center' }}
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
