import React from "react";
import "./Footer.css";

const EMAIL = "borisagladkikh@gmail.com";

const ELSEWHERE = [
  { label: "GitHub", href: "https://github.com/boris-gladkikh" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/boris-gladkikh/" },
  { label: "Facebook", href: "https://www.facebook.com/borisgladkill" },
];

// The red closing band: the statement, the contact details, the credit line.
function Footer() {
  return (
    <footer className="closing-band">
      <p className="closing-statement">
        Please contact for corporate/enterprise projects.
      </p>

      <div className="closing-grid">
        <div className="closing-col">
          <span className="closing-label">Direct</span>
          <a className="closing-email" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </div>

        <div className="closing-col">
          <span className="closing-label">Elsewhere</span>
          <div className="closing-links">
            {ELSEWHERE.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {label} &#8599;
              </a>
            ))}
          </div>
        </div>

        <div className="closing-col">
          <span className="closing-label">Availability</span>
          <p>Open to development, audio and A/V work.</p>
        </div>
      </div>

      <div className="closing-credit">
        <span>Boris Gladkikh</span>
        <span>Portland, Oregon</span>
        <span>&copy; {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

export default Footer;
