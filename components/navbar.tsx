'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const path = usePathname()

  const links = [
    { href: '/', label: 'Home', color: 'whitesmoke' },
    { href: '/docs', label: 'Docs', color: 'pink' },
    { href: '/todos', label: 'App', color: 'orange' },
  ]

  return (
    <nav>
      <ul className="flex items-center justify-center">
        {links.map(({ href, label, color }) => (
          <li key={href} className={`px-4 mx-1 text-2xl border border-black`}>
            <Link
              className={`${href === path ? 'font-bold' : ''} `}
              style={{ color: color }}
              href={href}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
