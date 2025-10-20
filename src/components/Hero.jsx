import React from 'react'
import { heroData } from '../data/hero'
import { HeroContent, HeroVisual, HeroScrollIndicator } from './hero/index.js'
import '../styles/hero/Hero.css'
import '../styles/hero/HeroTitle.css'
import '../styles/hero/HeroButtons.css'
import '../styles/hero/HeroSocialLinks.css'
import '../styles/hero/HeroVisual.css'
import '../styles/hero/HeroScrollIndicator.css'

const Hero = () => {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
