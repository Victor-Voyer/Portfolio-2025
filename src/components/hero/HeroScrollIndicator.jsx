import React from 'react'
import { ChevronDown } from 'lucide-react'

const HeroScrollIndicator = ({ target }) => {
  const scrollToTarget = () => {
    const element = document.querySelector(target)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hero-scroll-animate">
      <button
        onClick={scrollToTarget}
        className="p-2 glass rounded-full hover:bg-white/20 transition-all duration-300 animate-bounce"
      >
        <ChevronDown className="w-6 h-6 text-gray-200" />
      </button>
    </div>
  )
}

export default HeroScrollIndicator
