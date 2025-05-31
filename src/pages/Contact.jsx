function Contact() {
  return (
    <div id="contact" className="section" style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#1c1c1c', marginBottom: '1rem' }}>Contact Me</h1>
      <p style={{ marginBottom: '2rem', color: '#555' }}>
        Got a question, idea, or opportunity? Feel free to reach out!
      </p>

      <form
        style={{
          maxWidth: '500px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
        onSubmit={(e) => {
          e.preventDefault();
          alert('Message sent!');
        }}
      >
        <input
          type="text"
          placeholder="First Name"
          required
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Last Name"
          required
          style={inputStyle}
        />
        <input
          type="tel"
          placeholder="Contact Number"
          required
          style={inputStyle}
        />
        <input
          type="email"
          placeholder="Email"
          required
          style={inputStyle}
        />
        <textarea
          placeholder="Your Message"
          required
          rows={5}
          style={{ ...inputStyle, resize: 'vertical' }}
        />
        <button type="submit" style={buttonStyle}>
          Send Message
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  padding: '0.8rem',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '1rem',
  fontFamily: 'inherit',
  outlineColor: 'coral',
};

const buttonStyle = {
  backgroundColor: 'coral',
  color: 'white',
  fontWeight: '600',
  padding: '0.75rem',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '1rem',
  transition: 'background 0.3s ease',
};

export default Contact;
