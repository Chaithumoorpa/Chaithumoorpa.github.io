'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const projects = [
  {
    name: 'Nakama ERP',
    type: 'Personal Project · Mar 2026 – Present',
    description: 'Business management (ERP) application for inventory, billing, orders, and staff management. REST backend with JWT login and role-based access for owners, managers, and staff, plus offline data sync so shop devices keep working without internet and sync safely when back online.',
    tech: ['Java', 'Spring Boot', 'REST APIs', 'JWT', 'RBAC'],
    github: 'https://github.com/Chaithumoorpa',
    live: null,
    status: 'in-progress',
    featured: true,
  },
  {
    name: 'SVVD Thorur Temple Portal',
    type: 'Personal Project · Jan 2026 – Present',
    description: 'Live temple website with online seva booking and an admin portal for donations, accounts, and content. Runs on AWS with Docker, PostgreSQL, and automated GitHub Actions CI/CD deployment.',
    tech: ['Python', 'FastAPI', 'Next.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker'],
    github: 'https://github.com/Chaithumoorpa',
    live: 'https://svvdthorur.org',
    status: 'live',
    featured: true,
  },
  {
    name: 'OMA-DM Device Management',
    type: 'Enterprise · Tech Mahindra',
    description: 'Spring Boot backend for Verizon & AT&T device management, built on Controller–Service–Repository architecture with SyncML request/response workflows, Spring Data JPA, and MSSQL persistence.',
    tech: ['Java', 'Spring Boot', 'Spring Data JPA', 'MSSQL'],
    github: null,
    live: null,
    status: 'enterprise',
    featured: false,
  },
  {
    name: 'OMA-DM Test Server',
    type: 'Internal Tool · Tech Mahindra',
    description: 'Spring Boot test server simulating OMA-DM carrier operations for device certification and provisioning validation. REST endpoints for command scheduling and response processing, with a React frontend for test configuration, command triggering, and real-time response visualization.',
    tech: ['Java', 'Spring Boot', 'React', 'REST APIs'],
    github: null,
    live: null,
    status: 'enterprise',
    featured: false,
  },
  {
    name: 'Google GChip Automation',
    type: 'Automation · Tech Mahindra',
    description: 'Python automation framework built from scratch for validating Google SoC subsystems (CPU, GPU, DDR, DPU, VPU), integrating Jenkins, ADB, log parsing, and automated reporting.',
    tech: ['Python', 'Jenkins', 'ADB'],
    github: null,
    live: null,
    status: 'enterprise',
    featured: false,
  },
]

const statusConfig: Record<string, { label: string; textColor: string; dotColor: string; pulse: boolean }> = {
  'in-progress': { label: 'In Progress', textColor: 'text-yellow-400', dotColor: 'bg-yellow-400', pulse: true },
  'live': { label: 'Live', textColor: 'text-accent2', dotColor: 'bg-accent2', pulse: false },
  'enterprise': { label: 'Enterprise', textColor: 'text-accent', dotColor: 'bg-accent', pulse: false },
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-accent text-sm tracking-widest">04. PROJECTS</span>
          <h2 className="text-4xl font-bold mt-2 text-white">Things I&apos;ve Built</h2>
          <div className="mt-3 h-px w-24 bg-gradient-to-r from-accent to-accent2" />
        </motion.div>

        {/* Featured */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {projects.filter(p => p.featured).map((project, i) => {
            const s = statusConfig[project.status]
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="card-hover p-7 rounded-2xl bg-bg2 border border-white/[0.07] relative overflow-hidden group flex flex-col"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-accent to-accent2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at 50% 0%, rgba(108,143,255,0.07) 0%, transparent 60%)' }}
                />

                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`w-2 h-2 rounded-full ${s.dotColor} ${s.pulse ? 'animate-pulse' : ''}`} />
                      <span className={`font-mono text-xs ${s.textColor}`}>{s.label}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{project.name}</h3>
                    <p className="text-white/40 text-xs mt-0.5 font-mono">{project.type}</p>
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all">
                        <FiGithub size={16} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 hover:bg-accent/20 text-white/50 hover:text-accent transition-all">
                        <FiExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-white/55 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="tag-chip">{t}</span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Other projects */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {projects.filter(p => !p.featured).map((project, i) => {
            const s = statusConfig[project.status]
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="card-hover p-5 rounded-2xl bg-bg2 border border-white/[0.07] relative group overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at 50% 0%, rgba(108,143,255,0.06) 0%, transparent 60%)' }}
                />
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${s.dotColor}`} />
                  <span className={`font-mono text-xs ${s.textColor}`}>{s.label}</span>
                </div>
                <h3 className="font-semibold text-white text-base mb-1">{project.name}</h3>
                <p className="text-white/40 text-xs font-mono mb-3">{project.type}</p>
                <p className="text-white/50 text-xs leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tech.slice(0, 4).map((t) => (
                    <span key={t} className="tag-chip" style={{ fontSize: '0.65rem', padding: '1px 8px' }}>{t}</span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
