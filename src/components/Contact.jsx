import { motion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useContext } from 'react';
import { CursorContext } from '../context/CursorContext';
import Magnetic from './Magnetic';

const Contact = () => {
  const { mouseEnterLink, mouseLeave } = useContext(CursorContext);

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-4xl mx-auto px-4 text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block p-4 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-6">
            <MessageCircle size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 dark:text-white">Let's Connect</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm currently open to new opportunities. Whether you have a question, a project in mind, or just want to say hi, I'll try my best to get back to you!
          </p>

          {/* Prominent Email Button */}
          <Magnetic>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=patelvedb005@gmail.com" 
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={mouseEnterLink}
              onMouseLeave={mouseLeave}
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 md:px-10 py-5 rounded-full font-bold text-lg md:text-xl hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300 mb-16"
            >
              <Mail size={24} />
              patelvedb005@gmail.com
            </a>
          </Magnetic>

          {/* Social Icons */}
          <div className="flex justify-center gap-10 border-t border-slate-200 dark:border-slate-800 pt-12">
            <Magnetic>
              <a 
                href="https://github.com/Veddd018" 
                onMouseEnter={mouseEnterLink}
                onMouseLeave={mouseLeave}
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:-translate-y-1 transition-all duration-300 flex flex-col items-center gap-2 group"
              >
                <div className="p-3 bg-white dark:bg-slate-900 rounded-full shadow-sm group-hover:shadow-md dark:group-hover:shadow-slate-800 transition-shadow">
                  <FaGithub size={28} />
                </div>
                <span className="text-sm font-medium">GitHub</span>
              </a>
            </Magnetic>
            <Magnetic>
              <a 
                href="https://www.linkedin.com/in/ved-patel-879a4636a/" 
                onMouseEnter={mouseEnterLink}
                onMouseLeave={mouseLeave}
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center gap-2 group"
              >
                <div className="p-3 bg-white dark:bg-slate-900 rounded-full shadow-sm group-hover:shadow-md dark:group-hover:shadow-slate-800 transition-shadow">
                  <FaLinkedin size={28} />
                </div>
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </Magnetic>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
