'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BriefcaseIcon, CalendarIcon } from '@heroicons/react/24/outline'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const experiences = [
    {
      title: 'Senior Backend Engineer',
      company: 'Afaqy',
      location: 'Remote',
      duration: '08/2024 - Present',
      description: [
        'Design and implement new features following company architecture and guidelines',
        'Interact with hardware and software to produce real time results',
        'Lead backend development initiatives using modern PHP frameworks',
        'Collaborate with cross-functional teams to deliver scalable solutions'
      ],
      technologies: ['PHP', 'Laravel', 'MySQL', 'Redis', 'Docker', 'AWS']
    },
    {
      title: 'Senior Backend Engineer',
      company: 'Trufla',
      location: 'Remote',
      duration: '02/2023 - 07/2024',
      description: [
        'Designed high-availability solutions, achieving 99.99% uptime for critical services through redundancy and failover strategies',
        'Enhanced database design to ensure seamless scalability, optimizing performance and efficiency',
        'Implemented a scalable backend architecture that supported a 300% increase in user traffic over 6 months',
        'Ensured seamless user experience during rapid growth phases'
      ],
      technologies: ['PHP', 'Laravel', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS']
    },
    {
      title: 'Backend Engineer',
      company: 'Qafeer',
      location: 'Remote',
      duration: '07/2020 - 01/2023',
      description: [
        'Successfully containerized applications using Docker that impact 180% in delivery date, streamlining deployment and scaling processes',
        'Improve business model to satisfy over 500K users in 3 months',
        'Identified cost-saving measures, reducing infrastructure costs by 50% while maintaining optimal system performance',
        'Established robust CI/CD pipelines for faster deployment cycles'
      ],
      technologies: ['PHP', 'Laravel', 'CodeIgniter', 'MySQL', 'Redis', 'Docker', 'CI/CD']
    },
    {
      title: 'Backend Engineer',
      company: 'Invstoc',
      location: 'Remote',
      duration: '03/2019 - 06/2020',
      description: [
        'Monitoring servers reduce cost by 20% in 4 months by doing query optimization and improve services',
        'Develop and deploy new integrations in stock market to improve performance and ensure availability',
        'Implemented performance monitoring and optimization strategies',
        'Built robust APIs for financial data processing'
      ],
      technologies: ['PHP', 'MySQL', 'Redis', 'Linux', 'Performance Optimization']
    },
    {
      title: 'Backend Engineer',
      company: 'Egy Connect',
      location: 'Egypt',
      duration: '01/2017 - 03/2019',
      description: [
        'Develop and maintain custom web apps with native PHP and custom-made PHP framework',
        'Improved customer satisfaction over 150% for delivered software',
        'Established a robust continuous integration and continuous deployment (CI/CD) pipeline, reducing release features in 2 weeks',
        'Built scalable web applications from scratch using custom PHP frameworks'
      ],
      technologies: ['PHP', 'MySQL', 'Custom Framework', 'Linux', 'Git']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Professional <span className="text-blue-400">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              9 years of backend engineering expertise, building scalable solutions and leading technical teams
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-500/20 p-3 rounded-lg">
                      <BriefcaseIcon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-blue-400 font-medium mb-2">
                        {experience.company}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400 text-sm">
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="w-4 h-4" />
                          {experience.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="text-gray-300 space-y-2 mb-4">
                  {experience.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-blue-400 mr-3 mt-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
