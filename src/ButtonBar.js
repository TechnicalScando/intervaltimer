import React from 'react'

import { ReactComponent as StartImage } from './playButton.svg'

import './ButtonBar.css'

const ButtonBar = () => (
  <div className='buttonBar'>
    <button className='startButton'><StartImage /></button>
    <button className='resetButton'>Reset</button>
  </div>
)

export default ButtonBar
