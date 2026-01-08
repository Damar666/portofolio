import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ParticlesBackground from './components/ParticlesBackground';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <LoadingScreen onLoadingComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <ParticlesBackground />
          <div className="content-wrapper">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Footer />
          </div>
        </>
      )}
    </>
  );
}

export default App;
