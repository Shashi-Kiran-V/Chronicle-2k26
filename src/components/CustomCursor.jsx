import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const trailRef = useRef([]);
  const [trails, setTrails] = useState([]);
  const trailIdRef = useRef(0);

  useEffect(() => {
    let lastTrailTime = 0;

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Create sparkle trail particles every 50ms
      const now = Date.now();
      if (now - lastTrailTime > 50) {
        lastTrailTime = now;
        const newTrail = {
          id: trailIdRef.current++,
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20,
          size: Math.random() * 4 + 2,
        };
        trailRef.current = [...trailRef.current.slice(-12), newTrail];
        setTrails([...trailRef.current]);

        // Auto-remove after animation
        setTimeout(() => {
          trailRef.current = trailRef.current.filter(t => t.id !== newTrail.id);
          setTrails([...trailRef.current]);
        }, 600);
      }
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Only render on devices with a fine pointer (mouse)
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Sparkle trail particles */}
      {trails.map((trail) => (
        <motion.div
          key={trail.id}
          className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] hidden md:block"
          initial={{
            x: trail.x - trail.size / 2,
            y: trail.y - trail.size / 2,
            width: trail.size,
            height: trail.size,
            opacity: 0.9,
            backgroundColor: 'rgba(246,201,80,0.8)',
            boxShadow: '0 0 6px rgba(212,175,55,0.6)',
          }}
          animate={{
            opacity: 0,
            scale: 0,
            y: trail.y - trail.size / 2 - 15,
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      ))}

      {/* Outer magical ring — follows with spring delay */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-screen hidden md:block"
        style={{
          border: '1.5px solid rgba(212,175,55,0.4)',
          boxShadow: isHovering
            ? '0 0 20px rgba(212,175,55,0.3), inset 0 0 10px rgba(212,175,55,0.1)'
            : '0 0 8px rgba(212,175,55,0.15)',
        }}
        animate={{
          x: mousePosition.x - (isHovering ? 24 : 18),
          y: mousePosition.y - (isHovering ? 24 : 18),
          width: isHovering ? 48 : 36,
          height: isHovering ? 48 : 36,
          rotate: isClicking ? 45 : 0,
          borderColor: isHovering ? 'rgba(246,201,80,0.6)' : 'rgba(212,175,55,0.4)',
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 0.4 }}
      />

      {/* Inner wand-tip glow */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[10000] hidden md:block"
        style={{
          background: 'radial-gradient(circle, rgba(246,201,80,1) 0%, rgba(212,175,55,0.6) 50%, transparent 100%)',
        }}
        animate={{
          x: mousePosition.x - (isClicking ? 5 : 3),
          y: mousePosition.y - (isClicking ? 5 : 3),
          width: isClicking ? 10 : 6,
          height: isClicking ? 10 : 6,
          scale: isHovering ? 1.8 : 1,
          boxShadow: isClicking
            ? '0 0 25px 8px rgba(212,175,55,0.9)'
            : '0 0 12px 3px rgba(212,175,55,0.6)',
        }}
        transition={{ type: 'tween', ease: 'linear', duration: 0.05 }}
      />

      {/* Hover crosshair lines */}
      {isHovering && (
        <>
          <motion.div
            className="fixed pointer-events-none z-[9999] hidden md:block"
            style={{ backgroundColor: 'rgba(212,175,55,0.3)', width: '1px' }}
            initial={{ height: 0, opacity: 0 }}
            animate={{
              x: mousePosition.x,
              y: mousePosition.y - 28,
              height: 10,
              opacity: 1,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          />
          <motion.div
            className="fixed pointer-events-none z-[9999] hidden md:block"
            style={{ backgroundColor: 'rgba(212,175,55,0.3)', width: '1px' }}
            initial={{ height: 0, opacity: 0 }}
            animate={{
              x: mousePosition.x,
              y: mousePosition.y + 18,
              height: 10,
              opacity: 1,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          />
          <motion.div
            className="fixed pointer-events-none z-[9999] hidden md:block"
            style={{ backgroundColor: 'rgba(212,175,55,0.3)', height: '1px' }}
            initial={{ width: 0, opacity: 0 }}
            animate={{
              x: mousePosition.x - 28,
              y: mousePosition.y,
              width: 10,
              opacity: 1,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          />
          <motion.div
            className="fixed pointer-events-none z-[9999] hidden md:block"
            style={{ backgroundColor: 'rgba(212,175,55,0.3)', height: '1px' }}
            initial={{ width: 0, opacity: 0 }}
            animate={{
              x: mousePosition.x + 18,
              y: mousePosition.y,
              width: 10,
              opacity: 1,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          />
        </>
      )}
    </>
  );
};

export default CustomCursor;
