import React from 'react'

const ProjectImage = ({ project }) => {
  return (
    <div className="project-image">
      <img src={project.image} alt={project.title} />
      {project.featured && (
        <div className="project-featured-badge">
          Featured
        </div>
      )}
    </div>
  )
}

export { ProjectImage }
