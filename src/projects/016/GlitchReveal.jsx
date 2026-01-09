// GlitchReveal.jsx
import React, { useEffect, useRef, useState } from 'react';
import './GlitchReveal.css';

const TEXT= 'borisisntreal';
const FONT_SIZE= 72;
const INTENSITY= 10;// how many bars per glitch
const SLICE_THICKNESS= 6;// px thickness of each glitch bar
const DURATION= 1200;// ms each glitch lasts
const FREQUENCY= 800;// ms between glitch events
const MAX_SHIFT= 0;

export default function GlitchReveal() {
  const containerRef = useRef(null);
  const [dims, setDims] = useState({ left:0, top:0, width:0, height:0 });
  const [slices, setSlices] = useState([]);

  // Measure text container on mount & resize
  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return;
      const r = containerRef.current.getBoundingClientRect();
      setDims({ left: r.left, top: r.top, width: r.width, height: r.height });
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Trigger glitch at set FREQUENCY
  useEffect(() => {
    const iv = setInterval(() => {
      if (dims.width === 0) return;
      // generate INTENSITY random slices
      const newSlices = Array.from({ length: INTENSITY }).map((_, i) => {
        const horizontal = Math.random() < 0.5;
        if (horizontal) {
          // random Y position
          const y = Math.random() * dims.height;
          return {
            id: `h-${Date.now()}-${i}`,
            orientation: 'h',
            x: 0,
            y,
            w: dims.width,
            h: SLICE_THICKNESS,
            dx: (Math.random() * 2 - 1) * MAX_SHIFT,
            dy: (Math.random() * 2 - 1) * MAX_SHIFT
          };
        } else {
          // vertical slice
          const x = Math.random() * dims.width;
          return {
            id: `v-${Date.now()}-${i}`,
            orientation: 'v',
            x,
            y: 0,
            w: SLICE_THICKNESS,
            h: dims.height,
            dx: (Math.random() * 2 - 1) * MAX_SHIFT,
            dy: (Math.random() * 2 - 1) * MAX_SHIFT
          };
        }
      });
      setSlices(newSlices);
      // clear after DURATION
      setTimeout(() => setSlices([]), DURATION);
    }, FREQUENCY);
    return () => clearInterval(iv);
  }, [dims]);

  return (
    <div className="gr-top-cont">
      {/* Base red text */}
      <div
        className="gr-text-base"
        ref={containerRef}
      >
        {TEXT}
      </div>

      {/* Glitch slices */}
      {slices.map(s => (
        <div
          key={s.id}
          className={`gr-slice gr-${s.orientation}`}
          style={{
            left:   `${dims.left + s.x}px`,
            top:    `${dims.top  + s.y}px`,
            width:  `${s.w}px`,
            height: `${s.h}px`
          }}
        >
          <div
            className="gr-text-glitch"
            style={{
              transform: `translate(${ -s.x + s.dx }px, ${ -s.y + s.dy }px)`,
              fontSize: `${FONT_SIZE}px`,
              lineHeight: `${FONT_SIZE}px`
            }}
          >
            {TEXT}
          </div>
        </div>
      ))}
    </div>
  );
}
