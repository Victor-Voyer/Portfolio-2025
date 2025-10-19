import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Parcours = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const parcoursData = [
    {
      id: 1,
      title: 'Formation Développeur Web',
      period: '2024',
      description: 'Formation complète en développement web full-stack JavaScript. Maîtrise des technologies modernes : React, Node.js, PHP/Symfony, bases de données.',
      icon: '🎓',
      tags: ['JavaScript', 'React', 'Node.js', 'PHP/Symfony'],
      isMain: true
    },
    {
      id: 2,
      title: 'Webmarketeur Junior',
      period: '2020-2021',
      description: 'Première expérience dans le digital avec la gestion de communication et social média.',
      icon: '📢',
      tags: ['Digital', 'Communication']
    },
    {
      id: 3,
      title: 'Assistant d\'Éducation',
      period: '2022-2023',
      description: 'Gestion de logiciels éducatifs (PRONOTE), relationnel avec les familles et accompagnement des élèves.',
      icon: '👥',
      tags: ['Logiciels', 'Relationnel']
    },
    {
      id: 4,
      title: 'Soft Skills Développées',
      period: 'Parcours',
      description: 'Adaptabilité, travail en équipe, résolution de problèmes et communication claire acquis au fil de mes expériences.',
      icon: '❤️',
      tags: ['Adaptabilité', 'Communication', 'Résolution']
    }
  ]

  return (
    <section id="parcours" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-br from-accent-400/10 to-primary-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-tr from-primary-400/10 to-accent-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Mon Parcours</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {parcoursData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.02,
                rotateY: 2,
                transition: { duration: 0.3 }
              }}
              className={`skill-card group relative overflow-hidden ${
                item.isMain ? 'md:col-span-2 bg-gradient-to-br from-primary-50/50 to-accent-50/50 border-2 border-primary-200' : ''
              }`}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-4 rounded-2xl text-3xl ${
                  item.isMain 
                    ? 'bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-lg' 
                    : 'bg-gradient-to-br from-primary-100 to-accent-100 text-primary-600'
                }`}>
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <div className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
                    {item.period}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: 0.8 + tagIndex * 0.1 }}
                    className="px-3 py-1 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 rounded-full text-sm font-medium border border-primary-200 group-hover:from-primary-500 group-hover:to-accent-500 group-hover:text-white transition-all duration-300"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Timeline Visual */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 relative"
        >
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-300 to-transparent"></div>
          <div className="flex justify-center">
            <div className="w-4 h-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Parcours
