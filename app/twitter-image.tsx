import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Design Beautiful Color Palettes for Shadcn UI'
export const size = {
  width: 1200,
  height: 630
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          letterSpacing: '-.02em',
          fontWeight: 700,
          background: 'white'
        }}>
        <div
          style={{
            left: 42,
            top: 42,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center'
          }}>
          <img
            src='https://shadesigner.com/favicon-32x32.png'
            width={24}
            height={24}
            alt='Favicon'
          />
          <span
            style={{
              marginLeft: 8,
              fontSize: 24
            }}>
            shadesigner.com
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            padding: '20px 50px',
            margin: '0 42px',
            fontSize: 40,
            width: 'auto',
            maxWidth: 550,
            textAlign: 'center',
            backgroundColor: 'black',
            color: 'white',
            lineHeight: 1.4,
            borderRadius: '10px'
          }}>
          <div
            tw='font-bold'
            style={{
              backgroundImage: 'linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}>
            Design Beautiful Color Palettes for Shadcn UI
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630
    }
  )
}
