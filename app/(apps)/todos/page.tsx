import TodoList from '@/components/TodoList'
import db from '@/utils/db'

const getData = async () => {
  const todos: any = []
  return todos
}

const TodosPage = async () => {
  const todos = await getData()
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  )
}

export default TodosPage
