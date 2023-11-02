import { AppProvider } from '@/hooks/useAppContext'
import { ClerkProvider } from '@clerk/nextjs'
import { Theme } from '@radix-ui/themes'
import './theme-config.css'
import '@radix-ui/themes/styles.css'

export const metadata = {
  title: `kovlekjian`,
  name: 'kovlekjian',
  description:
    'The following site is an AI integrated portfolio that answers your questions',
}

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <title>Sarkis Kovlekjian</title>
      <meta
        name="kovlekjian"
        content="A turbo-chatgpt-3.5 backed; customized with personal answers related to the field of question and it's legitimacy to my professional career. Still under construction"
      ></meta>
      <ClerkProvider>
        <body>
          <Theme radius="large" appearance="inherit">
            <AppProvider>{children}</AppProvider>
          </Theme>
        </body>
      </ClerkProvider>
    </html>
  )
}

export default RootLayout
