import React from 'react';
import '../index.css';

const IconSeedling = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22V12"/>
    <path d="M12 12C12 8 9 5 5 5s-7 3-7 7c0 0 4-1 7-1s7 1 7 1z"/>
    <path d="M12 12c0-4 3-7 7-7s7 3 7 7c0 0-4-1-7-1s-7 1-7 1z"/>
  </svg>
);

const IconMind = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9"/>
    <path d="M12 8v4l3 3"/>
  </svg>
);

const IconGroup = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const IconFocus = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M3 12h1M20 12h1M12 3v1M12 20v1"/>
    <path d="M5.6 5.6l.7.7M17.7 17.7l.7.7M5.6 18.4l.7-.7M17.7 6.3l.7-.7"/>
  </svg>
);

const IconGrowth = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
);

export default function ForWhom() {
  const benefits = [
    {
      Icon: IconSeedling,
      title: "Aprender desde cero",
      desc: "Para personas que nunca han meditado y buscan un punto de partida claro y sin fricción."
    },
    {
      Icon: IconMind,
      title: "Calma y claridad",
      desc: "Para quienes buscan reducir el ruido mental, ganar foco o estabilidad emocional en su día a día."
    },
    {
      Icon: IconGroup,
      title: "Sostener la práctica",
      desc: "Para quienes valoran el acompañamiento, la estructura y la energía de un grupo de personas afines."
    },
    {
      Icon: IconFocus,
      title: "Atención y estabilidad",
      desc: "Desarrolla herramientas reales para anclarte en el presente, sin espiritualidad abstracta."
    },
    {
      Icon: IconGrowth,
      title: "Crecimiento personal",
      desc: "Para personas abiertas a una propuesta con profunda inspiración budista aplicada a la vida."
    }
  ];

  return (
    <section className="surface-default section">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
        
        <div style={{ textAlign: 'center' }}>
          <h2 className="headline-md">¿Para quién es?</h2>
          <p className="body-lg" style={{ color: 'var(--color-on-surface-variant)', marginTop: '1rem', maxWidth: '600px', margin: '1rem auto 0' }}>
            El GIM está diseñado para acompañarte desde donde estés, sea tu primer contacto con la meditación o una práctica consolidada.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
          {/* Row 1: 2 wide cards */}
          <div className="for-whom-row-2">
            {benefits.slice(0, 2).map(({ Icon, title, desc }, index) => (
              <div key={index} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: 'var(--spacing-8)', alignItems: 'center', textAlign: 'center' }}>
                <span style={{ color: 'var(--color-primary)' }}><Icon /></span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-on-surface)' }}>
                  {title}
                </h3>
                <p style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.6 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
          {/* Row 2: 3 narrower cards */}
          <div className="for-whom-row-3">
            {benefits.slice(2).map(({ Icon, title, desc }, index) => (
              <div key={index} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: 'var(--spacing-8)', alignItems: 'center', textAlign: 'center' }}>
                <span style={{ color: 'var(--color-primary)' }}><Icon /></span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-on-surface)' }}>
                  {title}
                </h3>
                <p style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.6 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
