import { AppProvider } from '@/hooks/useAppContext'
import { Theme } from '@radix-ui/themes'
import './theme-config.css'
import '@radix-ui/themes/styles.css'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  title: `Sarkis Kovlekjian's Portfolio`,
  name: 'Sarkis Kovlekjian',
  icon: { icons: '/profile-pic-2.svg' },
  description:
    'A turbo-chatgpt-3.5 backed, customized with personal answers that is still under construction',
}

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Theme radius="large" appearance="inherit">
          <AppProvider>{children}</AppProvider>
        </Theme>
        <Analytics />
      </body>
    </html>
  )
}

export default RootLayout
