import React, { useRef, useState } from 'react'
import QRCode from 'qrcode'
import Header from './Header'
import Canvas from './Canvas'
import Download from './Download'
import URLInput from './URLInput'
import SizeInput from './SizeInput'
import InvertInput from './InvertInput'
import ImagePicker from './ImagePicker'
import logos from './logos'
const App = () => {
  const canvasRef = useRef()
  const imgRef = useRef()
  const [imgLoaded, setImgLoaded] = useState(false)
  const [size, setSize] = useState(500)
  const [isInverted, setIsInverted] = useState(false)
  const [current, setCurrent] = useState(0)
  const [data, setData] = useState(null)
  // TODO: add data validation
  const [href, setHref] = useState('http://catawbaculture.org')

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
        if (imgLoaded) {
          const ctx = canvas.getContext('2d')
          const logoSize = size / 3.75
          const mid = size / 2 - logoSize / 2
          ctx.drawImage(imgRef.current, mid, mid, logoSize, logoSize)
          setData(canvas.toDataURL())
          console.log('updated!')
        }
      }
    )
  }, [isInverted, size, href, imgLoaded, current])
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
      <Header>Catawba Cultural QR Utility</Header>
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
          <Canvas ref={canvasRef} size={size} />
          <Download data={data} />
        </div>
        <div style={{ borderWidth: '50px' }}>
          <URLInput href={href} setHref={setHref} />
          <h2>O P T I O N S</h2>

          <SizeInput size={size} setSize={setSize} />
          <InvertInput isInverted={isInverted} setIsInverted={setIsInverted} />
          <ImagePicker
            ref={imgRef}
            setLoaded={setImgLoaded}
            logos={logos}
            current={current}
            setCurrent={setCurrent}
          />
        </div>
      </div>
    </div>
  )
}

export default App
