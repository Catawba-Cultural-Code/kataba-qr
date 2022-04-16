import React from 'react'

const Canvas = React.forwardRef(({ size }, ref) => {
  return <canvas ref={ref} style={{ width: size, height: size }}></canvas>
})

export default Canvas
