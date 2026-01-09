import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useHistory, useLocation } from "react-router-dom";
import "./Navbar.css";

const SECTION_IDS = ["home", "about", "portfolio", "contact"];
const NAV_OFFSET = 80;

function NavBar() {
  const [activeId, setActiveId] = useState("home");
  const history = useHistory();
  const location = useLocation();

  const onHomePage = location.pathname === "/";

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNav = (id) => {
    if (onHomePage) {
      // We're on "/" so the sections exist
      scrollTo(id);
      // Keep URL in sync (optional but nice)
      window.history.replaceState(null, "", id === "home" ? "/" : `/#${id}`);
    } else {
      // We're on a project route; go back to home with a hash
      history.push(id === "home" ? "/" : `/#${id}`);
    }
  };

  // Scroll-spy ONLY on homepage
  useEffect(() => {
    if (!onHomePage) return;

    let ticking = false;

    const updateActive = () => {
      ticking = false;
      let current = SECTION_IDS[0];

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;

        const top = el.getBoundingClientRect().top;
        if (top <= NAV_OFFSET + 1) current = id;
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
    updateActive();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [onHomePage]);

  // If we arrive on "/" with a hash (from a project page), scroll to it
  useEffect(() => {
    if (!onHomePage) return;

    const hash = location.hash?.replace("#", "");
    if (!hash) return;

    // slight delay ensures DOM is painted
    requestAnimationFrame(() => {
      scrollTo(hash);
      setActiveId(hash);
    });
  }, [onHomePage, location.hash]);

  return (
    <Navbar expand="lg" variant="dark" className="justify-content-end" id="nav-style">
      <Navbar.Toggle aria-controls="navigation" />
      <Navbar.Collapse id="navigation" className="text-center justify-content-end">
        <Nav style={{ fontSize: "18px" }} className="alata-font text-white">
          {SECTION_IDS.map((id) => (
            <Nav.Item key={id}>
              <button
                type="button"
                className={`nav-btn px-1 ${onHomePage && activeId === id ? "active" : ""}`}
                onClick={() => handleNav(id)}
              >
                {id.toUpperCase()}
              </button>
            </Nav.Item>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
