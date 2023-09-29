'use client'
import { Button, TextField } from '@radix-ui/themes'
import { useState } from 'react'
import { UserButton } from '@clerk/nextjs'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '@/stores/slices/slices'
import { PaperPlaneIcon } from '@radix-ui/react-icons'
import BoxAnimation from '@/components/boxAnimation'

const boxProps = {
  color: 'orange',
  duration: 1,
  rotation: [0, 90, 90, 180, 0],
}

const TextInput = () => {
  const dispatch = useDispatch()
  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setMessage(e.target.value)
  // }

  return (
    <TextField.Root>
      <TextField.Slot pl="2"></TextField.Slot>
      <TextField.Input
        color="gray"
        radius="large"
        size="3"
        variant="soft"
        placeholder="How old is Sarkis?"
        type="text"
        style={{ height: '3rem' }}
      />
      <TextField.Slot pr="2">
        <Button
          variant="ghost"
          size={'2'}
          onClick={() => dispatch(increment())}
        >
          <BoxAnimation props={boxProps}>
            <PaperPlaneIcon />
          </BoxAnimation>
        </Button>
      </TextField.Slot>
    </TextField.Root>
  )
}

export default TextInput
