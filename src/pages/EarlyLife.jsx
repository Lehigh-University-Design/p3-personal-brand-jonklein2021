import React from 'react';
import young1 from '../assets/young1.png';
import young2 from '../assets/young2.png';
import '../styles/EarlyLife.scss';

function EarlyLife() {
  return (
    <div className="section earlylife">
      <div className="header">
        <h1>Early Life</h1>
        <hr style={{ color: "#f2f2f2", width: "80%" }} />
      </div>
      <div className="content">
        <div className="left">
          <p>
            It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
          </p>
          <img src={young1} />
        </div>
        <div className="right">
          <img src={young2} />
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.
          </p>
        </div>
      </div>
    </div>
  )
}

export default EarlyLife;