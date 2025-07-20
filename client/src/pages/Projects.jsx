import { useEffect, useState } from 'react';
import checklistIcon from '../assets/project-icons/checklist-icon.png';
import booksIcon from '../assets/project-icons/books-icon.png';
import shoppingIcon from '../assets/project-icons/shopping-icon.png';
import developerIcon from '../assets/project-icons/developer-icon.png';
import dumbbellIcon from '../assets/project-icons/dumbbell-icon.png';
import graduationIcon from '../assets/project-icons/graduation-icon.png';

const iconMap = {
  TaskNest: checklistIcon,
  BookBuddy: booksIcon,
  QuickCart: shoppingIcon,
  DevConnect: developerIcon,
  FitTrackr: dumbbellIcon,
  'EduHub LMS': graduationIcon,
};

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://portfolio-backend-hspu.onrender.com/api/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error('Error fetching projects:', err));
  }, []);

  return (
    <div id="projects" className="section" style={{ paddingTop: '4rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#1c1c1c' }}>My Projects</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          width: '100%',
          padding: '0 1rem',
        }}
      >
        {projects.map((project, index) => (
          <div
            key={project._id || index}
            style={{
              border: '1px solid #eaeaea',
              borderRadius: '12px',
              padding: '1.5rem',
              backgroundColor: '#fff',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <img
              src={iconMap[project.title] || checklistIcon}
              alt={`${project.title} icon`}
              style={{ width: 40, height: 40, marginBottom: '1rem' }}
            />
            <h3 style={{ marginBottom: '0.75rem', color: '#1c1c1c' }}>{project.title}</h3>
            <p style={{ marginBottom: '0.5rem', color: '#444' }}>{project.description}</p>
            <p style={{ fontSize: '0.9rem', marginBottom: '0.75rem' }}>
              <strong>Tech Stack:</strong>{' '}
              {Array.isArray(project.technologies)
                ? project.technologies.join(', ')
                : project.technologies}
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#646cff', fontWeight: '500' }}
              >
                GitHub
              </a>
              <a
                href={project.liveDemoLink || '#'}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'coral', fontWeight: '500' }}
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
