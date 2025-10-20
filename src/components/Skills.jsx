import React from 'react'
import { allSkills } from '../data/skills'
import { SkillTitle, SkillCategory } from './skills/index.js'
import '../styles/skills/Skills.css'
import '../styles/skills/SkillTitle.css'
import '../styles/skills/SkillCategory.css'
import '../styles/skills/SkillCard.css'

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