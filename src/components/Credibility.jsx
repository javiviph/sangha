import React from 'react';
import '../index.css';

export default function Credibility() {
  return (
    <section className="surface-lowest section">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
        
        <div style={{ textAlign: 'center' }}>
          <h2 className="headline-md">Años cultivando la práctica</h2>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: 'var(--spacing-12)',
          textAlign: 'center'
        }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '3.5rem', color: 'var(--color-secondary)' }}>
              +20
            </span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: '700', color: 'var(--color-on-surface-variant)' }}>
              Años de trayectoria
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '3.5rem', color: 'var(--color-secondary)' }}>
              +5000
            </span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: '700', color: 'var(--color-on-surface-variant)' }}>
              Alumnos guiados
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '3.5rem', color: 'var(--color-secondary)' }}>
              Comunidad
            </span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: '700', color: 'var(--color-on-surface-variant)' }}>
              Sangha activa nacional e internacional
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
