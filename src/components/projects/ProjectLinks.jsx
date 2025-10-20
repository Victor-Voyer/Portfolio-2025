import React from 'react'
import { ExternalLink, Github } from 'lucide-react'

const ProjectLink = ({ href, type, icon, text, target = '_blank', rel = 'noopener noreferrer' }) => {
  return (
    <a
      href={href}
      className={`project-link ${type}`}
      target={target}
      rel={rel}
    >
      {icon}
      {text}
    </a>
  )
}

const ProjectLinks = ({ project }) => {
  return (
    <div className="project-links">
      <ProjectLink 
        href={project.demo} 
        type="primary" 
        icon={<ExternalLink size={16} />}
        text="Voir le projet"
      />
      <ProjectLink 
        href={project.github} 
        type="secondary" 
        icon={<Github size={16} />}
        text="Code source"
      />
    </div>
  )
}

export { ProjectLinks, ProjectLink }
