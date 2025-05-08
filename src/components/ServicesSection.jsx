import React from 'react';
import './ServicesSection.css';

const services = [
  {
    icon: 'https://api.iconify.design/solar:university-outline.svg',
    title: 'ADMISSIONS COUNSELING',
    desc: 'Personalized guidance for top university applications.',
  },
  {
    icon: 'https://api.iconify.design/solar:book-outline.svg',
    title: 'TUTORING',
    desc: 'Academic support to boost your grades and confidence.',
  },
  {
    icon: 'https://api.iconify.design/solar:chart-outline.svg',
    title: 'CAREER PLANNING',
    desc: 'Professional advice for your future career path.',
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section">
      <h2 className="services-title">OUR SERVICES</h2>
      <div className="services-list">
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <div className="service-icon-bg">
              <img src={s.icon} alt={s.title} className="service-icon" />
            </div>
            <h3 className="service-card-title">{s.title}</h3>
            <p className="service-card-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
