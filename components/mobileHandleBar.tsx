import { Popover } from '@radix-ui/react-popover'

import Draggable from 'react-draggable'
import { BorderSolidIcon } from '@radix-ui/react-icons'

const MobileHandleBar = ({ children }: any) => {
  return (
    <Popover>
      <Draggable axis="y" bounds="parent" handle=".handle">
        <div
          style={{ height: 'inherit' }}
          className="color-orange handle rounded-full absolute top-2 left-2 cursor-grab flex"
        >
          <div>
            <BorderSolidIcon />
          </div>
          {children}
        </div>
      </Draggable>
    </Popover>
  )
}

export default MobileHandleBar
