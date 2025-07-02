function Services() {
  const services = [
    {
      title: 'Web Application Development',
      description:
        'Building fast, responsive, and scalable web applications using React, Node.js, and modern development tools.',
    },
    {
      title: 'Database Design & Optimization',
      description:
        'Designing efficient database schemas and writing optimized SQL queries to support application performance.',
    },
    {
      title: 'Quality Assurance & Testing',
      description:
        'Creating test cases, conducting manual testing, and ensuring functionality through bug tracking and validation.',
    },
    {
      title: 'UI/UX Prototyping',
      description:
        'Designing clean and functional interfaces using wireframes, mockups, and modern design principles.',
    },
  ];

  return (
    <div id="services" className="section" style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#1c1c1c' }}>My Services</h1>
      <p style={{ marginBottom: '2rem', color: '#555' }}>
        Here are some ways I can contribute to your project or team.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 1rem',
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#fff',
              border: '1px solid #eee',
              borderRadius: '12px',
              padding: '1.5rem',
              boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
              textAlign: 'left',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <h3 style={{ color: 'coral', marginBottom: '0.5rem' }}>{service.title}</h3>
            <p style={{ color: '#444' }}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
