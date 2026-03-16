import React from 'react';
import '../index.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">

        {/* ── LEFT: Copy ── */}
        <div className="hero-copy">
          <h1 className="hero-headline">
            Aprende a meditar de forma guiada
          </h1>

          <p className="hero-sub">
            Descubre el programa GIM: una estructura diseñada para transformar
            tu relación con el estrés a través de la sabiduría milenaria y la
            guía experta.
          </p>

          <div className="hero-ctas">
            <a href="#contacto" className="btn btn-primary">
              Pedir información
            </a>
            <a href="#reservar" className="btn btn-tertiary hero-tertiary btn-gold-shine">
              Reservar plaza
            </a>
          </div>
        </div>

        {/* ── RIGHT: Image + floating quote card ── */}
        <div className="hero-image-wrap">
          <div className="hero-image" />

          {/* Floating quote card — hidden on mobile */}
          <div className="hero-quote-card">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-secondary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22V12"/>
              <path d="M12 12C12 8 9 5 5 5s-5 2-5 5c0 0 3-1 6-1s6 1 6 1z"/>
              <path d="M12 12c0-4 3-7 7-7s5 2 5 5c0 0-3-1-6-1s-6 1-6 1z"/>
            </svg>
            <p className="hero-quote-text">
              "La paz no es la ausencia de conflicto, sino la presencia de la calma interna."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
