import React from 'react'

const HeroVisual = ({ avatar, name, title }) => (
  <div className="flex justify-center lg:justify-end hero-visual-fade-right px-4 sm:px-0">
    <div className="relative">
      {/* Main Circle */}
      <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full flex items-center justify-center relative overflow-hidden border border-white/20 shadow-2xl">
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
        <div className="relative z-10 text-center mt-24 sm:mt-32 md:mt-36 lg:mt-40">
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white drop-shadow-lg">{name}</h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 drop-shadow-md">{title}</p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full animate-float"></div>
      <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 -left-4 sm:-left-8 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-primary-300 to-primary-500 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
    </div>
  </div>
)

export default HeroVisual
