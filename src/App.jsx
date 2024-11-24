import React from 'react'
import './styles/App.scss'
import Particles from './components/Particles';

function App() {
  return (
    <>
        <Particles />

        {/* Landing Page */}
        <div id="main">
          <div className='landing'>
            <div>
              <h0>OPPENHEIMER</h0>
              <h2>Science and Sacrifice</h2>
            </div>
          </div>
        </div>
    </>
  )
}

export default App;
