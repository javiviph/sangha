import React from 'react';
import '../index.css';

export default function FinalClose() {
  return (
    <section 
      className="section" 
      style={{ 
        padding: '10rem 0',
        position: 'relative',
        backgroundImage: "url('/quote-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(40, 0, 4, 0.85)', // Very dark red overlay
        zIndex: 1
      }}></div>

      <div className="container" style={{ 
        position: 'relative',
        zIndex: 2,
        display: 'flex', 
        flexDirection: 'column', 
        gap: 'var(--spacing-12)', 
        alignItems: 'center', 
        textAlign: 'center', 
        maxWidth: '800px',
        padding: '0 2rem'
      }}>
        
        {/* Logo in white — no filter needed on dark bg */}
        <img
          src="/logo-sangha.png"
          alt="Sangha Activa"
          style={{ height: '110px', width: 'auto', opacity: 0.9 }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
          <h2 className="display-lg" style={{ color: 'var(--color-surface)' }}>
            Tu práctica empieza aquí
          </h2>
          <p className="body-lg" style={{ color: 'var(--color-surface)', opacity: 0.9 }}>
            Únete al GIM y descubre cómo la meditación puede transformar tu día a día.
          </p>
        </div>

        <a href="#contacto" className="btn" style={{ 
          backgroundColor: 'var(--color-surface-lowest)', 
          color: 'var(--color-primary)',
          marginTop: '1rem'
        }}>
          Solicitar Información
        </a>

      </div>
    </section>
  );
}
