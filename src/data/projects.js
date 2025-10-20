import portfolioImage from '../assets/images/projects/portfolio.png'
import btCrackImage from '../assets/images/projects/btcrack.png'

export const projects = [
  {
    id: 1,
    title: 'Portfolio Personnel',
    description: 'Site web responsive créé avec React, Vite et Tailwind CSS. Design moderne et optimisé pour tous les appareils avec des animations fluides.',
    image: portfolioImage,
    technologies: ['React', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/Victor-Voyer/Portfolio-2025',
    demo: 'https://victor-voyer.github.io/Portfolio-2025/',
    featured: false
  },  
  {
    id: 2,
    title: 'BT Crack',
    description: 'BTCrack est une plateforme de questions-réponses dédiée aux développeurs, organisée par technologies, pour créer des tickets, obtenir de l\'aide et partager des solutions claires.',
    image: btCrackImage,
    technologies: ['Symfony', 'Javascript', 'Twig'],
    github: 'https://github.com/Victor-Voyer/Portfolio-2025',
    demo: 'https://btcrack.webatif.fr/tickets',
    featured: false
  },   
]
