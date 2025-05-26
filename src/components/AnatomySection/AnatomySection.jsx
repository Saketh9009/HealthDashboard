import { Search, Heart, Activity } from 'lucide-react';
import { healthData } from '../../data/healthData';
import { useState } from 'react';
import muscleImg from '../../assets/anatomy.png';
import './AnatomySection.css';

const AnatomySection = () => {
  // You can use state for interactivity if needed
  return (
    <section className="anatomy-card">
      <div className="anatomy-magnifier">
        <Search size={20} />
      </div>
      <div className="human-body-wrapper">
        <img src={muscleImg} alt="Human body illustration" className="human-body-img" />

        {/* Floating labels: adjust top/left for placement */}
        <div className="floating-label heart">
          <Heart size={18} style={{ color: '#fff' }} /> Healthy Heart
        </div>
        <div className="floating-label leg">
          <Activity size={18} style={{ color: '#fff' }} /> Healthy Leg
        </div>
      </div>
      <a href="#" className="anatomy-details-link">
        Details <span style={{ fontSize: '1.2em', display: 'inline-block', transform: 'translateY(1px)' }}>→</span>
      </a>
    </section>
  );
};

export default AnatomySection; 