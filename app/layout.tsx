import { AppProvider } from '@/hooks/useAppContext'
import { ClerkProvider } from '@clerk/nextjs'
import { Theme } from '@radix-ui/themes'
import './theme-config.css'
import '@radix-ui/themes/styles.css'

export const metadata = {
  title: `Sarkis Kovlekjian`,
  description:
    'The following site is an AI integrated portfolio that answers your questions',
}

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <Theme radius="large" appearance="inherit">
            <AppProvider>{children}</AppProvider>
          </Theme>
        </ClerkProvider>
      </body>
    </html>
  )
}

export default RootLayout
