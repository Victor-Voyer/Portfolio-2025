import React from 'react'

const ProjectCallToAction = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
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
            onClick={scrollToContact}
            className="btn-secondary"
          >
            Me contacter
          </button>
        </div>
      </div>
    </div>
  )
}

export { ProjectCallToAction }
