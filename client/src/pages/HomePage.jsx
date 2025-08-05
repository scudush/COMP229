import { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import { Typewriter } from 'react-simple-typewriter';
import './Home.css';

import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Services from './Services';

import resumeIcon from '../assets/resume-icon.png';
import profilePhoto from '../assets/my-photo.jpg';

// --- LOGIN MODAL ---
function LoginModal({ open, onClose, onSignupClick, onLoginSuccess }) {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  if (!open) return null;
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('https://portfolio-backend-hspu.onrender.com/api/users/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem('token', data.token);
      setMessage('Login successful!');
      setTimeout(() => {
        setForm({ username: '', password: '' });
        setMessage('');
        onLoginSuccess && onLoginSuccess(form.username);
        onClose();
      }, 1000);
    } else {
      setMessage(data.error);
    }
  };
  return (
    <div className="modal-overlay">
      <form className="modal-content" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input name="username" placeholder="Username" value={form.username} onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
        <button type="submit">Login</button>
        <button type="button" onClick={onClose}>Close</button>
        {message && <div style={{ marginTop: 10 }}>{message}</div>}
        <div style={{ marginTop: 15 }}>
          <span>Don't have an account? </span>
          <button type="button" style={{ color: "#646cff", background: "none", border: "none", cursor: "pointer", padding: 0 }} onClick={onSignupClick}>
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}

// --- SIGNUP MODAL ---
function SignupModal({ open, onClose, onLoginClick }) {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  if (!open) return null;
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('https://portfolio-backend-hspu.onrender.com/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    setMessage(data.message || data.error);
    if (data.message === "User created") {
      setTimeout(() => {
        setForm({ username: '', password: '' });
        setMessage('');
        onLoginClick();
      }, 1200);
    }
  };
  return (
    <div className="modal-overlay">
      <form className="modal-content" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input name="username" placeholder="Username" value={form.username} onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
        <button type="submit">Create Account</button>
        <button type="button" onClick={onClose}>Close</button>
        {message && <div style={{ marginTop: 10 }}>{message}</div>}
        <div style={{ marginTop: 15 }}>
          <span>Already have an account? </span>
          <button type="button" style={{ color: "#646cff", background: "none", border: "none", cursor: "pointer", padding: 0 }} onClick={onLoginClick}>
            Back to Login
          </button>
        </div>
      </form>
    </div>
  );
}

function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [username, setUsername] = useState('');

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const sections = ['home', 'projects', 'about', 'contact', 'services'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Box className="home-wrapper">
      {/* Sidebar */}
      <Box className="sidebar">
        <Box className="sidebar-top">
          <a href="#home" className="sidebar-logo">
            <img src="/COMP229/logo.png" alt="Logo" className="logo-img" />
          </a>

          <Box className="sidebar-nav">
            {['home', 'projects', 'about', 'contact', 'services'].map((section) => (
              <span
                key={section}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
                onClick={() => handleScrollTo(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
            ))}
          </Box>
          <Box sx={{ mt: 2 }}>
            {!username && (
              <Button
                variant="outlined"
                sx={{
                  width: "100%", mb: 1,
                  borderRadius: "9px",
                  color: "#646cff",
                  borderColor: "#646cff",
                  fontWeight: 700,
                  fontSize: "1rem",
                  letterSpacing: "0.01em",
                  "&:hover": {
                    background: "#646cff11",
                    borderColor: "#525cdb",
                    color: "#525cdb",
                  }
                }}
                onClick={() => setShowLogin(true)}
              >
                Login
              </Button>
            )}
            {username && (
              <div style={{ textAlign: "center", marginTop: 10 }}>
                Welcome, {username}
                <Button
                  variant="outlined"
                  sx={{
                    ml: 1,
                    borderRadius: "9px",
                    color: "#646cff",
                    borderColor: "#646cff",
                    fontWeight: 700,
                    fontSize: "1rem",
                    letterSpacing: "0.01em",
                    minWidth: "90px",
                    "&:hover": {
                      background: "#ffe4e7",
                      borderColor: "#d32f2f",
                      color: "#d32f2f",
                    }
                  }}
                  onClick={() => {
                    localStorage.removeItem('token');
                    setUsername('');
                  }}
                >
                  Logout
                </Button>
              </div>
            )}
          </Box>
        </Box>

        {/* Remove Resume Button from Sidebar Footer! */}
      </Box>

      {/* Floating Resume Button on right */}
      <Box
        sx={{
          position: "fixed",
          right: 32,
          bottom: 32,
          zIndex: 100,
        }}
      >
        <a
          href="/COMP229/resume.pdf"
          download="Scud Gabriel Pineda-Resume.pdf"
          style={{ textDecoration: 'none' }}
        >
          <Button
            variant="outlined"
            className="resume-link"
            startIcon={
              <img
                src={resumeIcon}
                alt="Resume"
                style={{ height: 20, width: 20 }}
              />
            }
          >
            RESUME
          </Button>
        </a>
      </Box>

      {/* Main Content */}
      <Box className="home-container">
        <div id="home" className="section home-intro">
          <div
            className="intro-content"
            style={{
              display: 'flex',
              gap: '3rem',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ flex: 1, minWidth: '280px' }}>
              <h1 className="intro-heading">Welcome to My Portfolio</h1>
              <h2 className="intro-subheading">Scud Gabriel Pineda</h2>

              <p
                className="intro-role"
                style={{
                  fontSize: '1.2rem',
                  marginBottom: '1.5rem',
                  color: '#555',
                  height: '30px',
                }}
              >
                <Typewriter
                  words={['Software Engineering Technician', 'Web Developer', 'Creative Thinker']}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </p>

              <p style={{ marginBottom: '1.5rem', maxWidth: '500px', color: '#444' }}>
                I'm a detail-oriented software engineering technician who loves building
                modern web applications and solving problems through clean and efficient code.
              </p>
              <button
                className="intro-btn"
                onClick={() =>
                  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
                }
              >
                View My Work
              </button>
            </div>

            {/* Profile Image */}
            <div style={{ flexShrink: 0 }}>
              <img
                src={profilePhoto}
                alt="Scud Gabriel Pineda"
                style={{
                  width: '220px',
                  height: '220px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
              />
            </div>
          </div>
        </div>

        <Projects />
        <About />
        <Contact />
        <Services />
      </Box>

      {/* Modals */}
      <LoginModal
        open={showLogin}
        onClose={() => setShowLogin(false)}
        onSignupClick={() => { setShowLogin(false); setShowSignup(true); }}
        onLoginSuccess={(name) => setUsername(name)}
      />
      <SignupModal
        open={showSignup}
        onClose={() => setShowSignup(false)}
        onLoginClick={() => { setShowSignup(false); setShowLogin(true); }}
      />
    </Box>
  );
}

export default Home;
