'use server'
import { revalidatePath } from 'next/cache'
import { collection, addDoc } from 'firebase/firestore/lite'
import { db } from '@/firebase/config'

const newTodo = async (data: any) => {
  await addDoc(collection(db, 'todo'), {
    content: data.get('todo'),
    completed: false,
  })
    .then((docRef) => {})
    .catch((error) => {
      console.log(error)
    })

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
