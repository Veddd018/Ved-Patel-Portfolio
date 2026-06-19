import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 dark:bg-black dark:border-slate-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Copyright Text */}
        <div className="text-center md:text-left">
          <p className="text-sm text-slate-300 dark:text-slate-400">
            &copy; {currentYear} Ved Patel. All rights reserved.
          </p>
          <p className="text-xs mt-2 text-slate-500">
            Built with React & Tailwind CSS.
          </p>
        </div>

        {/* Small Social Icons */}
        <div className="flex gap-4">
          <a href="https://github.com/Veddd018" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full" aria-label="GitHub">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/ved-patel-879a4636a/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full" aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=patelvedb005@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>

      </div>
    </motion.footer>
  );
};

export default Footer;
