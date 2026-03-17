import React from 'react';
import '../index.css';

export default function CommercialInfo() {
  return (
    <section className="section" style={{ backgroundColor: '#fcf9f4', padding: '8rem 0' }}>
      <div className="container">
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)',
          gap: '4rem',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: '4rem',
          borderRadius: '4px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
          border: '1px solid rgba(0,0,0,0.04)'
        }} className="pricing-grid">
          
          {/* Left: Branding & Pricing */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ borderLeft: '3px solid var(--color-primary)', paddingLeft: '1.5rem' }}>
              <h2 className="headline-md" style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-on-surface)', marginBottom: '0.5rem' }}>
                Aportación económica e inscripción
              </h2>
              <p className="body-md" style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.6 }}>
                La aportación se hace PASO a PASO (trimestralmente). Incluye las 10 sesiones, material y espacio.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
              <span style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--color-primary)', letterSpacing: '-0.02em' }}>175€</span>
              <span style={{ fontSize: '1rem', color: '#888', fontWeight: '500' }}>/ trimestre</span>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
              <a 
                href="#contacto" 
                className="btn btn-primary"
                style={{ width: '100%', textAlign: 'center', padding: '1.2rem' }}
              >
                Solicitar Inscripción
              </a>
            </div>
          </div>

          {/* Right: Conditions Container */}
          <div style={{ 
            backgroundColor: '#fafafa', 
            padding: '3rem', 
            borderRadius: '2px',
            border: '1px dashed #ddd'
          }}>
            <h4 style={{ 
              fontFamily: 'var(--font-sans)', 
              fontSize: '0.75rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.15em', 
              color: '#999',
              marginBottom: '2rem'
            }}>Condiciones generales</h4>

            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0, 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1.75rem'
            }}>
              <li style={{ display: 'flex', gap: '1.25rem' }}>
                <span style={{ color: 'var(--color-primary)', fontSize: '1.2rem', lineHeight: 1 }}>*</span>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#555', lineHeight: 1.5 }}>
                  <strong style={{ color: '#2d2d2d' }}>Pago aplazado disponible:</strong> 3 recibos de 64€ (total 192€).
                </p>
              </li>
              <li style={{ display: 'flex', gap: '1.25rem' }}>
                <span style={{ color: 'var(--color-primary)', fontSize: '1.2rem', lineHeight: 1 }}>✔</span>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#555', lineHeight: 1.5 }}>
                  <strong style={{ color: '#2d2d2d' }}>Programa de becas:</strong> Disponibles bajo consulta previa.
                </p>
              </li>
              <li style={{ display: 'flex', gap: '1.25rem' }}>
                <span style={{ color: 'var(--color-primary)', fontSize: '1.2rem', lineHeight: 1 }}>✔</span>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#555', lineHeight: 1.5 }}>
                  <strong style={{ color: '#2d2d2d' }}>Neuroquotient:</strong> Participación incluida en el programa.
                </p>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
