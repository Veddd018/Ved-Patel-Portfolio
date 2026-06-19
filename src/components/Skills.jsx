import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaServer, FaGitAlt, FaGithub, FaRobot
} from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiTailwindcss, SiMysql, SiN8N
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38B2AC]" /> },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
        { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
        { name: "REST APIs", icon: <FaServer className="text-slate-500 dark:text-slate-400" /> },
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
        { name: "GitHub", icon: <FaGithub className="text-slate-900 dark:text-white" /> },
        { name: "AI Tools", icon: <FaRobot className="text-purple-500" /> },
        { name: "n8n", icon: <SiN8N className="text-[#FF6D5A]" /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={category.title}
              className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-lg dark:hover:shadow-slate-800 transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.2 }}
            >
              <h3 className="text-xl font-bold mb-8 text-slate-800 dark:text-slate-200 text-center uppercase tracking-wider text-sm">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-10 gap-x-6">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="flex flex-col items-center justify-center group"
                  >
                    <div className="text-4xl md:text-5xl mb-3 transform transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-2 drop-shadow-sm group-hover:drop-shadow-md">
                      {skill.icon}
                    </div>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
