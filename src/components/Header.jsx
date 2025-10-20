import React, { useState } from 'react'
import { useScroll } from '../hooks'
import { HeaderLogo, HeaderNavigation, HeaderMobileMenu } from './HeaderComponents'
import '../assets/styles/header/index.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const scrolled = useScroll(50)

  const navItems = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Compétences', href: '#competences' },
    { name: 'Projets', href: '#projets' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : 'transparent'}`}>
      <div className="header-container">
        <div className="header-content">
          <HeaderLogo />
          <HeaderNavigation navItems={navItems} scrollToSection={scrollToSection} />
          <HeaderMobileMenu 
            isMenuOpen={isMenuOpen} 
            setIsMenuOpen={setIsMenuOpen}
            navItems={navItems} 
            scrollToSection={scrollToSection} 
          />
        </div>
      </div>
    </header>
  )
}

export default Header
