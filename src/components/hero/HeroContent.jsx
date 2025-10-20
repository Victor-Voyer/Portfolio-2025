import React from 'react'
import HeroTitle from './HeroTitle'
import HeroButtons from './HeroButtons'
import HeroSocialLinks from './HeroSocialLinks'

const HeroContent = ({ data }) => (
  <div className="text-center lg:text-left hero-content-fade-left">
    <HeroTitle 
      greeting={data.greeting}
      name={data.name}
      title={data.title}
      description={data.description}
    />
    <HeroButtons buttons={data.buttons} />
    <HeroSocialLinks socialLinks={data.socialLinks} />
  </div>
)

export default HeroContent
