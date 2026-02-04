import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Github, Linkedin, Dribbble, MapPin, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-purple/10 dark:from-gray-900 dark:via-gray-900 dark:to-accent-purple/10" />
        
        {/* Animated Blobs */}
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-r from-primary-400/30 to-accent-purple/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-accent-pink/30 to-accent-orange/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-accent-teal/20 to-primary-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-custom section-padding pt-24 md:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 text-gray-900 dark:text-gray-100 text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Available for new projects
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-tight mb-6"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Siti Nurul</span>
              <br />
              <span className="text-gray-900 dark:text-white">Khofifah</span>
            </motion.h1>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-2 text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-6"
            >
              <span className="font-semibold text-gray-900 dark:text-white">Frontend Web Developer</span>
              <span className="hidden sm:inline">•</span>
              <span>UI/UX Enthusiast</span>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-8"
            >
              <MapPin className="w-4 h-4" />
              <span>Bogor, Indonesia</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-xl"
            >
              With <span className="font-semibold text-gray-900">4+ years</span> of experience crafting beautiful, 
              responsive web interfaces. Specialized in React/Next.js, TypeScript, and modern CSS frameworks. 
              Passionate about creating seamless user experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <motion.a
                href="#contact"
                className="btn-primary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Let's Talk
              </motion.a>
              <motion.a
                href="/cv-siti-nurul-khofifah.pdf"
                download
                className="btn-secondary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4"
            >
              <span className="text-sm text-gray-500 dark:text-gray-400">Follow me:</span>
              {[
                { icon: Github, href: 'https://www.linkedin.com/in/siti-nurul-khofifah-a713b0187/', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/sitinurulkhofifah', label: 'LinkedIn' },
                { icon: Dribbble, href: 'https://dribbble.com/offii', label: 'Dribbble' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-900 dark:hover:bg-primary-900/30 hover:text-gray-200 dark:hover:text-gray-900 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              
              <motion.div
                className="absolute -top-4 -left-4 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-gray-900 via-gray-500 to-gray-900 rounded-2xl -z-10"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-accent-pink to-accent-orange rounded-2xl -z-10"
                animate={{ rotate: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              />
              
              <motion.div
                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden glass-card p-2"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
               
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary-100 to-accent-purple/20 dark:from-gray-800 dark:to-accent-purple/20 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/profile.jpeg"
                    alt="Siti Nurul Khofifah"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden flex-col items-center justify-center text-center p-8">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-gray-900 via-gray-500 to-gray-900 flex items-center justify-center mb-4">
                      <span className="text-5xl font-bold text-white">SN</span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Add your photo at<br />
                      <code className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded mt-1 inline-block">
                        /public/images/profile.jpg
                      </code>
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -left-6 md:-left-12 top-1/4 glass-card px-4 py-3 rounded-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-gray-900 via-gray-500 to-gray-900 flex items-center justify-center">
                    <span className="text-lg">⚛️</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Specialist</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">React/Next.js</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-4 md:-right-10 bottom-1/4 glass-card px-4 py-3 rounded-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-gray-900 via-gray-500 to-gray-900 flex items-center justify-center">
                    <span className="text-lg">🎨</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Also Love</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">UI/UX Design</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute left-1/2 -translate-x-1/2 -bottom-6 glass-card px-5 py-3 rounded-xl"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">✨</span>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">4+ Years Experience</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-sm text-gray-500 dark:text-gray-400">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5bg-gradient-to-r from-gray-900 via-gray-500 to-gray-900" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}