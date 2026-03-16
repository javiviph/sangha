import React from 'react';
import '../index.css';

export default function HowItWorks() {
  const steps = [
    {
      num: "01.",
      title: "Estructura por pasos",
      desc: "Un recorrido progresivo, donde cada sesión asienta las bases de la siguiente para que tu comprensión sea sólida y real."
    },
    {
      num: "02.",
      title: "Trabajo en grupo",
      desc: "Avanzamos a un mismo ritmo. La energía de la sangha (comunidad) nos ayuda a mantener constancia y compromiso."
    },
    {
      num: "03.",
      title: "Material de apoyo",
      desc: "Tendrás recursos para tu práctica personal diaria, asegurando que la meditación salga de la sesión y entre en tu vida."
    }
  ];

  return (
    <section className="surface-low section">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
        
        <div style={{ textAlign: 'center' }}>
          <h2 className="headline-md">Cómo funciona</h2>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: 'var(--spacing-8)' 
        }}>
          {steps.map((step, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-secondary)' }}>
                {step.num}
              </span>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-on-surface)' }}>
                {step.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--color-on-surface-variant)', lineHeight: 1.6 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
