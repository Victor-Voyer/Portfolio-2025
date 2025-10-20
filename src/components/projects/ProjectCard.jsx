import React from 'react'
import { ProjectImage } from './ProjectImage'
import { ProjectContent } from './ProjectContent'

const ProjectCard = ({ project }) => {
  return (
    <div className={`project-card group ${project.featured ? 'featured' : ''}`}>
      <ProjectImage project={project} />
      <ProjectContent project={project} />
    </div>
  )
}

export { ProjectCard }
