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
    <div className="contact-form-section w-full">
      <div className="glass-card rounded-2xl p-4 sm:p-5 md:p-6 w-full h-full box-border overflow-hidden flex flex-col">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 break-words">Envoyez-moi un message</h3>
        
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 w-full flex-1 flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
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
            className="submit-button w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base py-2.5 sm:py-3 mt-auto"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Envoi en cours...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Envoyer le message</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
