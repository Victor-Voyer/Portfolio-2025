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
  const allSkills = [
    // Front-end
    { name: 'HTML', icon: htmlIcon, color: 'color-orange' },
    { name: 'CSS', icon: cssIcon, color: 'color-blue' },
    { name: 'JavaScript', icon: jsIcon, color: 'color-yellow' },
    { name: 'React', icon: reactIcon, color: 'color-cyan' },
    // Back-end
    { name: 'Node.js', icon: nodeIcon, color: 'color-green' },
    { name: 'PHP', icon: phpIcon, color: 'color-purple' },
    { name: 'Symfony', icon: symfonyIcon, color: 'color-gray' },
    { name: 'API', icon: apiIcon, color: 'color-blue' },
    { name: 'PostgreSQL', icon: postgresIcon, color: 'color-blue' },
    { name: 'MySQL', icon: mysqlIcon, color: 'color-blue' },
    // Outils
    { name: 'VS Code', icon: vscodeIcon, color: 'color-blue' },
    { name: 'Git', icon: gitIcon, color: 'color-gray' },
    { name: 'GitHub', icon: githubIcon, color: 'color-gray' },
    { name: 'Figma', icon: figmaIcon, color: 'color-purple' },
    { name: 'Tailwind', icon: tailwindIcon, color: 'color-cyan' }
  ]

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
    </div>
  )

  return (
    <section id="competences" className="skills-section">

      <div className="skills-container">
        <div className="skills-title-container skills-fade-in">
          <h2 className="skills-title">Mes Compétences</h2>
        </div>

        <div className="skills-category-card skills-fade-in skills-fade-in-delay-1">
          
          <div className="skills-items-container">
            {allSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills