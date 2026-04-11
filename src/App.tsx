import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import Hero from './sections/Hero';
import Work from './sections/Work';
import Skills from './sections/Skills';
import Resources from './sections/Resources';
import DevSetup from './sections/DevSetup';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Nav active={activeSection} />
      <main>
        <Hero />
        <Work />
        <Skills />
        <Resources />
        <DevSetup />
      </main>
      <footer className="footer">
        <p>© 2026 Jueun Yang. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;