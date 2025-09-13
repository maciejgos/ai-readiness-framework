export default function NavBar({ active = 'tool' }) {
  const links = [
    { href: '#home', label: 'Home', key: 'home' },
    { href: 'https://www.thefuturethinker.com/newsletter', label: 'Newsletter', external: true, key: 'newsletter' },
    { href: '#services', label: 'Services', key: 'services' },
    { href: '#tool', label: 'AI Readiness Tool', key: 'tool' },
  ]

  return (
    <nav aria-label="Primary" className="mt-2">
      <ul className="flex flex-wrap justify-center gap-4 md:gap-6 text-[15px] text-neutral-800">
        {links.map(({ href, label, key, external }) => (
          <li key={href}>
            <a
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className={`px-2 py-1 rounded-md transition hover:text-black hover:bg-neutral-100/70 ${
                key === active ? 'text-black bg-neutral-100/70' : 'text-neutral-700'
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
