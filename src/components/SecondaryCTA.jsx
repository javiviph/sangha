import React from 'react';
import '../index.css';

export default function SecondaryCTA() {
  return (
    <section id="reservar" className="surface-default" style={{ paddingBottom: 'var(--spacing-12)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)', alignItems: 'center', textAlign: 'center' }}>
        
        <p className="body-lg" style={{ color: 'var(--color-on-surface-variant)' }}>
          ¿Ya lo tienes claro y prefieres reservar directamente?
        </p>

        <a href="#link-externo" className="btn-tertiary">
          Reservar plaza externa
        </a>

      </div>
    </section>
  );
}
