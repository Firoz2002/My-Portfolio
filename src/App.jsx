import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Hero from './sections/Hero'
import About from './sections/About'
import Navbar from './sections/Navbar'
import Footer from './sections/Footer'
import Contact from './sections/Contact'
import Projects from './sections/Projects'
import Experience from './sections/Experience'

export default function App() {

  const isLargeDevice = useMediaQuery({minWidth: 768});

  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero isLargeDevice={isLargeDevice} />
      <About isLargeDevice={isLargeDevice} />
      <Projects isLargeDevice={isLargeDevice} />
      <Experience isLargeDevice={isLargeDevice} />
      <Contact />
      <Footer />
    </main>
  )
}
