'use client'
import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio demo test',
  description: 'Generated by create next app',
}

function RootLayout({ children }: { children: React.ReactNode }) {
  const links = [
    { href: '/', label: 'Home', color: 'whitesmoke' },
    { href: '/docs', label: 'Docs', color: 'pink' },
    { href: '/todos', label: 'App', color: 'orange' },
  ]

  return (
    <html lang="en">
      <body className={`${inter.className} p-10 h-screen w-screen`}>
        <header className="mb-5">
          <nav>
            <ul className="flex items-center justify-center">
              {links.map(({ href, label, color }) => (
                <li
                  key={href}
                  className={`px-4 mx-1 text-2xl border border-black`}
                >
                  <Link style={{ color: color }} href={href}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
