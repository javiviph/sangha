import React from 'react';
import '../index.css';

/* 
  Inlined SVG Logo for zero-overhead load (Fastest LCP).
  Directly uses the brand colors to avoid expensive CSS filters.
*/
const LogoSVG = ({ className, style }) => (
  <svg 
    className={className} 
    style={style} 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 220 56" 
    fill="none"
  >
    <path d="M22 44 C22 44 10 34 14 22 C16 16 20 12 20 12 C20 12 18 22 24 28 C26 30 28 28 26 24 C30 28 34 36 28 44 Z" fill="url(#flame-nav)" />
    <path d="M18 40 C14 36 12 30 15 25 C16 23 18 22 20 23 C22 24 22 27 20 28 C18 29 16 28 16 26 C16 23 18 21 20 20" stroke="#5f0006" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <text x="42" y="28" fontFamily="var(--font-serif)" fontSize="18" fontWeight="700" fill="#5f0006">Sangha Activa</text>
    <text x="43" y="42" fontFamily="var(--font-sans)" fontSize="10" fill="#555555" letterSpacing="0.5">Comunidad Budista</text>
    <defs>
      <linearGradient id="flame-nav" x1="20" y1="12" x2="28" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F59E0B"/>
        <stop offset="100%" stopColor="#5f0006"/>
      </linearGradient>
    </defs>
  </svg>
);

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      backgroundColor: 'rgba(252, 249, 244, 0.94)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(95, 0, 6, 0.08)',
      padding: '0.4rem 0',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo inlined for 0ms LCP paint time */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
           <LogoSVG className="navbar-logo" />
        </a>

        <a
          href="#contacto"
          className="btn btn-primary"
          style={{ padding: '0.6rem 1.4rem', fontSize: '0.875rem' }}
        >
          Solicitar Inscripción
        </a>
      </div>
    </nav>
  );
}
