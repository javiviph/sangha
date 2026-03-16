import React from 'react';
import '../index.css';

const PHOTOS = {
  f1: '/trainer-f1.png',
  f2: '/trainer-f2.png',
  f3: '/trainer-f3.png',
  f4: '/trainer-f4.png',
  m1: '/trainer-m1.png',
  m2: '/trainer-m2.png',
};

const trainers = [
  { name: 'Pilar López',          location: 'St. Iscle de Vallata',                      photo: 'f1' },
  { name: 'Jordi Gómez',          location: 'Vilassar de Mar',                            photo: 'm1' },
  { name: 'Ngawang Tenzin',       location: 'Online',                                     photo: 'm2' },
  { name: 'Susana López',         location: 'Barcelona',                                  photo: 'f3' },
  { name: 'Arantxa Santesteban',  location: 'Molins de Rei',                              photo: 'f2' },
  { name: 'Lourdes Navarro',      location: 'Vilassar de Mar',                            photo: 'f4' },
  { name: 'Maribel Saludes',      location: 'Esplugues · Sant Just Desvern',              photo: 'f1' },
  { name: 'Marta Arroyo',         location: 'Mataró · Vilassar de Mar',                   photo: 'f3' },
  { name: 'Montserrat Rumí',      location: 'Barcelona',                                  photo: 'f2' },
  { name: 'Elisabet Alcalde',     location: 'Barcelona',                                  photo: 'f4' },
  { name: 'Robert Roig',          location: 'Barcelona',                                  photo: 'm2' },
  { name: 'Francisco Molina',     location: 'Sabadell',                                   photo: 'm1' },
  { name: 'Eva Pares',            location: 'Vilassar de Mar',                            photo: 'f3' },
  { name: 'Lluís Salvador',       location: 'Pineda de Mar',                              photo: 'm2' },
  { name: 'Paula Pallarès',       location: 'Tàrrega',                                    photo: 'f1' },
  { name: 'Melisa González',      location: 'Sabadell',                                   photo: 'f4' },
  { name: 'Silvia del Río',       location: 'Lima (Perú)',                                photo: 'f2' },
  { name: 'Ngawang Tenzin',       location: 'Online — English Speaking',                  photo: 'm1' },
];


export default function Trainers() {
  return (
    <section className="surface-low section">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>

        {/* Header */}
        <div style={{ textAlign: 'center' }}>
          <h2 className="headline-md">Nuestros formadores</h2>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1.05rem',
            color: 'var(--color-on-surface-variant)',
            lineHeight: 1.7,
            maxWidth: '560px',
            margin: '1rem auto 0',
          }}>
            Un equipo de guías con años de experiencia en la práctica y la transmisión de la meditación budista aplicada.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: '2rem 1.5rem',
        }}>
          {trainers.map((t, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', textAlign: 'center' }}>
              {/* Circular photo */}
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                overflow: 'hidden',
                backgroundColor: 'var(--color-surface-high)',
                flexShrink: 0,
              }}>
                <img
                  src={PHOTOS[t.photo]}
                  alt={t.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>

              {/* Name */}
              <span style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '0.95rem',
                color: 'var(--color-on-surface)',
                lineHeight: 1.3,
              }}>
                {t.name}
              </span>

              {/* Location */}
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                color: 'var(--color-on-surface-variant)',
                lineHeight: 1.4,
              }}>
                {t.location}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
