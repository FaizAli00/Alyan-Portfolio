// App.jsx
import { BrowserRouter as Router, Routes, Route, useSearchParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import './App.css';
import Navbar from './Layouts/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Projects from './Components/Projects/Projects';
import Pricing from './Components/Prizing/Pricing';
import Feedbacks from './Components/Feedbacks/FeedBacks';
import Footer from './Layouts/Footer';

function MainPage() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const sectionId = searchParams.get('scrollTo');
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Delay to ensure section is mounted
      }
    }
  }, [searchParams]);

  return (
    <>
      <Home />
      <About />
      <Services />
      <Projects />
      <Pricing />
      <Feedbacks />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            {/* <Route path="/projects/:id" element={<div className='w-full h-screen ' ></div>} /> */}
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/feedbacks" element={<Feedbacks />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
