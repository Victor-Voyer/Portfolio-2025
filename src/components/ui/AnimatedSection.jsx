import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

/**
 * Composant AnimatedSection pour factoriser les animations Framer Motion répétitives
 * @param {object} props - Propriétés du composant
 * @param {React.ReactNode} props.children - Contenu à animer
 * @param {string} props.className - Classes CSS supplémentaires
 * @param {number} props.threshold - Seuil de déclenchement de l'animation (défaut: 0.2)
 * @param {boolean} props.triggerOnce - Si l'animation ne se déclenche qu'une fois (défaut: true)
 * @param {string} props.animation - Type d'animation (slideUp, slideDown, slideLeft, slideRight, fadeIn, scaleIn)
 * @param {number} props.delay - Délai d'animation en secondes
 * @param {number} props.duration - Durée d'animation en secondes
 * @param {object} props.customVariants - Variants d'animation personnalisés
 */
const AnimatedSection = ({
  children,
  className = '',
  threshold = 0.2,
  triggerOnce = true,
  animation = 'slideUp',
  delay = 0,
  duration = 0.8,
  customVariants,
  ...props
}) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce
  })

  // Variants d'animation prédéfinis
  const defaultVariants = {
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    },
    slideDown: {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 }
    },
    slideLeft: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 }
    },
    slideRight: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 }
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 }
    }
  }

  const variants = customVariants || defaultVariants[animation] || defaultVariants.slideUp

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection
