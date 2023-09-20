'use client'
import { deleteTodo, completeTodo } from '@/utils/actions/update'
import { useTransition } from 'react'

type TodoType = {
  todo: { id: string; content: any; completed: boolean }
}
const Todo = ({ todo }: TodoType) => {
  // console.log(todo, 'todo------ chek for id?')
  const [isPending, startTransition] = useTransition()
  return (
    <div>
      <div
        className={`px-8 py-2 border border-black/25 cursor-pointer ${
          todo.completed ? 'line-through text-black/30' : ''
        }`}
        onClick={() => startTransition(() => completeTodo(todo.id))}
      >
        {todo.content}
      </div>
      <div onClick={() => startTransition(() => deleteTodo(todo.id))}>x</div>
    </div>
  )
}

export default Todo
