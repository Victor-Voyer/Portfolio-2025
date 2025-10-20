import React from 'react'
import { useForm } from '../hooks'
import { ContactHeader, ContactInfo, ContactForm } from './contact/index.js'
import '../assets/styles/contact/index.css'

const Contact = () => {

  const initialFormData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }

  const handleFormSubmit = async (formData) => {
    // Simulation d'envoi
    return new Promise((resolve) => {
      setTimeout(() => {
        alert('Message envoyé avec succès ! Je vous répondrai dès que possible.')
        resolve()
      }, 2000)
    })
  }

  const {
    formData,
    errors,
    isSubmitting,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm
  } = useForm(initialFormData, handleFormSubmit)


  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <ContactHeader />

        <div className="contact-grid">
          <ContactInfo />
          <ContactForm 
            formData={formData}
            errors={errors}
            touched={touched}
            isSubmitting={isSubmitting}
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </section>
  )
}

export default Contact
