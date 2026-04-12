import React from 'react';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer id="contact-us" className="bg-[#05080c] text-hp-text-light pt-6 pb-4 border-t border-hp-gold-500/10 relative overflow-hidden">
      
      {/* Background Magic Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-5 pointer-events-none mix-blend-overlay"></div>
      
      <div className="max-w-xl mx-auto px-4 relative z-10 text-center">
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <h2 className="font-serif text-lg font-bold text-hp-gold-300 tracking-[0.3em] uppercase opacity-90">
            The Bookcult
          </h2>
        </motion.div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mb-5">
          <a 
            href="https://www.instagram.com/thebookcult/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-hp-text-muted hover:text-hp-gold-500 transition-colors inline-block"
          >
            <div className="p-1.5 rounded-full border border-hp-gold-500/20 bg-hp-bg/50">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 h-4" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
              </svg>
            </div>
          </a>
          <a 
            href="mailto:chronicle2k26@gmail.com"
            className="text-hp-text-muted hover:text-hp-gold-500 transition-colors inline-block"
          >
            <div className="p-1.5 rounded-full border border-hp-gold-500/20 bg-hp-bg/50">
              <Mail className="w-4 h-4" />
            </div>
          </a>
        </div>

        {/* Combined Contact Box - Ultra Compact */}
        <div className="max-w-xs mx-auto p-3 rounded-lg border border-hp-gold-500/10 bg-hp-bg/30 mb-5">
          <div className="flex flex-row justify-around gap-4 text-center">
            <div>
              <p className="text-hp-text-light font-bold text-[10px] uppercase tracking-tighter">Shashikiran V</p>
              <a href="tel:9148132869" className="text-hp-text-muted hover:text-hp-gold-300 text-[11px]">9148132869</a>
            </div>
            <div className="w-px h-6 bg-hp-gold-500/10 self-center"></div>
            <div>
              <p className="text-hp-text-light font-bold text-[10px] uppercase tracking-tighter">Suchithra B S</p>
              <a href="tel:9731241864" className="text-hp-text-muted hover:text-hp-gold-300 text-[11px]">9731241864</a>
            </div>
          </div>
        </div>
        
        {/* Copyright Bar */}
        <div className="pt-3 border-t border-hp-gold-700/5 flex flex-col items-center">
          <p className="text-[8px] font-sans text-hp-text-muted uppercase tracking-[0.2em] opacity-50">
            &copy; {new Date().getFullYear()} The Bookcult.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
