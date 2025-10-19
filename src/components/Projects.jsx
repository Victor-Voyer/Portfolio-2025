import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const projects = [
    {
      id: 1,
      title: 'Portfolio Personnel',
      description: 'Site web responsive créé avec React, Vite et Tailwind CSS. Design moderne et optimisé pour tous les appareils avec des animations fluides.',
      image: '🎨',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Application E-commerce',
      description: 'Application web complète avec authentification, gestion de produits et panier d\'achat. Interface utilisateur intuitive et responsive.',
      image: '🛒',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 3,
      title: 'Gestionnaire de Tâches',
      description: 'Application de gestion de tâches avec fonctionnalités de création, modification et suppression. Interface drag & drop moderne.',
      image: '✅',
      technologies: ['React', 'CSS3', 'LocalStorage', 'Drag & Drop'],
      github: '#',
      demo: '#',
      featured: false
    }
  ]

  return (
    <section id="projets" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-primary-400/10 to-accent-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-accent-400/10 to-primary-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Mes Projets</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez mes projets récents qui démontrent mes compétences en développement web
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -15 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.03,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className={`skill-card group relative overflow-hidden ${
                project.featured ? 'lg:col-span-2 xl:col-span-1 bg-gradient-to-br from-primary-50/50 to-accent-50/50 border-2 border-primary-200' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative mb-6">
                <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center text-6xl mb-4 group-hover:scale-105 transition-transform duration-300">
                  {project.image}
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4, delay: 0.8 + techIndex * 0.1 }}
                      className="px-3 py-1 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 rounded-full text-sm font-medium border border-primary-200"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:scale-105"
                  >
                    <ExternalLink size={16} />
                    Voir le projet
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                  >
                    <Github size={16} />
                    Code source
                  </a>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-card rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Intéressé par mon travail ?
            </h3>
            <p className="text-gray-600 mb-6">
              N'hésitez pas à explorer mes projets sur GitHub ou à me contacter pour discuter de nouvelles opportunités.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/Victor-Voyer"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Voir GitHub
              </a>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                Me contacter
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
