import React, { useEffect, useState } from 'react';
import './TextSpiralDiamond.css';

const TEXT = 'borisisntreal';

const TextSpiralDiamond = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const emitLetter = () => {
      setParticles(prev => [
        ...prev,
        {
          id: Date.now(),
          text: TEXT[prev.length % TEXT.length],
          angle: Math.random() * Math.PI * 2,
          radius: 0,
          rotationSpeed: 0.03 + Math.random() * 0.02,
        }
      ]);
    };

    const interval = setInterval(emitLetter, 80);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animation = setInterval(() => {
      setParticles(prev =>
        prev
          .map(p => ({
            ...p,
            angle: p.angle + p.rotationSpeed,
            radius: p.radius + 1.5
          }))
          .filter(p => p.radius < 1000) // remove offscreen
      );
    }, 30);
    return () => clearInterval(animation);
  }, []);

  return (
    <div className="top-cont diamond-cont">
      <div className="diamond">
        <div className="triangle top-triangle" />
        <div className="triangle bottom-triangle" />
      </div>
      {particles.map(p => (
        <div
          key={p.id}
          className="spiral-letter"
          style={{
            transform: `translate(${Math.cos(p.angle) * p.radius}px, ${Math.sin(p.angle) * p.radius}px)`
          }}
        >
          {p.text}
        </div>
      ))}
    </div>
  );
};

export default TextSpiralDiamond;
