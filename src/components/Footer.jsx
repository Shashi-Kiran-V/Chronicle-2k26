import React from 'react';
import { Sparkles, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact-us" className="bg-[#05080c] text-hp-text-light pt-20 pb-10 border-t border-hp-gold-500/20 relative overflow-hidden">
      
      {/* Background Magic Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-hp-gold-500/5 blur-[120px] pointer-events-none rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="w-8 h-8 text-hp-gold-500" />
              <span className="font-serif text-3xl font-bold text-hp-gold-300 tracking-wider">
                Bookcult
              </span>
            </div>
            <p className="text-hp-text-muted font-sans text-sm leading-relaxed mb-6">
              The official literary and debating society. Where magic, logic, and profound discourse merge into one spectacular vision.
            </p>
            <div className="text-hp-gold-500 italic font-serif text-sm">
              "Mischief Managed."
            </div>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h3 className="text-hp-gold-500 font-serif font-bold text-lg mb-6 uppercase tracking-widest text-sm relative inline-block">
              Portkeys (Links)
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-hp-gold-700"></span>
            </h3>
            <ul className="space-y-4 font-sans text-sm">
              <li><a href="#home" className="text-hp-text-muted hover:text-hp-gold-300 transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-hp-gold-700 mr-2"></span> Home</a></li>
              <li><a href="#about-us" className="text-hp-text-muted hover:text-hp-gold-300 transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-hp-gold-700 mr-2"></span> About Us</a></li>
              <li><a href="#events" className="text-hp-text-muted hover:text-hp-gold-300 transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-hp-gold-700 mr-2"></span> Challenges</a></li>
              <li><a href="#faq" className="text-hp-text-muted hover:text-hp-gold-300 transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-hp-gold-700 mr-2"></span> Ministry FAQ</a></li>
            </ul>
          </div>
          
          {/* Contact Information Column */}
          <div>
            <h3 className="text-hp-gold-500 font-serif font-bold text-lg mb-6 uppercase tracking-widest text-sm relative inline-block">
              Owl Post (Contact)
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-hp-gold-700"></span>
            </h3>
            <ul className="space-y-5 font-sans text-sm text-hp-text-muted">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-hp-gold-700 mr-3 flex-shrink-0 mt-0.5" />
                <span>The Great Hall<br />University Campus</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-hp-gold-700 mr-3 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-hp-gold-700 mr-3 flex-shrink-0" />
                <span>owls@thebookcult.edu</span>
              </li>
            </ul>
          </div>
          
          {/* Social Links Column */}
          <div>
            <h3 className="text-hp-gold-500 font-serif font-bold text-lg mb-6 uppercase tracking-widest text-sm relative inline-block">
              Daily Prophet (Social)
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-hp-gold-700"></span>
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-hp-bg border border-hp-gold-700/50 flex items-center justify-center text-hp-gold-500 hover:bg-hp-gold-500 hover:text-hp-bg transition-all shadow-[0_0_10px_rgba(212,175,55,0.2)] font-serif font-bold text-xs">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-hp-bg border border-hp-gold-700/50 flex items-center justify-center text-hp-gold-500 hover:bg-hp-gold-500 hover:text-hp-bg transition-all shadow-[0_0_10px_rgba(212,175,55,0.2)] font-serif font-bold text-xs">
                TW
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-hp-bg border border-hp-gold-700/50 flex items-center justify-center text-hp-gold-500 hover:bg-hp-gold-500 hover:text-hp-bg transition-all shadow-[0_0_10px_rgba(212,175,55,0.2)] font-serif font-bold text-xs">
                IN
              </a>
            </div>
            <p className="text-xs text-hp-text-muted mt-6 font-sans">
              Follow us to get the latest editions delivered straight to you!
            </p>
          </div>
          
        </div>
        
        {/* Copyright Bar */}
        <div className="pt-8 border-t border-hp-gold-700/20 flex flex-col md:flex-row justify-between items-center px-2">
          <p className="text-sm font-sans text-hp-text-muted mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} The Bookcult. All rights reserved by the Ministry.
          </p>
          <div className="flex space-x-6 text-sm font-sans text-hp-text-muted">
            <a href="#" className="hover:text-hp-gold-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-hp-gold-300 transition-colors">Terms of Magic</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
