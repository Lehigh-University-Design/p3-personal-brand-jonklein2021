import React from 'react';
import harvard from '../assets/harvard.png';
import cambridge from '../assets/cambridge.png';
import gottingen from '../assets/gottingen.png';
import '../styles/Education.scss';

function Education() {
  return (
    <div className="section education">
      <div className="header">
        <h1>Education</h1>
        <hr style={{ color: "#f2f2f2", width: "80%" }} />
      </div>
      <div className="content">
        <div className="row">
          <img src={harvard} />
          <p>In 1922, at age 18, Oppenheimer started at Harvard University, majoring in chemistry while also studying history, literature, philosophy, and mathematics. To make up for time lost to illness, he took six courses per term as opposed to the usual four. His independent study granted him graduate standing in physics, enabling him to focus on advanced courses. Inspired by Percy Bridgman's thermodynamics class, he developed an interest in experimental physics. Oppenheimer graduated summa cum laude in 1925 with a Bachelor of Arts, completing his degree in just three years.</p>
        </div>
        <div className="row reverse">
          <p>After his undergrad, Oppenheimer was accepted to Christ's College, Cambridge. There, he struggled, finding lab work tedious and forming a tense relationship with his tutor, Patrick Blackett. Anecdotes suggest he once left a poisoned apple for Blackett, though no records confirm this, and his parents intervened to prevent disciplinary action. Friends described him as a tall, thin chain smoker, often neglecting self-care during intense focus. Known for periods of depression and self-destructive tendencies, he once attempted to strangle a friend after hearing about an engagement. Oppenheimer later admitted, "I need physics more than friends," reflecting his lifelong battle with emotional turmoil.</p>
          <img src={cambridge} />
        </div>
        <div className="row">
          <img src={gottingen} />
          <p>In 1926, Oppenheimer joined the University of Göttingen to study theoretical physics under Max Born. There, he met to future luminaries such as Werner Heisenberg, Wolfgang Pauli, and Enrico Fermi. Known for dominating discussions, Oppenheimer prompted some of his classmates to threaten a boycott unless he moderated his behavior - a silent intervention by Born resolved this issue. Oppenheimer earned his PhD in March 1927 at age 23, with James Franck famously remarking after the oral exam, "I'm glad that's over. He was on the point of questioning me." During his time in Europe, Oppenheimer published over a dozen papers, including his renowned work with Born on the Born-Oppenheimer approximation — a cornerstone of quantum mechanics and his most cited contribution.</p>
        </div>
      </div>
    </div>
  )
}

export default Education;