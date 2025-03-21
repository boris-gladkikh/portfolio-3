import React, { useEffect, useRef } from "react";
import "./RainLines.css";

const RainLines = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const mouseRef = { x: -9999, y: -9999 };
    const frameRef = { current: null };
    let isMounted = true;
  
    const handleMouseMove = (e) => {
      mouseRef.x = e.clientX;
      mouseRef.y = e.clientY;
    };
  
    window.addEventListener("mousemove", handleMouseMove);
  
    const animate = () => {
      if (!isMounted || !containerRef.current) return;
  
      const segments = containerRef.current.querySelectorAll(".segment");
      const radius = 300;
  
      segments.forEach((seg) => {
        const rect = seg.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = mouseRef.x - cx;
        const dy = mouseRef.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        seg.classList.toggle("red", dist < radius);
      });
  
      frameRef.current = requestAnimationFrame(animate);
    };
  
    frameRef.current = requestAnimationFrame(animate);
  
    return () => {
      isMounted = false;
      window.removeEventListener("mousemove", handleMouseMove);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);
  

  const lineCount = 120;
  const segmentCount = 14;
  const spacing = window.innerWidth / lineCount;

  return (
    <div className="top-cont">
    <div className="rain-container" ref={containerRef}>
      {Array.from({ length: lineCount }).map((_, i) => {
        const x = i * spacing;
        return (
          <div key={i} className="rain-line" style={{ left: `${x}px` }}>
            {Array.from({ length: segmentCount }).map((_, j) => (
              <div
                key={j}
                className="segment"
                style={{
                  top: `${(j * 100) / segmentCount}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default RainLines;
