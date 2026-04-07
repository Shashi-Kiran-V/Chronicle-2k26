import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about-us' },
    { name: 'Contact Us', href: '#contact-us' },
  ];

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
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-hp-text-light font-sans font-medium text-xl hover:text-hp-gold-500 transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-hp-gold-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-hp-gold-500 hover:text-hp-gold-300 transition-colors focus:outline-none"
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-hp-bg-alt shadow-lg border-t border-hp-gold-700/20 py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-sans font-medium text-hp-text-light hover:text-hp-gold-500 transition-colors py-2"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
