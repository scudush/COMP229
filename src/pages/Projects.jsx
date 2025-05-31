import checklistIcon from '../assets/project-icons/checklist-icon.png';
import booksIcon from '../assets/project-icons/books-icon.png';
import shoppingIcon from '../assets/project-icons/shopping-icon.png';
import developerIcon from '../assets/project-icons/developer-icon.png';
import dumbbellIcon from '../assets/project-icons/dumbbell-icon.png';
import graduationIcon from '../assets/project-icons/graduation-icon.png';

function Projects() {
  const projectList = [
    {
      title: "TaskNest",
      icon: checklistIcon,
      description: "A productivity app that helps users manage daily tasks with intelligent reminders and goal tracking.",
      techStack: ["React", "Node.js", "MongoDB", "TailwindCSS"],
      github: "https://github.com/scudush/COMP229",
      demo: "#"
    },
    {
      title: "BookBuddy",
      icon: booksIcon,
      description: "An online platform for book lovers to track reading progress, review books, and connect with fellow readers.",
      techStack: ["Vue", "Firebase", "Bootstrap"],
      github: "https://github.com/scudush/COMP229",
      demo: "#"
    },
    {
      title: "QuickCart",
      icon: shoppingIcon,
      description: "E-commerce web application with real-time inventory, cart management, and Stripe payment integration.",
      techStack: ["Next.js", "Express", "PostgreSQL"],
      github: "https://github.com/scudush/COMP229",
      demo: "#"
    },
    {
      title: "DevConnect",
      icon: developerIcon,
      description: "A social networking platform tailored for developers to share projects and collaborate on code.",
      techStack: ["React", "GraphQL", "Apollo", "Node.js"],
      github: "https://github.com/scudush/COMP229",
      demo: "#"
    },
    {
      title: "FitTrackr",
      icon: dumbbellIcon,
      description: "A fitness and nutrition tracking app with personalized recommendations and goal analysis.",
      techStack: ["Flutter", "Firebase", "Google Fit API"],
      github: "https://github.com/scudush/COMP229",
      demo: "#"
    },
    {
      title: "EduHub LMS",
      icon: graduationIcon,
      description: "A learning management system for educators to create courses, quizzes, and track student progress.",
      techStack: ["Django", "React", "MySQL"],
      github: "https://github.com/scudush/COMP229",
      demo: "#"
    }
  ];

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
          padding: '0 1rem'
        }}
      >
        {projectList.map((project, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #eaeaea',
              borderRadius: '12px',
              padding: '1.5rem',
              backgroundColor: '#fff',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-5px)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <img src={project.icon} alt={`${project.title} icon`} style={{ width: 40, height: 40, marginBottom: '1rem' }} />
            <h3 style={{ marginBottom: '0.75rem', color: '#1c1c1c' }}>{project.title}</h3>
            <p style={{ marginBottom: '0.5rem', color: '#444' }}>{project.description}</p>
            <p style={{ fontSize: '0.9rem', marginBottom: '0.75rem' }}>
              <strong>Tech Stack:</strong> {project.techStack.join(', ')}
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#646cff', fontWeight: '500' }}
              >
                GitHub
              </a>
              <a
                href={project.demo}
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
