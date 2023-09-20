'use client'
import { useState } from 'react'

// API request for AI
// const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault()
//   try {

//       console.log('pre analyze')
//       await analyze(message)

//   } catch (e) {
//     console.log(e)
//   }

//   console.log('sako')
// }

const TextInput = () => {
  const [message, setMessage] = useState<string>('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }

  return (
    <form>
      <input
        type="text"
        placeholder="how old is the admin?"
        value={message}
        onChange={handleInputChange}
        className="text-black mr-10 w-10/12 h-10 p-1.5"
      />
      <button type="submit" className="h-10 p-1.5 border-2">
        Send
      </button>
    </form>
  )
}

export default TextInput
