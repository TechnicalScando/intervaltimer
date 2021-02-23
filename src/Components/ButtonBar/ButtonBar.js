import React from 'react'

import { ReactComponent as StartImage } from '../../Images/playButton.svg'

import './ButtonBar.css'

const ButtonBar = ({ startButtonHandler, resetButtonHandler }) => {
  return (
    <div className='buttonBar'>
      <button className='startButton' onClick={startButtonHandler}><StartImage /></button>
      <button className='resetButton' onClick={resetButtonHandler}>Reset</button>
    </div>
  )
}

export default ButtonBar
