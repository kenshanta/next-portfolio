'use client'
import React from 'react'
import { Flex, Heading, Text, Link, Code } from '@radix-ui/themes'
import Image from 'next/image'

import GithubIcon from '../public/github-icon.svg'
import LinkedInIcon from '../public/linkedin-svg.svg'
import InstagramIcon from '../public/instagram-icon.svg'
import StackOverflowIcon from '../public/stack-icon.svg'
import CodeIcon from '../public/code-icon.svg'

const SideBarShortcuts = () => {
  return (
    <Flex gap={'3'} direction={'column'} justify={'between'} p={'5'} pb={'3'}>
      <Flex direction={'column'} gap={'3'} mb={'4'}>
        <Heading size="6" weight={'medium'}>
          Sarkis K.
        </Heading>
        <Heading className="jobTitleHeading" size="8" weight={'medium'}>
          Full Stack Engineer
        </Heading>
      </Flex>
      <Flex gap={'9'} direction={'column-reverse'} grow={'1'}>
        <Flex gap={'3'}>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/sarkis-kovlekjian/"
          >
            <Image alt="linkedIn" src={LinkedInIcon} />
          </Link>
          <Link target="_blank" href="https://github.com/kenshanta">
            <Image alt="github" src={GithubIcon} />
          </Link>
          <Link
            target="_blank"
            href="https://stackoverflow.com/users/10978433/sarkis"
          >
            <Image alt="stackOverflow" src={StackOverflowIcon} />
          </Link>
          <Link target="_blank" href="https://www.instagram.com/kovlekjian/">
            <Image alt="insta" src={InstagramIcon} />
          </Link>
          <Link target="_blank" href="https://leetcode.com/kenshanta/">
            <Image alt="leetcode" src={CodeIcon} />
          </Link>
        </Flex>
        <Flex direction={'column'} gap={'1'}>
          <Text style={{ textDecoration: 'underline', color: '#d96d39' }}>
            Chat With sarkAI
          </Text>
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
