import React, { useState } from 'react'

import InfoBar from './InfoBar'

import './InfoArea.css'

const PlayArea = ({ isTraining, isPaused }) => {
  const [prepTimer, setPrepTimer] = useState('prep timer')
  const [workTimer, setWorkTimer] = useState('work timer')
  const [restTimer, setRestTimer] = useState('rest timer')
  const [sets, setSets] = useState(7)

  const startTimer = () => {
    // TODO
  }

  const stopTimer = () => {
    // TODO
  }

  const alternateTimer = () => {
    // TODO
  }

  const incrementSets = () => {
    setSets(sets + 1)
  }

  const decrementSets = () => {
    if (sets > 0) {
      setSets(sets - 1)
    }
  }

  return (
    <div className='infoArea'>
      <InfoBar label='Rest' info='00:20' />
      <InfoBar label='Work' info='01:00' />
      <InfoBar
        label='Sets'
        info={sets}
        incrementFunction={incrementSets}
        decrementFunction={decrementSets}
      />
    </div>

  )
}

export default PlayArea
