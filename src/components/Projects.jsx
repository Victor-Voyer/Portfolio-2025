import React from 'react'
import { ProjectCard, ProjectCallToAction } from './projects/index'
import { projects } from '../data/projects'
import '../styles/projects/Projects.css'

const Projects = () => {
  return (
    <section id="projets" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">Mes Projets</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez mes projets récents qui démontrent mes compétences en développement web
          </p>
        </div>

        <div className="projects-flex">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <ProjectCallToAction />
      </div>
    </section>
  )
}

export default Projects
