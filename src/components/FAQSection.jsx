import React from 'react';
import './FAQSection.css';

const faqs = [
  {
    q: 'Offerist 能帮我申请哪些国家的学校？',
    a: '我们专注于美国、英国、加拿大、澳大利亚、新加坡等主流留学国家的名校申请。',
  },
  {
    q: '服务流程是怎样的？',
    a: '从前期咨询、方案制定、文书辅导到面试培训，全流程一站式服务。',
  },
  {
    q: '如何保障申请结果？',
    a: '我们拥有丰富的成功案例和专业团队，量身定制每一份申请材料，提升录取率。',
  },
  {
    q: '可以只做文书/背景提升吗？',
    a: '可以，所有服务均可单独定制，满足不同阶段的需求。',
  },
];

export default function FAQSection() {
  return (
    <section className="faq-section">
      <h2 className="faq-title">常见问题</h2>
      <div className="faq-list">
        {faqs.map((f, i) => (
          <div className="faq-item" key={i}>
            <div className="faq-q">Q: {f.q}</div>
            <div className="faq-a">A: {f.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
