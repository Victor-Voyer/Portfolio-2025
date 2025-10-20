import React from 'react'

const HeaderNavigation = ({ navItems, scrollToSection }) => {
  return (
    <nav className="header-navigation">
      <div className="header-navigation-items">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => scrollToSection(item.href)}
            className="header-nav-item"
          >
            {item.name}
            <span className="header-nav-underline"></span>
          </button>
        ))}
      </div>
    </nav>
  )
}

export default HeaderNavigation
