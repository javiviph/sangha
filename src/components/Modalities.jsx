import React from 'react';
import '../index.css';

export default function Modalities() {
  return (
    <section className="surface-default section">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
        
        <div style={{ textAlign: 'center' }}>
          <h2 className="headline-md">Nuestras modalidades</h2>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: 'var(--spacing-8)' 
        }}>
          <div className="surface-low" style={{ 
            borderRadius: 'var(--radius-lg)', 
            padding: 'var(--spacing-12) var(--spacing-8)', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1.5rem' 
          }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-primary)' }}>
              Presencial
            </h3>
            <p className="body-lg" style={{ color: 'var(--color-on-surface-variant)' }}>
              En nuestro centro de Barcelona. Para quienes prefieren la inmersión total en el espacio de práctica compartiendo la sala con los formadores y el grupo.
            </p>
          </div>

          <div className="surface-low" style={{ 
            borderRadius: 'var(--radius-lg)', 
            padding: 'var(--spacing-12) var(--spacing-8)', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1.5rem' 
          }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-primary)' }}>
              Online
            </h3>
            <p className="body-lg" style={{ color: 'var(--color-on-surface-variant)' }}>
              Desde cualquier lugar. Seguimos la misma estructura y acompañamiento en directo, cuidando que la experiencia sea igual de profunda y cercana.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
