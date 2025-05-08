import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

const title = 'DEFINE WHO YOU ARE';
const subtitle = 'TO BECOME THE FUTURE OFFERIST';

const titleVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.045 + 0.2,
      type: 'spring',
      stiffness: 500,
      damping: 30,
    },
  }),
};

const HeroSection = () => {
  // 打字机动画
  const [typed, setTyped] = useState('');
  const [done, setDone] = useState(false);
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setTyped(subtitle.slice(0, i + 1));
      i++;
      if (i === subtitle.length) {
        clearInterval(timer);
        setDone(true);
      }
    }, 28);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="hero-center">
        <h1 className="hero-main-title" style={{letterSpacing: '0.01em'}}>
          {title.split('').map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={titleVariants}
              style={{ display: char === ' ' ? 'inline-block' : 'inline-block', minWidth: char === ' ' ? '0.5em' : 'auto' }}
            >
              {char}
            </motion.span>
          ))}
        </h1>
        <p className="hero-sub-title typewriter">{typed}{!done && <span className="type-cursor">|</span>}</p>
        <a href="#about" className="hero-btn">Start Your Journey</a>
      </div>
    </section>
  );
};

export default HeroSection;
 