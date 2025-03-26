import React, { useEffect, useState } from 'react';
import './GridCircle.css';

const gridSpacing = 25;
const activationRadius = 40;

const GridCircle = () => {
  const [circles, setCircles] = useState([]);
  const [clickState, setClickState] = useState('idle'); // 'idle' | 'locked'

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const cols = Math.floor(screenWidth / gridSpacing);
    const rows = Math.floor(screenHeight / gridSpacing);
    const numCircles = cols * rows;

    const newCircles = Array.from({ length: numCircles }, (_, i) => ({
      x: (i % cols) * gridSpacing,
      y: Math.floor(i / cols) * gridSpacing,
    }));

    setCircles(newCircles);
  }, []);

  const handleMouseMove = (e) => {
    if (clickState !== 'idle') return;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const all = document.querySelectorAll('.circle');
    all.forEach((circle) => {
      const rect = circle.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = cx - mouseX;
      const dy = cy - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < activationRadius) {
        circle.classList.add('activated');
      }
    });
  };

  const handleClick = () => {
    const all = document.querySelectorAll('.circle');

    if (clickState === 'idle') {
      all.forEach((c) => {
        if (c.classList.contains('activated')) {
          c.classList.add('red');
        }
      });
      setClickState('locked');
    } else {
      all.forEach((c) => {
        c.classList.remove('activated', 'red');
      });
      setClickState('idle');
    }
  };

  return (
    <div
      className="grid-container"
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      {circles.map((circle, index) => (
        <div
          key={index}
          className="circle"
          style={{
            left: `${circle.x}px`,
            top: `${circle.y}px`,
          }}
        />
      ))}
    </div>
  );
};

export default GridCircle;
