import React from 'react';
import './TechniqueSection.css';

export default function TechniqueSection() {
  return (
    <section className="technique-section">
      <div className="technique-bg" />
      <div className="technique-overlay" />
      <div className="technique-content">
        <div className="technique-left">
          <div className="technique-title-box">
            <span className="technique-title">TECHNIQUE.</span>
            <span className="technique-title-underline"></span>
          </div>
          <button className="technique-play-btn" aria-label="Play Video">
            <span className="technique-play-icon">▶</span>
          </button>
        </div>
        <div className="technique-right">
          <div className="technique-info-group">
            <div className="technique-info-title">Human Intelligence.<span className="technique-info-underline"></span></div>
            <div className="technique-info-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          </div>
          <div className="technique-info-group">
            <div className="technique-info-title">Artificial Intelligence.<span className="technique-info-underline"></span></div>
            <div className="technique-info-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          </div>
          <button className="technique-learn-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
} 