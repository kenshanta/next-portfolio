'use client'

import { Flex, Heading, Text, Link } from '@radix-ui/themes'
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
  StackIcon,
} from '@radix-ui/react-icons'
const SideBarShortcuts = () => {
  return (
    <Flex direction={'column'} justify={'between'} p={'5'} pb={'3'}>
      <Flex direction={'column'} gap={'3'} mb={'2'}>
        <Heading color="gray" size="6" weight={'medium'}>
          Sarkis K.
        </Heading>
        <Heading size="8" weight={'medium'}>
          Full Stack Engineer
        </Heading>
      </Flex>
      <Flex gap={'7'} direction={'column-reverse'} grow={'1'}>
        <Flex gap={'3'}>
          <Link>
            <LinkedInLogoIcon />
          </Link>
          <Link>
            <GitHubLogoIcon />
          </Link>
          <Link>
            <StackIcon />
          </Link>
          <Link>
            <InstagramLogoIcon />
          </Link>
        </Flex>
        <Flex direction={'column'} gap={'3'}>
          <Text>Chat With sarkAI</Text>
          <Text>Projects</Text>
          <Text>Work 1</Text>
          <Text>About</Text>
          <Text>Contact</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SideBarShortcuts
