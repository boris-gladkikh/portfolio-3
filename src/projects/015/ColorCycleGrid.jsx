// ColorCycleGrid.jsx
import React, { useEffect, useState, useRef } from 'react';
import './ColorCycleGrid.css';

const TEXT                 = 'borisisntreal';  // the repeating phrase
const FONT_SIZE            = 24;               // px
const SPACING              = 3;                // px gap between letters
const RED_CYCLE_DURATION   = 10000;             // ms for red wave to traverse all cells
const WHITE_CYCLE_DURATION = 64000;             // ms for white wave to traverse up to the redPtr

export default function ColorCycleGrid() {
  // 1) Track viewport size so we can recompute grid
  const [dims, setDims] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  useEffect(() => {
    const onResize = () =>
      setDims({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // 2) Compute rows/cols and total cells
  const cols  = Math.ceil(dims.width  / (FONT_SIZE + SPACING));
  const rows  = Math.ceil(dims.height / (FONT_SIZE + SPACING));
  const total = cols * rows;

  // 3) Red and white pointers (–1 means “nothing yet”)
  const [redPtr,   setRedPtr]   = useState(-1);
  const [whitePtr, setWhitePtr] = useState(-1);

  // 4) Keep a ref to the latest redPtr so our white interval can clamp itself
  const redPtrRef = useRef(redPtr);
  useEffect(() => {
    redPtrRef.current = redPtr;
  }, [redPtr]);

  // 5) Advance the redPtr on its own schedule
  useEffect(() => {
    if (total === 0) return;
    setRedPtr(-1);
    const redInterval = RED_CYCLE_DURATION / total;
    const iv = setInterval(() => {
      setRedPtr(r => (r + 1) % total);
    }, redInterval);
    return () => clearInterval(iv);
  }, [total]);

  // 6) Advance the whitePtr on its own schedule, but never past the redPtr
  useEffect(() => {
    if (total === 0) return;
    setWhitePtr(-1);
    const whiteInterval = WHITE_CYCLE_DURATION / total;
    const iv = setInterval(() => {
      setWhitePtr(w => {
        const limit = redPtrRef.current;
        const nxt = w + 1;
        return nxt <= limit ? nxt : w;
      });
    }, whiteInterval);
    return () => clearInterval(iv);
  }, [total]);

  // 7) Build a flat array of letters to render
  const cells = Array.from({ length: total }, (_, i) => TEXT[i % TEXT.length]);

  return (
    <div className="ccg-top-cont">
      {cells.map((ch, idx) => {
        const row = Math.floor(idx / cols);
        const col = idx % cols;

        // Decide color: white by default, red if redPtr has passed,
        // then white again if whitePtr has passed (but whitePtr never > redPtr).
        let color = 'white';
        if (idx <= redPtr)   color = 'red';
        if (idx <= whitePtr) color = 'white';

        return (
          <div
            key={idx}
            className="ccg-cell"
            style={{
              top:  row * (FONT_SIZE + SPACING),
              left: col * (FONT_SIZE + SPACING),
              width:  FONT_SIZE,
              height: FONT_SIZE,
              fontSize: FONT_SIZE,
              lineHeight: `${FONT_SIZE}px`,
              color
            }}
          >
            {ch}
          </div>
        );
      })}
    </div>
  );
}
