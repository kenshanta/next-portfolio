'use client'
import Todo from './Todo'

type TodoListType = {
  id: string
  content: any
  completed: boolean
}

const TodoList = ({ todos }: any = []) => {
  return (
    <div className="mt-5">
      {todos.map((todo: TodoListType, i: number) => (
        <Todo key={i} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
