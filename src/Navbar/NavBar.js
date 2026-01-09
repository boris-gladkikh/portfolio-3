import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";

const SECTION_IDS = ["home", "about", "portfolio", "contact"];
const NAV_OFFSET = 80; // match your navbar height

function NavBar() {
  const [activeId, setActiveId] = useState("home");

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    let ticking = false;

    const updateActive = () => {
      ticking = false;

      // Pick the last section whose top is above the navbar offset
      let current = SECTION_IDS[0];

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;

        const top = el.getBoundingClientRect().top;
        if (top <= NAV_OFFSET + 1) {
          current = id;
        }
      }

      setActiveId(current);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateActive);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // run once on mount
    updateActive();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" variant="dark" className="justify-content-end" id="nav-style">
      <Navbar.Toggle aria-controls="navigation" />
      <Navbar.Collapse id="navigation" className="text-center justify-content-end">
        <Nav style={{ fontSize: "18px" }} className="alata-font text-white">
          {SECTION_IDS.map((id) => (
            <Nav.Item key={id}>
              <a
                href={`#${id}`}
                className={`px-1 ${activeId === id ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(id);
                }}
              >
                {id.toUpperCase()}
              </a>
            </Nav.Item>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
