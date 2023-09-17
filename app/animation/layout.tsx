import CoolAnimation from './page'
import PageAnimation from '@/components/pageAnimation'

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
