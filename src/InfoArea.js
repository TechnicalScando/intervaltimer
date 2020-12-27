import React, { useState } from 'react'

import InfoBar from './InfoBar'

import './InfoArea.css'

const PlayArea = ({ isTraining, isPaused }) => {
  const [prepTimer, setPrepTimer] = useState(0)
  const [workTimer, setWorkTimer] = useState(60)
  const [restTimer, setRestTimer] = useState(0)
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

  const incrementWorkTimer = () => {
    setWorkTimer(workTimer + 1)
  }

  const decrementWorkTimer = () => {
    if (workTimer > 0) {
      setWorkTimer(workTimer - 1)
    }
  }

  const incrementRestTimer = () => {
    setRestTimer(restTimer + 1)
  }

  const decrementRestTimer = () => {
    if (restTimer > 0) {
      setRestTimer(restTimer - 1)
    }
  }

  const valueToTimer = (value) => {
    const minutes = ~~((value % 3600) / 60)
    const seconds = ~~value % 60

    let returnValue = ''

    minutes < 10
      ? returnValue += `0${minutes}`
      : returnValue += `${minutes}`

    seconds < 10
      ? returnValue += `:0${seconds}`
      : returnValue += `:${seconds}`

    return returnValue
  }

  return (
    <div className='infoArea'>
      <InfoBar
        label='Rest'
        info={valueToTimer(restTimer)}
        incrementFunction={incrementRestTimer}
        decrementFunction={decrementRestTimer}
      />
      <InfoBar
        label='Work'
        info={valueToTimer(workTimer)}
        incrementFunction={incrementWorkTimer}
        decrementFunction={decrementWorkTimer}
      />
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
