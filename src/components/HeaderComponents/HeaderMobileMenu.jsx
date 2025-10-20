import React from 'react'
import { Menu, X } from 'lucide-react'

const HeaderMobileMenu = ({ isMenuOpen, setIsMenuOpen, navItems, scrollToSection }) => {
  return (
    <>
      {/* Bouton du menu mobile */}
      <div className="header-mobile-button">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="header-mobile-toggle"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile dropdown */}
      {isMenuOpen && (
        <div className="header-mobile-dropdown">
          <div className="header-mobile-items">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="header-mobile-item"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default HeaderMobileMenu
