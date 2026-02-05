import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, ExternalLink, ChevronRight } from 'lucide-react';

const experiences = [
  {
    title: "Frontend Web Developer",
    company: "Digital Center",
    location: "Jakarta, Indonesia",
    period: "Feb 2023 - Present",
    type: "Full-time",
    description: "Leading frontend development for enterprise applications, implementing modern React patterns and best practices.",
    responsibilities: [
      "Develop user interfaces using HTML, CSS, JavaScript, and React/Next.js",
      "Integrate backend API data into frontend interfaces using RTK Query",
      "Implement responsive layouts for desktop, tablet, and mobile",
      "Ensure visual consistency and UX quality across all devices",
      "Collaborate with UI/UX designers, backend developers, and QA teams",
      "Apply best practices: clean code, reusable components, Git version control"
    ],
    projects: [
      { name: "OML", tech: "React.js" },
      { name: "KB Bank Company Website", tech: "JexFrame, CSS, HTML" },
      { name: "IFG Life DPLK System", tech: "Next.js, TypeScript, RTK Query" }
    ],
    color: "bg-gradient-to-r from-gray-400 to-gray-700 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 text-gray-900 dark:text-gray-100"
  },
  {
    title: "Frontend Developer & UI/UX Designer",
    company: "Zegen Solusi Mandiri",
    location: "Jakarta, Indonesia",
    period: "May 2020 - Dec 2022",
    type: "Full-time",
    description: "Multidisciplinary role combining frontend development, UI/UX design, and system analysis.",
    responsibilities: [
      "Developed and maintained frontend applications using React.js",
      "Designed user interfaces and prototypes using Figma",
      "Conducted system analysis for new feature implementations",
      "Collaborated with stakeholders to gather requirements",
      "Created wireframes, mockups, and interactive prototypes",
      "Ensured design consistency across all products"
    ],
    projects: [
        { name: "CRM", tech: "Laravel, Ajax" },
        { name: "BNI Merchant", tech: "Vue.js, Axios & UI UX Design" },
        { name: "BTN Smart V3", tech: "React.js" },
        { name: "OML", tech: "React.js" },
        { name: "Sinotif", tech: "Next.js" },
        { name: "CRPRO", tech: "System Analyst" },
    ],
    color: "bg-gradient-to-r from-gray-400 to-gray-700 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 text-gray-900 dark:text-gray-100"
  }
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="experience" className="section-padding bg-gray-50/50 dark:bg-gray-900/50 relative overflow-hidden">
   
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl">
          <div className="absolute top-20 left-0 w-72 h-72 bg-primary-200/40 dark:bg-primary-900/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-0 w-80 h-80 bg-accent-purple/30 dark:bg-accent-purple/10 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 text-gray-900 dark:text-gray-100 text-sm font-medium mb-4">
            Work Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-gray-900 dark:text-white mb-4">
            My Professional
            <span className="gradient-text"> Journey</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            4+ years of experience building web applications and creating digital experiences.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b  from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 text-gray-900 dark:text-gray-100 transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-8 md:text-right md:ml-0 md:mr-auto md:w-1/2' : 'md:pl-8 md:ml-auto md:w-1/2'
              } pl-8 md:pl-0`}
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.2 }}
                className={`absolute top-0 ${
                  index % 2 === 0 ? 'left-0 md:left-auto md:-right-4' : 'left-0 md:-left-4'
                } w-8 h-8 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center shadow-lg transform -translate-x-1/2 md:translate-x-0`}
              >
                <Briefcase className="w-4 h-4 text-white" />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 lg:p-8 text-left"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-lg font-semibold gradient-text">{exp.company}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.color} text-white`}>
                    {exp.type}
                  </span>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Key Responsibilities:
                  </h4>
                  <ul className="space-y-1">
                    {exp.responsibilities.slice(0, 4).map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <ChevronRight className="w-4 h-4 text-gray-900 dark:text-gray-100 flex-shrink-0 mt-0.5" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
                {exp.projects.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Key Projects:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.projects.map((project, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300"
                        >
                          {project.name}
                          <span className="text-gray-400 dark:text-gray-400 ml-1">• {project.tech}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}