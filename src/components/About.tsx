'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import stats from '@/data/stats'
import useMounted from '@/hooks/useMounted'

const About = () => {
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
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={mounted && inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image Section */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative w-full mx-auto">
              <div className="w-full h-[600px] rounded-xl overflow-hidden border-2 border-blue-500/30 shadow-lg shadow-blue-500/20">
                <Image
                  src="/salem-saber.jpg"
                  alt="Salem Saber - Senior Backend Engineer"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">
                About <span className="text-blue-400">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            </div>

            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                I&apos;m Salem Saber, a Senior Backend Engineer with 9 years of expertise in building
                scalable, high-performance backend solutions. I possess a strong foundation in writing
                clean, maintainable code and developing robust systems that serve hundreds of thousands of users.
              </p>

              <p>
                My problem-solving abilities shine in SaaS environments, where I excel at independently
                delivering top-notch solutions. I have extensive experience in PHP, Laravel, and modern
                DevOps practices, with proven results including reducing delivery times by 180% and
                supporting 300% user traffic growth.
              </p>

              <p>
                I&apos;m passionate about collaboration, code reviews, task analysis, and mentoring new hires
                to foster a culture of best practices and continuous improvement. My expertise includes
                containerization with Docker, CI/CD pipelines, and cloud infrastructure optimization.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center p-4 bg-slate-700/50 rounded-lg"
                >
                  <div className="text-2xl font-bold text-blue-400 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <motion.div variants={itemVariants} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
              <h3 className="text-lg font-semibold text-white mb-2">Education</h3>
              <div className="text-gray-300">
                <p className="font-medium">Bachelor of Science in Computer Science</p>
                <p className="text-sm text-gray-400">October 6 University, Egypt</p>
                <p className="text-sm text-gray-400">September 2015 - March 2021</p>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="pt-6 flex gap-4">
              <a
                href="/Salem Saber - Senior Backend Engineer.pdf"
                download="Salem Saber - Senior Backend Engineer.pdf"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-12 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 inline-block"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
