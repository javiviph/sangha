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

  const [showErrors, setShowErrors] = useState(false);
  const [showLegal, setShowLegal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.lastName || !formData.email || !formData.location || !formData.accepted) {
      setShowErrors(true);
      return;
    }
    console.log('Form submitted:', formData);
    // In a real app, send to API
  };

  const inputStyle = {
    width: '100%',
    padding: '1rem',
    border: '1px solid #eee',
    borderRadius: '4px',
    backgroundColor: '#fafafa',
    color: '#333',
    outline: 'none',
    transition: 'border-color 0.3s ease'
  };

  const labelStyle = { 
    fontSize: '0.875rem', 
    fontWeight: '600', 
    color: '#666',
    marginBottom: '0.25rem'
  };

  const errorStyle = { 
    fontSize: '0.75rem', 
    color: '#e57373',
    height: '1rem',
    marginTop: '0.25rem'
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

        <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '1.5rem 2rem' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={labelStyle}>Nombre *</label>
            <input 
              type="text" 
              placeholder="Introduce tu nombre" 
              className="input-field"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              style={inputStyle}
            />
            <span style={errorStyle}>{showErrors && !formData.name && 'Este campo es obligatorio'}</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={labelStyle}>Apellidos *</label>
            <input 
              type="text" 
              placeholder="Introduce tus apellidos" 
              className="input-field"
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              style={inputStyle}
            />
            <span style={errorStyle}>{showErrors && !formData.lastName && 'Este campo es obligatorio'}</span>
          </div>

          <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column' }}>
            <label style={labelStyle}>Correo electrónico *</label>
            <input 
              type="email" 
              placeholder="Introduce tu email" 
              className="input-field"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              style={inputStyle}
            />
            <span style={errorStyle}>{showErrors && !formData.email && 'Este campo es obligatorio'}</span>
          </div>

          <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column' }}>
            <label style={labelStyle}>Teléfono de contacto</label>
            <input 
              type="tel" 
              className="input-field"
              placeholder="Tu número de teléfono"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              style={inputStyle}
            />
            <div style={errorStyle} />
          </div>

          <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column' }}>
            <label style={labelStyle}>¿Dónde te gustaría cursar el GIM? *</label>
            <select 
              className="input-field"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
              style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
            >
              <option value="">Selecciona una zona</option>
              {LOCATIONS.map(loc => <option key={loc} value={loc}>{loc}</option>)}
            </select>
            <span style={errorStyle}>{showErrors && !formData.location && 'Este campo es obligatorio'}</span>
          </div>

          <div style={{ gridColumn: 'span 2', display: 'flex', gap: '1rem', alignItems: 'flex-start', marginTop: '0.5rem' }}>
            <input 
              type="checkbox" 
              style={{ marginTop: '0.35rem', cursor: 'pointer' }}
              checked={formData.accepted}
              onChange={(e) => setFormData({...formData, accepted: e.target.checked})}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.5, margin: 0 }}>
                Protección de Datos De conformidad con Reglamento General de Protección de Datos (RGPD 2016/679) y del resto de normativas vigentes... 
                <button 
                  type="button"
                  onClick={() => setShowLegal(!showLegal)}
                  style={{ background: 'none', border: 'none', color: 'var(--color-primary)', fontWeight: '700', cursor: 'pointer', padding: '0 0.5rem', fontSize: '0.85rem' }}
                >
                  {showLegal ? 'Ver menos' : 'Ver más'}
                </button>
              </p>
              
              {showLegal && (
                <p style={{ fontSize: '0.75rem', color: '#888', lineHeight: 1.4, margin: '0.5rem 0' }}>
                  le informamos que sus datos serán tratados con la finalidad de gestionar las actividades y, estatutos de la asociación, en base al cumplimento de nuestras obligaciones legales y a nuestro legítimo interés. Del mismo modo, si Ud. ha dado su consentimiento expreso en algún momento, sus datos serán tratados también con la finalidad de mantenerle informado de nuestras actividades. Le comunicamos que en ningún caso serán cedidos a terceros salvo que sea necesario para cumplir con las finalidades previstas, y que se conservarán por el tiempo que exista una relación o mientras existan obligaciones legales. Puede solicitar más información, o ejercer los derechos que le asisten frente al Responsable del Tratamiento: Associació Sangha Activa | CIF: G65817587 | Masía Ca L'Oller s/n, 08359 Sant Iscle de Vallalta (Bcn) | info@sanghaactiva.com Asimismo, también puede dirigirse ante la Autoridad de Protección de Datos Personales (www.aepd.es)
                </p>
              )}
              {showErrors && !formData.accepted && <span style={{ ...errorStyle, marginTop: 0 }}>Debes aceptar la política de privacidad</span>}
            </div>
          </div>

          <div style={{ gridColumn: 'span 2', textAlign: 'left', marginTop: '1rem' }}>
            <button type="submit" className="btn btn-primary" style={{ padding: '1rem 3.5rem', backgroundColor: '#771b1b', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: '700', fontSize: '1rem', cursor: 'pointer' }}>
              Solicitar Inscripción
            </button>
          </div>

        </form>

      </div>
    </section>
  );
}
