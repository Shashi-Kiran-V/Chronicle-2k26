import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Wand2 } from 'lucide-react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const duration = 2500;
    const interval = 25;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentProgress = (currentStep / steps) * 100;
      setProgress(currentProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          onLoadingComplete();
        }, 500); 
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[999] bg-hp-bg flex flex-col items-center justify-center p-4 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col items-center max-w-md w-full text-center">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8 relative"
        >
          <div className="absolute inset-0 bg-hp-gold-500 blur-xl opacity-30 rounded-full animate-pulse"></div>
          <Wand2 className="w-16 h-16 text-hp-gold-500 relative z-10" />
        </motion.div>
        
        <h2 className="text-3xl font-serif text-hp-gold-300 mb-2 tracking-widest">
          The Bookcult
        </h2>
        <p className="text-hp-gold-700 italic font-sans mb-10 text-lg">
          "I solemnly swear that I am up to no good..."
        </p>
        
        {/* Progress Bar Container */}
        <div className="w-full h-1 bg-hp-bg-alt rounded-full overflow-hidden mb-4 relative drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
          <motion.div 
            className="h-full bg-hp-gold-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Interactive loading text */}
        <div className="flex justify-between w-full text-xs font-semibold text-hp-gold-700 uppercase tracking-widest font-sans">
          <span>Revealing Secrets</span>
          <span>{Math.round(progress)}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
