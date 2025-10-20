import React from 'react'
import { motion } from 'framer-motion'

const FooterContact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="footer-contact"
    >
      <h3 className="footer-contact-title">Contact</h3>
      <div className="footer-contact-info">
        <p>victor.voyer@outlook.fr</p>
        <p>06-99-47-96-86</p>
        <p>33700 Mérignac</p>
      </div>
    </motion.div>
  )
}

export default FooterContact
