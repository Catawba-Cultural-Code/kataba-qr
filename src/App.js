import React, { useRef, useState } from 'react'
import QRCode from 'qrcode'
import logo from './logo.png'
const App = () => {
  const canvasRef = useRef()
  const imgRef = useRef()
  const [imgLoaded, setImgLoaded] = useState(false)
  const [size, setSize] = useState(500)
  const [isInverted, setIsInverted] = useState(false)
  const [data, setData] = useState(null)
  // TODO: add data validation
  const [href, setHref] = useState('http://catawbaculture.org')

  React.useEffect(() => {
    imgRef.current.onload = () => {
      console.log('image loaded')
      setImgLoaded(true)
    }
  }, [])

  React.useEffect(() => {
    const canvas = canvasRef.current
    QRCode.toCanvas(
      canvasRef.current,
      href,
      {
        color: {
          dark: isInverted ? '#fff' : '#000',
          light: isInverted ? '#000' : '#fff',
        },
        width: size,
        margin: 2,
      },
      function(error) {
        if (error) console.error(error)
        console.log('updated!')
        if (imgLoaded) {
          const ctx = canvas.getContext('2d')
          const logoSize = size / 3.75
          const mid = size / 2 - logoSize / 2
          ctx.drawImage(imgRef.current, mid, mid, logoSize, logoSize)
          setData(canvas.toDataURL())
        }
      }
    )
  }, [isInverted, size, href, imgLoaded])
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '1fr 7fr',
        alignItems: 'stretch',
        justifyContent: 'stretch',
        height: '100vh',
      }}
    >
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
        Catawba QR Utility
      </h1>
      <div
        style={{
          gridRow: '2 / 3',
          display: 'grid',
          gridTemplateColumns: '3fr 2fr',
        }}
      >
        <div
          style={{
            display: 'grid',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <canvas
            ref={canvasRef}
            style={{ width: size, height: size }}
          ></canvas>
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
        </div>
        <div style={{ backgroundColor: 'red', borderWidth: '50px' }}>
          <div>
            <h3>URL</h3>
            <input
              type='text'
              value={href}
              onChange={(e) => setHref(e.target.value)}
            ></input>
          </div>
          <h2>O P T I O N S</h2>

          <div>
            <h3>Size</h3>
            <input
              type='text'
              value={size}
              onChange={(e) => setSize(e.target.value)}
            ></input>
          </div>
          <div>
            <h3>Invert</h3>
            <input
              type='checkbox'
              value={isInverted}
              onChange={() => {
                setIsInverted((val) => !val)
              }}
            ></input>
          </div>
          <div>
            <img ref={imgRef} src={logo} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
