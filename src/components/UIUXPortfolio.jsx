import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Figma, Palette, Eye, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const uiuxProjects = [
  {
    id: 1,
    title: "E-Commerce",
    category: "Web Design",
    description: "Complete UI/UX design for an e-commerce web application with modern aesthetics and intuitive user flow.",
    image: "/images/uiux-1.jpg",
    tools: ["Figma", "Prototyping", "User Research"],
  },
  {
    id: 2,
    title: "Foodie",
    category: "Mobile App Design",
    description: "",
    image: "/images/uiux-2.jpg",
    tools: ["Figma", "Component Design", ],
  },
  {
    id: 3,
    title: "Travel App",
    category: "Mobile App Design",
    description: "",
    image: "/images/uiux-3.jpg",
    tools: ["Figma", "Wireframing", "UI Design"],
  },
  {
    id: 4,
    title: "Booking Web",
    category: "Web Design",
    description: "",
    image: "/images/uiux-4.jpg",
    tools: ["Figma", "Prototyping", "Visual Design"],
  }
];

export default function UIUXPortfolio() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(uiuxProjects[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % uiuxProjects.length;
    setCurrentIndex(newIndex);
    setSelectedImage(uiuxProjects[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + uiuxProjects.length) % uiuxProjects.length;
    setCurrentIndex(newIndex);
    setSelectedImage(uiuxProjects[newIndex]);
  };

  return (
    <section id="uiux" className="section-padding bg-gray-50/50 dark:bg-gray-900/50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl" />
      </div>

      <div className="container-custom" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 text-gray-900 dark:text-gray-100 text-sm font-medium mb-4">
            <Figma className="w-4 h-4" />
            UI/UX Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-gray-900 dark:text-white mb-4">
            Design
            <span className="gradient-text"> Showcase</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Beyond coding, I create beautiful user interfaces and experiences. Here are some of my UI/UX design projects.
          </p>
        </motion.div>

        {/* Design Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { icon: Figma, label: "Figma" },
            { icon: Palette, label: "Visual Design" },
            { icon: Eye, label: "User Research" }
          ].map((skill, index) => (
            <div
              key={skill.label}
              className="flex items-center gap-2 px-5 py-3 glass-card"
            >
              <skill.icon className="w-5 h-5 text-gray-900" />
              <span className="font-medium text-gray-700 dark:text-gray-300">{skill.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Projects Grid - Masonry Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {uiuxProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className={`group cursor-pointer ${index === 0 || index === 3 ? 'md:row-span-2' : ''}`}
              onClick={() => openLightbox(index)}
            >
              <div className="glass-card overflow-hidden h-full">
                {/* Image Container */}
                <div className={`relative overflow-hidden ${index === 0 || index === 3 ? 'h-64 md:h-full' : 'h-64'}`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`} />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0  transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="p-4 backdrop-blur-sm rounded-full"
                    >
                      <Maximize2 className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white/80 text-sm line-clamp-2">{project.description}</p>
                    
                    {/* Tools */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded text-xs text-white/90"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Want to see more of my design work?
          </p>
          <motion.a
            href="https://dribbble.com/offii"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Figma className="w-5 h-5" />
            View on Dribbble
          </motion.a>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl max-h-[80vh] overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`w-full h-full min-h-[400px] flex items-center justify-center`}>
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.parentElement.innerHTML = `
                      <div class="flex flex-col items-center justify-center h-full p-8 text-center text-white">
                        <p class="text-2xl font-bold mb-2">${selectedImage.title}</p>
                        <p class="opacity-80">${selectedImage.description}</p>
                        <p class="mt-4 text-sm opacity-60">Add image at: /public${selectedImage.image}</p>
                      </div>
                    `;
                  }}
                />
              </div>
              <div className="bg-white dark:bg-gray-900 p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}