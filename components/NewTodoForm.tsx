import { newTodo } from '@/utils/actions'

const NewTodoForm = () => {
  return (
    <div>
      <form action={newTodo}>
        <input type="text" name="todo" className="border round mr-3" />
        <button className="p-1 border border-black" type="submit">
          create
        </button>
      </form>
    </div>
  )
}

export default NewTodoForm
