import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const fullText = "Hey, I'm Ved Patel";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    let timeoutId;
    let intervalId;

    const startTyping = () => {
      // 1. Initial blinking cursor delay
      timeoutId = setTimeout(() => {
        intervalId = setInterval(() => {
          if (i < 5) {
            // 2. Type "Hey, "
            setDisplayedText(fullText.substring(0, i + 1));
            i++;
          } else if (i === 5) {
            clearInterval(intervalId);
            // 3. 0.4s delay
            timeoutId = setTimeout(() => {
              intervalId = setInterval(() => {
                if (i < fullText.length) {
                  // 4. Type the rest
                  setDisplayedText(fullText.substring(0, i + 1));
                  i++;
                } else {
                  clearInterval(intervalId);
                  timeoutId = setTimeout(() => {
                    onComplete();
                  }, 800);
                }
              }, 50);
            }, 350);
          }
        }, 50);
      }, 850); // 1s blink cursor before starting
    };

    startTyping();

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [onComplete]);

  const part1 = displayedText.substring(0, 9);
  const part2 = displayedText.substring(9);

  return (
    <div className="fixed inset-0 z-[99999] min-h-screen flex items-center justify-center pt-20 bg-slate-50 dark:bg-slate-950 pointer-events-none">
      <div className="text-center px-4 z-10 w-full max-w-4xl">
        <div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
            {part1}
            <span className="text-blue-600 dark:text-blue-500">{part2}</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
              className="inline-block w-[3px] md:w-[5px] h-[0.9em] bg-blue-600 dark:bg-blue-500 ml-2 align-baseline relative top-[0.1em]"
            />
          </h1>

          <h2 className="text-2xl md:text-3xl font-medium mb-6 opacity-0 invisible">
            Vibe Coder ⚡
          </h2>

          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 invisible">
            I specialize in building exceptional software, dynamic web applications, and intuitive user experiences from design to deployment.
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-12 opacity-0 invisible">
          <div className="p-3 w-12 h-12"></div>
        </div>

        <div className="opacity-0 invisible">
          <div className="inline-block px-8 py-4 text-lg">
            View My Work
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
