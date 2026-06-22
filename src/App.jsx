import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 flex flex-col font-sans antialiased selection:bg-indigo-500 selection:text-white">
      {/* Sticky Top Menu */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* About & Education Timeline */}
        <About />
        
        {/* Skills Matrix */}
        <Skills />
        
        {/* Projects Gallery */}
        <Projects />
        
        {/* Contact Form */}
        <Contact />
      </main>

      {/* Footer Area */}
      <Footer />
    </div>
  );
}
