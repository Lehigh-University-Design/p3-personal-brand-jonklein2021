import React from 'react';

function Overlay({ opacity=0 }) {
  return (
    <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: `rgba(255, 255, 255, ${opacity})`,
        zIndex: 1000
    }} />
  )
}

export default Overlay;