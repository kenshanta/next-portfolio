'use client'
import React from 'react'
import { Flex, Heading, Text, Link } from '@radix-ui/themes'
import Image from 'next/image'

import GithubIcon from '../public/github-icon.svg'
import LinkedInIcon from '../public/linkedin-svg.svg'
import InstagramIcon from '../public/instagram-icon.svg'
import StackOverflowIcon from '../public/stack-icon.svg'
import CodeIcon from '../public/code-icon.svg'
import ProfileIcon from '../public/profile.svg'
import { motion } from 'framer-motion'

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
            <motion.div
              animate={{
                scale: [1, 1.2, 1.2, 1, 1],
                rotate: [0, 90, 180, 360, 0],
                borderRadius: ['20%', '20%', '50%', '50%', '20%'],
              }}
              transition={{
                duration: 4,
                ease: 'easeInOut',
                times: [0, 0.3, 0.6, 0.8, 1],
                repeat: 5,
                repeatDelay: 2,
              }}
            >
              <Image alt="linkedIn" src={LinkedInIcon} />
            </motion.div>
          </Link>
          <Link target="_blank" href="https://github.com/kenshanta">
            <motion.div
              animate={{
                scale: [1, 1, 1, 1, 1],
                rotate: [0, 45, 90, -180, 0],
                borderRadius: ['20%', '20%', '50%', '50%', '20%'],
              }}
              transition={{
                duration: 4,
                ease: 'easeInOut',
                times: [0, 0.3, 0.6, 0.8, 1],
                repeat: 5,
                repeatDelay: 2,
              }}
            >
              <Image alt="github" src={GithubIcon} />
            </motion.div>
          </Link>
          <Link
            target="_blank"
            href="https://stackoverflow.com/users/10978433/sarkis"
          >
            <motion.div
              animate={{
                scale: [1, 1, 1, 1, 1],
                rotate: [0, 0, 0, 360, 0],
                borderRadius: ['20%', '20%', '50%', '50%', '20%'],
              }}
              transition={{
                duration: 4,
                ease: 'easeInOut',
                times: [0, 0.3, 0.6, 0.8, 1],
                repeat: 5,
                repeatDelay: 2,
              }}
            >
              <Image alt="stackOverflow" src={StackOverflowIcon} />
            </motion.div>
          </Link>
          <Link target="_blank" href="https://www.instagram.com/kovlekjian/">
            <motion.div
              animate={{
                scale: [1, 1, 1, 1, 1],
                rotate: [0, -45, -90, -180, 0],
                borderRadius: ['20%', '20%', '50%', '50%', '20%'],
              }}
              transition={{
                duration: 4,
                ease: 'easeInOut',
                times: [0, 0.3, 0.6, 0.8, 1],
                repeat: 5,
                repeatDelay: 2,
              }}
            >
              <Image alt="insta" src={InstagramIcon} />
            </motion.div>
          </Link>
          <Link target="_blank" href="https://leetcode.com/kenshanta/">
            <motion.div
              animate={{
                scale: [1, 1.4, 1.4, 1, 1],
                rotate: [0, -90, -180, -360, 0],
                borderRadius: ['20%', '20%', '50%', '50%', '20%'],
              }}
              transition={{
                duration: 4,
                ease: 'easeInOut',
                times: [0, 0.3, 0.6, 0.8, 1],
                repeat: 5,
                repeatDelay: 2,
              }}
            >
              <Image alt="leetcode" src={CodeIcon} />
            </motion.div>
          </Link>
          <Link
            target="_blank"
            href="https://drive.google.com/file/d/1KHslByPGqQVf_jYXTLjo0EXkW36Rw5LK/view?usp=drive_link"
          >
            <motion.div
              animate={{
                scale: [1, 0.5, 1.5, 1, 1],
                rotate: [0, 90, 180, 270, 360],
                borderRadius: ['20%', '20%', '50%', '50%', '20%'],
              }}
              transition={{
                duration: 4,
                ease: 'easeInOut',
                times: [0, 0.3, 0.6, 0.8, 1],
                repeat: 5,
                repeatDelay: 2,
              }}
            >
              <Image alt="stackOverflow" src={ProfileIcon} />
            </motion.div>
          </Link>
        </Flex>
        <Flex direction={'column'} gap={'1'}>
          <Text style={{ textDecoration: 'underline', color: '#d96d39' }}>
            Chat With sarkAI
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SideBarShortcuts
