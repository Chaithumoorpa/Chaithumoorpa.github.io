'use client'

import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="py-10 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-sm flex items-center gap-1.5">
          Built with <FiHeart size={12} className="text-accent" /> by{' '}
          <span className="gradient-text font-medium">Chaithanya M</span>
          <span className="text-white/20 ml-1">· {year}</span>
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/Chaithumoorpa" target="_blank" rel="noopener noreferrer"
            className="text-white/30 hover:text-white transition-colors">
            <FiGithub size={18} />
          </a>
          <a href="https://linkedin.com/in/chaithu-moorpa" target="_blank" rel="noopener noreferrer"
            className="text-white/30 hover:text-accent transition-colors">
            <FiLinkedin size={18} />
          </a>
          <a href="https://leetcode.com/u/chaithanyamoorpa/" target="_blank" rel="noopener noreferrer"
            className="text-white/30 hover:text-accent transition-colors">
            <SiLeetcode size={18} />
          </a>
          <a href="mailto:chaithu.moorpa@gmail.com"
            className="text-white/30 hover:text-accent2 transition-colors">
            <FiMail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
