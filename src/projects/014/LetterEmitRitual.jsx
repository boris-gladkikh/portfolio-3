// LetterEmitRitual.jsx
import React, { useEffect, useRef, useState } from 'react';
import './LetterEmitRitual.css';

const TEXT = 'borisisntreal';
const EMIT_INTERVAL = 500;        // ms between each burst
const PARTICLE_SPEED = 1;       // px per frame
const PARTICLE_LIFETIME = 8000;   // ms until removal
const OSC_AMPLITUDE = 10;         // px horizontal oscillation
const OSC_SPEED = 0.1;            // rad per frame

export default function LetterEmitRitual() {
  const containerRef = useRef(null);
  const [letterPositions, setLetterPositions] = useState([]);
  const [particles, setParticles] = useState([]);

  // Measure each letter’s screen-center
  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return;
      const els = containerRef.current.querySelectorAll('.emit-letter');
      const pos = Array.from(els).map(el => {
        const r = el.getBoundingClientRect();
        return {
          letter: el.textContent,
          x0: r.left + r.width / 2 + window.scrollX,
          y0: r.top  + r.height/ 2 + window.scrollY
        };
      });
      setLetterPositions(pos);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Emit both up/down particles every EMIT_INTERVAL
  useEffect(() => {
    if (!letterPositions.length) return;
    const iv = setInterval(() => {
      const now = Date.now();
      const newOnes = letterPositions.flatMap((pos,i) => ([
        // upward
        {
          id: `up-${now}-${i}`,
          letter: pos.letter,
          x: pos.x0,
          y: pos.y0,
          phase: Math.random() * Math.PI * 2,
          created: now,
          dir: 'up'
        },
        // downward
        {
          id: `dn-${now}-${i}`,
          letter: pos.letter,
          x: pos.x0,
          y: pos.y0,
          phase: Math.random() * Math.PI * 2,
          created: now,
          dir: 'down'
        }
      ]));
      setParticles(p => [...p, ...newOnes]);
    }, EMIT_INTERVAL);
    return () => clearInterval(iv);
  }, [letterPositions]);

  // Animate
  useEffect(() => {
    let raf;
    const animate = () => {
      const now = Date.now();
      setParticles(p =>
        p
          .map(item => {
            const age = now - item.created;
            const dy = item.dir === 'up'
              ? -PARTICLE_SPEED
              :  PARTICLE_SPEED;
            const y = item.y + dy;
            const phase = item.phase + OSC_SPEED;
            return { ...item, y, phase, age };
          })
          .filter(item => item.age < PARTICLE_LIFETIME)
      );
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="top-cont emit-ritual">
      {/* Centered red base text */}
      <div className="emit-text" ref={containerRef}>
        {TEXT.split('').map((ch, i) => (
          <span key={i} className="emit-letter">{ch}</span>
        ))}
      </div>

      {/* White particles */}
      {particles.map(p => {
        const progress = p.age / PARTICLE_LIFETIME;
        const x = p.x + Math.sin(p.phase) * OSC_AMPLITUDE;
        const opacity = 1 - progress;
        return (
          <span
            key={p.id}
            className="emit-particle"
            style={{
              left: `${x}px`,
              top:  `${p.y}px`,
              opacity
            }}
          >
            {p.letter}
          </span>
        );
      })}
    </div>
  );
}
