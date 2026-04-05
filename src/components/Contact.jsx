import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, Loader2 } from 'lucide-react'
import AnimateOnScroll from './AnimateOnScroll'
import { personalInfo } from '../data/portfolio'

const contactDetails = [
  { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: 'text-violet-400', bg: 'bg-violet-600/15', border: 'border-violet-500/20' },
  { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: 'text-blue-400', bg: 'bg-blue-600/15', border: 'border-blue-500/20' },
  { icon: MapPin, label: 'Location', value: personalInfo.location, href: '#', color: 'text-emerald-400', bg: 'bg-emerald-600/15', border: 'border-emerald-500/20' },
]

const socialLinks = [
  { icon: Github, href: personalInfo.github, label: 'GitHub', color: 'hover:text-slate-200' },
  { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn', color: 'hover:text-blue-400' },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email', color: 'hover:text-violet-400' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    // Simulate API call
    await new Promise(res => setTimeout(res, 1500))
    setStatus('success')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/8 to-transparent pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-72 h-72 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-violet-400 mb-4">Contact</span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Have an exciting project or opportunity? I'd love to hear from you.
          </p>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left — Contact info */}
          <div className="lg:col-span-2 space-y-5">
            <AnimateOnScroll>
              <div className="glass p-7 rounded-2xl">
                <h3 className="font-display font-semibold text-lg text-slate-200 mb-6">Get In Touch</h3>

                <div className="space-y-4">
                  {contactDetails.map(({ icon: Icon, label, value, href, color, bg, border }) => (
                    <motion.a
                      key={label}
                      href={href}
                      whileHover={{ x: 4 }}
                      className={`flex items-center gap-4 p-4 rounded-xl ${bg} border ${border} transition-all duration-200 group`}
                    >
                      <div className={`p-2.5 rounded-xl bg-white/5 ${color} flex-shrink-0`}>
                        <Icon size={16} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-slate-500 text-xs mb-0.5">{label}</div>
                        <div className="text-slate-300 text-sm font-medium truncate group-hover:text-white transition-colors">{value}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Divider */}
                <div className="my-6 border-t border-white/[0.06]" />

                {/* Social links */}
                <div>
                  <p className="text-slate-500 text-xs mb-4 uppercase tracking-widest">Connect with me</p>
                  <div className="flex gap-3">
                    {socialLinks.map(({ icon: Icon, href, label, color }) => (
                      <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 glass glass-hover rounded-xl text-slate-500 ${color} transition-all duration-200`}
                        aria-label={label}
                      >
                        <Icon size={16} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Availability card */}
            <AnimateOnScroll delay={0.1}>
              <div className="glass p-6 rounded-2xl border border-emerald-500/20 bg-emerald-600/[0.04]">
                <div className="flex items-center gap-3 mb-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                  </span>
                  <span className="text-emerald-400 font-semibold text-sm">Available for Opportunities</span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Currently open to full-time roles, freelance projects, and collaborations. Response within 24 hours.
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right — Form */}
          <AnimateOnScroll delay={0.15} className="lg:col-span-3">
            <div className="glass p-8 rounded-2xl h-full">
              <h3 className="font-display font-semibold text-lg text-slate-200 mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wider">Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wider">Subject</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wider">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="form-input resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  whileHover={status === 'idle' ? { scale: 1.02 } : {}}
                  whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                  className={`w-full py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2.5 transition-all duration-300 ${
                    status === 'success'
                      ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/30'
                      : 'btn-primary'
                  }`}
                >
                  {status === 'idle' && (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                  {status === 'loading' && (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  )}
                  {status === 'success' && (
                    <>
                      <CheckCircle size={16} />
                      Message Sent! I'll be in touch soon.
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
