'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import contactInfo from '@/data/contact'
import useMounted from '@/hooks/useMounted'

const Contact = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="contact" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={mounted && inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Get In <span className="text-blue-400">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Ready to build scalable backend solutions? Let&apos;s discuss your next project and how I can help bring your ideas to life.
            </p>
          </motion.div>

          {/* Unified Contact Information */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex flex-col items-center text-center p-6 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-all duration-300"
                  >
                    <div className="bg-blue-500/20 p-3 rounded-lg mb-4">
                      {info.isHeroIcon && info.icon ? (
                        <info.icon className="w-6 h-6 text-blue-400" />
                      ) : (
                        info.logoSvg
                      )}
                    </div>
                    <div className="w-full">
                      <p className="text-gray-400 text-sm mb-2">{info.label}</p>
                      <a
                        href={info.href}
                        target={info.label === 'LinkedIn' || info.label === 'GitHub' ? '_blank' : '_self'}
                        rel={info.label === 'LinkedIn' || info.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                        className="text-white font-medium hover:text-blue-400 transition-colors block break-words"
                      >
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Simple Copyright Footer */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="border-t border-slate-700 pt-8">
              <p className="text-gray-400">
                © 2025 Salem Saber. All rights reserved.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
