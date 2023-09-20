import { OpenAI } from 'langchain/llms/openai'

export const analyze = async (prompt: string) => {
  console.log('post analyze')
  const model = new OpenAI({ temperature: 0, modelName: 'gpt-3.5-turbo' })
  const result = await model.call(prompt)
  return result
}
