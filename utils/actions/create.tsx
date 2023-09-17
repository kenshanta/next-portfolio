import { revalidatePath } from 'next/cache'

const newTodo = async (data: FormData) => {
  // const newTodo = data.get('todo') as string

  // if (newTodo &&) {
  //   await db.todo.create({
  //     data: {
  //       content: newTodo,
  //     },
  //   })

  // }
  revalidatePath('/todos')
}
export default newTodo
