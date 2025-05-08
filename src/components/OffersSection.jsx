import React from 'react';
import './OffersSection.css';

const offers = [
  {
    school: 'Harvard University',
    logo: 'https://upload.wikimedia.org/wikipedia/zh/2/29/Harvard_shield_wreath.svg',
    name: 'Emily L.',
    desc: 'Admitted to Economics, GPA 3.9+, multiple competition awards.',
  },
  {
    school: 'Stanford University',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Stanford_University_seal_2003.svg',
    name: 'Michael W.',
    desc: 'Admitted to Computer Science, strong internship experience.',
  },
  {
    school: 'University of Chicago',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/University_of_Chicago_shield.svg',
    name: 'Sophia Z.',
    desc: 'Admitted to Mathematics, published several papers.',
  },
  {
    school: 'MIT',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg',
    name: 'David K.',
    desc: 'Admitted to Engineering, robotics competition winner.',
  },
];

export default function OffersSection() {
  return (
    <section className="offers-section">
      <h2 className="offers-title">Success Stories</h2>
      <div className="offers-numbers">
        <div className="offers-num-item">
          <span className="offers-num">300+</span>
          <span className="offers-num-label">World Top University Offers</span>
        </div>
        <div className="offers-num-item">
          <span className="offers-num">98%</span>
          <span className="offers-num-label">Customer Satisfaction</span>
        </div>
        <div className="offers-num-item">
          <span className="offers-num">10+</span>
          <span className="offers-num-label">Professional Experience</span>
        </div>
      </div>
      <div className="offers-list">
        {offers.map((o, i) => (
          <div className="offer-card" key={i}>
            <img src={o.logo} alt={o.school} className="offer-logo" />
            <div className="offer-info">
              <div className="offer-school">{o.school}</div>
              <div className="offer-name">{o.name}</div>
              <div className="offer-desc">{o.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
