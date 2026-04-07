import React, { useMemo } from 'react';

const MagicBackground = () => {
  // Generate random particles once
  const particles = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 20,
      duration: Math.random() * 15 + 15,
      opacity: Math.random() * 0.5 + 0.1,
    }));
  }, []);

  // Twinkling stars
  const stars = useMemo(() => {
    return Array.from({ length: 80 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }));
  }, []);

  // Floating orbs (large glowing blobs)
  const orbs = useMemo(() => {
    return [
      { left: '15%', top: '20%', size: 300, color: 'rgba(212,175,55,0.03)', duration: 25, delay: 0 },
      { left: '75%', top: '40%', size: 400, color: 'rgba(74,20,140,0.04)', duration: 30, delay: 5 },
      { left: '50%', top: '70%', size: 350, color: 'rgba(212,175,55,0.025)', duration: 20, delay: 10 },
      { left: '25%', top: '85%', size: 250, color: 'rgba(29,53,87,0.05)', duration: 35, delay: 3 },
      { left: '85%', top: '15%', size: 280, color: 'rgba(212,175,55,0.02)', duration: 28, delay: 8 },
    ];
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Base starry texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-hp-ravenclaw/40 via-transparent to-transparent"></div>

      {/* Twinkling Stars */}
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className="absolute rounded-full bg-hp-gold-300"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
          }}
        />
      ))}

      {/* Rising Particles (like magical dust floating upward) */}
      {particles.map((p) => (
        <div
          key={`particle-${p.id}`}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            bottom: '-5%',
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.id % 3 === 0 
              ? 'rgba(212,175,55,0.6)' 
              : p.id % 3 === 1 
                ? 'rgba(255,255,255,0.4)' 
                : 'rgba(180,160,100,0.5)',
            boxShadow: p.id % 4 === 0 
              ? '0 0 6px rgba(212,175,55,0.4)' 
              : 'none',
            animation: `floatUp ${p.duration}s linear ${p.delay}s infinite`,
            opacity: p.opacity,
          }}
        />
      ))}

      {/* Floating Orbs (large ambient glowing blobs) */}
      {orbs.map((orb, i) => (
        <div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            left: orb.left,
            top: orb.top,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            backgroundColor: orb.color,
            filter: `blur(${orb.size / 3}px)`,
            animation: `floatOrb ${orb.duration}s ease-in-out ${orb.delay}s infinite alternate`,
          }}
        />
      ))}

      {/* Shooting star (occasional) */}
      <div className="absolute" style={{ animation: 'shootingStar 8s linear 3s infinite' }}>
        <div 
          className="w-1 h-1 bg-hp-gold-300 rounded-full"
          style={{ boxShadow: '0 0 4px 1px rgba(212,175,55,0.6), -20px 0 12px rgba(212,175,55,0.3), -40px 0 20px rgba(212,175,55,0.1)' }}
        />
      </div>

      <div className="absolute" style={{ animation: 'shootingStar2 12s linear 9s infinite' }}>
        <div 
          className="w-0.5 h-0.5 bg-white/80 rounded-full"
          style={{ boxShadow: '0 0 3px 1px rgba(255,255,255,0.4), -15px 0 10px rgba(255,255,255,0.2), -30px 0 15px rgba(255,255,255,0.05)' }}
        />
      </div>
    </div>
  );
};

export default MagicBackground;
