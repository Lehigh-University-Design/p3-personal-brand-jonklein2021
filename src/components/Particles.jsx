import React, { useEffect } from 'react';
import '../styles/Particles.scss';

function Particles() {
  useEffect(() => {
    const container = document.querySelector('body');
    const numParticles = 50;

    const generateParticles = () => {
      for (let i = 1; i <= numParticles; i++) {
        const circleContainer = document.createElement('div');
        circleContainer.classList.add('circle-container');

        const circle = document.createElement('div');
        circle.classList.add('circle');

        circleContainer.appendChild(circle);
        container.appendChild(circleContainer);

        // base initial position relative to the viewport
        const randomX = Math.random() * 100; // random percentage for x position
        const randomDelay = Math.random() * 10 + 's'; // random animation delay
        circleContainer.style.left = `${randomX}vw`;
        circleContainer.style.animationDelay = randomDelay;
      }
    };

    // generate initially
    generateParticles();

    // create particles on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition + window.innerHeight > document.documentElement.scrollHeight - 50) {
        generateParticles();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // particles are generated dynamically; no need to return anything
  return <></>;
}

export default Particles;
