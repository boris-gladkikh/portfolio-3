import React from "react";
import "./TextCircles.css";

const TEXT = "borisisntreal";
const NUM_RINGS = 5;
const SPACING = 40;

const TextCircles = () => {
  return (
    <div className="boris-circles-container">
      {Array.from({ length: NUM_RINGS }).map((_, ringIndex) => {
        const radius = 300 - ringIndex * SPACING;
        const isRed = ringIndex % 2 === 0;
        const rotationClass =
          ringIndex % 2 === 0 ? "rotate-clockwise" : "rotate-counter";

        const repeatCount = Math.max(2, Math.floor((radius * 2) / 150));
        const chars = TEXT.repeat(repeatCount).split("");
        const angleStep = (2 * Math.PI) / chars.length;

        return (
          <div
            key={ringIndex}
            className="boris-ring"
            style={{ width: radius * 2, height: radius * 2 }}
          >
            <div className={`boris-ring-inner ${rotationClass}`}>
              {chars.map((char, i) => {
                const angle = i * angleStep;
                const x = radius + Math.cos(angle) * radius;
                const y = radius + Math.sin(angle) * radius;
                return (
                  <span
                    key={i}
                    className={`boris-letter ${isRed ? "red" : "white"}`}
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                      transform: `translate(-50%, -50%)`,
                    }}
                  >
                    {char}
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TextCircles;
