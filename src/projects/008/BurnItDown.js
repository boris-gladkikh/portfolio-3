import React, { useEffect, useState } from 'react';
import './BurnItDown.css';

const NUM_BALLS = 10;
const NUM_PLUS_SIGNS = 60;

const BurnItDown = () => {
  const [balls, setBalls] = useState([]);
  const [plusSigns, setPlusSigns] = useState([]);
  const [clickState, setClickState] = useState(0);
  const lineCount = Math.floor(window.innerHeight / 4); // 3–4px spacing

  useEffect(() => {
    const initBalls = Array.from({ length: NUM_BALLS }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      dx: (Math.random() - 0.5) * 4,
      dy: (Math.random() - 0.5) * 4,
      id: Math.random().toString(36).substr(2, 9),
    }));
    setBalls(initBalls);
  }, []);

  useEffect(() => {
    if (clickState !== 0) return;
    const moveInterval = setInterval(() => {
      setBalls((prevBalls) =>
        prevBalls.map((ball) => {
          let newX = ball.x + ball.dx;
          let newY = ball.y + ball.dy;
          let newDx = ball.dx;
          let newDy = ball.dy;

          if (newX < 0 || newX > window.innerWidth) newDx = -newDx;
          if (newY < 0 || newY > window.innerHeight) newDy = -newDy;

          return { ...ball, x: newX, y: newY, dx: newDx, dy: newDy };
        })
      );
    }, 16);
    return () => clearInterval(moveInterval);
  }, [balls, clickState]);

  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     if (clickState !== 0) return;
  //     setBalls((prevBalls) =>
  //       prevBalls.map((ball) => {
  //         const dx = e.clientX - ball.x;
  //         const dy = e.clientY - ball.y;
  //         const distance = Math.sqrt(dx * dx + dy * dy);
  //         if (distance < 50 && distance > 10) {
  //           const repelX = ball.x - dx * 0.05;
  //           const repelY = ball.y - dy * 0.05;
  //           return {
  //             ...ball,
  //             dx: repelX - ball.x,
  //             dy: repelY - ball.y,
  //           };
  //         }
  //         return ball;
  //       })
  //     );
  //   };
  //   window.addEventListener('mousemove', handleMouseMove);
  //   return () => window.removeEventListener('mousemove', handleMouseMove);
  // }, [clickState]);

  useEffect(() => {
    if (clickState !== 0) return;
  
    const handleMouseMove = (e) => {
      const activationRadius = 400; //size of the activation circle
      const repelStrength = 0.05;
  
      setBalls((prevBalls) =>
        prevBalls.map((ball) => {
          const dx = e.clientX - ball.x;
          const dy = e.clientY - ball.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
  
          if (distance < activationRadius) {
            const repelX = ball.x - dx * repelStrength;
            const repelY = ball.y - dy * repelStrength;
            return {
              ...ball,
              dx: repelX - ball.x,
              dy: repelY - ball.y,
            };
          }
          return ball;
        })
      );
    };
  
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [clickState]);
  

  useEffect(() => {
    if (clickState !== 1) return;
    const interval = setInterval(() => {
      setPlusSigns((prev) =>
        prev.map((p) => ({ ...p, x: p.x + p.dx, y: p.y + p.dy }))
      );
    }, 30);
    return () => clearInterval(interval);
  }, [clickState]);

  const handleClick = () => {
    if (clickState === 0) {
      const allPlus = balls.flatMap((ball) =>
        Array.from({ length: NUM_PLUS_SIGNS }).map(() => ({
          x: ball.x,
          y: ball.y,
          dx: (Math.random() - 0.5) * 2,
          dy: (Math.random() - 0.5) * 2,
          id: Math.random().toString(36).substr(2, 9),
          red: false
        }))
      );
      setPlusSigns(allPlus);
      setBalls([]);
      setClickState(1);
    } else if (clickState === 1) {
      setPlusSigns((prev) => prev.map((p) => ({ ...p, dx: 0, dy: 0, red: true })));
      setClickState(2);
    } else {
      setClickState(0);
      const resetBalls = Array.from({ length: NUM_BALLS }).map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        dx: (Math.random() - 0.5) * 4,
        dy: (Math.random() - 0.5) * 4,
        id: Math.random().toString(36).substr(2, 9),
      }));
      setBalls(resetBalls);
      setPlusSigns([]);
    }
  };

  return (
    <div className="top-cont" onClick={handleClick}>
      <div className="line-background">
        {Array.from({ length: lineCount }).map((_, i) => (
          <div
            key={i}
            className="h-line"
            style={{ top: `${i * 8}px` }}
          />
        ))}
      </div>

      {balls.map((ball) => (
        <div
          key={ball.id}
          className="red-ball"
          style={{ left: ball.x, top: ball.y }}
        />
      ))}

      {plusSigns.map((p) => (
        <div
          key={p.id}
          className={`plus-sign ${p.red ? 'red' : ''}`}
          style={{ left: p.x, top: p.y }}
        />
      ))}
    </div>
  );
};

export default BurnItDown;
