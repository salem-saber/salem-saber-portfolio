'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CodeBracketIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import projects from '@/data/projects'

const Projects = () => {
  // selectedProject: index of project, selectedImage: index of image in that project
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [selectedImage, setSelectedImage] = useState<number>(0)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const lastActiveRef = useRef<HTMLElement | null>(null)

  const openProject = (index: number) => {
    // remember the element that had focus so we can restore it when modal closes
    lastActiveRef.current = document.activeElement as HTMLElement | null
    setSelectedProject(index)
    setSelectedImage(0)
  }

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null)
      // Only handle left/right if selected project has images
      if (selectedProject !== null && projects[selectedProject] && projects[selectedProject].images.length > 0) {
        if (e.key === 'ArrowLeft') {
          setSelectedImage((s) => {
            const len = projects[selectedProject!].images.length
            return (s - 1 + len) % len
          })
        }
        if (e.key === 'ArrowRight') {
          setSelectedImage((s) => {
            const len = projects[selectedProject!].images.length
            return (s + 1) % len
          })
        }
      }
    }
    if (selectedProject !== null) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [selectedProject])

  // Focus the close button when modal opens (and restore focus to opener when it closes)
  useEffect(() => {
    if (selectedProject !== null) {
      setTimeout(() => closeButtonRef.current?.focus(), 50)
    } else {
      setTimeout(() => lastActiveRef.current?.focus(), 50)
    }
  }, [selectedProject])

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  // Prevent hydration mismatches by only triggering animations after client mount
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  // animation variants (were missing and caused `containerVariants` not defined)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  // Safe reference to the currently selected project (or undefined)
  const activeProject = selectedProject !== null ? projects[selectedProject] : undefined

  const hasLink = (l?: string) => typeof l === 'string' && l.trim().length > 0
  const isExternal = (l?: string) => typeof l === 'string' && /^(https?:)?\/\//i.test(l)

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial="hidden" animate={mounted && inView ? 'visible' : 'hidden'} variants={containerVariants}>
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Selected <span className="text-blue-400">Projects</span></h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              A curated selection of backend systems, integrations, and infrastructure projects demonstrating scalable design and operational excellence.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants} className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-4 gap-4">
                  {/* Image thumbnail: render only when project has images */}
                  {project.images && project.images.length > 0 ? (
                    <div className="w-full lg:w-72 h-40 relative rounded overflow-hidden border border-slate-700">
                      {/* Thumbnail - clicking opens modal */}
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={() => openProject(index)}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { openProject(index) } }}
                        className="w-full h-full block focus:outline-none"
                      >
                        <Image src={project.images[0]} alt={project.title} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
                      </div>
                    </div>
                  ) : null}

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-blue-500/20 p-3 rounded-lg">
                          <CodeBracketIcon className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                        </div>
                      </div>
                    </div>

                    <ul className="text-gray-300 space-y-2 mb-4 mt-4">
                      {project.description.map((d, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-400 mr-3 mt-2">•</span>
                          {d}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">{tech}</span>
                      ))}
                    </div>

                    {hasLink(project.link) ? (
                      <a
                        href={project.link}
                        target={isExternal(project.link) ? '_blank' : undefined}
                        rel={isExternal(project.link) ? 'noopener noreferrer' : undefined}
                        className="text-blue-400 font-medium hover:underline"
                      >
                        View Project
                      </a>
                    ) : (
                      <span className="text-sm text-gray-500">Private / internal project</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Modal */}
          {activeProject !== undefined && (
            <div
              role="dialog"
              aria-modal="true"
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="fixed inset-0 bg-black/60" onClick={() => setSelectedProject(null)} />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="relative z-10 max-w-4xl w-full bg-slate-900/95 rounded-lg shadow-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                  <div className="flex justify-end p-3">
                  <button
                    ref={closeButtonRef}
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-300 hover:text-white focus:outline-none"
                    aria-label="Close project details"
                  >
                    ✕
                  </button>
                </div>
                  <div className="px-6 pb-6">
                    <div className="relative w-full h-[min(70vh,600px)] rounded overflow-hidden border border-slate-700 bg-black">
                      <Image
                        src={activeProject.images[selectedImage % activeProject.images.length]}
                        alt={`${activeProject.title} - image ${selectedImage + 1}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 80vw"
                        className="object-contain bg-black"
                      />

                      {/* Title overlay */}
                      <div className="absolute left-4 top-4 bg-black/50 text-white px-3 py-1 rounded-md text-sm">
                        {activeProject.title}
                      </div>

                      {/* Prev / Next controls */}
                      <button
                        onClick={() => setSelectedImage((s) => (s - 1 + activeProject.images.length) % activeProject.images.length)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
                        aria-label="Previous image"
                      >
                        ‹
                      </button>
                      <button
                        onClick={() => setSelectedImage((s) => (s + 1) % activeProject.images.length)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
                        aria-label="Next image"
                      >
                        ›
                      </button>
                    </div>

                    {/* Thumbnails row */}
                    <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                      {activeProject.images.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedImage(i)}
                          className={`flex-none w-24 h-16 relative rounded overflow-hidden border ${i === selectedImage ? 'border-blue-400' : 'border-slate-700'}`}
                          aria-label={`Show image ${i + 1}`}
                        >
                          <Image src={img} alt={`thumb-${i}`} fill className="object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>

              </motion.div>
            </div>
          )}
         </motion.div>
       </div>
     </section>
   )
 }

 export default Projects
