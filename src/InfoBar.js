import React from 'react'

import './InfoBar.css'

const InfoBar = ({ label, info }) => (
  <div className='infoBar'>
    <button className='incrementButton'>-</button>
    <div className='infoContainer'>
      <h2 className='label'>{label}</h2>
      <h1 className='info'>{info}</h1>
    </div>
    <button className='incrementButton'>+</button>

  </div>
)

export default InfoBar
