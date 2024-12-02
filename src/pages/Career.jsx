import React from 'react';
import classroom from '../assets/classroom.png';
import redscare from '../assets/red-scare-newspaper.png';
import frank from '../assets/frank.png';
import jean from '../assets/jean.png';
import katherine from '../assets/katherine.png';
import '../styles/Career.scss';

function Career() {
  return (
    <div className="section career">
        <div className="header">
        <h1>Career</h1>
        <hr style={{ color: "#f2f2f2", width: "80%" }} />
      </div>
      <div className="content">
        <div className="left">
          <img src={classroom} />
          <p>It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.</p>
          <img src={redscare} />
        </div>
        <div className="right">
          <img src={frank} />
          <img src={jean} />
          <img src={katherine} />
        </div>
      </div>
    </div>
  )
}

export default Career