import React, { useState } from 'react';
import '../styles/ProfileCard.scss';

function ProfileCard({ aos, image, title, desc }) {
  const [hover, setHover] = useState(false);

  return (
    <div data-aos={aos} className="profile-card" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
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