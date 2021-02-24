import React, { useState, useEffect } from 'react'

import InfoBar from '../InfoBar/InfoBar'
import ButtonBar from '../ButtonBar/ButtonBar'

import './InfoArea.css'

const PlayArea = () => {
  const defaultWorkTimer = 5
  const defaultRestTimer = 3
  const defaultSets = 7

  const [workTimer, setWorkTimer] = useState(defaultWorkTimer)
  const [restTimer, setRestTimer] = useState(defaultRestTimer)
  const [sets, setSets] = useState(defaultSets)
  const [incrementButtonsActive, setIncrementButtonsActive] = useState(true)
  const [currentTimerInterval, setCurrentTimerInterval] = useState(null)
  const [isWorkTimer, setisWorkTimer] = useState(true)

  const startButtonHandler = () => {
    setIncrementButtonsActive(false)
    timerCountdown(workTimer, setWorkTimer)
  }

  const resetButtonHandler = () => {
    setIncrementButtonsActive(true)
    setWorkTimer(defaultWorkTimer)
    setRestTimer(defaultRestTimer)
    setSets(defaultSets)
    clearInterval(currentTimerInterval)
  }

  const timerCountdown = (timer, setFunction) => {
    let countTimer = timer
    const timerInterval = setInterval(() => {
      if (countTimer > 0) {
        countTimer--
        setFunction(countTimer)
        console.log(`${timer} is running`)
      } else {
        clearInterval(timerInterval)
      }
    }
    , 1000)
    setCurrentTimerInterval(timerInterval)
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

  useEffect(() => {
    if (restTimer === 0 && sets > 1) {
      if (restTimer !== defaultRestTimer) {
        setRestTimer(defaultRestTimer)
      }
      setisWorkTimer(true)
      timerCountdown(workTimer, setWorkTimer)
      decrementSets()
    }
    if (workTimer === 0 && sets > 0) {
      if (workTimer !== defaultWorkTimer) {
        setWorkTimer(defaultWorkTimer)
      }
      setisWorkTimer(false)
      timerCountdown(restTimer, setRestTimer)
    }
  }, [restTimer, workTimer, sets, decrementSets])

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
    if (isWorkTimer) {
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
    } else if (!isWorkTimer) {
      return (
        <div className='activeInfo'>
          <div className='activeBarContainer'>
            <InfoBar
              label='Rest'
              info={timerToString(restTimer)}
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
}

export default PlayArea
