import React, { memo } from 'react'

const ChildForCallBack = () => {
    console.log("Child of usecallback")
  return (
    <div>
      
    </div>
  )
}

export default memo(ChildForCallBack)
