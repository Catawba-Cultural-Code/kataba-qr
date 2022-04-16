import React from 'react'

const Header = ({ children }) => {
  return (
    <h1
      style={{
        backgroundColor: 'black',
        textAlign: 'center',
        color: 'white',
        gridRow: '1 / 2',
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </h1>
  )
}

export default Header
