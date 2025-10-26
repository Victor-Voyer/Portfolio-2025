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
    // Configuration EmailJS
    // Remplacez ces valeurs par vos propres clés depuis EmailJS.com :
    // - service_id : Dans "Email Services" → Service ID
    // - template_id : Dans "Email Templates" → Template ID
    // - user_id : Dans "Account" → General → Public Key
    
    const EMAILJS_CONFIG = {
      service_id: 'service_tbghezt',        
      template_id: 'template_3624bpd',      
      user_id: 'LqWZZUJzi0T1NUm6t'            
    }
    
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: EMAILJS_CONFIG.service_id,
          template_id: EMAILJS_CONFIG.template_id,
          user_id: EMAILJS_CONFIG.user_id,
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message
          }
        })
      })
      
      if (!response.ok) throw new Error('Erreur lors de l\'envoi')
      
      alert('Message envoyé avec succès ! Je vous répondrai dès que possible.')
      
      // Réinitialiser le formulaire après envoi réussi
      resetForm()
    } catch (error) {
      console.error('Erreur:', error)
      alert('Erreur lors de l\'envoi du message. Veuillez réessayer.')
    }
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
