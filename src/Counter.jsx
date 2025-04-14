import React from 'react'

const Counter = (props) => {

  return (
    <div className="counter">
      <h2>{props.children}</h2>
    </div>
  )
}

export default Counter