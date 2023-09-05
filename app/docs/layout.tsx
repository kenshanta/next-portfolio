'use client'
import { PageAnimation } from '@/components/animator'

const DocsLayout = ({ children }: any) => {
  return (
    <div>
      <PageAnimation>
        <div>{children}</div>
      </PageAnimation>
    </div>
  )
}

export default DocsLayout
