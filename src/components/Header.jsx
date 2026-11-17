import { useState } from "react";
import { navLinks } from "../data.js";

export default function Header({ scrolled, activeId }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`top-nav${scrolled ? " scrolled" : ""}${menuOpen ? " menu-open" : ""}`}>
      <a href="#home" className="logo" onClick={() => setMenuOpen(false)}>
        C<span>J</span>D
      </a>
      <button
        className="nav-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav>
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`nav-link${activeId === link.id ? " active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
