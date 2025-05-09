import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
      technologies: ['Python', 'Django', 'sq-Lite', "Html","Css","javascript","Bootstrap"],
      githubUrl: 'https://github.com/Sanskar2301/E-Commerce'
    },
    {
      id: 2,
      title: 'Whatsapp Chat Analyzer',
      description: 'A WhatsApp Chat Analyzer processes and visualizes chat data to provide insights on message frequency, sentiment, key topics, and user engagement patterns.',
      technologies: ['Python', "pandas", 'Matplotlib', 'WordCloud', 'Streamlit','numpy',"Scikit-learn"],
      githubUrl: 'https://github.com/Sanskar2301/whatsapp-chat-analysis'
    },
    {
      id: 3,
      title: 'Stock market predicition',
      description: 'A Stock Market Prediction tool uses historical data, statistical models, and machine learning algorithms to forecast future stock prices and trends, helping investors make informed decisions',
      technologies: ['Python', "pandas", "Matplotlib", "Tensorflow", "streamlit","numpy","Scikit-learn"],
      githubUrl: 'https://github.com/Sanskar2301/Stock-Market-Prediction'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a 
                href={project.githubUrl} 
                className="github-link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View on GitHub
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="github-icon"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 