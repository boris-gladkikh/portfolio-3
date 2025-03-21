import React, { useState } from 'react';
import './MoonLandingEffect.css';

const MoonLandingEffect = () => {
  const [shadowPosition, setShadowPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moon = e.target.getBoundingClientRect();
    const offsetX = clientX - (moon.left + moon.width / 2);
    const offsetY = clientY - (moon.top + moon.height / 2);
    setShadowPosition({ x: offsetX / 2, y: offsetY / 2 }); // More intense movement
  };

  return (
    <div className="space">
      <div className="topography detailed-waves"></div>
      <div
        className="moon giant-moon"
        onMouseMove={handleMouseMove}
        style={{
          boxShadow: `${-shadowPosition.x}px ${-shadowPosition.y}px 150px rgba(255, 20, 147, 1)` // Way more intense hotpink shadow
        }}
      ></div>
      <div className="planetoid planetoid1"></div>
      <div className="planetoid planetoid2"></div>
      <div className="planetoid planetoid3"></div>
    </div>
  );
};

export default MoonLandingEffect;
