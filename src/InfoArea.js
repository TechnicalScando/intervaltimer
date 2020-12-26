import React, { useState } from 'react'

import InfoBar from './InfoBar'

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
      <InfoBar label='Rest' info='00:20' />
      <InfoBar label='Work' info='01:00' />
      <InfoBar label='Sets' info='7' />
    </div>

  )
}

export default PlayArea
