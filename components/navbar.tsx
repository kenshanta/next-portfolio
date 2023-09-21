'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { UserButton } from '@clerk/nextjs'

const Navbar = () => {
  const path = usePathname()

  const links = [
    { href: '/', label: 'Home', color: 'whitesmoke' },
    { href: '/docs', label: 'Docs', color: 'pink' },
    { href: '/todos', label: 'App', color: 'orange' },
  ]

  return (
    <nav>
      <div className="mr-10 p-1">
        <UserButton afterSignOutUrl="/" />
      </div>
      <ul className="flex items-center justify-center">
        {links.map(({ href, label, color }) => (
          <li key={href} className={`px-4 mx-1 text-xl border border-black`}>
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
