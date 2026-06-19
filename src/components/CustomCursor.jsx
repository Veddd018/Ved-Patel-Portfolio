import { useEffect, useState, useContext } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { CursorContext } from '../context/CursorContext';

export default function CustomCursor() {
  const { cursorVariant, cursorText } = useContext(CursorContext);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  if (isTouchDevice) return null;

  const variants = {
    default: {
      height: 16,
      width: 16,
      x: "-50%",
      y: "-50%",
      backgroundColor: "rgba(37, 99, 235, 1)", // blue-600
      mixBlendMode: "normal",
      opacity: 1
    },
    link: {
      height: 48,
      width: 48,
      x: "-50%",
      y: "-50%",
      backgroundColor: "rgba(37, 99, 235, 0.2)",
      border: "1px solid rgba(37, 99, 235, 0.8)",
      mixBlendMode: "difference",
      opacity: 1
    },
    project: {
      height: 80,
      width: 80,
      x: "-50%",
      y: "-50%",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      color: "#0f172a",
      mixBlendMode: "normal",
      opacity: 1
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{ x: smoothX, y: smoothY }}
    >
      <motion.div
        className="rounded-full flex items-center justify-center font-bold text-sm tracking-wide shadow-sm"
        variants={variants}
        animate={cursorVariant}
      >
        {cursorVariant === 'project' ? cursorText : ''}
      </motion.div>
    </motion.div>
  );
}
