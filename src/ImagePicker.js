import React from 'react'

const ImagePicker = React.forwardRef(
  ({ logos, current, setCurrent, setLoaded }, ref) => {
    React.useEffect(() => {
      ref.current.onload = () => {
        setLoaded(true)
      }
    }, [])

    return (
      <div>
        {logos.map((logo, i) => {
          const isSelected = i === current
          return (
            <img
              key={i}
              src={logo}
              ref={isSelected ? ref : null}
              alt='A logo'
              style={{
                cursor: 'pointer',
                width: 100,
                size: 100,
                borderRadius: 100,
                margin: 10,
                boxShadow: isSelected
                  ? '3px 3px 10px #f4b860'
                  : '3px 3px 5px #333',
              }}
              onClick={() => setCurrent(i)}
            />
          )
        })}
        <img
          ref={ref}
          alt=''
          src={logos[current]}
          style={{ display: 'none' }}
        />
      </div>
    )
  }
)

export default ImagePicker
