import React from 'react'

const URLInput = ({ href, setHref }) => {
  return (
    <div>
      <h3>URL</h3>
      <input
        type='text'
        value={href}
        onChange={(e) => setHref(e.target.value)}
      ></input>
    </div>
  )
}

export default URLInput
