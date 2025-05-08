import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './WhatMakesUsSection.css';

const formula = [
  { text: 'INTELLIGENCE', key: 'I' },
  { text: 'STRATEGY', key: 'S' },
  { text: 'TECHNIQUE', key: 'T' },
];

const desc = `Embark on dreams, achieve the future. We specialize in academic and career counseling, providing professional guidance and personalized services for every step of your growth. From high school to university, from campus to the workplace, we accompany you, helping you stand out on the competitive path of academic advancement and job seeking. Choose us, let dreams illuminate reality, and create a brilliant chapter of life together.`;

const WhatMakesUsSection = () => {
  const dreamRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-dream');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (dreamRef.current) {
      observer.observe(dreamRef.current);
    }

    return () => {
      if (dreamRef.current) {
        observer.unobserve(dreamRef.current);
      }
    };
  }, []);

  return (
    <section className="wmus-section">
      <motion.h2
        className="wmus-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        What Makes Us Offerist
      </motion.h2>
      <motion.div
        className="wmus-divider"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true }}
      />
      <div className="wmus-row">
        <motion.div
          className="wmus-logo-box"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="wmus-logo-main">ist.</div>
          <div className="wmus-logo-underline"></div>
        </motion.div>
        <motion.div
          className="wmus-formula"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <span className="wmus-eq">=</span>
          {formula.map((f, i) => (
            <span key={f.key} className="wmus-formula-item">
              <span className="wmus-formula-bold">{f.text}</span>
              {i < formula.length - 1 && <span className="wmus-formula-plus"> + </span>}
            </span>
          ))}
        </motion.div>
      </div>
      <motion.p
        className="wmus-desc"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {desc.split(' ').map((word, i) => (
          <motion.span
            key={i}
            whileHover={{
              y: -10,
              scale: 1.12,
              color: '#fff9f1',
              textShadow: '0px 8px 32px #fff9f1, 0px 2px 16px #fff9f1',
              transition: { type: 'spring', stiffness: 400, damping: 18 },
            }}
            style={{ display: 'inline-block', cursor: word.trim() ? 'pointer' : 'default', marginRight: '0.32em' }}
          >
            {word}
          </motion.span>
        ))}
      </motion.p>
    </section>
  );
};

export default WhatMakesUsSection; 