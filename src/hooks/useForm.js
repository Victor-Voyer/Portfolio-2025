import { useState, useCallback } from 'react'

/**
 * Hook personnalisé pour gérer la logique des formulaires
 * @param {object} initialValues - Valeurs initiales du formulaire
 * @param {function} onSubmit - Fonction appelée lors de la soumission
 * @returns {object} - Objet contenant les états et méthodes du formulaire
 */
export const useForm = (initialValues = {}, onSubmit) => {
  const [formData, setFormData] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [touched, setTouched] = useState({})

  /**
   * Gère les changements dans les champs du formulaire
   */
  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))

    // Marquer le champ comme touché
    setTouched(prev => ({
      ...prev,
      [name]: true
    }))

    // Effacer l'erreur du champ modifié
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }, [errors])

  /**
   * Gère le focus sur les champs
   */
  const handleBlur = useCallback((e) => {
    const { name } = e.target
    setTouched(prev => ({
      ...prev,
      [name]: true
    }))
  }, [])

  /**
   * Gère la soumission du formulaire
   */
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      if (onSubmit) {
        await onSubmit(formData)
      }
    } catch (error) {
      console.error('Erreur lors de la soumission:', error)
    } finally {
      setIsSubmitting(false)
    }
  }, [formData, onSubmit])

  /**
   * Réinitialise le formulaire
   */
  const resetForm = useCallback(() => {
    setFormData(initialValues)
    setErrors({})
    setTouched({})
    setIsSubmitting(false)
  }, [initialValues])

  /**
   * Définit une erreur pour un champ spécifique
   */
  const setFieldError = useCallback((fieldName, errorMessage) => {
    setErrors(prev => ({
      ...prev,
      [fieldName]: errorMessage
    }))
  }, [])

  /**
   * Définit plusieurs erreurs à la fois
   */
  const setFormErrors = useCallback((newErrors) => {
    setErrors(newErrors)
  }, [])

  /**
   * Valide un champ spécifique
   */
  const validateField = useCallback((fieldName, validator) => {
    const error = validator(formData[fieldName], formData)
    if (error) {
      setFieldError(fieldName, error)
      return false
    }
    return true
  }, [formData, setFieldError])

  /**
   * Valide tout le formulaire
   */
  const validateForm = useCallback((validators) => {
    const newErrors = {}
    let isValid = true

    Object.keys(validators).forEach(fieldName => {
      const error = validators[fieldName](formData[fieldName], formData)
      if (error) {
        newErrors[fieldName] = error
        isValid = false
      }
    })

    setErrors(newErrors)
    return isValid
  }, [formData])

  return {
    // États
    formData,
    errors,
    isSubmitting,
    touched,
    
    // Méthodes
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setFieldError,
    setFormErrors,
    validateField,
    validateForm,
    
    // Utilitaires
    setFormData
  }
}
