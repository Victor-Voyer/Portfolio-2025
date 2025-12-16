import React from 'react'

const HeroTitle = ({ greeting, name, title, description }) => (
  <>
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 hero-title-animate">
      <p className="text-gray-100 mb-2 sm:mb-4">{greeting}</p>
      <p className="gradient-text victor-name">{name}</p>
    </h1>

    <p className="text-xl sm:text-2xl md:text-3xl text-blue-400 mb-3 sm:mb-4 font-medium hero-subtitle-animate">
      {title}
    </p>

    <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0 hero-description-animate">
      {description}
    </p>
  </>
)

export default HeroTitle
