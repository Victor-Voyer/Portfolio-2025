import React from 'react'
import logoImage from '../../assets/images/logo.png'

const HeaderLogo = () => {
  return (
    <div className="header-logo">
      <div className="header-logo-text">
        <img src={logoImage} alt="Logo" className="header-logo-image" />
      </div>
    </div>
  )
}

export default HeaderLogo
