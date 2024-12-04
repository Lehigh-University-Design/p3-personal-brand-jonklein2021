import React from 'react';
import classroom from '../assets/classroom.png';
import redscare from '../assets/red-scare-newspaper.png';
import frank from '../assets/frank.png';
import jean from '../assets/jean.png';
import katherine from '../assets/katherine.png';
import '../styles/Career.scss';
import ProfileCard from '../components/ProfileCard';

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
          <p>After earning his PhD, Oppenheimer divided his time between Caltech and UC Berkeley, where he became a prominent figure in theoretical physics. In the 1930s, he became politically active, influenced by the Great Depression and the rise of fascism. Oppenheimer supported leftist causes, including workers' rights and anti-fascist efforts, and associated himself with members of the Communist Party, though he never officially joined. His personal life was complex and he had several tumultuous relationships. His political ties and friendships later attracted scrutiny during the Red Scare, profoundly affecting his career and legacy. Learn more by hovering over the cards on the right.</p>
          <img src={redscare} />
        </div>
        <div className="right">
          <ProfileCard image={frank} title="Frank" desc="Robert's younger brother and a physicist, Frank was a member of the Communist Party during the 1930s." />
          <ProfileCard image={jean} title="Jean" desc="A psychiatrist and Robert’s former fiancée, Jean was a committed Communist Party member and an influential figure in his political awakening." />
          <ProfileCard image={katherine} title="Katherine" desc="Robert’s wife, Kitty was a biologist and former Communist Party member who maintained strong political views." />
        </div>
      </div>
    </div>
  )
}

export default Career