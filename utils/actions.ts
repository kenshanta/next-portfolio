'use server'
import db from '@/utils/db'
import { revalidatePath } from 'next/cache'

export const newTodo = async (data: FormData) => {
  const newTodo = data.get('todo') as string

  const commonData = await db.todo.findFirst({
    where: {
      content: newTodo,
    },
  })
  if (newTodo && !commonData) {
    await db.todo.create({
      data: {
        content: newTodo,
      },
    })

    revalidatePath('/todos')
  }
}

export const completeTodo = async (id?: string) => {
  await db.todo.update({
    where: { id },
    data: {
      completed: true,
    },
  })
  revalidatePath('/todos')
}
