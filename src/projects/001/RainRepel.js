import React, { useEffect, useRef, useState } from 'react';
import './RainRepel.css';

const NUM_LINES = 400;

const RainRepel = () => {
  const containerRef = useRef(null);
  const [lines, setLines] = useState([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const initialLines = Array.from({ length: NUM_LINES }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      speed: 1 + Math.random() * 2,
      length: 50 + Math.random() * 100,
      faded: false,
      red: false,
      id: Math.random().toString(36).substr(2, 9),
    }));
    setLines(initialLines);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const { x: mx, y: my } = mouseRef.current;

      setLines((prev) =>
        prev.map((line) => {
          let newY = line.y + line.speed;
          let faded = line.faded;
          let red = line.red;

          if (!faded && Math.random() < 0.005) {
            faded = true;
          }

          const dx = mx - line.x;
          const dy = my - (line.y + line.length / 2);
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 120) {
            red = true;
          }

          if (newY > window.innerHeight) {
            return {
              ...line,
              y: -line.length,
              x: Math.random() * window.innerWidth,
              faded: false,
              red: false,
            };
          }

          return {
            ...line,
            y: newY,
            faded,
            red,
          };
        })
      );
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="top-cont" ref={containerRef}>
      {lines.map((line) => (
        <div
          key={line.id}
          className={`boop-rain-line${line.red ? ' red' : line.faded ? ' faded' : ''}`}
          style={{
            left: `${line.x}px`,
            top: `${line.y}px`,
            height: `${line.length}px`,
          }}
        />
      ))}
    </div>
  );
};

export default RainRepel;
