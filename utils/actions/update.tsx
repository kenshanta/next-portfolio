import { revalidatePath } from 'next/cache'

const completeTodo = async (id?: string) => {
  // await db.todo.update({
  //   where: { id },
  //   data: {
  //     completed: true,
  //   },
  // })
  revalidatePath('/todos')
}

export default completeTodo
