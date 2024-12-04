import React, { useState } from 'react';
import '../styles/ProfileCard.scss';

function ProfileCard({ image, title, desc }) {
  const [hover, setHover] = useState(false);

  return (
    <div className="profile-card" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <img src={image} alt="Profile" />
      {hover &&
        <div className="overlay">
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
      }
    </div>
  );
}

export default ProfileCard;