import { useEffect, useState } from 'react'
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import Tool from './components/Tool.jsx'
import Services from './components/Services.jsx'
import Blog from './components/Blog.jsx'

export default function App() {
  const getRoute = () =>
    typeof window !== 'undefined' && window.location.hash ? window.location.hash.replace('#', '') : 'home'
  const [route, setRoute] = useState(getRoute())
  const primaryRoute = route.split('/')[0]

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    const hash = window.location.hash
    if (!hash || hash.startsWith('#blog')) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const targetId = hash.replace('#', '')
    // Ensure the relevant section is rendered before attempting to scroll.
    requestAnimationFrame(() => {
      const el = document.getElementById(targetId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else if (targetId === 'assessment') {
        const assessment = document.getElementById('assessment')
        if (assessment) assessment.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  }, [route])

  const showTool = primaryRoute === 'tool' || primaryRoute === 'assessment'
  const showServices = primaryRoute === 'services'
  const showBlog = primaryRoute === 'blog'
  const secondaryRoutes = ['approach', 'contact', 'manifesto']
  const activeNav = showTool
    ? 'tool'
    : showServices
    ? 'services'
    : showBlog
    ? 'blog'
    : secondaryRoutes.includes(route)
    ? route
    : 'home'

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/logo.webp"
                alt="Future Thinker logo"
                className="h-8 w-8 rounded-md object-cover"
                decoding="async"
              />
              <div className="flex flex-col">
                <span className="text-sm uppercase tracking-[0.18em] text-neutral-500">Future Thinker Advisory</span>
                <span className="text-sm text-neutral-700">Boutique technology services</span>
              </div>
            </div>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-100 transition"
              href="#contact"
            >
              Book a consultation
            </a>
          </div>
          <NavBar active={activeNav} />
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4">
        {showBlog ? <Blog route={route} /> : showTool ? <Tool /> : showServices ? <Services /> : <Home />}
      </div>

      <footer className="mt-20 border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-neutral-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-center md:text-left">© 2025 Future Thinker Advisory. Boutique technology services for modern leaders.</p>
          <div className="flex gap-6">
            <a href="#contact" className="hover:underline">Connect with us</a>
            <a href="#assessment" className="hover:underline">Run the diagnostic</a>
          </div>
        </div>
      </footer>

    </main>
  )
}
