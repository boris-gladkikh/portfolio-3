import React, { useEffect, useState } from "react";
import "./TriangleGrid.css";

const isPointInTriangle = (px, py, ax, ay, bx, by, cx, cy) => {
  const area = 0.5 * (-by * cx + ay * (-bx + cx) + ax * (by - cy) + bx * cy);
  const s = (1 / (2 * area)) * (ay * cx - ax * cy + (cy - ay) * px + (ax - cx) * py);
  const t = (1 / (2 * area)) * (ax * by - ay * bx + (ay - by) * px + (bx - ax) * py);
  return s >= 0 && t >= 0 && 1 - s - t >= 0;
};

const TriangleGrid = () => {
  const triangleSize = 24;
  const padding = 8;
  const totalSize = triangleSize + padding;

  const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });
  const [clickState, setClickState] = useState(0); // 0 = default, 1 = transform, 2 = reset
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    const handleResize = () =>
      setDimensions({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    setClickState((prev) => (prev === 0 ? 1 : 0));
  };

  const cols = Math.ceil(dimensions.width / totalSize);
  const rows = Math.ceil(dimensions.height / totalSize);

  const base = 600;
  const height = 500;
  const a = { x: mousePos.x, y: mousePos.y + height };
  const b = { x: mousePos.x - base / 2, y: mousePos.y };
  const c = { x: mousePos.x + base / 2, y: mousePos.y };

  return (
    <div className="top-container">
      <div className="triangle-grid" onClick={handleClick}>
        {Array.from({ length: rows * cols }).map((_, i) => {
          const row = Math.floor(i / cols);
          const col = i % cols;
          const left = col * totalSize;
          const top = row * totalSize;
          const centerX = left;
          const centerY = top;

          const insideTriangle = isPointInTriangle(centerX, centerY, a.x, a.y, b.x, b.y, c.x, c.y);

          let className = "triangle ripple";
          if (clickState === 0) {
            if (insideTriangle) className += " active rotate-down";
          } else if (clickState === 1) {
            if (!insideTriangle) {
              className = "shape-cross plus-sign";
            } else {
              className = "triangle rotated-red";
            }
          }

          return (
            <div
              key={i}
              className={className}
              style={{
                top: `${top}px`,
                left: `${left}px`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TriangleGrid;
