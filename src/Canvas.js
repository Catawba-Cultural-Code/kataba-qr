import React from 'react'

const Canvas = React.forwardRef(({ size, isInverted, href }, ref) => {
  return (
    <div
      style={{
        borderRadius: size * 2,
        backgroundColor: isInverted ? 'black' : 'white',
        overflow: 'hidden',
        padding: size / 5,
        boxShadow: '3px 3px 5px #333',
      }}
    >
      <h1>{href}</h1>
      <canvas ref={ref} style={{ width: size, height: size }}></canvas>
    </div>
  )
})

export default Canvas
