import React from 'react'

import './InfoBar.css'

const InfoBar = ({
  label, info, incrementFunction, decrementFunction,
  incrementButtonsActive
}) => {
  if (incrementButtonsActive) {
    return (
      <div className='infoBar'>
        <button onClick={decrementFunction} className='incrementButton'>-</button>
        <div className='infoContainer'>
          <h2 className='label'>{label}</h2>
          <h1 className='info'>{info}</h1>
        </div>
        <button onClick={incrementFunction} className='incrementButton'>+</button>

      </div>
    )
  } else {
    return (
      <div className='infoContainer'>
        <h2 className='label'>{label}</h2>
        <h1 className='info'>{info}</h1>
      </div>
    )
  }
}

export default InfoBar
