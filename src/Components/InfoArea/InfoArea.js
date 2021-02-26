import React, { useState } from 'react'

import InfoBar from '../InfoBar/InfoBar'
import ButtonBar from '../ButtonBar/ButtonBar'

import './InfoArea.css'

const PlayArea = () => {
  const defaultWorkTimer = 5
  const defaultRestTimer = 3
  const defaultSets = 7

  const initialWorkValue = defaultWorkTimer
  const initialRestValue = defaultRestTimer
  const initialSetsValue = defaultSets

  const [workTimer, setWorkTimer] = useState(defaultWorkTimer)
  const [restTimer, setRestTimer] = useState(defaultRestTimer)
  const [sets, setSets] = useState(defaultSets)
  const [incrementButtonsActive, setIncrementButtonsActive] = useState(true)
  const [currentTimerInterval, setCurrentTimerInterval] = useState(null)
  const [isWorkTimer, setisWorkTimer] = useState(true)

  let setsCopy = sets

  useState(() => {
    console.log(`${sets}`)
  }, [sets])

  const startButtonHandler = () => {
    setIncrementButtonsActive(false)

    workTimerCountdown()
  }

  const resetButtonHandler = () => {
    setIncrementButtonsActive(true)

    clearInterval(currentTimerInterval)
  }

  const workTimerCountdown = () => {
    let countTimer = workTimer
    const timerInterval = setInterval(() => {
      if (countTimer > 0) {
        countTimer--
        setWorkTimer(countTimer)
      } else {
        clearInterval(timerInterval)
        setWorkTimer(initialWorkValue)
        setisWorkTimer(false)
        restTimerCountdown()
      }
    }
    , 1000)
    setCurrentTimerInterval(timerInterval)
  }

  const restTimerCountdown = () => {
    let countTimer = restTimer

    const timerInterval = setInterval(() => {
      if (countTimer > 0) {
        countTimer--
        setRestTimer(countTimer)
      } else {
        clearInterval(timerInterval)
        if (setsCopy > 1) {
          setRestTimer(initialRestValue)
          setsCopy--
          setSets(setsCopy)
          setisWorkTimer(true)
          workTimerCountdown()
        } else {
          console.log('workout finished!')
        }
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
