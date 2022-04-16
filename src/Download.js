import React from 'react'

const Download = ({ data }) => {
  return (
    <a
      id='download'
      download='kataba-qr.png'
      href={data == null ? '' : data}
      style={{
        border: '1px solid rgba(0, 0, 0, 0.5)',
        width: '100%',
        borderRadius: '10px',
        height: '50px',
        display: 'grid',
        placeItems: 'center',
        color: 'black',
        fontSize: '2em',
        textDecoration: 'none',
        // backgroundColor: 'blue',
      }}
    >
      DOWNLOAD
    </a>
  )
}

export default Download
