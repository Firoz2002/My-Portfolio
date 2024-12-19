import React from 'react'

import Hero from './sections/Hero'
import About from './sections/About'
import Navbar from './sections/Navbar'
import Footer from './sections/Footer'
import Contact from './sections/Contact'
import Projects from './sections/Projects'
import Experience from './sections/Experience'

export default function App() {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
