import React from 'react';
import '../index.css';

export default function CommercialInfo() {
  return (
    <section className="section" style={{ backgroundColor: '#fcf9f4', padding: '6rem 0' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        
        <div style={{ textAlign: 'center', maxWidth: '800px', marginBottom: '1rem' }}>
          <h2 className="display-md" style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-on-surface)', marginBottom: '1.5rem' }}>
            Aportación económica e inscripción
          </h2>
          <p className="body-md" style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.6 }}>
            La aportación económica se hace PASO a PASO, es decir, trimestralmente. El precio incluye las 10 sesiones de cada PASO, el material y el espacio.
          </p>
        </div>

        <div className="pricing-card" style={{ 
          backgroundColor: 'white', 
          border: '1px solid rgba(0,0,0,0.05)',
          borderRadius: '2px', 
          padding: '3rem 2rem',
          width: '100%',
          maxWidth: '340px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
        }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '2rem' }}>General</h3>
          
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '2rem' }}>
            <span style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--color-primary)' }}>€175</span>
            <span style={{ fontSize: '0.875rem', color: '#999' }}>/Trimestre (pago al contado)</span>
          </div>

          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            margin: 0, 
            width: '100%', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1.5rem',
            textAlign: 'left'
          }}>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>*</span>
              <span style={{ fontSize: '0.9rem', color: 'var(--color-on-surface-variant)' }}>
                Pago aplazado 3 recibos de 64€ (total 192€)
              </span>
            </li>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--color-primary)' }}>✔</span>
              <span style={{ fontSize: '0.9rem', color: 'var(--color-on-surface-variant)' }}>
                Becas a consultar
              </span>
            </li>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--color-primary)' }}>✔</span>
              <span style={{ fontSize: '0.9rem', color: 'var(--color-on-surface-variant)' }}>
                Participación en el programa Neuroquotient
              </span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
