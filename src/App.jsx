import React, { useState, useEffect } from 'react'
import Button from './Button'
import Counter from './Counter'
import Modal from './Modal'
import error from './Error.svg'
// import { ReactComponent as Error } from './Error.svg'

const App = () => {
  const [counter, setCounter] = useState(0)
  const [open, setOnpen] = useState(false)

  // let counter2 = 0

  // const setCounter2 = (newCounter) => {
  //   counter2 = newCounter
  //   console.log(counter2);
  // }

  useEffect(() => {
    console.log('Отработает при изменении counter и рендере компоненты');
  }, [counter])

  useEffect(() => {
    if (open) {
      setCounter(100)
    } else {
      setCounter(0)
    }
  }, [open])

  const getRandomColor = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min)
  }

  useEffect(() => {
    document.querySelector('body').style.background = `rgba(${getRandomColor(0, 255)}, ${getRandomColor(0, 255)}, ${getRandomColor(0, 255)}, ${Math.random()})`
  }, [open, counter])

  return (
    <div className="buttons">
      <img src={error} alt="" />
      {/* <Error /> */}
      <Counter>
        {counter}
      </Counter>
      <Button action={() => setCounter(counter - 1)} symbol='-' />
      <Button action={() => setCounter(counter + 1)} symbol='+' />
      <div>
        <Button action={() => setOnpen(!open)} symbol={open ? 'Закрыть' : 'Открыть'} />
        {open && <Modal />}
      </div>
    </div>
  )
}

export default App