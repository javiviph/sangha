import React from 'react';
import '../index.css';

const PHOTOS = {
  pilar:     '/images/trainers/pilar-lopez.jpg',
  jordi:     '/images/trainers/jordi-gomez.jpg',
  tenzin:    '/images/trainers/ngawang-tenzin.jpg',
  susana:    '/images/trainers/susana-lopez.jpg',
  arantxa:   '/images/trainers/arantxa-santesteban.jpg',
  lourdes:   '/images/trainers/lourdes-navarro.jpg',
  maribel:   '/images/trainers/maribel-saludes.png',
  marta:     '/images/trainers/marta-arroyo.jpg',
  montse:    '/images/trainers/montserrat-rumi.jpg',
  elisabet:  '/images/trainers/elisabet-alcalde.jpg',
  robert:    '/images/trainers/robert-roig.jpg',
  francisco: '/images/trainers/francisco-molina.jpg',
  eva:       '/images/trainers/eva-pares.jpg',
  lluis:     '/images/trainers/lluis-salvador.jpg',
  paula:     '/images/trainers/paula-pallares.jpg',
  melisa:    '/images/trainers/melisa-gonzalez.jpg',
  silvia:    '/images/trainers/silvia-del-rio.jpg',
  english:   '/images/trainers/english-trainer.jpg',
};

const trainers = [
  { name: 'Pilar López',          location: 'St. Iscle de Vallata', photo: 'pilar' },
  { name: 'Jordi Gómez',          location: 'Vilassar de Mar', photo: 'jordi' },
  { name: 'Ngawang Tenzin',       location: 'On line', photo: 'tenzin' },
  { name: 'Susana López',         location: 'Barcelona', photo: 'susana' },
  { name: 'Arantxa Santesteban',  location: 'Molins de Rei', photo: 'arantxa' },
  { name: 'Lourdes Navarro',      location: 'Vilassar de Mar', photo: 'lourdes' },
  { name: 'Maribel Saludes',      location: 'Esplugues de Llobregat y Sant Just Desvern', photo: 'maribel' },
  { name: 'Marta Arroyo',         location: 'Mataró y Vilassar de Mar', photo: 'marta' },
  { name: 'Montserrat Rumí',      location: 'Barcelona', photo: 'montse' },
  { name: 'Elisabet Alcalde',     location: 'Barcelona', photo: 'elisabet' },
  { name: 'Robert Roig',          location: 'Barcelona', photo: 'robert' },
  { name: 'Francisco Molina',     location: 'Sabadell', photo: 'francisco' },
  { name: 'Eva Pares',            location: 'Vilassar de Mar', photo: 'eva' },
  { name: 'Lluís Salvador',       location: 'Pineda de Mar', photo: 'lluis' },
  { name: 'Paula Pallarès',       location: 'Tàrrega', photo: 'paula' },
  { name: 'Melisa González',      location: 'Sabadell', photo: 'melisa' },
  { name: 'Silvia del Río',       location: 'Lima (Perú)', photo: 'silvia' },
  { name: 'Konstatin Mudrack', location: 'Online - English Speaking', photo: 'english' },
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
              
              {/* Circular photo RESTORED */}
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                overflow: 'hidden',
                backgroundColor: '#f5f5f5',
                flexShrink: 0,
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
              }}>
                <picture>
                  {/* Using extension replacement to match the generated .webp files */}
                  <source srcSet={PHOTOS[t.photo].replace(/\.(jpg|png)$/, '.webp')} type="image/webp" />
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
                
                {t.location && (
                  <span style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.85rem',
                    color: 'var(--color-on-surface-variant)',
                    lineHeight: 1.4
                  }}>
                    {t.location}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
