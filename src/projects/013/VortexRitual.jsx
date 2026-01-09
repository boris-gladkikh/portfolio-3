import React, { useEffect, useState } from 'react';
import './VortexRitual.css';

const VortexRitual = () => {
  const [symbols, setSymbols] = useState([]);
  const MAX_SYMBOLS = 1200;
  const EMIT_SPACING = 5;
  const EMIT_INTERVAL = 150;

  useEffect(() => {
    const emitInterval = setInterval(() => {
      const centerHeight = window.innerHeight / 2;
      const newSymbols = [];

      for (let i = -2; i <= 2; i++) {
        const y = centerHeight + i * EMIT_SPACING;
        const color = i % 2 === 0 ? 'white' : 'red';

        newSymbols.push({
          id: `l-${Date.now()}-${i}`,
          x: -20,
          y,
          direction: 'right',
          angle: null,
          radius: null,
          color
        });

        newSymbols.push({
          id: `r-${Date.now()}-${i}`,
          x: window.innerWidth + 20,
          y,
          direction: 'left',
          angle: null,
          radius: null,
          color
        });
      }

      setSymbols(prev => {
        const next = [...prev, ...newSymbols];
        return next.slice(-MAX_SYMBOLS); // keep only most recent symbols
      });
    }, EMIT_INTERVAL);

    return () => clearInterval(emitInterval);
  }, []);

  useEffect(() => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const animation = setInterval(() => {
      setSymbols(prev =>
        prev
          .map(s => {
            const dx = s.x - centerX;
            const dy = s.y - centerY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 300 && s.angle === null) {
              return {
                ...s,
                angle: Math.atan2(dy, dx),
                radius: dist
              };
            }

            if (s.angle !== null) {
              const newAngle = s.angle + 0.05;
              const newRadius = s.radius * 0.96;

              return {
                ...s,
                angle: newAngle,
                radius: newRadius,
                x: centerX + Math.cos(newAngle) * newRadius,
                y: centerY + Math.sin(newAngle) * newRadius
              };
            }

            return {
              ...s,
              x: s.direction === 'right' ? s.x + 2 : s.x - 2
            };
          })
          .filter(s =>
            s.radius === null ||
            (s.radius > 5 && s.x > -50 && s.x < window.innerWidth + 50)
          )
      );
    }, 30);

    return () => clearInterval(animation);
  }, []);

  return (
    <div className="vortex-top-cont">
      {symbols.map(s => (
        <span
          key={s.id}
          className={`vortex-plus ${s.color}`}
          style={{ left: `${s.x}px`, top: `${s.y}px` }}
        >
          +
        </span>
      ))}
    </div>
  );
};

export default VortexRitual;
