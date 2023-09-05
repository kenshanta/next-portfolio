'use client'

import {
  PageAnimation,
  BoxAnimation,
  ProgressIndicator,
} from '@/components/animator'
import { LoremIpsum } from '@/components/loremIpsum'

function Home() {
  //TODO: refactor to dynamic list
  const boxProps = {
    color: 'pink',
    duration: 2,
    rotation: [0, 0, 90, 180, 0],
  }
  const boxProps1 = {
    color: 'orange',
    duration: 1,
    rotation: [0, 90, 90, 180, 0],
  }
  const boxProps3 = {
    color: 'whitesmoke',
    duration: 1,
    rotation: [0, 40, 190, 280, 0],
  }

  return (
    <div className="flex align-center justify-center ">
      <ProgressIndicator />
      <PageAnimation>
        <div>
          <div className="flex justify-start space-between align-center d-column">
            <BoxAnimation props={boxProps3} />
          </div>
          <div className="w-25 flex justify-center align-center d-row">
            <BoxAnimation props={boxProps} />
          </div>
          <div className="  mb-5 flex justify-end align-center d-column">
            <BoxAnimation props={boxProps1} />
          </div>
        </div>
        <div>
          <LoremIpsum />
        </div>
        <div>
          <div className="flex justify-start space-between align-center d-column">
            <BoxAnimation props={boxProps1} />
          </div>
          <div className="w-25 flex justify-center align-center d-row">
            <BoxAnimation props={boxProps3} />
          </div>
          <div className="  mb-5 flex justify-end align-center d-column">
            <BoxAnimation props={boxProps} />
          </div>
        </div>
      </PageAnimation>
    </div>
  )
}

export default Home
