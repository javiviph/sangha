import React from 'react';
import '../index.css';

const PHOTOS = {
  f1: '/images/trainer-f1.png',
  f2: '/images/trainer-f2.png',
  f3: '/images/trainer-f3.png',
  f4: '/images/trainer-f4.png',
  m1: '/images/trainer-m1.png',
  m2: '/images/trainer-m2.png',
};

const trainers = [
  { name: 'Pilar López',          location: 'St. Iscle de Vallata', photo: 'f1' },
  { name: 'Jordi Gómez',          location: 'Vilassar de Mar', photo: 'm1' },
  { name: 'Ngawang Tenzin',       location: 'On line', photo: 'm2' },
  { name: 'Susana López',         location: 'Barcelona', photo: 'f3' },
  { name: 'Arantxa Santesteban',  location: 'Molins de Rei', photo: 'f2' },
  { name: 'Lourdes Navarro',      location: 'Vilassar de Mar', photo: 'f4' },
  { name: 'Maribel Saludes',      location: 'Esplugues de Llobregat y Sant Just Desvern', photo: 'f1' },
  { name: 'Marta Arroyo',         location: 'Mataró y Vilassar de Mar', photo: 'f3' },
  { name: 'Montserrat Rumí',      location: 'Barcelona', photo: 'f2' },
  { name: 'Elisabet Alcalde',     location: 'Barcelona', photo: 'f4' },
  { name: 'Robert Roig',          location: 'Barcelona', photo: 'm2' },
  { name: 'Francisco Molina',     location: 'Sabadell', photo: 'm1' },
  { name: 'Eva Pares',            location: 'Vilassar de Mar', photo: 'f3' },
  { name: 'Lluís Salvador',       location: 'Pineda de Mar', photo: 'm2' },
  { name: 'Paula Pallarès',       location: 'Tàrrega', photo: 'f1' },
  { name: 'Melisa González',      location: 'Sabadell', photo: 'f4' },
  { name: 'Silvia del Río',       location: 'Lima (Perú)', photo: 'f2' },
  { name: 'Online - English Speaking', location: '', photo: 'm1', isSpecial: true },
];

export default function Trainers() {
  return (
    <section className="section" style={{ backgroundColor: '#fff', padding: '6rem 0' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>

        {/* Header */}
        <div style={{ textAlign: 'center' }}>
          <h2 className="headline-md" style={{ color: 'var(--color-primary)' }}>Nuestros formadores</h2>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1rem',
            color: 'var(--color-on-surface-variant)',
            lineHeight: 1.6,
            maxWidth: '600px',
            margin: '1rem auto 0',
          }}>
            Un equipo de guías con años de experiencia en la práctica y la transmisión de la meditación budista aplicada.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
          gap: '3rem 2rem',
        }}>
          {trainers.map((t, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
              
              {/* Circular photo as before */}
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                overflow: 'hidden',
                backgroundColor: '#f5f5f5',
                flexShrink: 0,
              }}>
                <picture>
                  <source srcSet={PHOTOS[t.photo].replace('.png', '.webp')} type="image/webp" />
                  <img
                    src={PHOTOS[t.photo]}
                    alt={t.name}
                    loading="lazy"
                    width="100"
                    height="100"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </picture>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <span style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  color: 'var(--color-on-surface)',
                  lineHeight: 1.2
                }}>
                  {t.name}
                </span>
                
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.85rem',
                  color: 'var(--color-on-surface-variant)',
                  lineHeight: 1.4
                }}>
                  {t.location}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
