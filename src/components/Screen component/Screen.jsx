import React from 'react'
import './screen.css'

const Screen = ({currentOperand, finalOperand}) => {
  return (
    <div className='screen'>
        <h2>{finalOperand}</h2>
        <p>{currentOperand}</p>
    </div>
  )
}

export default Screen