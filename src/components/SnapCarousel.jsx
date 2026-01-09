import React, { useRef } from "react";
import "./SnapCarousel.css";

export default function SnapCarousel({ children }) {
  const trackRef = useRef(null);

  const scrollByCards = (dir = 1) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector("[data-card]");
    const step = card ? card.getBoundingClientRect().width + 16 : 320; // + gap
    track.scrollBy({ left: dir * step * 2, behavior: "smooth" }); // 2 cards at a time
  };

  return (
    <div className="snap-wrap">
      <button className="snap-btn left" onClick={() => scrollByCards(-1)} aria-label="Previous">
        ‹
      </button>

      <div className="snap-track" ref={trackRef}>
        {children}
      </div>

      <button className="snap-btn right" onClick={() => scrollByCards(1)} aria-label="Next">
        ›
      </button>
    </div>
  );
}
