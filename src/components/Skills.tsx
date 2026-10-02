'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillGroups = [
  {
    label: 'Backend',
    icon: '⚙️',
    skills: ['Java', 'Spring Boot', 'Spring MVC', 'JPA', 'Hibernate', 'Microservices', 'REST APIs', 'JWT', 'RBAC'],
  },
  {
    label: 'Messaging & Streaming',
    icon: '📡',
    skills: ['Apache Kafka', 'Event-Driven Architecture'],
  },
  {
    label: 'Frontend',
    icon: '🎨',
    skills: ['React', 'Next.js', 'TypeScript', 'Python', 'FastAPI'],
  },
  {
    label: 'Databases',
    icon: '🗄️',
    skills: ['PostgreSQL', 'MySQL', 'MSSQL'],
  },
  {
    label: 'DevOps & Cloud',
    icon: '☁️',
    skills: ['AWS', 'Docker', 'Jenkins', 'GitHub Actions', 'Maven', 'Linux', 'Tomcat'],
  },
  {
    label: 'Tools & Practices',
    icon: '🛠️',
    skills: ['Git', 'JUnit', 'Agile/Scrum', 'Jira', 'Postman'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-accent text-sm tracking-widest">02. SKILLS</span>
          <h2 className="text-4xl font-bold mt-2 text-white">Technical Arsenal</h2>
          <div className="mt-3 h-px w-24 bg-gradient-to-r from-accent to-accent2" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="card-hover p-6 rounded-2xl bg-bg2 border border-white/[0.07] relative overflow-hidden group"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 0%, rgba(108,143,255,0.08) 0%, transparent 60%)' }}
              />
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="font-semibold text-white/90 text-sm tracking-wide">{group.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span key={s} className="tag-chip">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
