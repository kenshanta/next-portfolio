'use client'

import UsageIndicator from '@/components/progressIndicator'
import TextInput from '@/components/textInput'
import { ResponseBody } from '@/components/responseBody'
import { useUser } from '@clerk/nextjs'
import { Flex, Box, Section } from '@radix-ui/themes'
import SideBarShortcuts from '@/components/sidebarShortcuts'
import 'tailwindcss/tailwind.css'

const Home = () => {
  const { isLoaded, isSignedIn, user } = useUser()

  return isLoaded && isSignedIn ? (
    <Section id="__next">
      <Flex direction={'row'} gap={'4'} p={'4'} height={'100%'}>
        <SideBarShortcuts />
        <Flex
          direction={'column'}
          justify={'between'}
          width={'100%'}
          style={{ borderRadius: '2%' }}
          pt={'4'}
          p={'3'}
          className="response-body"
        >
          <ResponseBody response="Type in --help for common questions" />
          <TextInput />
        </Flex>
      </Flex>
    </Section>
  ) : (
    <Box>
      {' '}
      <UsageIndicator />
    </Box>
  )
}

export default Home
