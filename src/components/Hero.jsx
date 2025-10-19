import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#apropos')
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
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="text-gray-100">Bonjour, je suis</span>
              <br />
              <span className="gradient-text">Victor Voyer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl text-blue-400 mb-4 font-medium"
            >
              Développeur - Intégrateur Web
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Motivé et adaptable, je suis passionné par l'intégration web et déterminé à créer des interfaces esthétiques et fonctionnelles. Toujours prêt à apprendre, je m'adapte rapidement aux évolutions technologiques.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
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
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/Victor-Voyer"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <Github className="w-6 h-6 text-gray-200" />
              </a>
              <a
                href="https://www.linkedin.com/in/victor-voyer"
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
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main Circle */}
              <div className="w-80 h-80 glass-card rounded-full flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-700/20 rounded-full"></div>
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white/20 shadow-2xl">
                    <img 
                      src="/src/assets/images/profile/jiraiya.jpg" 
                      alt="Victor Voyer" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold gradient-text">Victor Voyer</h3>
                  <p className="text-gray-700">Développeur Web</p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-to-br from-primary-300 to-primary-500 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={scrollToAbout}
          className="p-2 glass rounded-full hover:bg-white/20 transition-all duration-300 animate-bounce"
        >
          <ChevronDown className="w-6 h-6 text-gray-200" />
        </button>
      </motion.div>
    </section>
  )
}

export default Hero
