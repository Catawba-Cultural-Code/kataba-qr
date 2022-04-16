import React from 'react'

const InvertInput = ({ isInverted, setIsInverted }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type='checkbox'
        value={isInverted}
        onChange={() => {
          setIsInverted((val) => !val)
        }}
      ></input>
      <h3 style={{ fontFamily: 'Major Mono Display' }}>invert</h3>
    </div>
  )
}

export default InvertInput
