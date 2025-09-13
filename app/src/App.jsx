import { useEffect, useState } from 'react'
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import Tool from './components/Tool.jsx'
import Services from './components/Services.jsx'

export default function App() {
  const getRoute = () => (typeof window !== 'undefined' && window.location.hash ? window.location.hash.replace('#', '') : 'home')
  const [route, setRoute] = useState(getRoute())

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    const hash = window.location.hash
    if (hash === '#assessment') {
      // Ensure Tool is visible then scroll to the assessment section.
      requestAnimationFrame(() => {
        const el = document.getElementById('assessment')
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [route])

  const showTool = route === 'tool' || route === 'assessment'
  const showServices = route === 'services'
  const activeNav = showTool ? 'tool' : showServices ? 'services' : 'home'

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/logo.webp"
                alt="The Future Thinker logo"
                className="h-7 w-7 rounded-md object-cover"
                decoding="async"
              />
              <span className="font-medium tracking-tight">The Future Thinker</span>
            </div>
            <a className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-100 transition" href="#">
              Contact
            </a>
          </div>
          <NavBar active={activeNav} />
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4">
        {showTool ? <Tool /> : showServices ? <Services /> : <Home />}
      </div>

      <footer className="mt-16 border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-neutral-600 flex flex-col md:flex-row items-center justify-between">
          <p className="text-center md:text-left">© 2025 The Future Thinker - AI readiness tool. All rights reserved.</p>
          <div className="flex gap-6 mt-2 md:mt-0">
            <a href="#" className="hover:underline">Get in touch</a>
            <a href="#assessment" className="hover:underline">Start the assessment</a>
          </div>
        </div>
      </footer>

    </main>
  )
}
