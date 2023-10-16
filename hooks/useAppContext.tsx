'use client' // Because we're inside a server component
import React, { createContext, useState, useContext } from 'react'
import { useUser } from '@clerk/nextjs'

interface IStateContext {
  userInput: string
  setUserInput: React.Dispatch<React.SetStateAction<string>>
  aiResponse: IAIResponseContext[]
  setAiResponse: React.Dispatch<React.SetStateAction<IAIResponseContext[]>>
  signedInUserData: any
  setSignedInUserData: any
  isMobile: boolean
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
  isMobile: true,
  setIsMobile: () => {},
})

export const AppProvider = ({ children }: any) => {
  const [userInput, setUserInput] = useState('')
  const { isLoaded, isSignedIn, user } = useUser()
  const [signedInUserData, setSignedInUserData] = useState<any>(user)
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 650px)').matches
  )
  const [aiResponse, setAiResponse] = useState<IAIResponseContext[]>([
    {
      content: `Im still under construction, consider checking out the links for now :)`,
    },
  ])

  console.log(user, 'dataaaa')
  // Define any functions or values you want to provide
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
