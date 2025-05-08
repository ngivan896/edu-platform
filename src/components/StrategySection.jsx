import React from 'react';
import './StrategySection.css';

export default function StrategySection() {
  return (
    <section className="strategy-section">
      <div className="strategy-content">
        <div className="strategy-left">
          <h2 className="strategy-title">
            STRATEGY.
            <span className="strategy-title-underline"></span>
          </h2>
        </div>
        <div className="strategy-right">
          <div className="strategy-info-group">
            <h3 className="strategy-info-title">
              Human Intelligence.
              <span className="strategy-info-underline"></span>
            </h3>
            <p className="strategy-info-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="strategy-info-group">
            <h3 className="strategy-info-title">
              Artificial Intelligence.
              <span className="strategy-info-underline"></span>
            </h3>
            <p className="strategy-info-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <button className="strategy-learn-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
} 