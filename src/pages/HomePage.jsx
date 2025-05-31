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

function Home() {
  const [activeSection, setActiveSection] = useState('home');

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
        </Box>

        {/* Resume Button */}
        <Box className="sidebar-footer">
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
    </Box>
  );
}

export default Home;
