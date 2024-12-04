import React from 'react'
import bombshell from '../assets/bombshell.png'

function Trauma() {
  return (
    <div className='section trauma' style={{ padding: 0 }}>
      <img src={bombshell} style={{
        width: '100%',
        objectFit: 'cover',
      }} />
    </div>
  )
}

export default Trauma;