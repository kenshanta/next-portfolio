import db from '@/utils/db'
import { error } from 'console'
import { NextResponse } from 'next/server'

export const GET = async () => {
  const data = await db.todo.findMany({})
  return NextResponse.json({ data })
}

export const POST = async (request: Request) => {
  console.log(request, '--------- dataa by contnent =============')

  const postData = await request.json()
  const data = await db.todo.delete({
    where: {
      content: postData.content,
      id: postData.id,
    },
  })
  // NextResponse.json({ data })
  console.log(data, '--------- dataa by contnent =============')
  if (data) {
    console.log('--------- i exist =============')
    return NextResponse.json({ data })
  } else {
    const todo = await db.todo.create({ data: postData })
    return NextResponse.json({ data: todo })
  }
}

export const DELETE = async (request: Request, { params }: any) => {
  const todo = await db.todo.delete({ where: { id: params.id } })
  return NextResponse.json({ data: todo })
}
