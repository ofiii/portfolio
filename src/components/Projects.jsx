import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ArrowRight, Layers, Code2, Globe } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "OML Project",
    category: "Internal System",
    description: "A comprehensive platform built with React.js, featuring modern UI components and seamless user experience.",
    image: "/images/project-oml.jpg",
    tech: ["React.js", "Tailwind CSS", "REST API"],
    features: ["UI SLicing", "API Integration"],
    color: "bg-gradient-to-r from-gray-900 via-gray-500 to-gray-900",
    company: "Digital Center"
  },
  {
    id: 2,
    title: "KB Bank Company Website",
    category: "Corporate Website",
    description: "Professional corporate website with fully responsive design across desktop, tablet, and mobile devices.",
    image: "/images/project-kbbank.jpg",
    tech: ["JexFrame", "JSP", "HTML5", "CSS3", "JavaScript"],
    features: ["Resposive Web, Mobile, Tablet", "UI Slicing", "Integration API"],
    color: "bg-gradient-to-r from-gray-900 via-gray-500 to-gray-900",
    company: "Digital Center"
  },
  {
    id: 3,
    title: "IFG Life DPLK System",
    category: "Internal System",
    description: "Internal pension fund management system built with Next.js and TypeScript for IFG Life insurance company.",
    image: "/images/project-ifglife.jpg",
    tech: ["Next.js", "TypeScript", "RTK Query", "Tailwind CSS"],
    features: ["Type Safety", "Real-time Data", "UI Slicing", "Integration API"],
    color: "bg-gradient-to-r from-gray-900 via-gray-500 to-gray-900",
    company: "Digital Center"
  },
  {
    id: 4,
    title: "CRM Product Zegen",
    category: "Web Application",
    description: "Customer Relationship Management application for managing customer data, sales pipeline, and business analytics to improve customer engagement.",
    image: "/images/project-crm.jpg",
    tech: ["React.js", "Redux", "Bootstrap", "REST API"],
    features: ["Customer Management", "Sales Pipeline", "UI Slicing", "Integration API"],
    color: "bg-gradient-to-r from-gray-900 via-gray-500 to-gray-900",
    company: "Zegen Solusi Mandiri"
  },
  {
    id: 5,
    title: "BNI Merchant",
    category: "Web Application",
    description: "Merchant management platform for BNI Bank, enabling merchants to manage transactions, monitor sales, and handle payment processing efficiently.",
    image: "/images/project-bni-merchant.jpg",
    tech: ["Vue.js", "REST API"],
    features: ["Transaction Management", "Sales Dashboard", "UI Slicing", "Integration API"],
    color: "bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600",
    company: "Zegen Solusi Mandiri"
  },
  {
    id: 6,
    title: "BTN Smart V3",
    category: "Web Application",
    description: "Smart banking application version 3 for Bank BTN",
    image: "/images/project-btn-smart.jpg",
    tech: ["React.js"],
    features: ["UI Slicing", "Integration API"],
    color: "bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800",
    company: "Zegen Solusi Mandiri"
  },
  {
    id: 7,
    title: "Sinotif - LMS Platform",
    category: "Web Application",
    description: "Comprehensive Learning Management System (LMS) application providing educational content management, course tracking, and student progress monitoring features.",
    image: "/images/project-sinotif.jpg",
    tech: ["Next.js",],
    features: ["UI Slicing"],
    color: "bg-gradient-to-r from-green-600 via-green-500 to-green-600",
    company: "Digital Center"
  }
];

const categories = ["All", "Web Application", "Corporate Website", "Internal System"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-r from-gray-900 via-gray-500 to-gray-900 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-r from-gray-900 via-gray-500 to-gray-900 rounded-full blur-3xl" />
      </div>

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 text-gray-900 dark:text-gray-100 text-sm font-medium mb-4">
            My Projects
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-gray-900 dark:text-white mb-4">
            Featured
            <span className="gradient-text"> Work</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of projects I've worked on, demonstrating my skills in frontend development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-gray-900 via-gray-500 to-gray-900 text-white shadow-lg shadow-gray-500/25'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group"
                >
                    <div className="glass-card overflow-hidden h-full flex flex-col p-6 hover:shadow-2xl transition-all duration-300">
                    
                    <div className="flex justify-between items-start mb-4">
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 text-xs font-medium">
                        {project.category}
                        </span>
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 text-xs font-medium">
                        {project.company}
                        </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:gradient-text transition-all">
                        {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                        <span
                            key={tech}
                            className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-xs font-medium text-gray-600 dark:text-gray-300"
                        >
                            {tech}
                        </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.features.map((feature) => (
                        <span
                            key={feature}
                            className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400"
                        >
                            <span className="w-1 h-1 rounded-full bg-gray-500" />
                            {feature}
                        </span>
                        ))}
                    </div>

                    </div>
                </motion.div>
                ))}
            </AnimatePresence>
            </motion.div>
      </div>
    </section>
  );
}