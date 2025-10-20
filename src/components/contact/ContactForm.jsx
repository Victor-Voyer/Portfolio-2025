import React from 'react'
import { Send } from 'lucide-react'
import { FormInput } from '../ui'
import '../../assets/styles/contact/ContactForm.css'

const ContactForm = ({ 
  formData, 
  errors, 
  touched, 
  isSubmitting, 
  handleChange, 
  handleBlur, 
  handleSubmit 
}) => {
  return (
    <div className="contact-form-section">
      <div className="glass-card rounded-3xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">Envoyez-moi un message</h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <FormInput
              type="text"
              name="name"
              label="Nom complet"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Votre nom"
              required
              error={errors.name}
              touched={touched.name}
            />
            <FormInput
              type="email"
              name="email"
              label="Email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="votre@email.com"
              required
              error={errors.email}
              touched={touched.email}
            />
          </div>

          <FormInput
            type="text"
            name="subject"
            label="Sujet"
            value={formData.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Sujet de votre message"
            required
            error={errors.subject}
            touched={touched.subject}
          />

          <FormInput
            type="textarea"
            name="message"
            label="Message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Votre message..."
            required
            rows={5}
            error={errors.message}
            touched={touched.message}
            className="resize-none"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="submit-button w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Envoi en cours...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Envoyer le message
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
