import React from 'react';
import '../index.css';

const LOCATIONS = [
  { zone: 'Barcelona Ciudad', centers: 'Grupos de meditación' },
  { zone: 'Sabadell', centers: 'Zona Sabadell' },
  { zone: 'Baix Llobregat', centers: 'Esplugues de Llobregat' },
  { zone: 'Baix Llobregat', centers: 'Molins de Rei' },
  { zone: 'Maresme', centers: 'Vilassar de Mar' },
  { zone: 'Maresme', centers: 'Arenys de Mar' },
  { zone: 'Maresme', centers: 'Mataró' },
  { zone: 'Tàrrega', centers: 'Zona Tàrrega' },
];

export default function Locations() {
  return (
    <section className="section" style={{ backgroundColor: '#fff', padding: '6rem 0' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center' }}>
        
        <div style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h2 className="display-md" style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-on-surface)', marginBottom: '1.5rem' }}>
            Dónde se cursa el Programa de Meditación GIM presencial e inscripciones abiertas
          </h2>
          <p className="body-md" style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.6 }}>
            A continuación te presentamos las áreas de Cataluña donde tenemos formador@s o centros para aprender a meditar con el GIM. También encontrarás inscripciones abiertas a nuevos grupos de meditación.
          </p>
        </div>

        {/* Zones Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1rem',
          width: '100%'
        }}>
          {LOCATIONS.map((loc, i) => (
            <div key={i} style={{ 
              backgroundColor: i % 2 === 0 ? '#f0ad64' : '#fafafa', 
              padding: '2rem',
              color: i % 2 === 0 ? 'white' : 'var(--color-on-surface)',
              textAlign: 'center',
              borderRadius: '2px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <span style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem', opacity: 0.9 }}>
                Grupos de meditación -
              </span>
              <span style={{ fontSize: '1.1rem', fontWeight: '700' }}>
                Zona {loc.zone} - {loc.centers}
              </span>
            </div>
          ))}
        </div>

        {/* Map */}
        <div style={{ width: '100%', marginTop: '2rem', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
          <iframe 
            src="https://www.google.com/maps/d/embed?mid=1QfC9xw2SuK13UnYU80lA9jyyq3aj-d4&ehbc=2E312F" 
            width="100%" 
            height="480" 
            style={{ border: 0 }}
            title="Mapa de ubicaciones GIM"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
