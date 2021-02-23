import React, { useState } from 'react'

import InfoBar from '../InfoBar/InfoBar'
import ButtonBar from '../ButtonBar/ButtonBar'

import './InfoArea.css'

const PlayArea = () => {
  const [workTimer, setWorkTimer] = useState(60)
  const [restTimer, setRestTimer] = useState(0)
  const [sets, setSets] = useState(7)
  const [incrementButtonsActive, setIncrementButtonsActive] = useState(true)
  const [currentTimer, setCurrentTimer] = useState(null)

  const startButtonHandler = () => {
    setIncrementButtonsActive(false)
    timerCountdown(workTimer, setWorkTimer)
  }

  const resetButtonHandler = () => {
    setIncrementButtonsActive(true)
    setWorkTimer(60)
    setRestTimer(0)
    setSets(7)
    clearInterval(currentTimer)
  }

  const timerCountdown = (timer, setFunction) => {
    let countTimer = timer
    const timerInterval = setInterval(() => {
      if (countTimer > 0) {
        countTimer--
        setFunction(countTimer)
      } else {
        stopTimer(timer)
      }
    }
    , 1000)
    setCurrentTimer(timerInterval)
    console.log(currentTimer)
  }

  const stopTimer = () => {
    clearInterval(currentTimer)
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

  const timerToString = (value) => {
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

  if (incrementButtonsActive) {
    return (
      <div className='infoArea'>
        {/* <button onClick={timerCountdown(workTimer, setWorkTimer)}>testtimer</button> */}
        <InfoBar
          label='Rest'
          info={timerToString(restTimer)}
          incrementFunction={incrementRestTimer}
          decrementFunction={decrementRestTimer}
          incrementButtonsActive={incrementButtonsActive}
        />
        <InfoBar
          label='Work'
          info={timerToString(workTimer)}
          incrementFunction={incrementWorkTimer}
          decrementFunction={decrementWorkTimer}
          incrementButtonsActive={incrementButtonsActive}
        />
        <InfoBar
          label='Sets'
          info={sets}
          incrementFunction={incrementSets}
          decrementFunction={decrementSets}
          incrementButtonsActive={incrementButtonsActive}
        />
        <ButtonBar
          startButtonHandler={startButtonHandler}
          resetButtonHandler={resetButtonHandler}
        />
      </div>

    )
  } else {
    return (
      <div className='activeInfo'>
        <div className='activeBarContainer'>
          <InfoBar
            label='Work'
            info={timerToString(workTimer)}
            incrementFunction={incrementWorkTimer}
            decrementFunction={decrementWorkTimer}
            incrementButtonsActive={incrementButtonsActive}
          />
          <InfoBar
            label='Sets'
            info={sets}
            incrementFunction={incrementSets}
            decrementFunction={decrementSets}
            incrementButtonsActive={incrementButtonsActive}
          />
        </div>
        <ButtonBar
          startButtonHandler={startButtonHandler}
          resetButtonHandler={resetButtonHandler}
        />
      </div>
    )
  }
}

export default PlayArea
