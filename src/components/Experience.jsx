import { motion } from 'framer-motion'
import { MapPin, Calendar, CheckCircle2, Zap } from 'lucide-react'
import AnimateOnScroll from './AnimateOnScroll'
import { experience } from '../data/portfolio'

const expStats = [
  { value: '100k+', label: 'Records Handled' },
  { value: '8+', label: 'Modules Built' },
  { value: '1+', label: 'Year at Role' },
  { value: '2', label: 'App Rewrites' },
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/3 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-400 mb-4">Experience</span>
          <h2 className="section-title">
            Where I've <span className="gradient-text">Made an Impact</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Building production-grade enterprise solutions that scale
          </p>
        </AnimateOnScroll>

        {experience.map((exp, i) => (
          <AnimateOnScroll key={i}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-3xl overflow-hidden hover:border-white/15 transition-all duration-300"
            >
              {/* Top gradient banner */}
              <div className={`relative bg-gradient-to-r ${exp.color} p-8 overflow-hidden`}>
                {/* Background pattern */}
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
                <div className="absolute -left-8 -bottom-8 w-48 h-48 bg-black/20 rounded-full blur-2xl" />

                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {/* Company icon */}
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg flex-shrink-0">
                      <span className="text-2xl">🏢</span>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-2xl text-white">{exp.role}</h3>
                      <p className="text-white/80 font-semibold text-base mt-0.5">{exp.company}</p>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    {/* Currently working badge */}
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-emerald-300 text-xs font-semibold backdrop-blur-sm">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                      </span>
                      Currently Working
                    </span>
                    <span className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/80 text-xs font-medium backdrop-blur-sm">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Meta row */}
                <div className="relative z-10 flex flex-wrap gap-5 mt-5 text-white/70 text-sm">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-white/50" /> {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-white/50" /> {exp.location}
                  </span>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-white/[0.06]">
                {expStats.map((stat, j) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + j * 0.08 }}
                    className="px-6 py-4 text-center border-r border-white/[0.06] last:border-r-0 hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="font-display font-bold text-xl gradient-text">{stat.value}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Highlights */}
              <div className="p-8">
                <div className="flex items-center gap-2 mb-5">
                  <Zap size={15} className="text-violet-400" />
                  <h4 className="font-semibold text-slate-200 text-sm tracking-wide">Key Contributions</h4>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {exp.highlights.map((h, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 + j * 0.06 }}
                      className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-violet-500/20 hover:bg-violet-500/[0.04] transition-all duration-200 group"
                    >
                      <CheckCircle2 size={15} className="text-violet-500 flex-shrink-0 mt-0.5 group-hover:text-violet-400 transition-colors" />
                      <span className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">{h}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="pt-5 border-t border-white/[0.06]">
                  <p className="text-xs text-slate-600 uppercase tracking-widest mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <motion.span
                        key={t}
                        whileHover={{ scale: 1.05, y: -1 }}
                        className="skill-tag"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  )
}
