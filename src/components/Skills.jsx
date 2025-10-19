import React from 'react'
import '../styles/Skills.css'

// Imports des images
import htmlIcon from '../assets/images/icons/HTML.png'
import cssIcon from '../assets/images/icons/CSS.png'
import jsIcon from '../assets/images/icons/JS.png'
import reactIcon from '../assets/images/icons/React.png'
import nodeIcon from '../assets/images/icons/NodeJS.png'
import phpIcon from '../assets/images/icons/PHP.png'
import symfonyIcon from '../assets/images/icons/Symfony.png'
import apiIcon from '../assets/images/icons/API.png'
import postgresIcon from '../assets/images/icons/PostgreSQL.png'
import mysqlIcon from '../assets/images/icons/MySQL.png'
import vscodeIcon from '../assets/images/icons/Visual-Studio-Code.png'
import githubIcon from '../assets/images/icons/Github.png'
import gitIcon from '../assets/images/icons/Git.png'
import figmaIcon from '../assets/images/icons/Figma.png'
import tailwindIcon from '../assets/images/icons/Tailwind.png'

const Skills = () => {
  const skills = {
    frontend: [
      { name: 'HTML', icon: htmlIcon, color: 'color-orange' },
      { name: 'CSS', icon: cssIcon, color: 'color-blue' },
      { name: 'JavaScript', icon: jsIcon, color: 'color-yellow' },
      { name: 'React', icon: reactIcon, color: 'color-cyan' }
    ],
    backend: [
      { name: 'Node.js', icon: nodeIcon, color: 'color-green' },
      { name: 'PHP', icon: phpIcon, color: 'color-purple' },
      { name: 'Symfony', icon: symfonyIcon, color: 'color-gray' },
      { name: 'API', icon: apiIcon, color: 'color-blue' },
      { name: 'PostgreSQL', icon: postgresIcon, color: 'color-blue' },
      { name: 'MySQL', icon: mysqlIcon, color: 'color-blue' }
    ],
    tools: [
      { name: 'VS Code', icon: vscodeIcon, color: 'color-blue' },
      { name: 'Git', icon: gitIcon, color: 'color-gray' },
      { name: 'GitHub', icon: githubIcon, color: 'color-gray' },
      { name: 'Figma', icon: figmaIcon, color: 'color-purple' },
      { name: 'Tailwind', icon: tailwindIcon, color: 'color-cyan' }
    ]
  }

  const SkillCard = ({ skill }) => (
    <div className="skill-card">
      <div className="skill-icon-container">
        <img 
          src={skill.icon} 
          alt={skill.name}
          className="skill-icon"
        />
      </div>
      <h3 className="skill-name">
        {skill.name}
      </h3>

      {/* Effet de survol */}
      <div className="skill-hover-effect" />
    </div>
  )

  return (
    <section id="competences" className="skills-section">
      {/* Effets de fond */}
      <div className="skills-background-effects">
        <div className="skills-background-blob-1" />
        <div className="skills-background-blob-2" />
      </div>

      <div className="skills-container">
        <div className="skills-title-container skills-fade-in">
          <h2 className="skills-title">Mes Compétences</h2>
        </div>

        <div className="skills-grid">
          {/* Frontend */}
          <div className="skills-category-card skills-fade-in skills-fade-in-delay-1">
            <h3 className="skills-category-title">
              <span>🎨</span>
              Front-end
            </h3>
            <div className="skills-items-grid">
              {skills.frontend.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="skills-category-card skills-fade-in skills-fade-in-delay-2">
            <h3 className="skills-category-title">
              <span>⚙️</span>
              Back-end
            </h3>
            <div className="skills-items-grid">
              {skills.backend.map((skill, index) => (
                <SkillCard key={index + 4} skill={skill} />
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="skills-category-card skills-fade-in skills-fade-in-delay-3">
            <h3 className="skills-category-title">
              <span>🛠️</span>
              Outils
            </h3>
            <div className="skills-items-grid">
              {skills.tools.map((skill, index) => (
                <SkillCard key={index + 10} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills