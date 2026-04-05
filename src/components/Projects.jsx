import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ExternalLink, Lock, Github } from 'lucide-react'
import AnimateOnScroll from './AnimateOnScroll'
import { projects } from '../data/portfolio'

const categories = ['All', 'Professional', 'ML / Security', 'Security']

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent pointer-events-none" />
      <div className="absolute left-0 top-1/3 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-violet-400 mb-4">Projects</span>
          <h2 className="section-title">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A collection of enterprise solutions and side projects showcasing my craft
          </p>
        </AnimateOnScroll>

        {/* Filter tabs */}
        <AnimateOnScroll delay={0.1}>
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setFilter(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-[0_0_20px_rgba(124,58,237,0.3)]'
                    : 'glass glass-hover text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Project grid */}
        <motion.div layout className="grid sm:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`glass rounded-2xl overflow-hidden border ${project.borderColor} hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-300 group h-full flex flex-col`}
    >
      {/* Card header / visual area */}
      <div className={`relative h-40 bg-gradient-to-br ${project.color} overflow-hidden flex items-center justify-center`}>
        {/* Animated grid */}
        <div className="absolute inset-0 grid-bg opacity-40" />

        {/* Decorative circles */}
        <motion.div
          className="absolute w-48 h-48 rounded-full border border-white/5"
          animate={hovered ? { scale: 1.2, opacity: 0.3 } : { scale: 1, opacity: 0.1 }}
          transition={{ duration: 0.4 }}
        />
        <motion.div
          className="absolute w-32 h-32 rounded-full border border-white/10"
          animate={hovered ? { scale: 1.3, rotate: 45 } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Icon */}
        <motion.div
          animate={hovered ? { scale: 1.15, y: -4 } : { scale: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 text-6xl drop-shadow-lg"
        >
          {project.icon}
        </motion.div>

        {/* Category badge */}
        <div className="absolute top-3 right-3">
          <span className={`px-2.5 py-1 text-xs font-medium rounded-full glass border border-white/10 ${project.accentColor}`}>
            {project.category}
          </span>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-violet-600/80 text-white backdrop-blur-sm">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Card content */}
      <div className="flex-1 flex flex-col p-6">
        <h3 className="font-display font-bold text-lg text-slate-100 mb-2 group-hover:text-violet-300 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-5">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span key={t} className="skill-tag text-[11px]">{t}</span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
          <div className="flex items-center gap-3">
            {project.proprietary ? (
              <span className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
                <Lock size={11} /> Proprietary · NDA
              </span>
            ) : (
              <>
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1.5 text-slate-500 hover:text-slate-300 text-xs font-medium transition-colors"
                  >
                    <Github size={13} /> Code
                  </motion.a>
                )}
                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-1.5 ${project.accentColor} text-xs font-medium`}
                  >
                    <ExternalLink size={13} /> Live
                  </motion.a>
                )}
              </>
            )}
          </div>

          <motion.div
            animate={hovered ? { x: 4, opacity: 1 } : { x: 0, opacity: 0.4 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight size={16} className={project.accentColor} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
