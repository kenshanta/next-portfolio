import PageAnimation from '@/components/pageAnimation'

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
