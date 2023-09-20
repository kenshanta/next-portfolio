import NewTodoForm from '@/components/NewTodoForm'
import PageAnimation from '@/components/pageAnimation'

const DashboardLayout = ({ children }: any) => {
  return (
    <div>
      <PageAnimation>
        <div className="mb-5">
          <h1 className="text-3xl">Todos</h1>
        </div>
        <div>
          <NewTodoForm />
        </div>
        <div>{children}</div>
      </PageAnimation>
    </div>
  )
}

export default DashboardLayout
