import { ImageResponse } from 'next/og';

export const alt = 'Webdesigner aus Hamburg — Custom-Code statt WordPress, ein Ansprechpartner, ab 1.200 €';
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00FF88' }} />
          <span
            style={{
              color: '#00FF88',
              fontSize: '14px',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            Veyro Labs · Webdesign Hamburg
          </span>
        </div>

        <div
          style={{
            fontSize: '68px',
            fontWeight: 800,
            lineHeight: 1.05,
            color: '#ffffff',
            marginBottom: '12px',
          }}
        >
          Webdesigner aus Hamburg —
        </div>
        <div
          style={{
            fontSize: '68px',
            fontWeight: 800,
            lineHeight: 1.05,
            backgroundImage: 'linear-gradient(135deg, #00FF88 0%, #00C4FF 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: '40px',
          }}
        >
          ein Mensch, kein Pingpong.
        </div>

        <div style={{ fontSize: '22px', color: '#a3a3a3', maxWidth: '720px', lineHeight: 1.5 }}>
          Handgeschriebener Code statt WordPress · ein Ansprechpartner · persönlich erreichbar · ab 1.200 €.
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '80px',
            right: '80px',
            fontSize: '18px',
            color: '#8a8a8a',
          }}
        >
          veyro-labs.com
        </div>
      </div>
    ),
    { ...size }
  );
}
