import React from 'react'
import '../../assets/styles/contact/ContactHeader.css'

const ContactHeader = () => {
  return (
    <div className="contact-header text-center mb-8 sm:mb-12 md:mb-16 px-4 sm:px-0">
      <h2 className="section-title">Contact</h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
        N'hésitez pas à me contacter pour discuter de nouvelles opportunités et projets passionnants
      </p>
    </div>
  )
}

export default ContactHeader
