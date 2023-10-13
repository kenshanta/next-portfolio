'use client'
import { UserButton } from '@clerk/nextjs'
import PageAnimation from './pageAnimation'
import { Flex, TextField } from '@radix-ui/themes'
import { useAppContext } from '../hooks/useAppContext'

export const ResponseBody: React.FC = () => {
  const { aiResponse } = useAppContext()

  return (
    <Flex pt={'6'} pl={'3'} pr={'7'} height={'100%'}>
      <PageAnimation>
        <TextField.Root
          style={{
            display: 'flex',
            justifyContent: 'start',
          }}
        >
          <TextField.Slot
            pl="2"
            pr="0"
            style={{
              // marginBottom: '2rem',

              left: '10%',
              top: '10%',
              zIndex: '10',
            }}
          >
            <UserButton />
          </TextField.Slot>
          <TextField.Slot
            pl={'4'}
            style={{
              backgroundColor: '#FEFAF7',
              borderRadius: '.5rem',
              maxWidth: '90%',
            }}
          >
            {aiResponse.map((chat: any) => chat.content)}
          </TextField.Slot>
        </TextField.Root>
      </PageAnimation>
    </Flex>
  )
}
