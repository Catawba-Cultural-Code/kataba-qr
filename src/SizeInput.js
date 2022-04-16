import React from 'react'

const SizeInput = ({ size, setSize }) => {
  return (
    <div>
      <h3>Size</h3>
      <input
        type='text'
        value={size}
        onChange={(e) => setSize(e.target.value)}
      ></input>
    </div>
  )
}

export default SizeInput
