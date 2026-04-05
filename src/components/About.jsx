import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Briefcase, Heart } from 'lucide-react'
import AnimateOnScroll from './AnimateOnScroll'
import { personalInfo, skills, education } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-violet-400 mb-4">About Me</span>
          <h2 className="section-title">
            The Story <span className="gradient-text">Behind the Code</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Passionate developer blending technical precision with creative problem-solving
          </p>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Bio */}
          <div>
            <AnimateOnScroll>
              <div className="glass p-8 rounded-2xl hover:border-white/15 transition-all duration-300">
                {/* Quick facts */}
                <div className="grid grid-cols-2 gap-3 mb-7">
                  {[
                    { icon: MapPin, label: 'Hyderabad, India', color: 'text-violet-400' },
                    { icon: Briefcase, label: 'Full Stack Developer', color: 'text-blue-400' },
                    { icon: GraduationCap, label: 'B.Tech CS (Cyber Security)', color: 'text-emerald-400' },
                    { icon: Heart, label: 'CGPA 9.41', color: 'text-pink-400' },
                  ].map(({ icon: Icon, label, color }) => (
                    <div key={label} className="flex items-center gap-2.5 text-sm">
                      <div className={`p-1.5 rounded-lg bg-white/5 ${color}`}>
                        <Icon size={13} />
                      </div>
                      <span className="text-slate-400 text-xs leading-tight">{label}</span>
                    </div>
                  ))}
                </div>

                {/* Bio text */}
                <div className="space-y-4">
                  {personalInfo.bio.split('\n\n').map((para, i) => (
                    <p key={i} className="text-slate-400 leading-relaxed text-[0.925rem]">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Education */}
            <AnimateOnScroll delay={0.1} className="mt-6">
              <div className="glass p-8 rounded-2xl">
                <h3 className="font-display font-semibold text-lg text-slate-200 mb-5 flex items-center gap-2">
                  <GraduationCap size={18} className="text-violet-400" />
                  Education
                </h3>
                <div className="space-y-5">
                  {education.map((edu, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.15 }}
                      className="relative pl-5 border-l-2 border-violet-600/40 hover:border-violet-400/60 transition-all duration-300 group"
                    >
                      <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-violet-500 group-hover:bg-violet-400 transition-colors" />
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                        <h4 className="text-slate-200 font-semibold text-sm leading-snug">{edu.degree}</h4>
                        <span className="flex-shrink-0 px-2 py-0.5 bg-gradient-to-r from-violet-600/20 to-blue-600/20 text-violet-300 text-xs rounded-full border border-violet-500/20 font-semibold">
                          {edu.score}
                        </span>
                      </div>
                      <p className="text-slate-500 text-xs">{edu.institution}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{edu.period} · {edu.location}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right — Skills */}
          <div className="space-y-5">
            <AnimateOnScroll delay={0.15}>
              <h3 className="font-display font-semibold text-lg text-slate-200 mb-1">Technical Expertise</h3>
              <p className="text-slate-500 text-sm mb-6">Technologies I work with day to day</p>
            </AnimateOnScroll>

            {skills.map((group, i) => (
              <AnimateOnScroll key={group.category} delay={0.1 + i * 0.1}>
                <motion.div
                  whileHover={{ y: -2, scale: 1.01 }}
                  className="glass p-5 rounded-2xl group cursor-default hover:border-white/15 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center text-base shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {group.icon}
                    </div>
                    <h4 className="font-semibold text-slate-200 text-sm">{group.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="skill-tag"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
