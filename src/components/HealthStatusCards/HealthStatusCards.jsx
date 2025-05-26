import React from 'react';
import { FaHeartbeat, FaLungs, FaBone } from 'react-icons/fa';
import './HealthStatusCards.css';

const healthData = [
  {
    id: 1,
    title: 'Lungs',
    icon: '🫁',
    value: 80,
    color: '#e45757',
    date: '1 may 2025',
  },
  {
    id: 2,
    title: 'Teeth',
    icon: '🦷',
    value: 60,
    color: '#43aa8b',
    date: '1 may 2025',
  },
  {
    id: 3,
    title: 'Bone',
    icon: '🦴',
    value: 40,
    color: '#e45757',
    date: '1 may 2025',
  },
];

const HealthStatusCards = () => {
  return (
    <div className="section">
      <h2 className="title">Health Status</h2>
      <div className="cards-grid">
        {healthData.map(card => (
          <div key={card.id} className="card health-status-card">
            <div className="card-header">
              <div className="icon" style={{ fontSize: '2.1rem', background: 'none', color: 'inherit' }}>{card.icon}</div>
              <h3>{card.title}</h3>
            </div>
            <div className="health-date">Date: {card.date}</div>
            <div className="flat-progress-bar-bg">
              <div className="flat-progress-bar" style={{ width: `${card.value}%`, background: card.color }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthStatusCards; 