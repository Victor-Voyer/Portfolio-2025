import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App