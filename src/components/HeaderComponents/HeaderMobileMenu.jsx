import React from 'react'
import { Menu, X } from 'lucide-react'

const HeaderMobileMenu = ({ isMenuOpen, setIsMenuOpen, navItems, scrollToSection }) => {
  const handleItemClick = (href) => {
    scrollToSection(href)
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Bouton du menu mobile */}
      <div className="header-mobile-button">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="header-mobile-toggle"
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile dropdown */}
      {isMenuOpen && (
        <>
          {/* Overlay pour fermer le menu en cliquant à l'extérieur */}
          <div 
            className="header-mobile-overlay"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="header-mobile-dropdown">
            <div className="header-mobile-items">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleItemClick(item.href)}
                  className="header-mobile-item"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default HeaderMobileMenu
