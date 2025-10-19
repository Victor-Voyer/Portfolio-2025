import React from 'react'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
import '../styles/Hero.css'

const Hero = () => {
  const scrollToSkills = () => {
    const element = document.querySelector('#competences')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-full blur-3xl animate-float"></div>
        
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left hero-content-fade-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 hero-title-animate">
                <p className="text-gray-100 mb-4">Bonjour, je suis</p>
                <p className="gradient-text victor-name">Victor Voyer</p>
              </h1>

            <p className="text-2xl md:text-3xl text-blue-400 mb-4 font-medium hero-subtitle-animate">
              Développeur FullStack Junior
            </p>

            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed hero-description-animate">
              Développeur FullStack Junior, je maîtrise les technologies front-end et back-end pour créer des applications web complètes. Curieux et déterminé, je cherche constamment à perfectionner mes compétences et à contribuer à des projets innovants qui font la différence.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 hero-buttons-animate">
              <button
                onClick={() => document.querySelector('#projets')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Voir mes projets
              </button>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                Me contacter
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start hero-social-animate">
              <a
                href="https://github.com/Victor-Voyer"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <Github className="w-6 h-6 text-gray-200" />
              </a>
              <a
                href="https://www.linkedin.com/in/victor-voyer/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-6 h-6 text-gray-200" />
              </a>
              <a
                href="mailto:victor.voyer@outlook.fr"
                className="p-3 glass rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="w-6 h-6 text-gray-200" />
              </a>
            </div>
          </div>

          {/* Visual Element */}
          <div className="flex justify-center lg:justify-end hero-visual-fade-right">
            <div className="relative">
              {/* Main Circle */}
              <div className="w-80 h-80 rounded-full flex items-center justify-center relative overflow-hidden border border-white/20 shadow-2xl">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src="/src/assets/images/profile/avatar.png" 
                    alt="Victor Voyer" 
                    className="w-full h-full object-cover object-center object-top"
                  />
                </div>
                
                {/* Gradient Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 rounded-full"></div>
                
                {/* Text Content */}
                <div className="relative z-10 text-center mt-40">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">Victor Voyer</h3>
                  <p className="text-gray-200 drop-shadow-md">Développeur Web</p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-to-br from-primary-300 to-primary-500 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hero-scroll-animate">
        <button
          onClick={scrollToSkills}
          className="p-2 glass rounded-full hover:bg-white/20 transition-all duration-300 animate-bounce"
        >
          <ChevronDown className="w-6 h-6 text-gray-200" />
        </button>
      </div>
    </section>
  )
}

export default Hero
