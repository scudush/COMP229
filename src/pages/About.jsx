import profilePic from '../assets/my-photo.jpg';

function About() {
  return (
    <div id="about" className="section">
      <h1>About Me</h1>
      <p style={{ maxWidth: '700px', marginBottom: '2rem' }}>
        Hello! I'm <strong>Scud Gabriel Pineda</strong>, a passionate and detail-oriented Software Engineering Technician
        based in Canada. With a strong foundation in modern web development, I enjoy building clean, responsive, and efficient
        applications that solve real-world problems. Whether it’s front-end design or back-end logic, I aim to craft seamless digital
        experiences through code.
        <br /><br />
        I’m currently expanding my expertise in full-stack development, cloud services, and database management, while pursuing opportunities
        to contribute to impactful projects. Beyond coding, I value continuous learning, teamwork, and using technology as a tool for positive change.
      </p>
      <img
        src={profilePic}
        alt="Scud Gabriel Pineda"
        width="200"
        style={{ borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
      />
    </div>
  );
}

export default About;
