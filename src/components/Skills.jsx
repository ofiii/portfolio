import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const techStack = [
  { name: "React", color: "#61DAFB", icon: "⚛️" },
  { name: "Next.js", color: "#000000", icon: "▲" },
  { name: "Vue.js", color: "#4FC08D", icon: "💚" },
  { name: "TypeScript", color: "#3178C6", icon: "📘" },
  { name: "JavaScript", color: "#F7DF1E", icon: "⚡" },
  { name: "Tailwind", color: "#06B6D4", icon: "💨" },
  { name: "Redux", color: "#764ABC", icon: "🔄" },
  { name: "RTK Query", color: "#764ABC", icon: "🔍" },
  { name: "Laravel", color: "#FF2D20", icon: "🔺" },
  { name: "JSP", color: "#007396", icon: "☕" },
  { name: "JexFrame", color: "#4A5568", icon: "🔧" },
  { name: "Figma", color: "#F24E1E", icon: "🎯" },
  { name: "Git", color: "#F05032", icon: "🔀" },
  { name: "VS Code", color: "#007ACC", icon: "💻" },
  { name: "Jira", color: "#0052CC", icon: "📋" },
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary-200/30 dark:bg-primary-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-purple/20 dark:bg-accent-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 text-gray-900 dark:text-gray-100 text-sm font-medium mb-4">
            My Skills
        </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-gray-900 dark:text-white mb-4">
            Technologies I
            <span className="gradient-text"> Work With</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit that enables me to build modern, performant, and beautiful web applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="px-5 py-3 glass-card flex items-center gap-2 cursor-pointer"
            >
              <span className="text-xl">{tech.icon}</span>
              <span className="font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}