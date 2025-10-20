import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

const HeroSocialLinks = ({ socialLinks }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Github':
        return <Github className="w-6 h-6 text-gray-200" />
      case 'Linkedin':
        return <Linkedin className="w-6 h-6 text-gray-200" />
      case 'Mail':
        return <Mail className="w-6 h-6 text-gray-200" />
      default:
        return null
    }
  }

  return (
    <div className="flex gap-4 justify-center lg:justify-start hero-social-animate">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target={link.name === 'Email' ? '_self' : '_blank'}
          rel={link.name === 'Email' ? '' : 'noopener noreferrer'}
          className="p-3 glass rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
        >
          {getIcon(link.icon)}
        </a>
      ))}
    </div>
  )
}

export default HeroSocialLinks
