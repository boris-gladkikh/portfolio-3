import React, { useEffect, useRef, useState, useCallback } from "react";
import "./TriangleGrid.css";

// Utility: point inside triangle
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
  const [trailPos, setTrailPos] = useState({ x: -9999, y: -9999 });
  const [lockedTriangle, setLockedTriangle] = useState(null);
  const [sigilTriangle, setSigilTriangle] = useState(null);
  const [exploding, setExploding] = useState(false);

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const requestRef = useRef();

  // Smooth mouse trail effect
  const animateTrail = useCallback(() => {
    setTrailPos((prev) => ({
      x: prev.x + (mousePos.x - prev.x) * 0.1,
      y: prev.y + (mousePos.y - prev.y) * 0.1,
    }));
    requestRef.current = requestAnimationFrame(animateTrail);
  });

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    const handleResize = () =>
      setDimensions({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    requestRef.current = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(requestRef.current);
    };
  }, [animateTrail, mousePos]);

  const handleClick = () => {
    const base = 600;
    const height = 500;
    const locked = {
      a: { x: trailPos.x, y: trailPos.y },
      b: { x: trailPos.x - base / 2, y: trailPos.y + height },
      c: { x: trailPos.x + base / 2, y: trailPos.y + height },
    };
    setLockedTriangle(locked);
    setSigilTriangle(locked);
    setExploding(true);

    setTimeout(() => {
      setLockedTriangle(null);
      setExploding(false);

      // Optional: fade sigil after 4s
      setTimeout(() => setSigilTriangle(null), 4000);
    }, 2500);
  };

  const cols = Math.ceil(dimensions.width / totalSize);
  const rows = Math.ceil(dimensions.height / totalSize);

  return (
    <div className="top-container">
    <div className="triangle-grid" onClick={handleClick}>
      {/* Sigil triangle after explosion */}
      {sigilTriangle && (
        <div
          className="sigil"
          style={{
            clipPath: `polygon(
              ${sigilTriangle.a.x}px ${sigilTriangle.a.y}px,
              ${sigilTriangle.b.x}px ${sigilTriangle.b.y}px,
              ${sigilTriangle.c.x}px ${sigilTriangle.c.y}px
            )`,
          }}
        />
      )}

      {Array.from({ length: rows * cols }).map((_, i) => {
        const row = Math.floor(i / cols);
        const col = i % cols;

        const left = col * totalSize;
        const top = row * totalSize;
        const centerX = left;
        const centerY = top;

        // Define current activation triangle (live trail)
        const base = 600;
        const height = 500;
        const a = { x: trailPos.x, y: trailPos.y };
        const b = { x: trailPos.x - base / 2, y: trailPos.y + height };
        const c = { x: trailPos.x + base / 2, y: trailPos.y + height };

        const insideLiveTriangle = isPointInTriangle(centerX, centerY, a.x, a.y, b.x, b.y, c.x, c.y);

        const insideLocked =
          lockedTriangle &&
          isPointInTriangle(
            centerX,
            centerY,
            lockedTriangle.a.x,
            lockedTriangle.a.y,
            lockedTriangle.b.x,
            lockedTriangle.b.y,
            lockedTriangle.c.x,
            lockedTriangle.c.y
          );

        let className = "triangle ripple";
        if (lockedTriangle) {
          if (insideLocked && exploding) {
            className = "triangle explode shape-cross";
          } else {
            className = "triangle faded shape-circle";
          }
        } else if (insideLiveTriangle) {
          className = "triangle active rotate";
        }

        return (
          <div
            key={i}
            className={className}
            style={{
              top: `${top}px`,
              left: `${left}px`,
              '--rand-x': Math.random(),
              '--rand-y': Math.random(),
            }}
          />
        );
      })}
    </div>
    </div>
  );
};

export default TriangleGrid;
