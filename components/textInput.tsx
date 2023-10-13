'use client'
import React from 'react'
import { Button, TextField } from '@radix-ui/themes'
import { PaperPlaneIcon } from '@radix-ui/react-icons'
import BoxAnimation from './boxAnimation'
import { useAppContext } from '../hooks/useAppContext'
import { analyze } from '@/utils/ai'

const animateProps = {
  scale: [1, 2, 2, 1, 1],
  rotate: [0, 90, 90, 180, 0],
  borderRadius: ['0%', '0%', '50%', '50%', '0%'],
}
const transitionProps = {
  duration: 1,
  ease: 'easeInOut',
  times: [0, 0.2, 0.5, 0.8, 1],
  repeat: 1,
  repeatDelay: 0,
}
const TextInput = () => {
  const { userInput, setUserInput, setAiResponse } = useAppContext()
  const [isEnabled, setIsEnabled] = React.useState(false)

  const handleInputChange = (value: string) => {
    setUserInput(value)
  }
  const handleSubmit = async () => {
    setIsEnabled(true)
    const response = await analyze(userInput)
    setAiResponse(response)
  }
  return (
    <TextField.Root>
      <TextField.Slot pl="2"></TextField.Slot>
      <TextField.Input
        aria-label="yea"
        color="gray"
        radius="large"
        size="3"
        variant="soft"
        placeholder="How old is Sarkis?"
        type="text"
        style={{ height: '3rem' }}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      <TextField.Slot pr="2" style={{ top: 0 }}>
        <Button
          id="submit"
          variant="ghost"
          size={'2'}
          onClick={() => handleSubmit()}
        >
          <BoxAnimation
            isEnabled={isEnabled}
            transitionProps={transitionProps}
            animateProps={animateProps}
          >
            <PaperPlaneIcon />
          </BoxAnimation>
        </Button>
      </TextField.Slot>
    </TextField.Root>
  )
}

export default TextInput
