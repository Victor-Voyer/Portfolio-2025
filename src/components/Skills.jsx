import React from 'react'
import { allSkills } from '../data/skills'
import { SkillTitle, SkillCategory } from './skills/index.js'
import '../assets/styles/skills/index.css'

const Skills = () => {
  return (
    <section id="competences" className="skills-section">
      <div className="skills-container">
        <SkillTitle />
        <SkillCategory title="Mes Compétences" skills={allSkills} />
      </div>
    </section>
  )
}

export default Skills