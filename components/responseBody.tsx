'use client'
import ProfilePic from '@/components/profilePic'
import PageAnimation from './pageAnimation'
import { Flex, TextField } from '@radix-ui/themes'
import { useAppContext } from '../hooks/useAppContext'
import ProfileImg from '@/public/profile-pic-2.svg'

export const ResponseBody: React.FC = () => {
  const { aiResponse, isMobile } = useAppContext()

  return (
    <Flex pt={'6'} pl={'1'} pr={isMobile ? '7' : '9'}>
      <PageAnimation>
        <TextField.Root
          style={{
            display: 'flex',
            justifyContent: 'start',
            height: '100%',
          }}
        >
          <TextField.Slot
            pl="2"
            pr="0"
            style={{
              left: '3%',
              top: '-50%',
              zIndex: '10',
            }}
          >
            <ProfilePic image={ProfileImg} />
          </TextField.Slot>
          <TextField.Slot
            pl={isMobile ? '5' : '6'}
            py={'1'}
            style={{
              backgroundColor: '#FEFAF7',
              borderRadius: '.5rem',
              maxWidth: '83%',
              height: 'auto',
            }}
          >
            {aiResponse.map((chat: any) => chat.content)}
          </TextField.Slot>
        </TextField.Root>
      </PageAnimation>
    </Flex>
  )
}
