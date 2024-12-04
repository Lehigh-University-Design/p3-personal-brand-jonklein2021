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

  useEffect(() => {
    const main = document.getElementById('main');
    const windowHeight = window.innerHeight;
    const limit = 7*windowHeight;
    const mainHeight = main.clientHeight;
    window.addEventListener('scroll', () => {
      const scroll = window.scrollY;
      // console.log(scroll + " " + limit);
      if (scroll > limit) {  
        const height = mainHeight;
        const opacity = (scroll-limit) / height;
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
