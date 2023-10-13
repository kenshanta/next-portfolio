'use client'

import { useLayoutEffect, useState } from 'react'
import UsageIndicator from '@/components/progressIndicator'
import TextInput from '@/components/textInput'
import { ResponseBody } from '@/components/responseBody'
import { useUser } from '@clerk/nextjs'
import SideBarShortcuts from '@/components/sidebarShortcuts'
import MobileHandleBar from '@/components/mobileHandleBar'
import { Flex, Box, Section } from '@radix-ui/themes'
import { useAppContext } from '../hooks/useAppContext'

const Home = () => {
  const { isLoaded, isSignedIn, user } = useUser() //TODO: add user
  const { setSignedInUserData } = useAppContext()

  if (isSignedIn) {
    console.log(user.firstName)
    setSignedInUserData(user)
  }
  const [componentToRender, setComponentToRender] = useState<JSX.Element>(
    mobileViewLayout()
  )
  const [windowWidth, setWindowWidth] = useState(0)
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 600px)').matches
  )

  useLayoutEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
      setIsMobile(window.matchMedia('(max-width: 600px)').matches)
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  useLayoutEffect(() => {
    if (isMobile) {
      setComponentToRender(mobileViewLayout())
    } else setComponentToRender(dekstopViewLayout())
  }, [isMobile])

  return isLoaded && isSignedIn ? (
    <Section size={'1'} className="_parent h-full w-full">
      {componentToRender}
    </Section>
  ) : (
    <Box>
      {' '}
      <UsageIndicator />
    </Box>
  )
}

const dekstopViewLayout = () => {
  return (
    <Flex direction={'row'} gap={'4'} p={'5'} width={'100%'} height={'100%'}>
      <SideBarShortcuts />
      <div
        // direction={'column'}
        // justify={'between'}
        style={{ borderRadius: '2%' }}
        // pt={'4'}
        // p={'3'}
        className="response-body"
      >
        <ResponseBody />
        <TextInput />
      </div>
    </Flex>
  )
}
const mobileViewLayout = () => {
  return (
    <Flex direction={'column'} p={'0'} className="sm:h-full sm:w-full">
      <SideBarShortcuts />
      <MobileHandleBar>
        <Flex
          direction={'column'}
          justify={'between'}
          style={{ borderRadius: '2%' }}
          pt={'4'}
          p={'3'}
          className="response-body"
        >
          <ResponseBody />
          <TextInput />
        </Flex>
      </MobileHandleBar>
    </Flex>
  )
}
export default Home
