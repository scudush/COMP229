import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('https://portfolio-backend-hspu.onrender.com/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('✅ Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await res.json();
        setStatus(`❌ ${data.error || 'Something went wrong'}`);
      }
    } catch (err) {
      setStatus('❌ Network error. Please try again later.');
    }
  };

  return (
    <div id="contact" className="section" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', borderRadius: '16px', padding: '2rem', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1c1c1c' }}>Contact Me</h2>
        <p style={{ marginBottom: '2rem', color: '#666' }}>
          Let’s get in touch! Feel free to send me a message.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              padding: '0.85rem 1rem',
              borderRadius: '10px',
              border: '1px solid #ccc',
              fontSize: '1rem',
              outline: 'none',
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              padding: '0.85rem 1rem',
              borderRadius: '10px',
              border: '1px solid #ccc',
              fontSize: '1rem',
              outline: 'none',
            }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            style={{
              padding: '0.85rem 1rem',
              borderRadius: '10px',
              border: '1px solid #ccc',
              fontSize: '1rem',
              resize: 'vertical',
              outline: 'none',
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: '#646cff',
              color: '#fff',
              fontWeight: 'bold',
              padding: '0.85rem',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 0.3s',
            }}
          >
            Send Message
          </button>
          {status && (
            <p
              style={{
                marginTop: '0.5rem',
                textAlign: 'center',
                color: status.startsWith('✅') ? 'green' : 'red',
              }}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
