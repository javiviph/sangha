import React from 'react';
import '../index.css';

export default function CommercialInfo() {
  return (
    <section className="surface-low section">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)', alignItems: 'center', maxWidth: '800px' }}>
        
        <h2 className="headline-md" style={{ textAlign: 'center' }}>Información de acceso</h2>
        
        <div className="card" style={{ 
          width: '100%', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 'var(--spacing-6)', 
          alignItems: 'center',
          textAlign: 'center',
          padding: 'var(--spacing-12) var(--spacing-6)'
        }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-primary)' }}>
            Aportación mensual
          </h3>
          <p className="body-lg" style={{ color: 'var(--color-on-surface-variant)' }}>
            El precio varía en función de la modalidad elegida. Existen opciones de pago fraccionado y un programa de becas disponible bajo petición.
          </p>
        </div>

      </div>
    </section>
  );
}
