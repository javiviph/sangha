import React, { useState } from 'react';

const WA_URL =
  'https://api.whatsapp.com/send?phone=34659049395&text=%C2%A1Hola!%20Nuestro%20horario%20de%20atenci%C3%B3n%20por%20Whatsapp%20es%20de%20martes%20a%20viernes%20de%209%3A30h%20a%2013%3A30h%20y%20de%2016h%20a%2019h.%20S%C3%A1bados%20de%2010%3A30h%20a%2013%3A30h%20y%2016h%20a%2018h.%20Domingo%20de%2010%3A30%20a%2013%3A30h.%20';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatea con nosotros por WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'fixed',
        bottom: '1.75rem',
        right: '1.75rem',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem',
        textDecoration: 'none',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        transform: hovered ? 'translateY(-4px) scale(1.05)' : 'translateY(0) scale(1)',
      }}
    >
      {/* Tooltip label */}
      <span
        style={{
          backgroundColor: '#fff',
          color: '#111',
          fontSize: '0.8rem',
          fontWeight: 600,
          fontFamily: 'var(--font-sans)',
          padding: '0.4rem 0.75rem',
          borderRadius: '999px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
          whiteSpace: 'nowrap',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateX(0)' : 'translateX(8px)',
          transition: 'opacity 0.22s ease, transform 0.22s ease',
          pointerEvents: 'none',
        }}
      >
        ¿Hablamos?
      </span>

      {/* WhatsApp bubble */}
      <span
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: hovered
            ? '0 8px 32px rgba(37,211,102,0.5)'
            : '0 4px 20px rgba(37,211,102,0.35)',
          transition: 'box-shadow 0.25s ease',
          flexShrink: 0,
        }}
      >
        {/* Official WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="30"
          height="30"
          fill="#fff"
        >
          <path d="M24 4C13 4 4 13 4 24c0 3.6 1 7 2.7 10L4 44l10.3-2.7C17.1 43 20.5 44 24 44c11 0 20-9 20-20S35 4 24 4zm0 36c-3.1 0-6.1-.8-8.7-2.4l-.6-.4-6.1 1.6 1.6-5.9-.4-.6C8.8 30.1 8 27.1 8 24 8 15.2 15.2 8 24 8s16 7.2 16 16-7.2 16-16 16zm8.7-11.7c-.5-.2-2.8-1.4-3.2-1.5-.4-.2-.7-.2-1 .2-.3.4-1.2 1.5-1.5 1.9-.3.3-.6.4-1.1.1-.5-.2-2-.7-3.8-2.4-1.4-1.3-2.3-2.8-2.6-3.3-.3-.5 0-.7.2-1 .2-.2.5-.6.7-.8.2-.3.3-.5.4-.8.1-.3 0-.6-.1-.8-.1-.2-1-2.4-1.4-3.3-.4-.9-.8-.7-1-.7h-.9c-.3 0-.8.1-1.2.6-.4.5-1.6 1.5-1.6 3.7 0 2.2 1.6 4.3 1.8 4.6.2.3 3.1 4.8 7.6 6.7 1.1.5 1.9.7 2.6.9 1.1.3 2 .3 2.8.2.9-.1 2.8-1.1 3.2-2.2.4-1.1.4-2 .3-2.2-.1-.2-.4-.3-.9-.5z" />
        </svg>
      </span>
    </a>
  );
}
