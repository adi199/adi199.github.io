import React from 'react';
import Header from './components/Header';
import { HeroMain, HeroImage } from './components/Hero';
import About from './components/About';
import CoreFocus from './components/CoreFocus';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Header />
      
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="grid grid-cols-12 gap-6">
          <HeroMain />
          <HeroImage />
          <About />
          <CoreFocus />
          <TechStack />
          <Experience />
          <Projects />
          <Education />
          <Certifications />
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default App;