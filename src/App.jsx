import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="dark-gradient-bg min-h-screen text-slate-100 font-sans selection:bg-cyan-500/30">
      <main className="relative">
        <Navbar />
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
