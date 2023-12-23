'use client'
import ProfilePic from '@/components/profilePic'
import PageAnimation from './pageAnimation'
import { Flex, TextField, Box } from '@radix-ui/themes'
import { useAppContext } from '../hooks/useAppContext'
import ProfileImg from '@/public/profile-pic-2.svg'
import Typewriter from 'typewriter-effect'

export const ResponseBody: React.FC = () => {
  const { aiResponse, isMobile } = useAppContext()

  return (
    <Flex pt={'6'} pl={'1'} pr={'5'}>
      <PageAnimation delaySec={4.2}>
        <TextField.Root style={{ height: '100%', width: '100%' }}>
          <TextField.Slot
            pl="4"
            pr="0"
            style={{
              left: '3%',
              bottom: '50%',
              zIndex: 10,
            }}
          >
            <ProfilePic image={ProfileImg} />
          </TextField.Slot>
          <Box
            pl={isMobile ? '5' : '6'}
            py={'1'}
            pr={'3'}
            style={{
              backgroundColor: '#FEFAF7',
              borderRadius: '.5rem',
            }}
          >
            {aiResponse.map((chat: any, i: number) => {
              return (
                <Typewriter
                  options={{
                    cursor: '',
                  }}
                  key={i}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(4200)
                      .changeDelay(25)
                      .typeString(chat.content)
                      .start()
                  }}
                />
              )
            })}
          </Box>
        </TextField.Root>
      </PageAnimation>
    </Flex>
  )
}
