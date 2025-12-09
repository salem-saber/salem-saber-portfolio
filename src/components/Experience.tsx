'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BriefcaseIcon, CalendarIcon } from '@heroicons/react/24/outline'
import experiences from '@/data/experiences'
import useMounted from '@/hooks/useMounted'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const mounted = useMounted()

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
          animate={mounted && inView ? "visible" : "hidden"}
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
