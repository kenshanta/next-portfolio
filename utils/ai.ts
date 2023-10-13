import { OpenAI } from 'langchain/llms/openai'
import { BufferMemory } from 'langchain/memory'

// const chatHistory = () =>
const model = new OpenAI({
  temperature: 0,
  modelName: 'gpt-3.5-turbo',
  openAIApiKey: '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',
})
const memory = new BufferMemory()

export const analyze = async (prompt: string) => {
  let chat: any = []

  // const res2 = await chain.call({ input: "What's my name?" })
  await model.call(prompt)
  try {
    chat = await memory.chatHistory.getMessages()
    console.log(chat, 'memory')
  } catch (error) {
    console.log(error, '----- errporr---')
  }
  return chat
}
