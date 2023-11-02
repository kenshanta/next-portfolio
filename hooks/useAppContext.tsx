'use client'
import React, { createContext, useState, useContext } from 'react'
import { useUser } from '@clerk/nextjs'

interface IStateContext {
  userInput: string
  setUserInput: React.Dispatch<React.SetStateAction<string>>
  aiResponse: IAIResponseContext[]
  setAiResponse: React.Dispatch<React.SetStateAction<IAIResponseContext[]>>
  signedInUserData: any
  setSignedInUserData: any
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
  signedInUserData: {},
  setSignedInUserData: () => {},
  isMobile: undefined,
  setIsMobile: () => {},
})

export const AppProvider = ({ children }: any) => {
  const [userInput, setUserInput] = useState('')
  const { isLoaded, isSignedIn, user } = useUser()
  const [signedInUserData, setSignedInUserData] = useState<any>(user)
  const [isMobile, setIsMobile] = useState<boolean | undefined>()
  const [aiResponse, setAiResponse] = useState<IAIResponseContext[]>([
    {
      content: `I'm still under construction, consider checking out the Icon links :)`,
    },
  ])

  // Define any other functions or values you want to provide
  const value = {
    userInput,
    setUserInput,
    aiResponse,
    setAiResponse,
    setSignedInUserData,
    signedInUserData,
    setIsMobile,
    isMobile,
  }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)