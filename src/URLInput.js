import React from 'react'

const URLInput = ({ href, setHref }) => {
  return (
    <div style={{ paddingTop: '30px', paddingBottom: '50px' }}>
      <input
        type='text'
        value={href}
        onChange={(e) => setHref(e.target.value)}
        style={{
          border: 'none',
          borderBottom: '1px solid black',
          width: '100%',
          fontSize: '1.25em',
          fontFamily: 'Syne Mono',
        }}
      ></input>
    </div>
  )
}

export default URLInput
