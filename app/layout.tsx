import './theme-config.css'
import '@radix-ui/themes/styles.css'
import { Inter } from 'next/font/google'
import ReduxProvider from '@/stores/providers/reduxProviders'
import { ClerkProvider } from '@clerk/nextjs'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import store from '@/stores/store'
import { Provider } from 'react-redux'

const inter = Inter({ subsets: ['latin'], variable: '--default-color' })
export const metadata = {
  title: `Sarkis' PortfolAI`,
  description:
    'The following site is an AI integrated portfolio that answers your questions',
}

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <Theme radius="large" appearance="inherit">
            <ReduxProvider>{children}</ReduxProvider>
          </Theme>
        </ClerkProvider>
      </body>
    </html>
  )
}

export default RootLayout
