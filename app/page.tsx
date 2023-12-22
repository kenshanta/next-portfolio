'use client'

import { useLayoutEffect, useState } from 'react'
import TextInput from '@/components/textInput'
import { ResponseBody } from '@/components/responseBody'
import { useMediaQuery } from 'react-responsive'
import SideBarShortcuts from '@/components/sidebarShortcuts'
import { Flex, Section } from '@radix-ui/themes'

const Home = () => {
  const [isMounted, setIsMounted] = useState(false)

  useLayoutEffect(() => {
    setIsMounted(true)
  }, [isMounted])

  return isMounted ? (
    <Section size={'1'} className="_parent" pb={'0'}>
      <Desktop>{desktopViewLayout(false)}</Desktop>
      <Mobile>{desktopViewLayout(true)}</Mobile>
    </Section>
  ) : null
}

const Desktop = ({ children }: any) => {
  const useDestopMediaQuery = () => {
    return useMediaQuery({
      minWidth: 600,
    })
  }
  return useDestopMediaQuery() ? children : null
}

const Mobile = ({ children }: any) => {
  const useMobileMediaQuery = () => {
    return useMediaQuery({
      maxWidth: 600,
    })
  }
  return useMobileMediaQuery() ? children : null
}

const desktopViewLayout = (isMobile: boolean) => {
  return (
    <Flex
      direction={isMobile ? 'column' : 'row'}
      gap={isMobile ? '4' : '9'}
      p={isMobile ? '0' : '5'}
      height={'100%'}
    >
      <SideBarShortcuts />
      <Flex
        className="response-body"
        direction={'column'}
        justify={'between'}
        style={{ borderRadius: '2%' }}
        pt={'4'}
        grow={'1'}
        width={'100%'}
      >
        <ResponseBody />
        <TextInput />
      </Flex>
    </Flex>
  )
}

export default Home
