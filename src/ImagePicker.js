import React, { useState } from 'react'

const ImagePicker = React.forwardRef(
  ({ logos, current, setCurrent, setLoaded }, ref) => {
    React.useEffect(() => {
      ref.current.onload = () => {
        setLoaded(true)
      }
    }, [])
    // React.useEffect(() => {
    //   console.log('current has changed')
    //   ref.current.src = logos[current]
    // }, [current])
    return (
      <div>
        <img ref={ref} src={logos[current]} style={{ display: 'none' }} />
        {logos.map((logo, i) => {
          const isSelected = i == current
          return (
            <img
              key={i}
              src={logo}
              ref={isSelected ? ref : null}
              style={{
                cursor: 'pointer',
                width: 100,
                size: 100,
                borderRadius: 100,
                margin: 10,
                boxShadow: isSelected
                  ? '10px 5px 5px green'
                  : '10px 5px 5px black',
              }}
              onClick={() => setCurrent(i)}
            />
          )
        })}
      </div>
    )
  }
)

export default ImagePicker
