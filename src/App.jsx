import React from 'react';
import Particles from './components/Particles';
import './styles/App.scss';

// Pages
import Landing from './pages/Landing';
import EarlyLife from './pages/EarlyLife';
import Education from './pages/Education';
import Career from './pages/Career';

function App() {
  return (
    <>
      {/* Comment out the following line if lagging */}
      {/* <Particles /> */}

      <div id="main">
        <Landing />
        <EarlyLife />
        <Education />
        {/* <Career /> */}
      </div>
    </>
  )
}

export default App;
