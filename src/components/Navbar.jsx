import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">Offerist</div>
      </div>
      <ul className={`navbar-menu${open ? ' open' : ''}`} onClick={() => setOpen(false)}>
        <li>ABOUT</li>
        <li>ADMISSIONS COUNSELING</li>
        <li>TUTORING</li>
        <li>STATISTICS</li>
        <li>BLOG</li>
      </ul>
      <div className="navbar-right">
        <div className="navbar-hamburger" onClick={() => setOpen(v => !v)}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            stroke="#fff"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <line x1="6" y1="10" x2="26" y2="10" />
            <line x1="6" y1="16" x2="26" y2="16" />
            <line x1="6" y1="22" x2="26" y2="22" />
          </svg>
        </div>
      </div>
    </nav>
  );
}
 