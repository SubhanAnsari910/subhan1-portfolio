import React from 'react'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App