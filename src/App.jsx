import { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CursorProvider } from './context/CursorContext';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <CursorProvider>
      <div className="font-sans min-h-screen">
        <CustomCursor />
        
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}

        <Navbar isReady={!isLoading} />
        <main>
          <Hero isReady={!isLoading} />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </CursorProvider>
  );
}

export default App;
