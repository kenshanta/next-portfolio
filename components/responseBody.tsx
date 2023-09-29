'use client'
import { UserButton } from '@clerk/nextjs'
import { useSelector } from 'react-redux'
import PageAnimation from './pageAnimation'
import { Section, Flex, TextField } from '@radix-ui/themes'

export const ResponseBody = ({ response }: any) => {
  const counter = useSelector((state: any) => state.counter)
  console.log(useSelector((state: any) => state.counter))
  return (
    <Section pt={'2'}>
      <PageAnimation>
        <Flex gap={'2'} align={'center'} direction={'row'} justify={'start'}>
          <TextField.Root>
            <TextField.Slot pl="2" pr="0" style={{ marginBottom: '1rem' }}>
              <UserButton />
            </TextField.Slot>
            <TextField.Slot
              pl={'5'}
              style={{ backgroundColor: '#FEFAF7', borderRadius: '.5rem' }}
            >
              {response}
            </TextField.Slot>
          </TextField.Root>
        </Flex>
      </PageAnimation>
    </Section>
  )
}
