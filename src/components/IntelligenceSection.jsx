import React from 'react';
import './IntelligenceSection.css';

export default function IntelligenceSection() {
  return (
    <section className="intel-section">
      <div className="intel-bg" />
      <div className="intel-overlay" />
      <div className="intel-content">
        <div className="intel-left">
          <div className="intel-title-box">
            <span className="intel-title">INTELLIGENCE.</span>
            <span className="intel-title-underline"></span>
          </div>
          <button className="intel-play-btn" aria-label="Play Video">
            <span className="intel-play-icon">▶</span>
          </button>
        </div>
        <div className="intel-right">
          <div className="intel-info-group">
            <div className="intel-info-title">Human Intelligence.<span className="intel-info-underline"></span></div>
            <div className="intel-info-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          </div>
          <div className="intel-info-group">
            <div className="intel-info-title">Artificial Intelligence.<span className="intel-info-underline"></span></div>
            <div className="intel-info-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          </div>
          <button className="intel-learn-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
} 