import React from 'react'
import { motion } from 'framer-motion'

const FooterNavigation = () => {
  const navigationLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'À propos', href: '#apropos' },
    { name: 'Compétences', href: '#competences' },
    { name: 'Parcours', href: '#parcours' },
    { name: 'Projets', href: '#projets' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="footer-navigation"
    >
      <h3 className="footer-navigation-title">Navigation</h3>
      <ul className="footer-navigation-links">
        {navigationLinks.map((link) => (
          <li key={link.name}>
            <button
              onClick={() => scrollToSection(link.href)}
              className="footer-navigation-link"
            >
              {link.name}
            </button>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default FooterNavigation
