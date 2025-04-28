import React from 'react'
import './App.css'
import Navbar from './Layouts/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Projects from './Components/Projects/Projects'
import Pricing from './Components/Prizing/Pricing'
import Feedbacks from './Components/Feedbacks/FeedBacks'
import Footer from './Layouts/Footer'

function App() {
  

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects />
      <Pricing />
      <Feedbacks />
      <Footer />
    </>
  )
}

export default App
