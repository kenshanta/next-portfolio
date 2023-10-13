'use client' // Because we're inside a server component
import React, { createContext, useState, useContext } from 'react'

interface IStateContext {
  userInput: string
  setUserInput: React.Dispatch<React.SetStateAction<string>>
  aiResponse: IAIResponseContext[]
  setAiResponse: React.Dispatch<React.SetStateAction<IAIResponseContext[]>>
  signedInUserData: any
  setSignedInUserData: any
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
})

export const AppProvider = ({ children }: any) => {
  const [userInput, setUserInput] = useState('')
  const [aiResponse, setAiResponse] = useState<IAIResponseContext[]>([
    {
      content:
        'Hey ${user} how how how how how how how how how how howh ohw how how howh owhowh  how can i help you today?',
    },
  ])

  const [signedInUserData, setSignedInUserData] = useState<any>({})

  // Define any functions or values you want to provide
  const value = {
    userInput,
    setUserInput,
    aiResponse,
    setAiResponse,
    setSignedInUserData,
    signedInUserData,
  }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)
