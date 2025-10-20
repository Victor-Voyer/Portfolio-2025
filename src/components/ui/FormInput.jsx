import React from 'react'

/**
 * Composant FormInput réutilisable pour les champs de formulaire
 * @param {object} props - Propriétés du composant
 * @param {string} props.type - Type d'input (text, email, password, etc.)
 * @param {string} props.name - Nom du champ
 * @param {string} props.label - Label du champ
 * @param {string} props.value - Valeur du champ
 * @param {function} props.onChange - Fonction de changement
 * @param {function} props.onBlur - Fonction de blur
 * @param {string} props.placeholder - Placeholder du champ
 * @param {boolean} props.required - Si le champ est requis
 * @param {string} props.error - Message d'erreur
 * @param {boolean} props.touched - Si le champ a été touché
 * @param {number} props.rows - Nombre de lignes pour textarea
 * @param {string} props.className - Classes CSS supplémentaires
 */
const FormInput = ({
  type = 'text',
  name,
  label,
  value,
  onChange,
  onBlur,
  placeholder,
  required = false,
  error,
  touched,
  rows,
  className = '',
  ...props
}) => {
  const baseInputClasses = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
  const errorClasses = error && touched ? "border-red-500 focus:ring-red-500" : ""
  const inputClasses = `${baseInputClasses} ${errorClasses} ${className}`

  const renderInput = () => {
    if (type === 'textarea') {
      return (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required={required}
          rows={rows || 5}
          className={inputClasses}
          placeholder={placeholder}
          {...props}
        />
      )
    }

    return (
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        className={inputClasses}
        placeholder={placeholder}
        {...props}
      />
    )
  }

  return (
    <div className="form-input-container">
      <label 
        htmlFor={name} 
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      {renderInput()}
      
      {error && touched && (
        <p className="mt-1 text-sm text-red-600 animate-fade-in">
          {error}
        </p>
      )}
    </div>
  )
}

export default FormInput
