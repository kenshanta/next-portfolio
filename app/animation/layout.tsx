import NewTodoForm from '@/components/NewTodoForm'
import CoolAnimation from '../animation/page'
import { PageAnimation } from '@/components/animator'

const DashboardLayout = ({ children }: any) => {
  return (
    <div>
      <PageAnimation>
        <h1>Animation</h1>
        <CoolAnimation />
      </PageAnimation>
    </div>
  )
}

export default DashboardLayout
