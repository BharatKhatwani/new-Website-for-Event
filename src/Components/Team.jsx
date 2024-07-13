import React, { useState } from 'react';
import './Team.css';

import Bharat from '../assets/Tech_Team/Bharat.jpg';

const teamData = {
  leadership: [
    { name: 'Bharat', img: Bharat },
    { name: 'Bharat Khatwani', img: Bharat },
    { name: 'Bharat Khatwani', img: Bharat },
    { name: 'Bharat Khatwani', img: Bharat },
    { name: 'Bharat Khatwani', img: Bharat },
  ],
  development: [
    { name: 'Bharat', img: Bharat },
    { name: 'Bharat Khatwani', img: Bharat },
    { name: 'Bharat Khatwani', img: Bharat },
    { name: 'Bharat Khatwani', img: Bharat },
    { name: 'Bharat Khatwani', img: Bharat },
    { name: 'Bharat Khatwani', img: Bharat },
  ],
  creative: [
    { name: 'Bharat', img: Bharat },
    { name: 'Bharat Khatwani', img: Bharat },
    { name: 'Bharat Khatwani', img: Bharat },
    { name: 'Bharat Khatwani', img: Bharat },
    { name: 'Bharat Khatwani', img: Bharat },
    { name: 'Bharat Khatwani', img: Bharat },
    { name: 'Bharat Khatwani', img: Bharat },
  ],
  marketing: [
    { name: 'Bharat', img: Bharat },
    { name: 'Bharat Khatwani', img: Bharat },
    { name: 'Bharat Khatwani', img: Bharat },
    { name: 'Bharat Khatwani', img: Bharat },
    { name: 'Bharat Khatwani', img: Bharat },
    { name: 'Bharat Khatwani', img: Bharat },
    { name: 'Bharat Khatwani', img: Bharat },
    { name: 'Bharat Khatwani', img: Bharat },
  ],
  other: [
    { name: 'Bharat', img: Bharat },
    { name: 'Bharat Khatwani', img: Bharat },
    { name: 'Bharat Khatwani', img: Bharat },
    { name: 'Bharat Khatwani', img: Bharat },
    { name: 'Bharat Khatwani', img: Bharat },
    { name: 'Bharat Khatwani', img: Bharat },
    { name: 'Bharat Khatwani', img: Bharat },
    
  ],
};

const Team = () => {
  const [activeCategory, setActiveCategory] = useState('leadership');

  const handleButtonClick = (category) => {
    setActiveCategory(category);
  };

  const getColumnCount = (teamSize) => {
    if (teamSize <= 5) return 5;
    if (teamSize <= 6) return 3;
    return 4;
  };

  const activeTeam = teamData[activeCategory];
  const columnCount = getColumnCount(activeTeam.length);

  return (
    <div>
      <div className="name">Meet Our Team</div>
      <div className="button-group">
        {Object.keys(teamData).map((category) => (
          <button
            key={category}
            className={`button ${activeCategory === category ? 'active' : ''}`}
            onClick={() => handleButtonClick(category)}
            aria-label={`Show ${category.charAt(0).toUpperCase() + category.slice(1)} team`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className="team-grid" style={{ gridTemplateColumns: `repeat(${columnCount}, 1fr)` }}>
        {activeTeam.map((member, index) => (
          <div className="custom-card" key={index}>
            <div className="custom-image-container">
              <img src={member.img} alt={member.name} className="custom-image" />
            </div>
            <div className="team-name">{member.name}</div>
            <div className="additional-content">
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
