'use client'

import { useLayoutEffect } from 'react'
import UsageIndicator from '@/components/progressIndicator'
import TextInput from '@/components/textInput'
import { ResponseBody } from '@/components/responseBody'
// import { useUser } from '@clerk/nextjs'
import SideBarShortcuts from '@/components/sidebarShortcuts'
import { Flex, Box, Section } from '@radix-ui/themes'
import { useAppContext } from '../hooks/useAppContext'

const Home = () => {
  // const { isLoaded, isSignedIn, user } = useUser()
  const { setIsMobile } = useAppContext()
  const isMobileView = window?.matchMedia('(max-width: 600px)').matches

  useLayoutEffect(() => {
    const handleWindowResize = () => {
      setIsMobile(window?.matchMedia('(max-width: 600px)').matches)
    }
    // if (isSignedIn) {
    //   setSignedInUserData(user)
    // }
    setIsMobile(window.matchMedia('(max-width: 650px)').matches)
    window?.addEventListener('resize', handleWindowResize)
  }, [setIsMobile])

  return (
    <Section
      size={'1'}
      className="_parent h-full"
      pb={isMobileView ? '0' : '5'}
    >
      {mobileViewLayout(isMobileView)}
    </Section>
  )
}

const mobileViewLayout = (isMobileView: boolean | undefined) => {
  return (
    <Flex
      direction={isMobileView ? 'column' : 'row'}
      gap={isMobileView ? '4' : '9'}
      p={isMobileView ? '0' : '5'}
      width={'100%'}
      height={'100%'}
    >
      <SideBarShortcuts />
      {isMobileView ? (
        <Flex
          className="response-body"
          direction={'column'}
          justify={'between'}
          style={{ borderRadius: '2%' }}
          pt={'4'}
          height={'100%'}
        >
          <ResponseBody />
          <TextInput />
        </Flex>
      ) : (
        <Flex
          className="response-body"
          direction={'column'}
          justify={'between'}
          style={{ borderRadius: '2%' }}
          pt={'4'}
          height={'100%'}
          grow={'1'}
        >
          <ResponseBody />
          <TextInput />
        </Flex>
      )}
    </Flex>
  )
}

export default Home
