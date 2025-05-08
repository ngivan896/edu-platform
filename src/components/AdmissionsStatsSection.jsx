import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './AdmissionsStatsSection.css';

const stats = [
  { percent: 94, school: 'Harvard University' },
  { percent: 78, school: 'Yale University' },
  { percent: 71, school: 'Princeton University' },
  { percent: 80, school: 'Columbia University' },
  { percent: 95, school: 'Brown University' },
  { percent: 79, school: 'Dartmouth College' },
  { percent: 93, school: 'University of Pennsylvania' },
  { percent: 69, school: 'Cornell University' },
  { percent: 88, school: 'Stanford University' },
  { percent: 85, school: 'Duke University' },
  { percent: 90, school: 'University of Chicago' },
  { percent: 76, school: 'MIT' },
];

function AnimatedNumber({ value, trigger }) {
  const controls = useAnimation();
  const [display, setDisplay] = React.useState(0);

  useEffect(() => {
    if (trigger) {
      controls.start({
        val: value,
        transition: { duration: 1.2, ease: 'easeOut' },
      });
    }
  }, [value, controls, trigger]);

  return (
    <motion.span
      className="admissions-percent"
      initial={{ val: 0 }}
      animate={controls}
      onUpdate={latest => setDisplay(Math.round(latest.val))}
    >
      {display}
    </motion.span>
  );
}

export default function AdmissionsStatsSection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="admissions-section" ref={sectionRef}>
      <h2 className="admissions-title">
        Offerist&apos;s Admissions
        <br />
        Track Record
      </h2>
      <div className="admissions-subtitle">
        The percentage of Offerist&apos;s package clients over the last 10 years
        <br />
        who earned admission to the following schools in the Early round.
      </div>
      <div className="admissions-grid">
        {stats.map((s, i) => (
          <div className="admissions-cell" key={i}>
            <AnimatedNumber value={s.percent} trigger={inView} />
            <span className="admissions-percent-sign">%</span>
            <span className="admissions-school">{s.school}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
 