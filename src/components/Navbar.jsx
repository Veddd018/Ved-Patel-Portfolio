import { useState, useEffect, useContext } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { CursorContext } from '../context/CursorContext';
import Magnetic from './Magnetic';

const Navbar = ({ isReady = true }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { mouseEnterLink, mouseLeave } = useContext(CursorContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDark = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out ${
        isReady ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
      } ${
        isScrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <h1 
          className="text-2xl font-bold transition-colors text-slate-900 dark:text-white"
          onMouseEnter={mouseEnterLink}
          onMouseLeave={mouseLeave}
        >
          Ved<span className="text-blue-600">.</span>
        </h1>
        
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Magnetic>
                <a 
                  href={link.href} 
                  onMouseEnter={mouseEnterLink}
                  onMouseLeave={mouseLeave}
                  className="text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 text-slate-700 dark:text-slate-300 py-2 px-2 inline-block"
                >
                  {link.name}
                </a>
              </Magnetic>
            </li>
          ))}
          <Magnetic>
            <button 
              onClick={toggleDark} 
              onMouseEnter={mouseEnterLink}
              onMouseLeave={mouseLeave}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300 flex" 
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </Magnetic>
        </ul>

        {/* Mobile Nav Controls */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleDark} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300" aria-label="Toggle Dark Mode">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            className={`relative focus:outline-none z-50 transition-colors ${isOpen ? 'text-white' : 'text-slate-900 dark:text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-slate-900/95 backdrop-blur-lg transform transition-transform duration-300 md:hidden flex flex-col items-center justify-center space-y-8 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ zIndex: 40 }}
        >
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="text-2xl font-bold text-white hover:text-blue-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
