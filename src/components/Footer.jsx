import React from 'react'
import { FooterBrand, FooterNavigation, FooterContact, FooterBottom } from './FooterComponents'
import '../assets/styles/footer/index.css'

const Footer = () => {
  return (
    <footer className="footer">
      {/* Background Effects */}
      <div className="footer-background">
        <div className="footer-background-effect"></div>
      </div>

      <div className="footer-container">
        <div className="footer-content">
          <FooterBrand />
          <FooterNavigation />
          <FooterContact />
        </div>
        <FooterBottom />
      </div>
    </footer>
  )
}

export default Footer
