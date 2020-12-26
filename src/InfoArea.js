import React, { useState } from 'react'

import './InfoArea.css'

const PlayArea = ({ isTraining, isPaused }) => {
  const [prepTimer, setPrepTimer] = useState('prep timer')
  const [workTimer, setWorkTimer] = useState('work timer')
  const [restTimer, setRestTimer] = useState('rest timer')

  const startTimer = () => {
    // TODO
  }

  const stopTimer = () => {
    // TODO
  }

  const alternateTimer = () => {
    // TODO
  }

  const deincrimentSets = () => {
    // TODO
  }

  return (
    <div className='infoArea'>
      <h1>InfoArea</h1>
    </div>

  )
}

export default PlayArea
