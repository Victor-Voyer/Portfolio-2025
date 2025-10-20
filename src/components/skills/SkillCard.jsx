import React from 'react'

const SkillCard = ({ skill }) => (
  <div className="skill-card">
    <div className="skill-icon-container">
      <img 
        src={skill.icon} 
        alt={skill.name}
        className="skill-icon"
      />
      {skill.icon2 && (
        <img 
          src={skill.icon2} 
          alt={`${skill.name} second`}
          className="skill-icon skill-icon-second"
        />
      )}
    </div>
    <h3 className="skill-name">
      {skill.name}
    </h3>
  </div>
)

export default SkillCard
