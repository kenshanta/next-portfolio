import { AppProvider } from '@/hooks/useAppContext'
//TODO: usage should be when sending chat request
import { ClerkProvider } from '@clerk/nextjs'
import { Theme } from '@radix-ui/themes'
import './theme-config.css'
import '@radix-ui/themes/styles.css'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  title: `Sarkis Kovlekjian's Portfolio`,
  name: 'Kovlekjian',
  description:
    'A turbo-chatgpt-3.5 backed, customized with personal answers. Still under construction',
}

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* <ClerkProvider> */}
      <body>
        <Theme radius="large" appearance="inherit">
          <AppProvider>{children}</AppProvider>
        </Theme>
        <Analytics />
      </body>
      {/* </ClerkProvider> */}
    </html>
  )
}

export default RootLayout
