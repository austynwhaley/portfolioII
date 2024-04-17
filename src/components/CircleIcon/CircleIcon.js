import React, { useState } from 'react';
import './CircleIcon.css'; // Import the CSS file for styling
import headshot from '../../images/headshot.png';

const CircleIcon = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`circle-icon ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
      <img src={headshot} alt="Icon" className="icon-img" />
    </div>
  );
};

export default CircleIcon;
