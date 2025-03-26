import React, { useEffect, useRef, useState } from "react";
import "./DiagonalLines.css";

const DiagonalLines = () => {
  const maskRef = useRef(null);
  const containerRef = useRef(null);
  const segmentRefs = useRef([]);
  const [maskPos, setMaskPos] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const [isDragging, setIsDragging] = useState(false);

  const segmentHeight = 144;
  const segmentGap = 3;
  const spacing = 8;
  const columns = Math.ceil(window.innerWidth / spacing);
  const rows = Math.ceil(window.innerHeight / (segmentHeight + segmentGap));

  useEffect(() => {
    let rafId;

    const animate = () => {
      if (!maskRef.current) return;

      const mask = maskRef.current.getBoundingClientRect();
      const radius = mask.width / 2;
      const centerX = mask.left + radius;
      const centerY = mask.top + radius;

      segmentRefs.current.forEach((segment) => {
        if (!segment) return;

        const rect = segment.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        const dx = cx - centerX;
        const dy = cy - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < radius && isDragging) {
          segment.classList.add("red");
        } else {
          segment.classList.remove("red");
        }
      });

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, [isDragging]);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseMove = (e) => {
    if (isDragging) {
      setMaskPos({ x: e.clientX, y: e.clientY });
    }
  };
  const handleMouseUp = () => setIsDragging(false);

  return (
    <div
      className="top-cont"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="diagonal-container">
        {[...Array(columns)].map((_, col) => (
          <div className="line-column" key={col} style={{ left: `${col * spacing}px` }}>
            {[...Array(rows)].map((_, row) => {
              const index = col * rows + row;
              return (
                <div
                  key={index}
                  ref={(el) => (segmentRefs.current[index] = el)}
                  className="line-segment"
                  style={{
                    top: `${row * (segmentHeight + segmentGap)}px`,
                    height: `${segmentHeight}px`,
                  }}
                />
              );
            })}
          </div>
        ))}

        <div
          ref={maskRef}
          className="mask-circle"
          onMouseDown={handleMouseDown}
          style={{
            left: `${maskPos.x}px`,
            top: `${maskPos.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    </div>
  );
};

export default DiagonalLines;
