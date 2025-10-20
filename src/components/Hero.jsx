import React from 'react'
import { heroData } from '../data/hero'
import { HeroContent, HeroVisual, HeroScrollIndicator } from './hero/index.js'
import '../assets/styles/hero/index.css'

const Hero = () => {
  return (
    <section id="accueil" className="hero-section">
      {/* Background Effects */}
      <div className="hero-background-effects">
        <div className="hero-background-blob"></div>
      </div>

      <div className="hero-container">
        <div className="hero-grid">
          <HeroContent data={heroData} />
          <HeroVisual 
            avatar={heroData.avatar}
            name={heroData.name}
            title="Développeur Web"
          />
        </div>
      </div>

      <HeroScrollIndicator target={heroData.scrollTarget} />
    </section>
  )
}

export default Hero
