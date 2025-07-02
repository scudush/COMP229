import myPhoto from '../assets/my-photo.jpg';

function About() {
  return (
    <div id="about" className="section" style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#1c1c1c', marginBottom: '1rem' }}>About Me</h1>

      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          padding: '1rem',
        }}
      >
        <p style={{ color: '#444', fontSize: '1rem', lineHeight: '1.8', textAlign: 'justify' }}>
          Hello! I'm <strong>Scud Gabriel Pineda</strong>, a passionate and detail-oriented Software Engineering Technician
          based in Canada. With a strong foundation in modern web development, I enjoy building clean, responsive, and efficient
          applications that solve real-world problems. Whether it’s front-end design or back-end logic, I aim to craft seamless digital
          experiences through code.
          <br /><br />
          I’m currently expanding my expertise in full-stack development, cloud services, and database management, while pursuing opportunities
          to contribute to impactful projects. Beyond coding, I value continuous learning, teamwork, and using technology as a tool for positive change.
        </p>

        <img
          src={myPhoto}
          alt="Scud Gabriel Pineda"
          width="200"
          style={{ borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
        />
      </div>
    </div>
  );
}

export default About;
