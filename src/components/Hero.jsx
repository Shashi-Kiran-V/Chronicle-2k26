import React from 'react';
import { ArrowRight, Sparkles, Scroll, Feather, Beaker, Castle, Wand2, Star, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.5 } 
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const floatingIcons = [
    { Icon: Star, top: '15%', left: '15%', delay: 0, size: 'w-6 h-6', color: 'text-hp-gold-300' },
    { Icon: Wand2, top: '20%', left: '80%', delay: 1.5, size: 'w-10 h-10', color: 'text-hp-text-muted' },
    { Icon: Sparkles, top: '65%', left: '20%', delay: 2.5, size: 'w-8 h-8', color: 'text-hp-gold-500' },
    { Icon: Scroll, top: '75%', left: '85%', delay: 0.5, size: 'w-10 h-10', color: 'text-hp-gold-700' },
    { Icon: Moon, top: '35%', left: '85%', delay: 3, size: 'w-12 h-12', color: 'text-hp-text-muted' },
    { Icon: Feather, top: '45%', left: '8%', delay: 2, size: 'w-8 h-8', color: 'text-hp-text-light' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-transparent">



      {/* Parallax Magical Icons */}
      {floatingIcons.map((item, idx) => (
        <motion.div
          key={idx}
          className={`absolute ${item.color} opacity-40 pointer-events-none`}
          style={{ top: item.top, left: item.left }}
          animate={{ 
            y: [0, -20, 0], 
            rotate: [0, 10, -10, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ 
            duration: 5 + idx, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: item.delay 
          }}
        >
          <item.Icon className={item.size} />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Column: Text */}
          <motion.div 
            className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start"
            variants={containerVars}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVars} className="inline-block px-5 py-2 rounded-full border border-hp-gold-700/50 bg-hp-bg-alt/70 backdrop-blur-md text-hp-gold-300 text-xs sm:text-sm font-sans tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
              <span className="relative flex h-2 w-2 inline-flex mr-2 -translate-y-[1px]">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-hp-gold-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-hp-gold-500"></span>
              </span>
              The Premier Magical Challenge
            </motion.div>
            
            <motion.h1 variants={itemVars} className="text-5xl md:text-7xl lg:text-8xl font-serif font-extrabold text-hp-gold-500 mb-6 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] leading-none text-center lg:text-left">
              The Chronicle
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                className="block text-hp-text-light mt-2 font-serif font-normal text-4xl md:text-6xl lg:text-7xl drop-shadow-md"
              >
                2K26
              </motion.span>
            </motion.h1>
            
            <motion.p variants={itemVars} className="mt-6 text-lg md:text-xl text-hp-text-muted max-w-xl leading-relaxed font-sans mb-10 text-center lg:text-left">
              Step into a world where literature meets mystical innovation. Join us for a multidisciplinary celebration of code, creation, discourse, and design.
            </motion.p>
            
            <motion.div variants={itemVars} className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#events" 
                className="group relative inline-flex items-center justify-center px-10 py-4 text-xl font-serif font-bold text-hp-bg border border-hp-gold-500 bg-hp-gold-500 rounded hover:bg-hp-gold-300 hover:border-hp-gold-300 transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]"
              >
                <span className="relative flex items-center">
                  Enroll
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column: Animated Graphics */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="flex-1 hidden lg:flex justify-center relative w-full h-[500px]"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Magical Orbits */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute w-[400px] h-[400px] rounded-full border border-dashed border-hp-gold-700/40"
              ></motion.div>
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute w-[300px] h-[300px] rounded-full border border-hp-gold-500/20"
              ></motion.div>
              
              <div className="absolute w-[180px] h-[180px] bg-hp-bg-alt rounded-full shadow-[0_0_50px_rgba(212,175,55,0.15)] flex items-center justify-center z-10 border border-hp-gold-700/50">
                <Castle className="w-20 h-20 text-hp-gold-500 relative z-10 drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
              </div>

              {/* Orbiting Icons */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-[400px] h-[400px]"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-hp-bg-card rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)] flex items-center justify-center border border-hp-gold-700/30">
                  <Beaker className="w-6 h-6 text-hp-slytherin" />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-14 h-14 bg-hp-bg-card rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)] flex items-center justify-center border border-hp-gold-700/30">
                  <Feather className="w-6 h-6 text-hp-hufflepuff" />
                </div>
              </motion.div>

              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-[300px] h-[300px]"
              >
                <div className="absolute top-1/2 -left-7 -translate-y-1/2 w-14 h-14 bg-hp-bg-card rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)] flex items-center justify-center border border-hp-gold-700/30">
                  <Scroll className="w-6 h-6 text-hp-gryffindor" />
                </div>
                <div className="absolute top-1/2 -right-7 -translate-y-1/2 w-14 h-14 bg-hp-bg-card rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)] flex items-center justify-center border border-hp-gold-700/30">
                  <Wand2 className="w-6 h-6 text-hp-ravenclaw" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
