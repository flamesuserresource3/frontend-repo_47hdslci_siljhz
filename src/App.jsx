import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Plans from './components/Plans';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Simple sticky nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#" className="flex items-center gap-2 font-extrabold">
            <span className="inline-block h-3 w-3 rounded-sm bg-red-600" />
            VR Fitness
          </a>
          <nav className="hidden gap-6 text-sm text-gray-300 md:flex">
            <a className="hover:text-white" href="#about">About</a>
            <a className="hover:text-white" href="#plans">Plans</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>
          <a
            href="#plans"
            className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-500"
          >
            Join Now
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Plans />
        <Contact />
      </main>
    </div>
  );
}

export default App;
