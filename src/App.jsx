import { useState, useEffect } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      document.body.style.backgroundColor = '#050508'
    } else {
      document.documentElement.classList.remove('dark')
      document.body.style.backgroundColor = '#f8f7ff'
    }
  }, [isDark])

  return (
    <>
      <Loader isLoading={loading} />

      {!loading && (
        <div className={`relative min-h-screen ${isDark ? 'bg-[#050508] text-slate-100' : 'bg-[#f8f7ff] text-slate-900'}`}>
          {/* Persistent noise overlay */}
          <div className="noise fixed inset-0 pointer-events-none z-[998]" />

          <Navbar isDark={isDark} setIsDark={setIsDark} />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Achievements />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}
