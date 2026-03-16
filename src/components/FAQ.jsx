import React from 'react';
import '../index.css';

export default function FAQ() {
  const faqs = [
    {
      q: "¿Hace falta experiencia previa?",
      a: "No. El programa está diseñado para guiarte paso a paso desde el primer día, independientemente de tu nivel."
    },
    {
      q: "¿Puedo hacerlo en formato online?",
      a: "Sí. Disponemos de modalidad online en directo con el mismo rigor técnico y acompañamiento que la presencial."
    },
    {
      q: "¿Qué ocurre después de enviar el formulario?",
      a: "Nuestro equipo te contactará para resolver tus dudas y confirmar si la propuesta encaja con lo que buscas."
    }
  ];

  return (
    <section className="surface-low section">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)', maxWidth: '900px' }}>
        
        <h2 className="headline-md">Preguntas frecuentes</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
          {faqs.map((faq, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-primary)' }}>
                {faq.q}
              </h3>
              <p className="body-lg" style={{ color: 'var(--color-on-surface-variant)' }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
