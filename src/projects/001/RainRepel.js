import React, { useEffect, useRef, useState } from "react";
import "./RainRepel.css";

const NUM_LINES = 400;
const MOUSE_RADIUS = 120;

const RainRepel = ({ children }) => {
  const [lines, setLines] = useState([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  // IMPORTANT: this ref should wrap ONLY your logo/text area
  const hitboxRef = useRef(null);

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
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const { x: mx, y: my } = mouseRef.current;

      // Measure ONLY the logo/text hitbox
      const rect = hitboxRef.current?.querySelector("#text-container")?.getBoundingClientRect();

      setLines((prev) =>
        prev.map((line) => {
          let newY = line.y + line.speed;
          let faded = line.faded;
        
          if (!faded && Math.random() < 0.005) faded = true;
        
          // Measure logo rect (whatever you’re using now)
          // const rect = ... (you already have this outside map)
        
          // compute red fresh each frame
          let mouseHit = false;
          let logoHit = false;
        
          const dx = mx - line.x;
          const dy = my - (line.y + line.length / 2);
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < MOUSE_RADIUS) mouseHit = true;
        
          if (rect) {
            const xIn = line.x >= rect.left && line.x <= rect.right;
            const lineTop = line.y;
            const lineBottom = line.y + line.length;
            const yOverlaps = lineBottom >= rect.top && lineTop <= rect.bottom;
        
            if (xIn && yOverlaps) logoHit = true;
          }
        
          const red = mouseHit || logoHit;
        
          if (newY > window.innerHeight) {
            return {
              ...line,
              y: -line.length,
              x: Math.random() * window.innerWidth,
              faded: false,
              red: false,
            };
          }
        
          return { ...line, y: newY, faded, red };
        })

      );
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="top-cont">
      {lines.map((line) => (
        <div
          key={line.id}
          className={`rain-line${line.red ? " red" : line.faded ? " faded" : ""}`}
          style={{
            left: `${line.x}px`,
            top: `${line.y}px`,
            height: `${line.length}px`,
          }}
        />
      ))}

      {/* overlay to center the logo, but the ref is ONLY on the hitbox */}
      <div className="rain-overlay">
        <div ref={hitboxRef} className="rain-hitbox">
          {children}
        </div>
      </div>
    </div>
  );
};

export default RainRepel;
