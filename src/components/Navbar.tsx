'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg/80 backdrop-blur-xl border-b border-white/5 shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-mono text-sm tracking-widest font-medium"
            whileHover={{ scale: 1.05 }}
          >
            <span className="gradient-text font-bold text-base">CM</span>
            <span className="text-white/40 mx-1">/</span>
            <span className="text-white/60">dev</span>
          </motion.button>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className="text-sm text-white/60 hover:text-white transition-colors duration-200 relative group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-accent to-accent2 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <motion.a
              href="mailto:chaithu.moorpa@gmail.com"
              className="ml-2 px-4 py-1.5 rounded-full border border-accent/50 text-accent text-sm font-medium hover:bg-accent/10 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Hire Me
            </motion.a>
          </nav>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white/70 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white/70 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white/70 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-40 bg-bg2/95 backdrop-blur-xl border-b border-white/5 py-6 px-6 flex flex-col gap-4 md:hidden"
          >
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className="text-left text-white/70 hover:text-white text-base py-1 transition-colors"
              >
                {l.label}
              </button>
            ))}
            <a
              href="mailto:chaithu.moorpa@gmail.com"
              className="mt-2 self-start px-5 py-2 rounded-full bg-accent/10 border border-accent/40 text-accent text-sm font-medium"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
