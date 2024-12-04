import React, { useEffect, useState } from 'react';
import Particles from './components/Particles';
import './styles/App.scss';

// Pages
import Landing from './pages/Landing';
import EarlyLife from './pages/EarlyLife';
import Education from './pages/Education';
import Career from './pages/Career';
import Timeline from './pages/Timeline';
import Trauma from './pages/Trauma';
import Overlay from './components/Overlay';

function App() {
  const [opacity, setOpacity] = useState(0);
  const windowHeight = window.innerHeight;
  const point1 = 7 * windowHeight;
  const point2 = 13 * windowHeight;
  const point3 = 14 * windowHeight;
  
  useEffect(() => {
    const totalHeight = document.getElementById('main').clientHeight;
    window.addEventListener('scroll', () => {
      const scroll = window.scrollY;
      if (scroll >= totalHeight - windowHeight) {
        setOpacity(0);
      } else if (scroll > point3) { // fade out overlay
        const opacity = 1 - (scroll - point3) / (point3 - point2);
        setOpacity(opacity);
      } else if (scroll > point2) { // sustain overlay
        setOpacity(1);
      } else if (scroll > point1) { // fade in overlay
        const opacity = (scroll - point1) / (point2 - point1);
        setOpacity(opacity);
      } else {
        setOpacity(0);
      }
    });
  }, []);

  return (
    <>
      {/* Comment out the following line if lagging */}
      {/* <Particles /> */}

      {opacity > 0 && <Overlay opacity={opacity} />}

      <div id="main">
        <Landing />
        <EarlyLife />
        <Education />
        <Career />
        <Timeline />
        <Trauma />
      </div>
    </>
  )
}

export default App;
