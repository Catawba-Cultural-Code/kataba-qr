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
      <Header href={href}>Catawba Cultural Qr Utility</Header>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'grid',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Canvas ref={canvasRef} size={size} isInverted={isInverted} />
          <Download data={data} />
        </div>
        <div
          style={{
            borderWidth: '50px',
            boxShadow: '3px 3px 5px #333',
            margin: '20px',
            marginHorizontal: '50px',
            padding: '20px',
            borderRadius: '30px',
            backgroundColor: 'white',
          }}
        >
          <URLInput href={href} setHref={setHref} />
          <h2 style={{ fontFamily: 'Major Mono Display' }}>options</h2>

          <SizeInput size={size} setSize={setSize} />
          <ImagePicker
            ref={imgRef}
            setLoaded={setImgLoaded}
            logos={logos}
            current={current}
            setCurrent={setCurrent}
          />
          <InvertInput isInverted={isInverted} setIsInverted={setIsInverted} />
        </div>
      </div>
    </div>
  )
}

export default App
