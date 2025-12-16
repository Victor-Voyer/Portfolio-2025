import React from 'react'
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'
import '../../assets/styles/contact/ContactInfo.css'

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'victor.voyer@outlook.fr',
      link: 'mailto:victor.voyer@outlook.fr'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Téléphone',
      value: '06-99-47-96-86',
      link: 'tel:+33699479686'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Localisation',
      value: '33700 Mérignac',
      link: null
    }
  ]

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      url: 'https://github.com/Victor-Voyer',
      color: 'hover:bg-gray-900'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/victor-voyer',
      color: 'hover:bg-blue-600'
    }
  ]

  return (
    <div className="contact-info-section">
      <div className="glass-card rounded-3xl p-4 sm:p-6 md:p-8 h-full">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Informations de contact</h3>
        
        <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
          {contactInfo.map((info, index) => (
            <div
              key={info.label}
              className="contact-info-item flex items-center gap-4 p-4 bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl border border-primary-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="p-3 bg-gradient-to-r from-primary-500 to-primary-700 text-white rounded-lg">
                {info.icon}
              </div>
              <div>
                <div className="font-semibold text-gray-900">{info.label}</div>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-primary-600 hover:text-primary-700 transition-colors duration-300"
                  >
                    {info.value}
                  </a>
                ) : (
                  <div className="text-gray-600">{info.value}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Réseaux sociaux</h4>
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-link p-4 bg-white border border-gray-200 rounded-xl text-gray-600 transition-all duration-300 transform hover:scale-110 hover:text-white ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
