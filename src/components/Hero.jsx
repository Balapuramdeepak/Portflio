import { motion } from 'framer-motion'
import { ArrowDown, Star, Github, Linkedin, Mail } from 'lucide-react'
import { personalInfo, stats } from '../data/portfolio'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 grid-bg">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="blob absolute -top-32 -left-32 w-[600px] h-[600px] bg-violet-700" />
        <div className="blob-2 absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-blue-700" />
        <div className="blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-800/50" style={{ animationDuration: '15s', animationDelay: '3s' }} />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(124,58,237,0.15),transparent)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left — Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-xs font-medium text-violet-300 border border-violet-500/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
              </span>
              Available for opportunities
              <Star size={12} className="text-violet-400" />
            </motion.div>

            {/* Name */}
            <motion.h1 {...fadeUp(0.2)} className="font-display font-extrabold leading-tight">
              <span className="block text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-slate-100 text-glow">
                Mareddy
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl xl:text-7xl gradient-text mt-1">
                Thrisha Reddy
              </span>
            </motion.h1>

            {/* Role */}
            <motion.div {...fadeUp(0.35)} className="flex items-center gap-3 mt-5 justify-center lg:justify-start">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-violet-400" />
              <span className="text-violet-300 font-semibold tracking-widest uppercase text-sm">
                Full Stack Developer
              </span>
              <div className="h-px w-8 bg-gradient-to-r from-violet-400 to-transparent lg:hidden" />
            </motion.div>

            {/* Tagline */}
            <motion.p {...fadeUp(0.45)} className="mt-5 text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              {personalInfo.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.55)} className="flex flex-wrap gap-3 mt-8 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={scrollToProjects}
                className="btn-primary"
              >
                <span>View My Work</span>
                <ArrowDown size={16} className="animate-bounce" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={scrollToContact}
                className="btn-secondary"
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Social links */}
            <motion.div {...fadeUp(0.65)} className="flex items-center gap-3 mt-8 justify-center lg:justify-start">
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
                  className="flex items-center gap-2 px-4 py-2 glass glass-hover rounded-xl text-slate-400 hover:text-slate-200 text-sm"
                  aria-label={label}
                >
                  <Icon size={15} />
                  <span className="hidden sm:block">{label}</span>
                </motion.a>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div {...fadeUp(0.75)} className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="glass rounded-xl p-3 text-center hover:border-violet-500/30 transition-all duration-300 group"
                >
                  <div className="font-display font-bold text-xl gradient-text group-hover:scale-110 inline-block transition-transform duration-200">{stat.value}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right — Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="relative flex-shrink-0"
          >
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600/30 to-blue-600/30 blur-3xl scale-110 animate-pulse-slow" />

            {/* Rotating border */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #7c3aed, #3b82f6, #7c3aed)',
                  padding: '2px',
                  borderRadius: '50%',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-full h-full rounded-full bg-[#050508]" />
              </motion.div>

              {/* Avatar inner */}
              <div className="absolute inset-2 rounded-full overflow-hidden border border-white/10">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a0533] via-[#0d1a40] to-[#050820]" />

                {/* Soft glow behind figure */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-violet-600/30 rounded-full blur-2xl" />

                {/* Person SVG silhouette */}
                <div className="absolute inset-0 flex items-end justify-center pb-0">
                  <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <defs>
                      <linearGradient id="bodyGrad" x1="60" y1="90" x2="140" y2="220" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#7c3aed" />
                        <stop offset="100%" stopColor="#1e3a8a" />
                      </linearGradient>
                      <linearGradient id="headGrad" x1="80" y1="30" x2="120" y2="90" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#c4a882" />
                        <stop offset="100%" stopColor="#a0785a" />
                      </linearGradient>
                      <linearGradient id="hairGrad" x1="70" y1="20" x2="130" y2="65" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#2d1b0e" />
                        <stop offset="100%" stopColor="#1a0a04" />
                      </linearGradient>
                      <radialGradient id="glowGrad" cx="50%" cy="100%" r="50%">
                        <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    {/* Glow base */}
                    <ellipse cx="100" cy="220" rx="80" ry="30" fill="url(#glowGrad)" />

                    {/* Body / shoulders */}
                    <path d="M40 220 C40 160 60 130 100 125 C140 130 160 160 160 220 Z" fill="url(#bodyGrad)" />

                    {/* Neck */}
                    <rect x="91" y="90" width="18" height="22" rx="6" fill="#b8946e" />

                    {/* Hair back */}
                    <ellipse cx="100" cy="58" rx="36" ry="38" fill="url(#hairGrad)" />
                    {/* Hair sides */}
                    <path d="M65 60 Q58 90 62 110 Q70 105 72 95 Q74 80 70 68 Z" fill="#1a0a04" />
                    <path d="M135 60 Q142 90 138 110 Q130 105 128 95 Q126 80 130 68 Z" fill="#1a0a04" />

                    {/* Face */}
                    <ellipse cx="100" cy="62" rx="30" ry="33" fill="url(#headGrad)" />

                    {/* Hair top / fringe */}
                    <path d="M68 48 Q72 25 100 22 Q128 25 132 48 Q120 38 100 36 Q80 38 68 48 Z" fill="url(#hairGrad)" />

                    {/* Eyes */}
                    <ellipse cx="89" cy="60" rx="4" ry="4.5" fill="#1a0a04" />
                    <ellipse cx="111" cy="60" rx="4" ry="4.5" fill="#1a0a04" />
                    {/* Eye shine */}
                    <circle cx="90.5" cy="58.5" r="1.2" fill="white" opacity="0.8" />
                    <circle cx="112.5" cy="58.5" r="1.2" fill="white" opacity="0.8" />

                    {/* Smile */}
                    <path d="M93 73 Q100 79 107 73" stroke="#8a5c3a" strokeWidth="1.5" strokeLinecap="round" fill="none" />

                    {/* Collar / shirt detail */}
                    <path d="M84 112 Q100 120 116 112 L112 130 Q100 136 88 130 Z" fill="#5b21b6" opacity="0.8" />
                  </svg>
                </div>
              </div>

              {/* Floating badges */}
              {/* Top-right: Angular */}
              <motion.div
                className="absolute -right-6 top-6 glass border border-violet-500/30 rounded-xl px-3 py-2 text-xs font-medium text-violet-300 shadow-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="flex items-center gap-1.5">
                  <span className="text-base">🅰️</span> Angular
                </span>
              </motion.div>

              {/* Top-left: TypeScript */}
              <motion.div
                className="absolute -left-8 top-6 glass border border-blue-400/30 rounded-xl px-3 py-2 text-xs font-medium text-blue-300 shadow-lg"
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              >
                <span className="flex items-center gap-1.5">
                  <span className="text-base">📘</span> TypeScript
                </span>
              </motion.div>

              {/* Right-middle: C# */}
              <motion.div
                className="absolute -right-6 top-1/2 -translate-y-1/2 glass border border-pink-500/30 rounded-xl px-3 py-2 text-xs font-medium text-pink-300 shadow-lg"
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              >
                <span className="flex items-center gap-1.5">
                  <span className="text-base">#️⃣</span> C#
                </span>
              </motion.div>

              {/* Left-middle: .NET */}
              <motion.div
                className="absolute -left-6 top-1/2 -translate-y-1/2 glass border border-blue-500/30 rounded-xl px-3 py-2 text-xs font-medium text-blue-300 shadow-lg"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <span className="flex items-center gap-1.5">
                  <span className="text-base">🔷</span> .NET
                </span>
              </motion.div>

              {/* Bottom-right: SQL */}
              <motion.div
                className="absolute -bottom-4 right-6 glass border border-emerald-500/30 rounded-xl px-3 py-2 text-xs font-medium text-emerald-300 shadow-lg"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <span className="flex items-center gap-1.5">
                  <span className="text-base">🗃️</span> SQL
                </span>
              </motion.div>

            </div>
          </motion.div>
        </div>

      </div>

      {/* Scroll indicator — pinned to section bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-violet-500/40 flex items-start justify-center pt-2 hover:border-violet-400/70 transition-colors duration-300 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="w-1.5 h-2.5 rounded-full bg-gradient-to-b from-violet-400 to-blue-400"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
