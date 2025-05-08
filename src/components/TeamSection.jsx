import React from 'react';
import './TeamSection.css';

const team = [
  {
    name: 'Alice Chen',
    title: '首席升学顾问',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    desc: '10年留学行业经验，擅长美英名校申请。',
  },
  {
    name: 'David Wang',
    title: '职业发展导师',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    desc: '前500强企业HR，深谙求职面试技巧。',
  },
  {
    name: 'Linda Xu',
    title: '背景提升专家',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    desc: '丰富的科研与竞赛辅导经验，助力学生多维成长。',
  },
];

export default function TeamSection() {
  return (
    <section className="team-section">
      <h2 className="team-title">我们的团队</h2>
      <div className="team-list">
        {team.map((m, i) => (
          <div className="team-card" key={i}>
            <img src={m.avatar} alt={m.name} className="team-avatar" />
            <div className="team-info">
              <div className="team-name">{m.name}</div>
              <div className="team-role">{m.title}</div>
              <div className="team-desc">{m.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
