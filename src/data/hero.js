import avatarImage from '../assets/images/profile/avatar.png'

export const heroData = {
  name: 'Victor Voyer',
  greeting: 'Bonjour, je suis',
  title: 'Développeur FullStack Junior',
  description: 'Développeur FullStack Junior, je maîtrise les technologies front-end et back-end pour créer des applications web complètes. Curieux et déterminé, je cherche constamment à perfectionner mes compétences et à contribuer à des projets innovants qui font la différence.',
  avatar: avatarImage,
  buttons: [
    {
      text: 'Voir mes projets',
      type: 'primary',
      target: '#projets'
    },
    {
      text: 'Me contacter',
      type: 'secondary',
      target: '#contact'
    }
  ],
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/Victor-Voyer',
      icon: 'Github'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/victor-voyer/',
      icon: 'Linkedin'
    },
    {
      name: 'Email',
      url: 'mailto:victor.voyer@outlook.fr',
      icon: 'Mail'
    }
  ],
  scrollTarget: '#competences'
}
