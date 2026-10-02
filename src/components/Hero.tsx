'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiArrowDown } from 'react-icons/fi'

const techBadges = ['Java', 'Spring Boot', 'Microservices', 'Kafka', 'AWS', 'Docker']

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(108,143,255,0.15) 0%, transparent 70%)' }}
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(79,209,197,0.12) 0%, transparent 70%)' }}
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-bg3 border border-white/10 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent2 animate-pulse" />
          <span className="font-mono text-xs text-white/60 tracking-wider">AVAILABLE FOR NEW ROLES</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-7xl font-bold tracking-tight mb-4 leading-none"
        >
          <span className="text-white">Chaithanya</span>{' '}
          <span className="gradient-text">M.</span>
        </motion.h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="font-mono text-accent2 text-xl">{'>'}</span>
          <span className="text-xl sm:text-2xl text-white/70 font-light">Java Backend Developer</span>
          <span className="hidden sm:inline font-mono text-accent2 text-xl animate-pulse">_</span>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/50 text-lg max-w-2xl mb-8 leading-relaxed"
        >
          2+ years building scalable backend systems with Java, Spring Boot & Microservices.
          Delivered enterprise solutions at Tech Mahindra — OMA-DM device management for Verizon & AT&T.
          Currently building <span className="text-accent">Nakama ERP</span>.
        </motion.p>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {techBadges.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.06 }}
              className="tag-chip"
            >
              {t}
            </motion.span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap gap-4 mb-14"
        >
          <motion.button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 rounded-xl font-semibold text-sm text-bg"
            style={{ background: 'linear-gradient(135deg, #6c8fff 0%, #4fd1c5 100%)' }}
            whileHover={{ scale: 1.03, opacity: 0.9 }}
            whileTap={{ scale: 0.97 }}
          >
            View Projects
          </motion.button>
          <motion.button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 rounded-xl border border-white/15 text-white/80 font-medium text-sm hover:border-accent/50 hover:text-white hover:bg-white/5 transition-all duration-200"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Get In Touch
          </motion.button>
          <motion.a
            href="https://github.com/Chaithumoorpa"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border border-white/15 text-white/80 font-medium text-sm hover:border-white/30 hover:text-white hover:bg-white/5 transition-all duration-200 flex items-center gap-2"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <FiGithub size={16} />
            GitHub
          </motion.a>
        </motion.div>

        {/* Contact strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap gap-6 text-sm text-white/40"
        >
          <a href="mailto:chaithu.moorpa@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
            <FiMail size={14} />
            chaithu.moorpa@gmail.com
          </a>
          <span className="flex items-center gap-2">
            <FiPhone size={14} />
            +91-6302672993
          </span>
          <span className="flex items-center gap-2">
            <FiMapPin size={14} />
            Chennai, India
          </span>
          <a href="https://linkedin.com/in/chaithu-moorpa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent2 transition-colors">
            <FiLinkedin size={14} />
            LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-white/20 text-xs font-mono tracking-widest">SCROLL</span>
        <FiArrowDown className="text-white/20" size={16} />
      </motion.div>
    </section>
  )
}
