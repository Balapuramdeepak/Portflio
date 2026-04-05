import { motion } from 'framer-motion'
import AnimateOnScroll from './AnimateOnScroll'
import { achievements } from '../data/portfolio'

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/5 to-transparent pointer-events-none" />
      <div className="absolute right-1/4 bottom-0 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-violet-400 mb-4">Achievements</span>
          <h2 className="section-title">
            Milestones & <span className="gradient-text">Recognition</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Awards, competitions, and milestones that mark my journey
          </p>
        </AnimateOnScroll>

        {/* Achievements grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((a, i) => (
            <AnimateOnScroll key={a.title} delay={i * 0.1}>
              <AchievementCard achievement={a} />
            </AnimateOnScroll>
          ))}
        </div>

        {/* Bottom quote */}
        <AnimateOnScroll delay={0.4} className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 glass px-8 py-5 rounded-2xl max-w-2xl mx-auto">
            <div className="text-3xl flex-shrink-0">💡</div>
            <p className="text-slate-400 text-sm leading-relaxed italic text-left">
              "Constant curiosity, disciplined execution, and a drive to build things that matter — that's the philosophy behind every line of code I write."
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

function AchievementCard({ achievement: a }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`glass rounded-2xl p-6 border ${a.border} hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-300 group flex flex-col h-full`}
    >
      {/* Icon + stat */}
      <div className="flex items-start justify-between mb-5">
        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${a.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
          {a.icon}
        </div>
        <div className="text-right">
          <div className={`font-display font-bold text-2xl ${a.accent}`}>{a.stat}</div>
          <div className="text-slate-600 text-xs">{a.statLabel}</div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="font-display font-semibold text-slate-100 text-base mb-1 leading-snug">{a.title}</h3>
        <p className={`text-xs font-medium mb-3 ${a.accent}`}>{a.subtitle}</p>
        <p className="text-slate-500 text-xs leading-relaxed">{a.description}</p>
      </div>
    </motion.div>
  )
}
