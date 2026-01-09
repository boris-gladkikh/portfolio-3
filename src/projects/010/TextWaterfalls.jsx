import React, { useEffect, useState } from 'react';
import './TextWaterfalls.css';

const TEXT = 'borisisntreal';
const COLUMN_COUNT = 60;
const LETTER_HEIGHT = 20;
const MASK_RADIUS = 300;

const TextWaterfalls = () => {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const spacing = window.innerWidth / COLUMN_COUNT;
    const colData = Array.from({ length: COLUMN_COUNT }).map((_, i) => ({
      x: spacing * i,
      delay: Math.random() * 2,
      side: i % 2 === 0 ? 'top' : 'bottom',
    }));
    setColumns(colData);
  }, []);

  return (
    <div className="top-cont">
      <div className="mask-center" />
      {columns.map((col, i) => (
        <div key={i} className="letter-column" style={{ left: `${col.x}px` }}>
          {[...Array(40)].map((_, j) => {
            const char = TEXT[j % TEXT.length];
            const topStart = col.side === 'top' ? -j * LETTER_HEIGHT : window.innerHeight + j * LETTER_HEIGHT;
            const dir = col.side === 'top' ? 'down' : 'up';

            return (
              <div
                key={j}
                className={`letter ${dir}`}
                style={{
                  '--x-offset': `${col.x - window.innerWidth / 2}px`,
                  '--start-y': `${topStart}px`,
                  animationDelay: `${col.delay + j * 0.1}s`,
                }}
              >
                {char}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default TextWaterfalls;
