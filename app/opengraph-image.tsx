import { colorPairs, OgAlt, OGSize as size } from '@/lib/vars'
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = OgAlt

export const contentType = 'image/png'

export default async function Image() {
  const [color1, color2] = colorPairs[Math.floor(Math.random() * colorPairs.length)]

  return new ImageResponse(
    (
      <div
        style={{
          background: `linear-gradient(to right, ${color1}, ${color2})`,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '24px',
          overflow: 'hidden'
        }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '24px',
            padding: '16px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
          <img
            src='https://shadesigner.com/favicon-32x32.png'
            width={64}
            height={64}
            alt='Shadesigner Logo'
            style={{
              borderRadius: '12px'
            }}
          />
        </div>
        <h1
          style={{
            fontSize: '64px',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginTop: '40px',
            maxWidth: '900px',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
          }}>
          Design Beautiful Color Palettes for Shadcn UI
        </h1>
        <p
          style={{
            fontSize: '32px',
            color: 'rgba(255, 255, 255, 0.9)',
            textAlign: 'center',
            marginTop: '20px',
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
          }}>
          Create stunning, harmonious color schemes with ease
        </p>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: await fetch(new URL('./fonts/Inter-Bold.ttf', import.meta.url)).then((res) => res.arrayBuffer()),
          weight: 700,
          style: 'normal'
        }
      ]
    }
  )
}
