import React from 'react'
import { allSkills } from '../data/skills'
import { SkillTitle, SkillCategory } from './skills/index.js'
import '../assets/styles/skills/Skills.css'
import '../assets/styles/skills/SkillTitle.css'
import '../assets/styles/skills/SkillCategory.css'
import '../assets/styles/skills/SkillCard.css'

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