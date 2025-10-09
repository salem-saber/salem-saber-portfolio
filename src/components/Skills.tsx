'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'PHP', level: 95 },
        { name: 'Go', level: 85 },
        { name: 'JavaScript', level: 88 },
        { name: 'Python', level: 82 },
        { name: 'TypeScript', level: 85 }
      ]
    },
    {
      title: 'Frameworks & Runtime',
      skills: [
        { name: 'Laravel', level: 92 },
        { name: 'CodeIgniter', level: 85 },
        { name: 'Node.js', level: 88 }
      ]
    },
    {
      title: 'SQL Databases',
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'PostgreSQL', level: 88 }
      ]
    },
    {
      title: 'NoSQL Databases',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'DynamoDB', level: 75 }
      ]
    },
    {
      title: 'Operating Systems',
      skills: [
        { name: 'Linux (CentOS, Ubuntu)', level: 88 },
        { name: 'Windows', level: 85 }
      ]
    },
    {
      title: 'DevOps & Infrastructure',
      skills: [
        { name: 'Docker', level: 90 },
        { name: 'CI/CD', level: 88 },
        { name: 'Kubernetes', level: 82 },
        { name: 'AWS', level: 85 },
        { name: 'RabbitMQ', level: 80 },
        { name: 'Messaging Systems', level: 85 }
      ]
    },
    {
      title: 'Caching & Performance',
      skills: [
        { name: 'Redis', level: 88 },
        { name: 'Memcache', level: 80 }
      ]
    },
    {
      title: 'Testing & Tools',
      skills: [
        { name: 'Unit Testing', level: 88 },
        { name: 'Integration Testing', level: 85 },
        { name: 'Functional Testing', level: 82 },
        { name: 'Git', level: 90 },
        { name: 'Composer', level: 85 },
        { name: 'Postman', level: 80 }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <section id="skills" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Technical <span className="text-blue-400">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Comprehensive expertise in backend development, DevOps practices, and scalable system architecture
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700"
              >
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Development Principles & Methodologies */}
          <motion.div variants={itemVariants} className="mt-12">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">
              Development Expertise & Methodologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'SOLID Principles', 'PSR Standards', 'Design Patterns', 'Architecture Patterns',
                'OOP', 'Microservices', 'REST API', 'Agile/Scrum Methodology', 'Code Reviews',
                'Performance Optimization', 'Scalable Systems', 'High Availability', 'Kernel',
                'Logstash', 'System Architecture'
              ].map((skill, index) => (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  className="px-4 py-2 bg-slate-700 text-gray-300 rounded-full text-sm font-medium hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Core Strengths */}
          <motion.div variants={itemVariants} className="mt-12 bg-slate-900/50 rounded-xl p-8 border border-slate-700">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">
              Core Strengths
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <h4 className="text-blue-400 font-semibold mb-3">Technical Leadership</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Mentoring and coaching new hires</li>
                  <li>• Code review and quality assurance</li>
                  <li>• Task analysis and project management</li>
                  <li>• Architecture design and implementation</li>
                </ul>
              </div>
              <div>
                <h4 className="text-blue-400 font-semibold mb-3">Performance Optimization</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Reduced delivery time by 180%</li>
                  <li>• Supported 300% user traffic growth</li>
                  <li>• Achieved 99.99% system uptime</li>
                  <li>• Cost reduction through optimization</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
