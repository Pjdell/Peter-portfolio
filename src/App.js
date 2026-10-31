import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import SkillsAndSocials from './components/SkillsAndSocials';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
  };

  return (
    <div className="app">
      <Navbar onOpenResume={handleOpenResume} />

      <Hero onOpenResume={handleOpenResume} />

      <About onOpenResume={handleOpenResume} />

      <Projects onOpenResume={handleOpenResume} />

      <SkillsAndSocials onOpenResume={handleOpenResume} />

      <Footer />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={handleCloseResume}
      />
    </div>
  );
}

export default App;
