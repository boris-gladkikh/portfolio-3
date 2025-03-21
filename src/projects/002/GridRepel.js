import React, { useEffect, useState } from 'react';
import './GridRepel.css';

const gridSpacing = 25;

const GridRepel = () => {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const cols = Math.floor(screenWidth / gridSpacing);
    const rows = Math.floor(screenHeight / gridSpacing);
    const numCircles = cols * rows;

    const newCircles = Array.from({ length: numCircles }, (_, i) => ({
      x: (i % cols) * gridSpacing,
      y: Math.floor(i / cols) * gridSpacing,
      offsetX: 0,
      offsetY: 0
    }));
    setCircles(newCircles);
  }, []);

  // const handleMouseMove = (e) => {
  //   const mouseX = e.clientX;
  //   const mouseY = e.clientY;
  //   const repelDistance = 150;

  //   const updatedCircles = circles.map((circle) => {
  //     const dx = circle.x - mouseX;
  //     const dy = circle.y - mouseY;
  //     const distance = Math.sqrt(dx * dx + dy * dy);

  //     if (distance < repelDistance) {
  //       const force = (repelDistance - distance) / repelDistance;
  //       const angle = Math.atan2(dy, dx);
  //       return {
  //         ...circle,
  //         offsetX: Math.cos(angle) * force * 50,
  //         offsetY: Math.sin(angle) * force * 50
  //       };
  //     }
  //     return { ...circle, offsetX: 0, offsetY: 0 };
  //   });

  //   setCircles(updatedCircles);
  // };

  const handleMouseMove = (e) => {
    const circles = document.querySelectorAll(".circle");
  
    circles.forEach((circle) => {
      const rect = circle.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      const distance = Math.sqrt(dx * dx + dy * dy);
  
      const maxDistance = 200; // Increased repel range
      const force = Math.max(0, (maxDistance - distance) / maxDistance);
  
      const moveX = force * dx * -3; // Amplified force multiplier
      const moveY = force * dy * -3;
  
      circle.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  };
  

  return (
    <div className="grid-container" onMouseMove={handleMouseMove}>
      {circles.map((circle, index) => (
        <div
          key={index}
          className="circle"
          style={{
            left: `${circle.x + circle.offsetX}px`,
            top: `${circle.y + circle.offsetY}px`
          }}
        />
      ))}
    </div>
  );
};

export default GridRepel;
