'use client'
import NewTodoForm from '@/components/NewTodoForm'
import { PageAnimation } from '@/components/animator'

const DashboardLayout = ({ children }: any) => {
  return (
    <div>
      <PageAnimation>
        <div>
          <h1>Todos</h1>
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
