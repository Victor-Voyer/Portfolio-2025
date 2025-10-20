import React from 'react'
import { motion } from 'framer-motion'

const FooterBottom = () => {
  const currentYear = new Date().getFullYear()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="footer-bottom"
    >
      <p className="footer-copyright">
        © {currentYear} Victor Voyer
      </p>
    </motion.div>
  )
}

export default FooterBottom
