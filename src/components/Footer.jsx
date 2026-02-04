import { motion } from 'framer-motion';
import { Heart, ArrowUp, Code2 } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-900 dark:bg-black text-white overflow-hidden">
     
      <div className="h-1 w-full bg-gradient-to-r from-gray-900 via-gray-500 to-gray-900" />

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 items-center">
 
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold font-display">Offii</span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs mx-auto md:mx-0">
              Frontend Web Developer crafting beautiful, responsive web experiences with modern technologies.
            </p>
          </div>

          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="#home" className="text-gray-400 hover:text-primary-400 transition-colors">Home</a>
              <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors">About</a>
              <a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors">Contact</a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <motion.button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-sm"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Top
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-1 flex-wrap">
            © {new Date().getFullYear()} Siti Nurul Khofifah. Made with
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}