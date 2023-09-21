import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import { ClerkProvider } from '@clerk/nextjs'
import { UserButton } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: `Sarkis' PortfolAI`,
  description:
    'The following site is an AI integrated portfolio that answers your questions',
}

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} p-6 h-screen w-screen`}>
          <header className="mb-5">
            <Navbar />
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}

export default RootLayout
