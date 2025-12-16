import React from 'react'
import '../../assets/styles/contact/ContactHeader.css'

const ContactHeader = () => {
  return (
    <div className="contact-header text-center mb-6 sm:mb-8 md:mb-12 px-4 sm:px-0 w-full box-border">
      <h2 className="section-title break-words">Contact</h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0 break-words">
        N'hésitez pas à me contacter pour discuter de nouvelles opportunités et projets passionnants
      </p>
    </div>
  )
}

export default ContactHeader
