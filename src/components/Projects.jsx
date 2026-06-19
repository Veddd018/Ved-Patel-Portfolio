import { motion } from 'framer-motion';
import { Folder } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { useContext } from 'react';
import { CursorContext } from '../context/CursorContext';
import Magnetic from './Magnetic';

const Projects = () => {
  const { mouseEnterProject, mouseLeave, mouseEnterLink } = useContext(CursorContext);

  const projects = [
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive, highly interactive personal portfolio website to showcase my projects and technical skills.",
      techStack: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      liveLink: "https://example.com",
      githubLink: "https://github.com"
    },
    {
      id: 1,
      title: "Clothify - Shopping Cart Demo",
      description: "A responsive e-commerce demo application built with React and Vite. Accessible shopping experience with product search, filtering, size/color selection, and cart management.",
      techStack: ["React", "Vite", "CSS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/Veddd018/shopping-cart-demo"
    },
    {
      id: 2,
      title: "Power Fluctuation Predictor",
      description: "A machine learning-powered web application for real-time voltage stability analysis and power fluctuation prediction with automated alerting capabilities.",
      techStack: ["Streamlit", "HTML/CSS", "Python", "Flask"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/Veddd018/Power-Fluctuation-Predictor-System"
    },
    {
      id: 3,
      title: "LinkedIn AI Agent",
      description: "An AI-powered automation system that generates LinkedIn posts daily using workflows built in n8n.",
      techStack: ["n8n", "Groq API", "Google Sheets API", "Telegram Bot API"],
      liveLink: "https://github.com/Veddd018/linkedin-ai-agent",
      githubLink: "https://github.com/Veddd018/linkedin-ai-agent"
    }

  ];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              onClick={() => window.open(project.githubLink, '_blank')}
              onMouseEnter={() => mouseEnterProject("View")}
              onMouseLeave={mouseLeave}
              className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-100 dark:border-slate-700 hover:shadow-xl dark:hover:shadow-slate-800/50 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full cursor-none"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
                  <Folder size={32} strokeWidth={1.5} />
                </div>
                <div className="flex gap-4">
                  <Magnetic>
                    <a
                      href={project.githubLink}
                      onMouseEnter={(e) => { e.stopPropagation(); mouseEnterLink(); }}
                      onMouseLeave={(e) => { e.stopPropagation(); mouseEnterProject("View"); }}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors p-1"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub size={24} />
                    </a>
                  </Magnetic>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-100">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-200 dark:border-slate-700">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-xs font-bold tracking-wide text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full uppercase">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
