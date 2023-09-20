'use server'
import { revalidatePath } from 'next/cache'
import { collection, updateDoc, doc, deleteDoc } from 'firebase/firestore/lite'
import { db } from '@/firebase/config'

export const completeTodo = async (id: string) => {
  const docRef = doc(db, 'todo', id)
  await updateDoc(docRef, {
    completed: true,
  })

  // await db.todo.update({
  //   where: { id },
  //   data: {
  //     completed: true,
  //   },
  // })
  revalidatePath('/todos')
}

export const deleteTodo = async (id: string) => {
  const docRef = doc(db, 'todo', id)
  await deleteDoc(docRef)

  // await db.todo.update({
  //   where: { id },
  //   data: {
  //     completed: true,
  //   },
  // })
  revalidatePath('/todos')
}
