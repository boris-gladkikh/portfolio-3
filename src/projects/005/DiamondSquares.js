import React, { useState, useRef, useEffect } from "react";
import "./DiamondSquares.css";

let trailInterval = null;
let chargeTimeout = null;

const Square = ({ className = "", style, onMouseDown }) => (
  <div className={`square ${className}`} style={style} onMouseDown={onMouseDown} />
);

const DiamondSquares = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [trailSquares, setTrailSquares] = useState([]);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const originPositions = useRef([]);
  const trailColor = useRef("white"); // 🔥 FIX: useRef for dynamic trail color

  const basePositions = [
    { id: 0, x: 0, y: -150 },
    { id: 1, x: -150, y: 0 },
    { id: 2, x: 150, y: 0 },
    { id: 3, x: 0, y: 150 },
  ];

  useEffect(() => {
    originPositions.current = basePositions;
  }, [basePositions]);

  const startDrag = (e) => {
    const containerRect = containerRef.current.getBoundingClientRect();
    const startX = e.clientX - containerRect.left;
    const startY = e.clientY - containerRect.top;

    setIsDragging(true);
    setOffset({ x: 0, y: 0 });
    trailColor.current = "white";

    let lastOffset = { x: 0, y: 0 };

    // 🔥 Color shift after 3 seconds
    chargeTimeout = setTimeout(() => {
      trailColor.current = "red";
    }, 3000);

    // 🌀 Trail spawner
    trailInterval = setInterval(() => {
      const timestamp = Date.now();
      const newTrails = originPositions.current.map((square) => ({
        id: `${square.id}-${timestamp}-${Math.random()}`,
        x: square.x + lastOffset.x,
        y: square.y + lastOffset.y,
        color: trailColor.current,
      }));
      setTrailSquares((prev) => [...prev, ...newTrails]);
    }, 80);

    const handleMouseMove = (moveEvent) => {
      const x = moveEvent.clientX - containerRect.left - startX;
      const y = moveEvent.clientY - containerRect.top - startY;
      lastOffset = { x, y };
      setOffset({ x, y });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      clearInterval(trailInterval);
      clearTimeout(chargeTimeout);

      setTimeout(() => {
        setTrailSquares([]);
        setOffset({ x: 0, y: 0 });
        trailColor.current = "white";
      }, 5000); //changes the reset value

      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="top-cont">
      <div className="diamond-container" ref={containerRef}>
        {/* Draggable squares */}
        {basePositions.map((square) => (
          <Square
            key={square.id}
            className={`top ${isDragging ? "active" : ""}`}
            style={{
              left: `${square.x + offset.x}px`,
              top: `${square.y + offset.y}px`,
            }}
            onMouseDown={startDrag}
          />
        ))}

        {/* Trail squares */}
        {trailSquares.map((trail) => (
          <div
            key={trail.id}
            className={`square trail ${trail.color}`}
            style={{
              left: `${trail.x}px`,
              top: `${trail.y}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DiamondSquares;
