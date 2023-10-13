import { Popover } from '@radix-ui/react-popover'
import { useRef } from 'react'
// import { SplitPane } from 'react-collapse-pane'
import { BorderSolidIcon } from '@radix-ui/react-icons'

const MobileHandleBar = ({ children }: any) => {
  return (
    <Popover>
      {/* <SplitPane split="vertical"> */}
      <div>
        <BorderSolidIcon />
      </div>
      <div
        style={{ height: 'inherit' }}
        className="color-orange handle rounded-full absolute top-2 left-2 cursor-grab flex"
      >
        {children}
      </div>
      {/* </SplitPane> */}
    </Popover>
  )
}

export default MobileHandleBar
