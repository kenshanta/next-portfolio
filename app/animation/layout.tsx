import CoolAnimation from './page'
import PageAnimation from '@/components/pageAnimation'

const DashboardLayout = ({ children }: any) => {
  return (
    <div>
      <PageAnimation>
        <h1 className="text-3xl mb-5">Framer-Motion Animation:</h1>
        <CoolAnimation />
      </PageAnimation>
    </div>
  )
}

export default DashboardLayout
