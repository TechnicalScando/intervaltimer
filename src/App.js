import React, { useState, useEffect } from 'react'

import './App.css'

import Header from './Header'
import ButtonBar from './ButtonBar'
import InfoArea from './InfoArea'

function App () {
  const [isTraining, setIsTraining] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const startEvent = () => {
    // TODO
  }

  const pauseEvent = () => {
    // TODO
  }

  const restartEvent = () => {
    // TODO
  }

  return (
    <div className='appContainer'>
      <div className='flexContainer'>
        <Header />
        <InfoArea isTraining={isTraining} isPaused={isPaused} />
        <ButtonBar
          startEvent={startEvent}
          pauseEvent={pauseEvent}
          restartEvent={restartEvent}
        />
      </div>
    </div>
  )
}

export default App
