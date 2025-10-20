import React from 'react'

const HeroButtons = ({ buttons }) => (
  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 hero-buttons-animate">
    {buttons.map((button, index) => (
      <button
        key={index}
        onClick={() => document.querySelector(button.target)?.scrollIntoView({ behavior: 'smooth' })}
        className={`btn-${button.type}`}
      >
        {button.text}
      </button>
    ))}
  </div>
)

export default HeroButtons
