import React, { useEffect, useState } from "react";
import "./BorisGrid.css";

const phrase = "borisisntreal";
const fontSize = 16;
const spacing = 4;
const charSize = fontSize + spacing;
const centeredFontSize = 72;
const centeredSpacing = 64;

const BorisGrid = () => {
  const [grid, setGrid] = useState([]);
  const [clickState, setClickState] = useState(0); // 0 = default, 1 = final display, 2 = reset
  // eslint-disable-next-line no-unused-vars
  const [highlighted, setHighlighted] = useState({});

  useEffect(() => {
    const cols = Math.floor(window.innerWidth / charSize);
    const rows = Math.floor(window.innerHeight / charSize);

    const newGrid = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const index = col % phrase.length;
        newGrid.push({
          id: `${row}-${col}`,
          row,
          col,
          x: col * charSize,
          y: row * charSize,
          char: phrase[index],
          revealed: false,
          centered: false,
          fadingOut: false
        });
      }
    }

    setGrid(newGrid);
    setClickState(0);
    setHighlighted({});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickState === 2]); // trigger reset

  const handleMouseMove = (e) => {
    if (clickState !== 0) return;
    const mx = e.clientX;
    const my = e.clientY;

    const radius = 30;

    setGrid(prev =>
      prev.map(cell => {
        const dx = cell.x - mx;
        const dy = cell.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < radius && !cell.revealed) {
          return { ...cell, revealed: true };
        }
        return cell;
      })
    );
  };

  const handleClick = () => {
    if (clickState === 0) {
      // Step 1: Remove unrevealed
      const revealedGrid = grid.filter(cell => cell.revealed);
      setGrid(revealedGrid);
      setClickState(1);

      setTimeout(() => {
        // Step 2: Find one full row with a valid borisisntreal sequence
        const rows = {};
        revealedGrid.forEach(cell => {
          if (!rows[cell.row]) rows[cell.row] = [];
          rows[cell.row].push(cell);
        });

        let bestLine = [];
        for (const r in rows) {
          const line = rows[r];
          const sorted = line.sort((a, b) => a.col - b.col);
          for (let i = 0; i <= sorted.length - phrase.length; i++) {
            const slice = sorted.slice(i, i + phrase.length);
            const chars = slice.map(c => c.char).join("");
            if (chars === phrase) {
              bestLine = slice;
              break;
            }
          }
          if (bestLine.length) break;
        }

        const centerX = window.innerWidth / 2 - (phrase.length * centeredSpacing) / 2;
        const centerY = window.innerHeight / 2;

        const centeredLine = bestLine.map((cell, i) => ({
          ...cell,
          x: centerX + i * centeredSpacing,
          y: centerY,
          centered: true
        }));

        const fadeOutIds = new Set(bestLine.map(c => c.id));

        const newGrid = revealedGrid.map(cell => {
          if (fadeOutIds.has(cell.id)) {
            const match = centeredLine.find(c => c.id === cell.id);
            return match || cell;
          } else {
            return { ...cell, fadingOut: true };
          }
        });

        setGrid(newGrid);
      }, 1500);
    } else {
      // Reset
      setClickState(2);
    }
  };

  return (
    <div className="top-cont" onMouseMove={handleMouseMove} onClick={handleClick}>
      {grid.map(cell => (
        <span
          key={cell.id}
          className={`boris-char ${cell.revealed ? "red" : ""} ${cell.centered ? "centered" : ""} ${cell.fadingOut ? "fade-out" : ""}`}
          style={{
            left: `${cell.x}px`,
            top: `${cell.y}px`,
            fontSize: cell.centered ? `${centeredFontSize}px` : `${fontSize}px`,
            letterSpacing: cell.centered ? "4px" : "0px"
          }}
        >
          {cell.revealed || cell.centered ? cell.char : "+"}
        </span>
      ))}
    </div>
  );
};

export default BorisGrid;
