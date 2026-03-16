import React from 'react';
import '../index.css';

/*
  CSS filter strategy for the white-on-transparent logo PNG:
  ─────────────────────────────────────────────────────────
  The logo is white. On the light cream navbar background it would be invisible.
  We use CSS `filter` chains to colorize it without touching the file:

  • logoFilterDark  → white → brand dark red  (#5f0006)
    brightness(0) zeroes out all channels first (makes it black),
    then we layer invert/sepia/saturate/hue-rotate to reach the target hue.

  • logoFilterWhite → no filter (white stays white) perfect on dark bg sections.
*/

const logoFilterRed =
  'brightness(0) saturate(100%) invert(7%) sepia(95%) saturate(4000%) hue-rotate(345deg) brightness(0.85)';

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      backgroundColor: 'rgba(252, 249, 244, 0.92)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(0,0,0,0.06)',
      padding: '0.5rem 0',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo: white PNG + CSS color filter → brand red on light bg */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img
            src="/images/logo-sangha.webp"
            alt="Sangha Activa"
            style={{
              height: '90px',
              width: 'auto',
              filter: logoFilterRed,
            }}
          />
        </a>

        {/* CTA */}
        <a
          href="#contacto"
          className="btn btn-primary"
          style={{ padding: '0.6rem 1.4rem', fontSize: '0.875rem' }}
        >
          Pedir información
        </a>
      </div>
    </nav>
  );
}
