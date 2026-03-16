import React, { useState } from 'react';
import '../index.css';

export default function CaptureForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    accepted: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real app, send to API
  };

  return (
    <section id="contacto" className="surface-default section">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)', alignItems: 'center', maxWidth: '700px' }}>
        
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
          <h2 className="headline-md">Da el primer paso</h2>
          <p className="body-lg" style={{ color: 'var(--color-on-surface-variant)' }}>
            Déjanos tus datos para recibir más información, resolver cualquier duda y confirmar si este programa es para ti. Sin compromiso.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
          
          <input 
            type="text" 
            placeholder="Nombre y apellidos" 
            className="input-field"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
          
          <input 
            type="email" 
            placeholder="Email" 
            className="input-field"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />

          <input 
            type="tel" 
            placeholder="Teléfono (Opcional)" 
            className="input-field"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />

          <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>
            Quiero recibir información
          </button>

          <label style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', cursor: 'pointer', marginTop: '0.5rem' }}>
            <input 
              type="checkbox" 
              style={{ marginTop: '0.25rem' }}
              checked={formData.accepted}
              onChange={(e) => setFormData({...formData, accepted: e.target.checked})}
              required
            />
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'var(--color-on-surface-variant)' }}>
              He leído y acepto la política de privacidad.
            </span>
          </label>

        </form>

      </div>
    </section>
  );
}
