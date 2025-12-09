'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDownIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'
import useMounted from '@/hooks/useMounted'

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Initialize particles with proper typing to avoid SSR mismatch
  const [particles, setParticles] = useState<Array<{
    id: number;
    left: number;
    top: number;
    animateX: number;
    animateY: number;
    duration: number;
    delay: number;
  }>>([])

  // Generate particles only on client side after component mounts
  useEffect(() => {
    const generatedParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animateX: Math.random() * 100 - 50,
      animateY: Math.random() * 100 - 50,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }))
    setParticles(generatedParticles)
  }, [])

  const mounted = useMounted()

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20"
            animate={{
              x: [0, particle.animateX],
              y: [0, particle.animateY],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Salem Saber
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <div suppressHydrationWarning className="text-2xl md:text-4xl text-gray-300 mb-6 h-20 flex items-center justify-center">
              {mounted ? (
                <TypeAnimation
                  sequence={[
                    'Senior Backend Engineer',
                    2000,
                    'PHP & Laravel Expert',
                    2000,
                    'Scalable Systems Architect',
                    2000,
                    'Performance Optimization Specialist',
                    2000,
                    'CI/CD Pipeline Expert',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              ) : (
                <span>Senior Backend Engineer</span>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-400 text-sm mb-12"
          >
            <a href="mailto:salem.saber97@gmail.com" className="hover:text-blue-400 transition-colors">
              salem.saber97@gmail.com
            </a>
            <span className="hidden sm:block">•</span>
            <a href="tel:+201140366864" className="hover:text-blue-400 transition-colors">
              +20 114 036 6864
            </a>
            <span className="hidden sm:block">•</span>
            <a
              href="https://linkedin.com/in/salem-saber"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
            <span className="hidden sm:block">•</span>
            <a
              href="https://github.com/salem-saber"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              GitHub
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-8"
          >
            <motion.button
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={scrollToAbout}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <ArrowDownIcon className="w-8 h-8 mx-auto" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
