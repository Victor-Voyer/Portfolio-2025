import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const stats = [
    { number: '2024', label: 'Formation Développeur Web' },
    { number: 'Mérignac', label: 'Localisation' },
    { number: 'Full-Stack', label: 'Spécialisation' }
  ]

  return (
    <section id="apropos" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">À propos de moi</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Mon parcours</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Développeur web junior passionné, je me spécialise dans l'intégration et le développement d'interfaces utilisateur modernes. Ma formation en développement web full-stack JavaScript me permet d'aborder les projets avec une vision complète du développement web.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Mon parcours diversifié dans le relationnel client et l'organisation d'événements m'a permis de développer des compétences transversales essentielles : l'empathie, la communication claire, et le travail en équipe. Ces soft-skills complètent parfaitement mes compétences techniques.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-gradient-to-r from-primary-100 to-primary-200 text-primary-700 rounded-full text-sm font-medium">
                  Passionné
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-accent-100 to-accent-200 text-accent-700 rounded-full text-sm font-medium">
                  Adaptable
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-primary-100 to-primary-200 text-primary-700 rounded-full text-sm font-medium">
                  Créatif
                </span>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="skill-card"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default About
