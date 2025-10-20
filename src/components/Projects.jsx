import React from 'react'
import { ExternalLink, Github } from 'lucide-react'
import portfolioImage from '../assets/images/projects/portfolio.png'
import '../styles/Projects.css'

const Projects = () => {


  const projects = [
    {
      id: 1,
      title: 'Portfolio Personnel',
      description: 'Site web responsive créé avec React, Vite et Tailwind CSS. Design moderne et optimisé pour tous les appareils avec des animations fluides.',
      image: portfolioImage,
      technologies: ['React', 'Vite', 'Tailwind CSS'],
      github: 'https://github.com/Victor-Voyer/Portfolio-2025',
      demo: '#',
      featured: false
    },  
    {
      id: 2,
      title: 'BT Crack',
      description: '',
      image: '',
      technologies: ['Symfony', 'Javascript', 'Twig'],
      github: '#',
      demo: '#',
      featured: false
    },  
    {
      id: 3,
      title: 'BT Crack',
      description: '',
      image: '',
      technologies: ['Symfony', 'Javascript', 'Twig'],
      github: '#',
      demo: '#',
      featured: false
    },    
  ]

  return (
    <section id="projets" className="projects-section">
      {/* Background Effects */}
      <div className="projects-bg-effects">
        <div className="projects-bg-circle-1"></div>
        <div className="projects-bg-circle-2"></div>
      </div>

      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">Mes Projets</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez mes projets récents qui démontrent mes compétences en développement web
          </p>
        </div>

        <div className="projects-flex-container">
          <div className="projects-flex">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card group ${project.featured ? 'featured' : ''}`}
            >
              {/* Hover Effect */}
              <div className="project-hover-overlay" />
              {/* Project Image */}
              <div className="project-image-container">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                {project.featured && (
                  <div className="project-featured-badge">
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="project-content">
                <h3 className="project-title">
                  {project.title}
                </h3>
                
                <p className="project-description">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="tech-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="project-links">
                  <a
                    href={project.demo}
                    className="project-link primary"
                  >
                    <ExternalLink size={16} />
                    Voir le projet
                  </a>
                  <a
                    href={project.github}
                    className="project-link secondary"
                  >
                    <Github size={16} />
                    Code source
                  </a>
                </div>
              </div>

              
            </div>
          ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="projects-cta">
          <div className="cta-card">
            <h3 className="cta-title">
              Intéressé par mon travail ?
            </h3>
            <p className="cta-description">
              N'hésitez pas à explorer mes projets sur GitHub ou à me contacter pour discuter de nouvelles opportunités.
            </p>
            <div className="cta-buttons">
              <a
                href="https://github.com/Victor-Voyer"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Voir GitHub
              </a>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                Me contacter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
