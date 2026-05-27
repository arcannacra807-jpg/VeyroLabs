import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Veyro Labs — Websites die wirken';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#080808',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Accent dot */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00FF88' }} />
          <span style={{ color: '#00FF88', fontSize: '14px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            Veyro Labs
          </span>
        </div>

        {/* Headline */}
        <div style={{ fontSize: '72px', fontWeight: 800, lineHeight: 1, color: '#ffffff', marginBottom: '24px' }}>
          Websites die
        </div>
        <div style={{ fontSize: '72px', fontWeight: 800, lineHeight: 1, color: '#00FF88', marginBottom: '40px' }}>
          wirken.
        </div>

        {/* Subline */}
        <div style={{ fontSize: '22px', color: '#888888', maxWidth: '680px', lineHeight: 1.5 }}>
          Design, Code und Strategie aus einer Hand. Kein Agentur-Overhead, keine Wartezeiten.
        </div>

        {/* URL */}
        <div style={{ position: 'absolute', bottom: '80px', right: '80px', fontSize: '18px', color: '#555555' }}>
          veyro-labs.com
        </div>
      </div>
    ),
    { ...size }
  );
}
