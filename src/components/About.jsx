import { motion } from 'framer-motion';
import { MapPin, Briefcase } from 'lucide-react';

const About = () => {
  const quickFacts = [
    { icon: <MapPin className="text-blue-600 dark:text-blue-400 mb-2" size={28} />, title: "Location", value: "Ahmedabad, India" },
    { icon: <Briefcase className="text-blue-600 dark:text-blue-400 mb-2" size={28} />, title: "Role", value: "Software Engineer" }
  ];

  const transitionConfig = { duration: 0.6, ease: "easeOut" };

  return (
    <section 
      id="about" 
      className="py-24 bg-white dark:bg-slate-900 overflow-hidden min-h-[80vh] flex flex-col justify-center relative cursor-default"
    >
      <div className="max-w-6xl mx-auto px-4 w-full relative">
        
        {/* Animated Heading */}
        <motion.div
          className="w-full text-center z-10 mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={transitionConfig}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Content Wrapper */}
        <div className="w-full max-w-4xl mx-auto">
          
          {/* Bio and Quick Facts */}
          <div className="w-full text-center">
            <motion.h3 
              className="text-2xl md:text-4xl font-bold mb-8 text-slate-800 dark:text-slate-100 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...transitionConfig, delay: 0.1 }}
            >
              I build modern web experiences that blend Frontend Design, Vibe Coding, and AI-powered solutions.
            </motion.h3>

            <motion.p 
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...transitionConfig, delay: 0.2 }}
            >
              As a Full Stack Developer, I specialize in React.js, Node.js, JavaScript, and AI tools. I enjoy creating fast, scalable, and user-friendly applications—from intuitive interfaces to intelligent automation. My focus is on turning ideas into impactful digital products.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {quickFacts.map((fact, index) => (
                <motion.div 
                  key={index} 
                  className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center hover:-translate-y-1 transform"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ ...transitionConfig, delay: 0.3 + (index * 0.1) }}
                >
                  {fact.icon}
                  <h4 className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-2 mt-4 uppercase tracking-wider">{fact.title}</h4>
                  <p className="text-slate-900 dark:text-white font-bold text-xl">{fact.value}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
