import React from 'react'

/**
 * 
 * @param {{ action: () => void, symbol: string}} props 
 * @returns 
 */
const Button = (props) => { // любой прос - это объект параметров функции, константный параметр - props.children

  return (
    <button onClick={() => props.action()}>{props.symbol}</button>
  )
}

export default Button