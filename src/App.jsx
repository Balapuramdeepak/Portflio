import { useState, useEffect } from 'react'
import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'
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

  useEffect(() => {
    document.documentElement.classList.add('dark')
    document.body.style.backgroundColor = '#050508'
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Loader isLoading={loading} />

      {!loading && (
        <div className="relative min-h-screen bg-[#050508] text-slate-100" style={{ cursor: 'none' }}>
          <CustomCursor />
          <div className="noise fixed inset-0 pointer-events-none z-[998]" />
          <Navbar />
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
