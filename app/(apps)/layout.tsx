'use client'
import NewTodoForm from '@/components/NewTodoForm'
import CoolAnimation from './animation/page'
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
        <h1>Animation</h1>
        <div>
          <CoolAnimation />
        </div>
      </PageAnimation>
    </div>
  )
}

export default DashboardLayout
