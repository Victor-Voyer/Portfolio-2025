import React from 'react'
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'
import '../../assets/styles/contact/ContactInfo.css'

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: 'Email',
      value: 'victor.voyer@outlook.fr',
      link: 'mailto:victor.voyer@outlook.fr'
    },
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: 'Téléphone',
      value: '06-99-47-96-86',
      link: 'tel:+33699479686'
    },
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: 'Localisation',
      value: '33700 Mérignac',
      link: null
    }
  ]

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: 'GitHub',
      url: 'https://github.com/Victor-Voyer',
      color: 'hover:bg-gray-900'
    },
    {
      icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/victor-voyer',
      color: 'hover:bg-blue-600'
    }
  ]

  return (
    <div className="contact-info-section">
      <div className="glass-card rounded-2xl p-4 sm:p-5 md:p-6 h-full w-full box-border overflow-hidden flex flex-col">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 break-words">Informations de contact</h3>
        
        <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
          {contactInfo.map((info, index) => (
            <div
              key={info.label}
              className="contact-info-item flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg sm:rounded-xl border border-primary-200 hover:shadow-lg transition-all duration-300 w-full box-border"
            >
              <div className="p-2 sm:p-3 bg-gradient-to-r from-primary-500 to-primary-700 text-white rounded-lg flex-shrink-0">
                {info.icon}
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-semibold text-gray-900 text-sm sm:text-base mb-1 break-words">{info.label}</div>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-primary-600 hover:text-primary-700 transition-colors duration-300 text-xs sm:text-sm break-all"
                  >
                    {info.value}
                  </a>
                ) : (
                  <div className="text-gray-600 text-xs sm:text-sm break-words">{info.value}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Réseaux sociaux</h4>
          <div className="flex gap-3 sm:gap-4 flex-wrap">
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-link p-3 sm:p-4 bg-white border border-gray-200 rounded-lg sm:rounded-xl text-gray-600 transition-all duration-300 transform hover:scale-110 hover:text-white flex-shrink-0 ${social.color}`}
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
