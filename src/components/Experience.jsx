import { motion } from 'framer-motion'
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react'
import AnimateOnScroll from './AnimateOnScroll'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-600/50 via-blue-600/50 to-transparent -translate-x-1/2 hidden md:block" />

          {experience.map((exp, i) => (
            <AnimateOnScroll key={i} delay={0.1}>
              <div className="relative flex flex-col md:flex-row gap-8 md:gap-0">
                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 -translate-y-1 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                    className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 ring-4 ring-[#050508] shadow-[0_0_20px_rgba(124,58,237,0.5)]"
                  />
                </div>

                {/* Card */}
                <div className="md:ml-auto md:w-[calc(50%-40px)]">
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass rounded-2xl overflow-hidden hover:border-white/15 transition-all duration-300 group"
                  >
                    {/* Header gradient bar */}
                    <div className={`h-1 w-full bg-gradient-to-r ${exp.color}`} />

                    <div className="p-8">
                      {/* Top row */}
                      <div className="flex items-start justify-between gap-4 mb-5">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center`}>
                              <Briefcase size={14} className="text-white" />
                            </div>
                            <h3 className="font-display font-bold text-lg text-slate-100">{exp.role}</h3>
                          </div>
                          <p className="text-violet-400 font-semibold text-sm">{exp.company}</p>
                        </div>
                        <span className="flex-shrink-0 px-3 py-1 bg-violet-600/15 text-violet-300 text-xs rounded-full border border-violet-500/20">
                          {exp.type}
                        </span>
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-4 mb-6 text-sm text-slate-500">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={13} className="text-slate-600" /> {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={13} className="text-slate-600" /> {exp.location}
                        </span>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-3 mb-6">
                        {exp.highlights.map((h, j) => (
                          <motion.li
                            key={j}
                            initial={{ opacity: 0, x: -15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 + j * 0.06 }}
                            className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed"
                          >
                            <CheckCircle2 size={15} className="text-violet-500 flex-shrink-0 mt-0.5" />
                            {h}
                          </motion.li>
                        ))}
                      </ul>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 pt-5 border-t border-white/[0.06]">
                        {exp.tech.map((t) => (
                          <span key={t} className="skill-tag">{t}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Left side date label */}
                <div className="hidden md:flex md:w-[calc(50%-40px)] items-start justify-end pr-10 pt-8">
                  <AnimateOnScroll direction="right">
                    <div className="text-right">
                      <div className="text-slate-300 font-semibold">{exp.period.split('—')[0].trim()}</div>
                      <div className="text-slate-600 text-sm mt-1">{exp.company}</div>
                      <div className="w-16 h-0.5 bg-gradient-to-r from-violet-500/50 to-transparent mt-3 ml-auto" />
                    </div>
                  </AnimateOnScroll>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
