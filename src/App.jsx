import React from 'react'
import './App.scss'

window.onload = function () {
  const container = document.querySelector('#main');
  for (let i = 1; i <= 100; i++) {
    const circleContainer = document.createElement('div');
    circleContainer.classList.add('circle-container');

    const circle = document.createElement('div');
    circle.classList.add('circle');

    circleContainer.appendChild(circle);
    container.appendChild(circleContainer);
  }
}

function App() {
  return (
    <>
      <div id='main'>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
      </div>
    </>
  )
}

export default App;
