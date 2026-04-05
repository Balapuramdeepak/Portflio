import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

const navLinks = ['About', 'Experience', 'Projects', 'Achievements', 'Contact']

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="relative border-t border-white/[0.06] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030306] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo / Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-2.5"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                <span className="font-display font-bold text-white text-base">T</span>
              </div>
              <span className="font-display font-semibold text-slate-300">
                Thrisha Reddy<span className="gradient-text">.</span>
              </span>
            </motion.button>
            <p className="text-slate-600 text-xs max-w-[200px] text-center md:text-left leading-relaxed">
              Full Stack Developer · Building elegant solutions
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className="text-slate-600 hover:text-violet-400 text-sm transition-colors duration-200"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: personalInfo.github, label: 'GitHub' },
              { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 glass glass-hover rounded-xl text-slate-600 hover:text-violet-400 transition-all duration-200"
                aria-label={label}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-700 text-xs flex items-center gap-1.5">
            Designed & built with
            <Heart size={11} className="text-rose-500/70 fill-rose-500/70" />
            by Thrisha Reddy · {new Date().getFullYear()}
          </p>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-slate-700 hover:text-violet-400 text-xs transition-all duration-200"
          >
            Back to top <ArrowUp size={13} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
