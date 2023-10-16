'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import UsageIndicator from '@/components/progressIndicator'
import TextInput from '@/components/textInput'
import { ResponseBody } from '@/components/responseBody'
import { useUser } from '@clerk/nextjs'
import SideBarShortcuts from '@/components/sidebarShortcuts'
import MobileHandleBar from '@/components/mobileHandleBar'
import { Flex, Box, Section } from '@radix-ui/themes'
import { useAppContext } from '../hooks/useAppContext'

const Home = () => {
  const { isLoaded, isSignedIn, user } = useUser()
  const { setSignedInUserData, isMobile, setIsMobile } = useAppContext()

  useLayoutEffect(() => {
    const handleWindowResize = () => {
      setIsMobile(window.matchMedia('(max-width: 600px)').matches)
    }
    if (isSignedIn) {
      setSignedInUserData(user)
    }
    window.addEventListener('resize', handleWindowResize)
  }, [isSignedIn, user, setIsMobile, setSignedInUserData])

  return isLoaded && isSignedIn ? (
    <Section size={'1'} className="_parent h-full" pb={isMobile ? '0' : '5'}>
      {mobileViewLayout(isMobile)}
    </Section>
  ) : (
    <Box>
      {' '}
      <UsageIndicator />
    </Box>
  )
}

const mobileViewLayout = (isMobile: boolean) => {
  return (
    <Flex
      direction={isMobile ? 'column' : 'row'}
      gap={isMobile ? '4' : '9'}
      p={isMobile ? '0' : '5'}
      width={'100%'}
      height={'100%'}
    >
      <SideBarShortcuts />
      {isMobile ? (
        <MobileHandleBar>
          <Flex
            className="response-body"
            direction={'column'}
            justify={'between'}
            style={{ borderRadius: '2%' }}
            pt={'4'}
            // pr={'5'}
            height={'100%'}
          >
            <ResponseBody />
            <TextInput />
          </Flex>
        </MobileHandleBar> //TODO: should be proper + adjustable
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
