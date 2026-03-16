import React from 'react';
import '../index.css';

export default function WhatIsGIM() {
  return (
    <section className="surface-low section" style={{ textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
        <h2 className="headline-md">¿Qué es el GIM?</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.5rem', color: 'var(--color-on-surface-variant)' }}>
            Es un programa estructurado y progresivo.
          </p>
          <p className="body-lg" style={{ color: 'var(--color-on-surface-variant)' }}>
            Diseñado tanto para empezar desde cero como para profundizar en tu práctica actual. 
            Con acompañamiento cercano y aplicación práctica constante.
          </p>
        </div>
      </div>
    </section>
  );
}
