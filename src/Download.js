import React from 'react'

const Download = ({ data }) => {
  return (
    <a
      id='download'
      download='kataba-qr.png'
      href={data == null ? '' : data}
      style={{
        width: '100%',
        borderRadius: '10px',
        height: '50px',
        display: 'grid',
        placeItems: 'center',
        color: 'black',
        fontSize: '2em',
        textDecoration: 'none',
        position: 'relative',
        top: '-100px',
        backgroundColor: '#f4b860',
        fontFamily: 'Syne Mono',
        letterSpacing: '25px',
        boxShadow: '3px 3px 5px #333',
      }}
    >
      DOWNLOAD
    </a>
  )
}

export default Download
