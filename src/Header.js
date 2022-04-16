import React from 'react'

const Header = ({ children }) => {
  return (
    <h1
      style={{
        textAlign: 'center',
        color: 'black',
        gridRow: '1 / 2',
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Major Mono Display',
        fontSize: '3em',
      }}
    >
      {children}
    </h1>
  )
}

export default Header
