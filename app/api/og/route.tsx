import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000',
            backgroundImage: 'linear-gradient(to bottom right, #000, #111827)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid rgba(59, 130, 246, 0.5)',
              borderRadius: '24px',
              padding: '40px 60px',
              backgroundColor: 'rgba(17, 24, 39, 0.7)',
            }}
          >
            <h1
              style={{
                fontSize: 60,
                fontWeight: 800,
                background: 'linear-gradient(to right, #fff, #94a3b8)',
                backgroundClip: 'text',
                color: 'transparent',
                margin: 0,
                marginBottom: 16,
              }}
            >
              Sidd Sehgal
            </h1>
            <p
              style={{
                fontSize: 28,
                color: '#94a3b8',
                margin: 0,
                textAlign: 'center',
                maxWidth: '700px',
              }}
            >
              Software Developer & Cybersecurity Enthusiast
            </p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to generate the image';
    console.error(errorMessage);
    return new Response(`Failed to generate the image: ${errorMessage}`, {
      status: 500,
    });
  }
} 