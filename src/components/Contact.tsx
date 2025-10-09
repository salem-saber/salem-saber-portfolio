'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  EnvelopeIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      label: 'Email',
      value: 'salem.saber97@gmail.com',
      href: 'mailto:salem.saber97@gmail.com',
      isHeroIcon: true
    },
    {
      icon: PhoneIcon,
      label: 'Phone',
      value: '+20 114 036 6864',
      href: 'tel:+201140366864',
      isHeroIcon: true
    },
    {
      icon: null,
      label: 'LinkedIn',
      value: 'linkedin.com/in/salem-saber',
      href: 'https://linkedin.com/in/salem-saber',
      isHeroIcon: false,
      logoSvg: (
        <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      icon: null,
      label: 'GitHub',
      value: 'github.com/salem-saber',
      href: 'https://github.com/salem-saber',
      isHeroIcon: false,
      logoSvg: (
        <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    }
  ] as const

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
          animate={inView ? "visible" : "hidden"}
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
