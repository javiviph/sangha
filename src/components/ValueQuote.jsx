import React from 'react';
import '../index.css';

export default function ValueQuote() {
  return (
    <section 
      className="section" 
      style={{ 
        padding: '10rem 0',
        position: 'relative',
        backgroundImage: "url('/quote-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark red overlay to ensure contrast and elegant vibe */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(95, 0, 6, 0.8)', // Primary red with transparency
        zIndex: 1
      }}></div>

      <div className="container" style={{ 
        position: 'relative', 
        zIndex: 2,
        maxWidth: '900px', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 'var(--spacing-8)', 
        alignItems: 'center', 
        textAlign: 'center' 
      }}>
        
        <blockquote style={{ 
          fontFamily: 'var(--font-serif)', 
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', 
          fontWeight: '400', 
          color: 'var(--color-surface)',
          lineHeight: 1.4,
          margin: 0
        }}>
          "La meditación no se trata de vaciar la mente, sino de comprenderla. El grupo y el guía son el ancla cuando la práctica personal se vuelve difícil."
        </blockquote>
        
        <cite style={{ 
          fontFamily: 'var(--font-sans)', 
          fontSize: '1rem', 
          fontWeight: '700', 
          color: 'var(--color-secondary-container)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          fontStyle: 'normal'
        }}>
          El valor del acompañamiento
        </cite>

      </div>
    </section>
  );
}
