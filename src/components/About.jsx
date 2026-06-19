import { motion } from 'framer-motion';
import { MapPin, Briefcase } from 'lucide-react';
import { useState } from 'react';

const About = () => {
  const [hasRevealed, setHasRevealed] = useState(false);

  const quickFacts = [
    { icon: <MapPin className="text-blue-600 dark:text-blue-400 mb-2" size={28} />, title: "Location", value: "Ahmedabad, India" },
    { icon: <Briefcase className="text-blue-600 dark:text-blue-400 mb-2" size={28} />, title: "Role", value: "Software Engineer" }
  ];

  const transitionConfig = { duration: 0.6, ease: "easeOut" };

  return (
    <section 
      id="about" 
      className="py-24 bg-white dark:bg-slate-900 overflow-hidden min-h-[80vh] flex flex-col justify-center relative cursor-default"
      onMouseEnter={() => setHasRevealed(true)}
    >
      <div className="max-w-6xl mx-auto px-4 w-full relative">
        
        {/* Animated Heading */}
        <motion.div
          className="w-full text-center z-10 absolute left-0"
          animate={{
            top: hasRevealed ? 0 : "50%",
            y: hasRevealed ? 0 : "-50%",
            scale: hasRevealed ? 1 : 1.1
          }}
          transition={transitionConfig}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Content Wrapper */}
        <div className="pt-32 md:pt-40">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            
            {/* Profile Photo Placeholder */}
            <motion.div
              className="w-full md:w-2/5 flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              animate={hasRevealed ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ ...transitionConfig, delay: hasRevealed ? 0.1 : 0 }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl group border-4 border-white dark:border-slate-800">
                <div className="absolute inset-0 bg-slate-200 dark:bg-slate-700 animate-pulse"></div>
                {/* Replace the div below with an <img /> tag when ready */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-500 font-medium bg-slate-100 dark:bg-slate-800">
                  Photo Placeholder
                </div>
                {/* Decorative background element behind photo */}
                <div className="absolute -z-10 top-4 -right-4 w-full h-full border-4 border-blue-600 rounded-2xl"></div>
              </div>
            </motion.div>

            {/* Bio and Quick Facts */}
            <div className="w-full md:w-3/5">
              <motion.h3 
                className="text-2xl md:text-3xl font-bold mb-6 text-slate-800 dark:text-slate-100 leading-tight"
                initial={{ opacity: 0, x: 50 }}
                animate={hasRevealed ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ ...transitionConfig, delay: hasRevealed ? 0.2 : 0 }}
              >
                I build modern web experiences that blend Frontend Design, Vibe Coding, and AI-powered solutions.
              </motion.h3>

              <motion.p 
                className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10"
                initial={{ opacity: 0, x: 50 }}
                animate={hasRevealed ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ ...transitionConfig, delay: hasRevealed ? 0.3 : 0 }}
              >
                As a Full Stack Developer, I specialize in React.js, Node.js, JavaScript, and AI tools. I enjoy creating fast, scalable, and user-friendly applications—from intuitive interfaces to intelligent automation. My focus is on turning ideas into impactful digital products.
              </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {quickFacts.map((fact, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center sm:items-start text-center sm:text-left hover:-translate-y-1 transform"
                    initial={{ opacity: 0, x: 50 }}
                    animate={hasRevealed ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ ...transitionConfig, delay: hasRevealed ? 0.4 + (index * 0.1) : 0 }}
                  >
                    {fact.icon}
                    <h4 className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-1 mt-2">{fact.title}</h4>
                    <p className="text-slate-900 dark:text-white font-bold text-lg">{fact.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
