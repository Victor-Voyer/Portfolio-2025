import React, { useState, useEffect } from 'react'

const TypewriterButton = ({ 
  text, 
  type = 'primary', 
  target, 
  speed = 50,
  className = ''
}) => {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1))
      }, speed)
      return () => clearTimeout(timer)
    } else {
      setIsComplete(true)
    }
  }, [displayedText, text, speed])

  const handleClick = () => {
    if (target) {
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`btn-${type} typewriter-button ${className} ${!isComplete ? 'typing' : ''}`}
      disabled={!isComplete}
    >
      <span>{displayedText}</span>
      {!isComplete && <span className="cursor">|</span>}
    </button>
  )
}

export default TypewriterButton

