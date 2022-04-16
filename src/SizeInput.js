import React from 'react'

const SizeInput = ({ size, setSize }) => {
  const fontStyle = {
    fontFamily: 'Syne Mono',
    fontSize: '1.3em',
    textAlign: 'center',
  }
  const inputStyle = {
    ...fontStyle,
    border: 'none',
    borderBottom: '1px solid black',
  }
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'stretch',
      }}
    >
      <input
        type='text'
        value={size}
        onChange={(e) => setSize(e.target.value)}
        style={inputStyle}
      ></input>
      <h3 style={fontStyle}>x</h3>
      <input
        type='text'
        value={size}
        onChange={(e) => setSize(e.target.value)}
        style={inputStyle}
      ></input>
    </div>
  )
}

export default SizeInput
