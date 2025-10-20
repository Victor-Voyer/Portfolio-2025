import React from 'react'
import { heroData } from '../data/hero'
import { HeroContent, HeroVisual, HeroScrollIndicator } from './hero/index.js'
import '../assets/styles/hero/Hero.css'
import '../assets/styles/hero/HeroTitle.css'
import '../assets/styles/hero/HeroButtons.css'
import '../assets/styles/hero/HeroSocialLinks.css'
import '../assets/styles/hero/HeroVisual.css'
import '../assets/styles/hero/HeroScrollIndicator.css'

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
