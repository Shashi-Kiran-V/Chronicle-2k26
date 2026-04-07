import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let trailId = 0;

    const updateMouse = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Add sparkle trail
      const id = trailId++;
      setTrails(prev => [
        ...prev.slice(-8),
        { id, x: e.clientX, y: e.clientY }
      ]);
      setTimeout(() => {
        setTrails(prev => prev.filter(t => t.id !== id));
      }, 500);
    };

    const handleMouseOver = (e) => {
      setIsHovering(
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        !!e.target.closest('a') ||
        !!e.target.closest('button')
      );
    };

    window.addEventListener('mousemove', updateMouse);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', updateMouse);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Sparkle trail dots */}
      {trails.map((trail, i) => (
        <motion.div
          key={trail.id}
          className="fixed pointer-events-none z-[9997] hidden md:block"
          initial={{
            opacity: 0.8,
            scale: 1,
            x: trail.x - 3,
            y: trail.y - 3,
          }}
          animate={{
            opacity: 0,
            scale: 0,
            y: trail.y - 20,
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            backgroundColor: '#f6c950',
            boxShadow: '0 0 8px 2px rgba(246,201,80,0.8)',
          }}
        />
      ))}

      {/* Outer ring */}
      <motion.div
        className="fixed pointer-events-none z-[9998] hidden md:block"
        animate={{
          x: mousePosition.x - (isHovering ? 22 : 16),
          y: mousePosition.y - (isHovering ? 22 : 16),
          width: isHovering ? 44 : 32,
          height: isHovering ? 44 : 32,
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20 }}
        style={{
          borderRadius: '50%',
          border: '2px solid #d4af37',
          boxShadow: '0 0 15px rgba(212,175,55,0.5), 0 0 30px rgba(212,175,55,0.2)',
          backgroundColor: isHovering ? 'rgba(212,175,55,0.15)' : 'transparent',
        }}
      />

      {/* Golden snitch center dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
        }}
        transition={{ type: 'tween', duration: 0 }}
        style={{
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #fff 0%, #f6c950 40%, #d4af37 100%)',
          boxShadow: '0 0 10px 3px rgba(246,201,80,0.9), 0 0 20px 6px rgba(212,175,55,0.4)',
        }}
      />

      {/* Snitch wings (visible on hover) */}
      {isHovering && (
        <>
          <motion.div
            className="fixed pointer-events-none z-[9998] hidden md:block"
            animate={{
              x: mousePosition.x + 8,
              y: mousePosition.y - 12,
              rotate: [0, 15, -5, 10, 0],
            }}
            transition={{
              x: { type: 'spring', stiffness: 250, damping: 20 },
              y: { type: 'spring', stiffness: 250, damping: 20 },
              rotate: { duration: 0.4, repeat: Infinity },
            }}
            style={{
              width: 18,
              height: 10,
              borderRadius: '50% 50% 0 50%',
              background: 'linear-gradient(135deg, rgba(246,201,80,0.7), rgba(212,175,55,0.3))',
              border: '1px solid rgba(246,201,80,0.5)',
              transformOrigin: 'left center',
            }}
          />
          <motion.div
            className="fixed pointer-events-none z-[9998] hidden md:block"
            animate={{
              x: mousePosition.x - 26,
              y: mousePosition.y - 12,
              rotate: [0, -15, 5, -10, 0],
            }}
            transition={{
              x: { type: 'spring', stiffness: 250, damping: 20 },
              y: { type: 'spring', stiffness: 250, damping: 20 },
              rotate: { duration: 0.4, repeat: Infinity },
            }}
            style={{
              width: 18,
              height: 10,
              borderRadius: '50% 50% 50% 0',
              background: 'linear-gradient(-135deg, rgba(246,201,80,0.7), rgba(212,175,55,0.3))',
              border: '1px solid rgba(246,201,80,0.5)',
              transformOrigin: 'right center',
            }}
          />
        </>
      )}
    </>
  );
};

export default CustomCursor;
