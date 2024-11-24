import React, { useEffect } from 'react'
import '../styles/Particles.scss'

function Particles() {
  useEffect(() => {
    const container = document.querySelector('body');
    for (let i = 1; i <= 100; i++) {
      const circleContainer = document.createElement('div');
      circleContainer.classList.add('circle-container');

      const circle = document.createElement('div');
      circle.classList.add('circle');

      circleContainer.appendChild(circle);
      container.appendChild(circleContainer);
    }
  }, []);

  return (
    <>
      <div className='circle-container'>
        <div className='circle'></div>
      </div>
    </>
  )
}

export default Particles;