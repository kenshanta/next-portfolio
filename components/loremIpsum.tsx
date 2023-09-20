'use client'

export const LoremIpsum = ({ response }: any) => {
  return (
    <div>
      <p className="text-xl">{response}</p>
    </div>
  )
}
