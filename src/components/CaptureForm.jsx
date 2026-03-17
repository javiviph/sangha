import React, { useState } from 'react';
import '../index.css';

const LOCATIONS = [
  'Barcelona Ciudad',
  'Sabadell',
  'Baix Llobregat - Esplugues de Llobregat',
  'Baix Llobregat - Molins de Rei',
  'Maresme - Vilassar de Mar',
  'Maresme - Arenys de Mar',
  'Maresme - Mataró',
  'Tàrrega',
  'Online / Otros'
];

export default function CaptureForm() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    accepted: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real app, send to API
  };

  return (
    <section id="contacto" className="section" style={{ backgroundColor: '#fff', padding: '8rem 0' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="headline-md" style={{ color: 'var(--color-primary)' }}>
            Cómo inscribirse en el Programa GIM
          </h2>
          <p className="body-md" style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.6, marginTop: '1rem' }}>
            Fácil, rellena este formulario y te acompañaremos de forma personalizada durante todo el proceso de inscripción.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '600', color: '#444' }}>Nombre *</label>
            <input 
              type="text" 
              placeholder="Introduce tu nombre" 
              className="input-field"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}
            />
            <span style={{ fontSize: '0.75rem', color: '#e57373' }}>Este campo es obligatorio</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '600', color: '#444' }}>Apellidos *</label>
            <input 
              type="text" 
              placeholder="Introduce tus apellidos" 
              className="input-field"
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              required
              style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}
            />
            <span style={{ fontSize: '0.75rem', color: '#e57373' }}>Este campo es obligatorio</span>
          </div>

          <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '600', color: '#444' }}>Correo electrónico *</label>
            <input 
              type="email" 
              placeholder="Introduce tu email" 
              className="input-field"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}
            />
            <span style={{ fontSize: '0.75rem', color: '#e57373' }}>Este campo es obligatorio</span>
          </div>

          <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '600', color: '#444' }}>Teléfono de contacto</label>
            <input 
              type="tel" 
              className="input-field"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}
            />
          </div>

          <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '600', color: '#444' }}>¿Dónde te gustaría cursar el GIM? *</label>
            <select 
              className="input-field"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
              required
              style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: '#fff', appearance: 'none' }}
            >
              <option value="">Selecciona una zona</option>
              {LOCATIONS.map(loc => <option key={loc} value={loc}>{loc}</option>)}
            </select>
            <span style={{ fontSize: '0.75rem', color: '#e57373' }}>Este campo es obligatorio</span>
          </div>

          <div style={{ gridColumn: 'span 2', display: 'flex', gap: '1rem', alignItems: 'flex-start', marginTop: '1rem' }}>
            <input 
              type="checkbox" 
              style={{ marginTop: '0.25rem' }}
              checked={formData.accepted}
              onChange={(e) => setFormData({...formData, accepted: e.target.checked})}
              required
            />
            <p style={{ fontSize: '0.8rem', color: '#e57373', lineHeight: 1.4, margin: 0 }}>
              Protección de Datos De conformidad con Reglamento General de Protección de Datos (RGPD 2016/679) y del resto de normativas vigentes de privacidad y protección de datos aplicables...
            </p>
          </div>

          <div style={{ gridColumn: 'span 2', textAlign: 'left', marginTop: '1rem' }}>
            <button type="submit" className="btn btn-primary" style={{ padding: '1rem 3rem', backgroundColor: '#771b1b', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: '700', fontSize: '1rem' }}>
              Solicitar Inscripción
            </button>
          </div>

        </form>

      </div>
    </section>
  );
}
