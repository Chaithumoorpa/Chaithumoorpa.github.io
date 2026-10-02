'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiSend, FiCheckCircle } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formsubmit.co/ajax/chaithu.moorpa@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, _subject: form.subject || `Portfolio contact from ${form.name}`, _replyto: form.email }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
    setTimeout(() => setStatus('idle'), 4000)
  }

  const inputClass = `w-full px-4 py-3 rounded-xl bg-bg3 border border-white/[0.08] text-white placeholder-white/25
    focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200 text-sm`

  return (
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-accent text-sm tracking-widest">06. CONTACT</span>
          <h2 className="text-4xl font-bold mt-2 text-white">Get In Touch</h2>
          <div className="mt-3 h-px w-24 bg-gradient-to-r from-accent to-accent2" />
          <p className="mt-6 text-white/50 text-lg max-w-xl leading-relaxed">
            I&apos;m actively looking for Java/Spring Boot backend roles. Whether you have an opportunity or just want to say hi — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="p-6 rounded-2xl bg-bg2 border border-white/[0.07]">
              <h3 className="text-white font-semibold mb-5">Contact Details</h3>
              <div className="space-y-4">
                <a href="mailto:chaithu.moorpa@gmail.com"
                  className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <FiMail size={15} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-white/30 font-mono">EMAIL</p>
                    <p className="text-sm">chaithu.moorpa@gmail.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 text-white/60">
                  <div className="w-9 h-9 rounded-lg bg-accent2/10 border border-accent2/20 flex items-center justify-center">
                    <FiPhone size={15} className="text-accent2" />
                  </div>
                  <div>
                    <p className="text-xs text-white/30 font-mono">PHONE</p>
                    <p className="text-sm">+91-6302672993</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <FiMapPin size={15} className="text-white/50" />
                  </div>
                  <div>
                    <p className="text-xs text-white/30 font-mono">LOCATION</p>
                    <p className="text-sm">Chennai, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-bg2 border border-white/[0.07]">
              <h3 className="text-white font-semibold mb-4">Find Me Online</h3>
              <div className="space-y-3">
                <a href="https://github.com/Chaithumoorpa" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                  <FiGithub size={18} />
                  <span className="text-sm">github.com/Chaithumoorpa</span>
                </a>
                <a href="https://linkedin.com/in/chaithu-moorpa" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors">
                  <FiLinkedin size={18} />
                  <span className="text-sm">linkedin.com/in/chaithu-moorpa</span>
                </a>
                <a href="https://leetcode.com/u/chaithanyamoorpa/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors">
                  <SiLeetcode size={18} />
                  <span className="text-sm">leetcode.com/u/chaithanyamoorpa</span>
                </a>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-accent2/5 border border-accent2/20 flex items-start gap-3">
              <span className="w-2.5 h-2.5 mt-1.5 rounded-full bg-accent2 animate-pulse flex-shrink-0" />
              <div>
                <p className="text-accent2 font-semibold text-sm">Open to Opportunities</p>
                <p className="text-white/50 text-xs mt-1 leading-relaxed">Actively seeking Java/Spring Boot backend roles. Available immediately.</p>
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-7 rounded-2xl bg-bg2 border border-white/[0.07] space-y-4">
              <h3 className="text-white font-semibold mb-2">Send a Message</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-white/40 font-mono mb-1.5">YOUR NAME</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange}
                    placeholder="John Doe" required className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs text-white/40 font-mono mb-1.5">YOUR EMAIL</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="john@company.com" required className={inputClass} />
                </div>
              </div>

              <div>
                <label className="block text-xs text-white/40 font-mono mb-1.5">SUBJECT</label>
                <input type="text" name="subject" value={form.subject} onChange={handleChange}
                  placeholder="Java Backend Role at Your Company" className={inputClass} />
              </div>

              <div>
                <label className="block text-xs text-white/40 font-mono mb-1.5">MESSAGE</label>
                <textarea name="message" value={form.message} onChange={handleChange}
                  placeholder="Hi Chaithanya, I'd like to discuss an opportunity..."
                  required rows={5} className={`${inputClass} resize-none`} />
              </div>

              <motion.button
                type="submit"
                disabled={status !== 'idle'}
                className={`w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 ${
                  status === 'success'
                    ? 'bg-accent2/20 border border-accent2/40 text-accent2'
                    : 'text-bg hover:opacity-90 disabled:opacity-60'
                }`}
                style={status !== 'success' ? { background: 'linear-gradient(135deg, #6c8fff 0%, #4fd1c5 100%)' } : {}}
                whileHover={status === 'idle' ? { scale: 1.02 } : {}}
                whileTap={status === 'idle' ? { scale: 0.98 } : {}}
              >
                {status === 'idle' && <><FiSend size={15} /> Send Message</>}
                {status === 'sending' && <><span className="animate-spin">⟳</span> Sending...</>}
                {status === 'error' && <>Failed — email me directly</>}
                {status === 'success' && <><FiCheckCircle size={15} /> Message sent!</>}
              </motion.button>

              <p className="text-center text-white/25 text-xs font-mono">
                Delivered straight to my inbox · No data stored
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
