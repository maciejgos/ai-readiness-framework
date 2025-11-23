export default function NavBar({ active = 'tool' }) {
  const links = [
    { href: '#home', label: 'Overview', key: 'home' },
    { href: '#services', label: 'Services', key: 'services' },
    { href: '#manifesto', label: 'Manifesto', key: 'manifesto' },
    { href: '#approach', label: 'Approach', key: 'approach' },
    { href: '#tool', label: 'Diagnostic', key: 'tool' },
    { href: '#contact', label: 'Start a project', key: 'contact' },
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
              className={`px-3 py-1.5 rounded-full transition hover:text-black hover:bg-neutral-100/80 ${
                key === active ? 'text-black bg-neutral-100/80' : 'text-neutral-700'
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
