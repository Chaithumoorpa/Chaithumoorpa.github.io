'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experiences = [
  {
    company: 'Tech Mahindra',
    role: 'Software Engineer',
    period: 'Dec 2023 – Feb 2026',
    location: 'Chennai, India',
    tech: ['Java', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'MSSQL', 'Docker', 'Jenkins', 'JUnit'],
    highlights: [
      'Developed and maintained Spring Boot REST APIs and backend services for an enterprise OMA-DM Device Management Platform (Verizon & AT&T)',
      'Integrated backend services with MSSQL using Spring Data JPA and Hibernate for data retrieval and command tracking',
      'Investigated production issues by analyzing SyncML transactions, application logs, and MSSQL records; identified root causes, improved exception handling/logging, and validated fixes with JUnit',
      'Deployed services on Apache Tomcat via Docker, built Jenkins CI/CD pipelines, and collaborated with QA, Android, and firmware teams in Agile/Scrum sprints',
      'Developed reusable automation modules for firmware validation, regression execution, and device log analysis, improving debugging efficiency for Google firmware engineers',
    ],
  },
  {
    company: 'Cognizant',
    role: 'Programmer Trainee',
    period: 'Oct 2021 – Mar 2022',
    location: '',
    tech: ['Java', 'Spring Boot', 'Hibernate', 'Maven', 'Git', 'JUnit'],
    highlights: [
      'Trained in Core Java, Spring Boot, REST APIs, Hibernate, Maven, and Git',
      'Debugged Java/SQL modules for an enterprise banking project and supported unit testing using JUnit',
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-24 px-6 bg-bg2/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-accent text-sm tracking-widest">03. EXPERIENCE</span>
          <h2 className="text-4xl font-bold mt-2 text-white">Work History</h2>
          <div className="mt-3 h-px w-24 bg-gradient-to-r from-accent to-accent2" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent2 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative pl-12 md:pl-20"
              >
                <div className="absolute left-2 md:left-6 top-6 w-4 h-4 rounded-full border-2 border-accent bg-bg flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                </div>

                <div className="card-hover p-6 md:p-8 rounded-2xl bg-bg2 border border-white/[0.07] group relative overflow-hidden">
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'radial-gradient(circle at 0% 0%, rgba(108,143,255,0.06) 0%, transparent 50%)' }}
                  />
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="gradient-text font-semibold text-sm">{exp.company}</span>
                        {exp.location && <><span className="text-white/30">·</span>
                        <span className="text-white/40 text-sm">{exp.location}</span></>}
                      </div>
                    </div>
                    <span className="font-mono text-xs text-accent2 bg-accent2/10 px-3 py-1 rounded-full border border-accent2/20 whitespace-nowrap self-start">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((h, hi) => (
                      <li key={hi} className="flex items-start gap-3 text-white/60 text-sm leading-relaxed">
                        <span className="text-accent mt-1 flex-shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="tag-chip">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
