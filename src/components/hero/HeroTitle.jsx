import React from 'react'

const HeroTitle = ({ greeting, name, title, description }) => (
  <>
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 hero-title-animate">
      <p className="text-gray-100 mb-4">{greeting}</p>
      <p className="gradient-text victor-name">{name}</p>
    </h1>

    <p className="text-2xl md:text-3xl text-blue-400 mb-4 font-medium hero-subtitle-animate">
      {title}
    </p>

    <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed hero-description-animate">
      {description}
    </p>
  </>
)

export default HeroTitle
