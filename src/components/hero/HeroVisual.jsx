import React from 'react'

const HeroVisual = ({ avatar, name, title }) => (
  <div className="flex justify-center lg:justify-end hero-visual-fade-right">
    <div className="relative">
      {/* Main Circle */}
      <div className="w-80 h-80 rounded-full flex items-center justify-center relative overflow-hidden border border-white/20 shadow-2xl">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={avatar} 
            alt={name} 
            className="w-full h-full object-cover object-center object-top"
          />
        </div>
        
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 rounded-full"></div>
        
        {/* Text Content */}
        <div className="relative z-10 text-center mt-40">
          <h3 className="text-2xl font-bold text-white drop-shadow-lg">{name}</h3>
          <p className="text-gray-200 drop-shadow-md">{title}</p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full animate-float"></div>
      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-to-br from-primary-300 to-primary-500 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
    </div>
  </div>
)

export default HeroVisual
