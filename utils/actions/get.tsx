import { collection, getDocs } from 'firebase/firestore/lite'
import { db } from '@/firebase/config'

const getTodos = async () => {
  const todosCol = collection(db, 'todo')
  const todoSnapshot = await getDocs(todosCol)
  let docId = ''
  const todoList = todoSnapshot.docs.map((doc) => {
    docId = doc.id
    return { id: docId, ...doc.data() }
  })

  return todoList
}
export default getTodos
