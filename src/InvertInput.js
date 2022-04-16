import React from 'react'

const InvertInput = ({ isInverted, setIsInverted }) => {
  return (
    <div>
      <h3>Invert</h3>
      <input
        type='checkbox'
        value={isInverted}
        onChange={() => {
          setIsInverted((val) => !val)
        }}
      ></input>
    </div>
  )
}

export default InvertInput
