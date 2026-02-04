import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Palette, Users, Zap, Coffee, Heart } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code with best practices"
  },
  {
    icon: Palette,
    title: "UI/UX Focus",
    description: "Creating beautiful interfaces with great user experience"
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborating effectively with cross-functional teams"
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing applications for speed and efficiency"
  }
];


export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="section-padding bg-gray-50/50 dark:bg-gray-900/50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-200/30 to-accent-purple/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent-pink/20 to-accent-orange/20 rounded-full blur-3xl -z-10" />

      <div className="container-custom" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 text-gray-900 dark:text-gray-100 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-gray-900 dark:text-white mb-4">
            Passionate About Creating
            <span className="gradient-text block sm:inline"> Digital Experiences</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A dedicated frontend developer who loves turning ideas into reality through code and design.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
        
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                I'm <span className="font-semibold text-gray-900 dark:text-white">Siti Nurul Khofifah</span>, 
                a Frontend Web Developer based in Bogor, Indonesia. With over 4 years of experience, 
                I specialize in building responsive, user-friendly web applications using modern technologies.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                My expertise lies in <span className="text-gray-900 font-medium">React.js</span>, 
                <span className="text-gray-900 font-medium"> Next.js</span>, 
                <span className="text-gray-900 font-medium"> TypeScript</span>, and 
                <span className="text-gray-900 font-medium"> Tailwind CSS</span>. 
                I'm passionate about creating seamless user interfaces that not only look great but also perform exceptionally well.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Beyond coding, I have a strong interest in <span className="font-medium text-gray-900">UI/UX design</span>. 
                I occasionally work on design projects using Figma to enhance my visual and user experience skills.
              </p>

              {/* Fun Facts */}
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                  <Coffee className="w-5 h-5 text-gray-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Coffee Lover</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                  <Heart className="w-5 h-5 text-gray-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Design Enthusiast</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="glass-card p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}