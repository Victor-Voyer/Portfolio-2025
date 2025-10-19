import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const skills = {
    frontend: [
      { name: 'HTML/CSS', icon: '🌐', color: 'from-orange-500 to-red-500' },
      { name: 'JavaScript', icon: '⚡', color: 'from-yellow-400 to-yellow-600' },
      { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-500' }
    ],
    backend: [
      { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-green-600' },
      { name: 'PHP', icon: '🐘', color: 'from-purple-500 to-purple-600' },
      { name: 'Symfony', icon: '🍃', color: 'from-gray-700 to-gray-900' },
      { name: 'API', icon: '🔌', color: 'from-blue-500 to-blue-600' },
      { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-600 to-blue-800' },
      { name: 'MySQL', icon: '🗄️', color: 'from-blue-500 to-blue-700' }
    ],
    tools: [
      { name: 'VS Code', icon: '💻', color: 'from-blue-500 to-blue-600' },
      { name: 'Git/GitHub', icon: '📚', color: 'from-gray-700 to-gray-900' },
      { name: 'Postman', icon: '🚀', color: 'from-orange-500 to-orange-600' },
      { name: 'Figma', icon: '🎨', color: 'from-purple-500 to-pink-500' },
      { name: 'Photoshop', icon: '🖼️', color: 'from-blue-400 to-purple-500' }
    ]
  }

  const SkillCard = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -15 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      className="skill-card group relative overflow-hidden"
    >
      <div className="text-center">
        <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {skill.icon}
        </div>
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
          {skill.name}
        </h3>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
    </motion.div>
  )

  return (
    <section id="competences" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-400/10 to-accent-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tr from-accent-400/10 to-primary-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Compétences</h2>
        </motion.div>

        <div className="space-y-16">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
                <span>🎨</span>
                Front-end
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skills.frontend.map((skill, index) => (
                  <SkillCard key={index} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
                <span>⚙️</span>
                Back-end
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.backend.map((skill, index) => (
                  <SkillCard key={index + 3} skill={skill} index={index + 3} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
                <span>🛠️</span>
                Outils
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.tools.map((skill, index) => (
                  <SkillCard key={index + 9} skill={skill} index={index + 9} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
