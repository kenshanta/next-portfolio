import Todo from './Todo'

type TodoListType = {
  id: string
  content: any
  completed: boolean
}

const TodoList = ({ todos }: any = []) => {
  // console.log(todos, '--------------')
  return (
    <div className="mt-5">
      {todos.map((todo: TodoListType) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
