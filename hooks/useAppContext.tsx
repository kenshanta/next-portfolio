'use client'
import React, { createContext, useState, useContext } from 'react'
import { useMediaQuery } from 'react-responsive'
// TODO: AUTH should be only when sending 1st API request
// import { useUser } from '@clerk/nextjs'

interface IStateContext {
  userInput: string
  setUserInput: React.Dispatch<React.SetStateAction<string>>
  aiResponse: IAIResponseContext[]
  setAiResponse: React.Dispatch<React.SetStateAction<IAIResponseContext[]>>
  isMobile: boolean | undefined
  setIsMobile: any
}

interface IAIResponseContext {
  content: string
}

const AppContext = createContext<IStateContext>({
  userInput: '',
  setUserInput: () => {},
  aiResponse: [{ content: 'Hey ${user} how can i help you today?' }],
  setAiResponse: () => {},
  isMobile: undefined,
  setIsMobile: () => {},
})

export const AppProvider = ({ children }: any) => {
  const [userInput, setUserInput] = useState('')
  const [isMobile, setIsMobile] = useState<boolean | undefined>(
    useMediaQuery({
      maxWidth: 600,
    })
  )
  const [aiResponse, setAiResponse] = useState<IAIResponseContext[]>([
    {
      content: `AI Features are unavailable & still under construction, to get to know more about me consider clicking the animated icons ${
        isMobile ? 'above' : 'below'
      } 🤓`,
    },
  ])

  // Define any other functions or values if needed
  const value = {
    userInput,
    setUserInput,
    aiResponse,
    setAiResponse,
    setIsMobile,
    isMobile,
  }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)
