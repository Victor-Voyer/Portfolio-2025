import React from 'react'
import SkillCard from './SkillCard'

const SkillCategory = ({ title, skills }) => (
  <div className="skills-category-card skills-fade-in skills-fade-in-delay-1">
    <div className="skills-items-container">
      {skills.map((skill, index) => (
        <SkillCard key={index} skill={skill} />
      ))}
    </div>
  </div>
)

export default SkillCategory
