import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const particlesRef = useRef([]);
  const isHoveringRef = useRef(false);
  const animFrameRef = useRef(null);

  useEffect(() => {
    // Don't render on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const updateMouse = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      // Spawn trail particles on move
      for (let i = 0; i < 2; i++) {
        particlesRef.current.push({
          x: e.clientX + (Math.random() - 0.5) * 10,
          y: e.clientY + (Math.random() - 0.5) * 10,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5 - 1,
          life: 1,
          decay: Math.random() * 0.02 + 0.015,
          size: Math.random() * 3 + 1,
          hue: Math.random() > 0.5 ? 43 : 50, // gold tones
        });
      }

      // Keep particle count manageable
      if (particlesRef.current.length > 100) {
        particlesRef.current = particlesRef.current.slice(-80);
      }
    };

    const handleMouseOver = (e) => {
      isHoveringRef.current =
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        !!e.target.closest('a') ||
        !!e.target.closest('button');
    };

    const handleClick = (e) => {
      // Burst effect on click
      for (let i = 0; i < 15; i++) {
        const angle = (Math.PI * 2 * i) / 15;
        const speed = Math.random() * 3 + 2;
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          decay: 0.025,
          size: Math.random() * 3 + 2,
          hue: 43,
        });
      }
    };

    window.addEventListener('mousemove', updateMouse);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('click', handleClick);

    // Draw wand cursor
    const drawWand = (ctx, x, y, hovering) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(-Math.PI / 4); // Tilt wand 45 degrees

      // Wand body
      const gradient = ctx.createLinearGradient(0, 0, 0, 28);
      gradient.addColorStop(0, '#f6c950');
      gradient.addColorStop(0.3, '#d4af37');
      gradient.addColorStop(1, '#8b6914');

      ctx.beginPath();
      ctx.roundRect(-2, 2, 4, 26, 1.5);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Wand handle detail
      ctx.beginPath();
      ctx.roundRect(-3, 20, 6, 8, 2);
      ctx.fillStyle = '#aa8c2c';
      ctx.fill();
      ctx.strokeStyle = '#f6c950';
      ctx.lineWidth = 0.5;
      ctx.stroke();

      // Wand tip glow
      const tipGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, hovering ? 14 : 8);
      tipGlow.addColorStop(0, 'rgba(246,201,80,0.9)');
      tipGlow.addColorStop(0.4, 'rgba(212,175,55,0.4)');
      tipGlow.addColorStop(1, 'rgba(212,175,55,0)');

      ctx.beginPath();
      ctx.arc(0, 0, hovering ? 14 : 8, 0, Math.PI * 2);
      ctx.fillStyle = tipGlow;
      ctx.fill();

      // Bright tip point
      ctx.beginPath();
      ctx.arc(0, 0, hovering ? 3 : 2, 0, Math.PI * 2);
      ctx.fillStyle = '#fff';
      ctx.shadowColor = '#f6c950';
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.restore();
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(p => p.life > 0);
      particlesRef.current.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        p.vy -= 0.02; // slight float up

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);

        const alpha = p.life * 0.8;
        ctx.fillStyle = `hsla(${p.hue}, 80%, 65%, ${alpha})`;
        ctx.shadowColor = `hsla(${p.hue}, 80%, 65%, ${alpha * 0.5})`;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw the wand cursor
      drawWand(ctx, mouseRef.current.x, mouseRef.current.y, isHoveringRef.current);

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', updateMouse);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('click', handleClick);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[10000] pointer-events-none hidden md:block"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default CustomCursor;
