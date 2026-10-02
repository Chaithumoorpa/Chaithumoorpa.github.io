'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Anna University',
    period: '2021 – 2023',
    grade: 'CGPA 8.3 / 10',
    icon: '🎓',
  },
  {
    degree: 'Bachelor of Science — Computer Science',
    institution: 'University of Madras',
    period: '2018 – 2021',
    grade: 'B.Sc CS',
    icon: '📚',
  },
]

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="py-24 px-6 bg-bg2/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-accent text-sm tracking-widest">05. EDUCATION</span>
          <h2 className="text-4xl font-bold mt-2 text-white">Academic Background</h2>
          <div className="mt-3 h-px w-24 bg-gradient-to-r from-accent to-accent2" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="card-hover p-7 rounded-2xl bg-bg2 border border-white/[0.07] relative group overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 0%, rgba(79,209,197,0.07) 0%, transparent 60%)' }}
              />
              <span className="text-4xl mb-4 block">{edu.icon}</span>
              <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
              <p className="text-accent2 text-sm font-medium mb-3">{edu.institution}</p>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-white/40">{edu.period}</span>
                <span className="font-mono text-xs text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">{edu.grade}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
