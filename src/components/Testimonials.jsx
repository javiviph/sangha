import React, { useState } from 'react';
import '../index.css';

const testimonials = [
  {
    text: "Ha sido el inicio de una aventura personal y en compañía. (...) Recuperar la contemplación, la calma interna, el silencio. Calmar la reactividad, la competitividad, la agresividad. Activar la ecuanimidad. Y en el exterior, acceder a una dimensión maravillosa.",
    author: "Laura Leoz",
    tag: "GIM Pilar López"
  },
  {
    text: "Mi profesión es médica del servicio de urgencias de un gran hospital. El GIM me da herramientas para el autoconocimiento y crecimiento personal. Noto que en estos años he mejorado en diversos campos personales lo cual revierte en una mejora de mi estado emocional y en mi entorno.",
    author: "Antonia Segura",
    tag: "GIM Gim Senior"
  },
  {
    text: "El curso de meditación en grupo me ayuda a tener una perspectiva e interpretación del día a día de forma diferente y más cercano a una vida tranquila y en paz que anteriormente. Además la meditación diara es una herramienta para conocerme mejor a mi mismo.",
    author: "Rikkert Barendse",
    tag: "GIM César H."
  },
  {
    text: "El GIM ha significado un cambio positivo en mi vida, (....) me ha llevado a centrarla mente en la calma y la positividad, constatando resultados beneficiosos para conmigo misma y con los demás. (...) El GIM debería ser asignatura preferente en la vida de cualquier persona. ¡Gracias!",
    author: "Carol Lyono",
    tag: "GIM Jordi Gómez"
  },
  {
    text: "Una forma de encontrar un equilibrio entre mente y cuerpo. Mirando desde la distancia, muchas cosas han cambiado sobretodo emoción-reacción. La búsqueda de la felicidad no esta en el exterior y para encontrarla necesitas estar en el silencio de tu interior.... de eso va el Gim.",
    author: "Amalia Rosa",
    tag: "GIM Francisco M."
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="testimonials-section">
      {/* Amber Header */}
      <div className="testimonials-header">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="headline-md" style={{ color: 'var(--color-on-surface)', marginBottom: '1.5rem' }}>
            Lo que dicen nuestr@s alumn@s sobre el curso de meditación GIM
          </h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.6, opacity: 0.8 }}>
            Desde nuestros inicios en 2012 más de 1000 alumn@s han cursado y finalizado los 10 pasos de nuestro programa para aprender a meditar. 
            Puedes seguirnos en <a href="https://instagram.com/meditaciongim" target="_blank" style={{ color: 'inherit', fontWeight: 'bold' }}>@meditaciongim</a> para leer más.
          </p>
        </div>
      </div>

      {/* White content / Carousel */}
      <div className="surface-default" style={{ padding: '6rem 0' }}>
        <div className="container" style={{ position: 'relative' }}>
          
          <div className="testimonial-card">
            <p className="testimonial-text">
              {testimonials[activeIndex].text}
            </p>
            
            <div className="testimonial-footer">
              <span className="author-name">{testimonials[activeIndex].author}</span>
              <span className="author-tag">{testimonials[activeIndex].tag}</span>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="carousel-nav">
            <button onClick={prev} className="nav-btn prev">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button onClick={next} className="nav-btn next">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="carousel-dots">
            {testimonials.map((_, i) => (
              <div 
                key={i} 
                className={`dot ${i === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
