import React from 'react'
import { ProjectLinks } from './ProjectLinks'

const ProjectContent = ({ project }) => {
  return (
    <div className="project-content">
      <h3 className="project-title">
        {project.title}
      </h3>
      
      <p className="project-description">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="project-technologies">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="tech-tag"
          >
            {tech}
          </span>
        ))}
      </div>

      <ProjectLinks project={project} />
    </div>
  )
}

export { ProjectContent }
