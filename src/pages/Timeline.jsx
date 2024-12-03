import React from "react";
import "../styles/Timeline.scss";
import img1 from "../assets/recruitment.png";
import img2 from "../assets/photo_id.jpg";
import img3 from "../assets/groves.jpg";
import img4 from "../assets/viewing.png";

function Timeline() {
  return (
    <div className="section timeline">
      <div className="header">
        <h1>The War</h1>
        <hr style={{ color: "#f2f2f2", width: "80%" }} />
      </div>
      <div className="content">
        <div className="spine" />
        <div className="row">
          <p className="desc">It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.</p>
          <p className="date right">1941</p>
          <img src={img1} />
        </div>
        <div className="row">
          <img src={img2} />
          <p className="date left">1941</p>
          <p className="desc">It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.</p>
        </div>
        <div className="row">
          <p className="desc">It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.</p>
          <p className="date right">1943</p>
          <img src={img3} />
        </div>
        <div className="row">
          <img src={img4} />
          <p className="date left">1944</p>
          <p className="desc">It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.</p>
        </div>
      </div>
    </div>
  )
}

export default Timeline;