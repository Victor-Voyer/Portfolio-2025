import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Parcours from './components/Parcours'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Parcours />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App