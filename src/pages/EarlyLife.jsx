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
          <p>Julius Robert Oppenheimer was born on April 22, 1904, in New York City to Ella, a painter, and Julius Seligmann Oppenheimer, a wealthy textile importer who immigrated from Hanau, Prussia, in 1888. Raised in a non-observant Jewish family, he had a younger brother, Frank, who also became a physicist. In 1912, the family moved to a luxurious apartment on Riverside Drive, New York, and amassed an impressive art collection featuring works by Picasso, Vuillard, and Van Gogh.</p>
          <img src={young1} />
        </div>
        <div className="right">
          <img src={young2} />
          <p>Oppenheimer began his education at Alcuin Preparatory School before attending the Ethical Culture Society School in 1911, founded by Felix Adler to emphasize "Deed before Creed." A gifted and versatile student, he excelled in literature, mineralogy, and music, studying flute with renowned French flutist Georges Barrère. Academically advanced, he skipped grades and graduated in 1921. His education was briefly delayed due to colitis, contracted during a family trip to Joachimstal, Czechoslovakia. While recovering in New Mexico, he developed a passion for horseback riding and the Southwest.</p>
        </div>
      </div>
    </div>
  )
}

export default EarlyLife;