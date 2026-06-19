import { useEffect, useState, useContext } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { CursorContext } from '../context/CursorContext';
import Magnetic from './Magnetic';

const Hero = ({ isReady = true }) => {
  const { mouseEnterLink, mouseLeave } = useContext(CursorContext);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 120 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHoveringText, setIsHoveringText] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);

      if (!isTouchDevice) {
        cursorX.set(e.clientX - 40); // 40 is half the width of the 80px cursor
        cursorY.set(e.clientY - 40);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, cursorX, cursorY, isTouchDevice]);

  const blob1X = useTransform(mouseX, [-1000, 1000], [-50, 50]);
  const blob1Y = useTransform(mouseY, [-1000, 1000], [-50, 50]);

  const blob2X = useTransform(mouseX, [-1000, 1000], [50, -50]);
  const blob2Y = useTransform(mouseY, [-1000, 1000], [50, -50]);

  const blob3X = useTransform(mouseX, [-1000, 1000], [-30, 30]);
  const blob3Y = useTransform(mouseY, [-1000, 1000], [30, -30]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 bg-transparent relative overflow-hidden">
      {!isTouchDevice && (
        <motion.div
          className="fixed top-0 left-0 w-[80px] h-[80px] rounded-full pointer-events-none z-50 flex items-center justify-center bg-black/10 dark:bg-white/10 border border-black/20 dark:border-white/20 shadow-xl"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isHoveringText ? 1 : 0,
            scale: isHoveringText ? 1 : 0.8
          }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Subtle background elements for a premium feel with parallax */}
      <motion.div style={{ x: blob1X, y: blob1Y }} animate={{ opacity: isReady ? 0.3 : 0 }} transition={{ duration: 1 }} className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></motion.div>
      <motion.div style={{ x: blob2X, y: blob2Y, animationDelay: '2s' }} animate={{ opacity: isReady ? 0.3 : 0 }} transition={{ duration: 1, delay: 0.2 }} className="absolute top-1/3 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-purple-200 dark:bg-purple-900/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></motion.div>
      <motion.div style={{ x: blob3X, y: blob3Y, animationDelay: '4s' }} animate={{ opacity: isReady ? 0.3 : 0 }} transition={{ duration: 1, delay: 0.4 }} className="absolute -bottom-8 left-1/2 w-72 h-72 md:w-96 md:h-96 bg-pink-200 dark:bg-pink-900/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></motion.div>

      <div className="text-center px-4 z-10 w-full max-w-4xl">
        <div
          className={isHoveringText ? "cursor-none" : ""}
          onMouseEnter={() => setIsHoveringText(true)}
          onMouseLeave={() => setIsHoveringText(false)}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
            Hey, I'm <span className="text-blue-600 dark:text-blue-500">Ved Patel</span>
          </h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-medium text-slate-700 dark:text-slate-300 mb-6"
          >
            Vibe Coder ⚡
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            I specialize in building exceptional software, dynamic web applications, and intuitive user experiences from design to deployment.
          </motion.p>
        </div>

        <motion.div
          className="flex justify-center gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <Magnetic>
            <a href="https://github.com/Veddd018" onMouseEnter={mouseEnterLink} onMouseLeave={mouseLeave} target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full shadow-sm hover:shadow-md hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-1 transition-all duration-300 flex">
              <FaGithub size={24} />
            </a>
          </Magnetic>
          <Magnetic>
            <a href="https://www.linkedin.com/in/ved-patel-879a4636a/" onMouseEnter={mouseEnterLink} onMouseLeave={mouseLeave} target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full shadow-sm hover:shadow-md hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-1 transition-all duration-300 flex">
              <FaLinkedin size={24} />
            </a>
          </Magnetic>
          <Magnetic>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=patelvedb005@gmail.com" target="_blank" rel="noopener noreferrer" onMouseEnter={mouseEnterLink} onMouseLeave={mouseLeave} className="p-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full shadow-sm hover:shadow-md hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-1 transition-all duration-300 flex">
              <Mail size={24} />
            </a>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <Magnetic>
            <a href="#projects" onMouseEnter={mouseEnterLink} onMouseLeave={mouseLeave} className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300">
              View My Work
            </a>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
