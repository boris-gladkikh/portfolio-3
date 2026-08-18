import React, { useCallback, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./Navbar.css";

const SECTION_IDS = ["home", "about", "portfolio", "contact"];

function NavBar() {
  const [activeId, setActiveId] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const onHomePage = location.pathname === "/";

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const handleNav = (evt, id) => {
    evt.preventDefault();
    setMenuOpen(false);

    if (onHomePage) {
      scrollTo(id);
      window.history.replaceState(null, "", id === "home" ? "/" : `/#${id}`);
    } else {
      // on a piece route — go home, the hash effect below does the scrolling
      history.push(id === "home" ? "/" : `/#${id}`);
    }
  };

  // Scroll-spy: the section occupying the top of the viewport is "current"
  useEffect(() => {
    if (!onHomePage) return;

    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean
    );
    if (!sections.length) return;

    const visible = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => visible.set(entry.target.id, entry));

        const current = SECTION_IDS.filter((id) => visible.get(id)?.isIntersecting);
        // when two sections share the band, the lower one is the one being entered
        if (current.length) setActiveId(current[current.length - 1]);
      },
      // a band just under the nav — a section is current while it crosses it
      { rootMargin: "-64px 0px -75% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [onHomePage]);

  // arriving on "/" with a hash (from a piece route)
  useEffect(() => {
    if (!onHomePage) return;

    const hash = location.hash?.replace("#", "");
    if (!hash) return;

    requestAnimationFrame(() => {
      scrollTo(hash);
      setActiveId(hash);
    });
  }, [onHomePage, location.hash, scrollTo]);

  return (
    <header className={`nav site-nav ${menuOpen ? "is-open" : ""}`}>
      <a
        className="nav-brand"
        href="#home"
        onClick={(e) => handleNav(e, "home")}
      >
        BORIS GLADKIKH<span className="accent">.</span>
      </a>

      <button
        type="button"
        className="nav-toggle"
        aria-expanded={menuOpen}
        aria-controls="site-nav-links"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? "CLOSE" : "MENU"}
      </button>

      <nav className="nav-links" id="site-nav-links">
        {SECTION_IDS.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            aria-current={onHomePage && activeId === id ? "page" : undefined}
            onClick={(e) => handleNav(e, id)}
          >
            {id.toUpperCase()}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default NavBar;
