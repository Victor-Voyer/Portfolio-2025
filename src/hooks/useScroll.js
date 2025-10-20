import { useState, useEffect } from 'react'

/**
 * Hook personnalisé pour gérer la détection du scroll
 * @param {number} threshold - Seuil de scroll en pixels (défaut: 50)
 * @returns {boolean} - État du scroll (true si scrollé au-delà du seuil)
 */
export const useScroll = (threshold = 50) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold)
    }

    // Écouter l'événement scroll
    window.addEventListener('scroll', handleScroll)
    
    // Vérifier l'état initial au montage
    handleScroll()

    // Nettoyer l'événement au démontage
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return scrolled
}

/**
 * Hook pour obtenir la position actuelle du scroll
 * @returns {object} - Objet contenant scrollY et scrollX
 */
export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState({
    scrollY: 0,
    scrollX: 0
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        scrollY: window.scrollY,
        scrollX: window.scrollX
      })
    }

    window.addEventListener('scroll', handleScroll)
    
    // Position initiale
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollPosition
}
