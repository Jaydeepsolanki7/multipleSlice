import React, { useCallback, useState } from 'react'
import ChildForCallBack from './ChildForCallBack'

const UseCallBackLearming = () => {
    const [add, setAdd] = useState(0)
    const [count, setCount] = useState(0)
    const Learning = useCallback(()=>{

    },[count])

  return (
    <div>
        <h2>UnderStanding UseCallback</h2>
        {count}
        <button onClick={()=>setCount(count+5)}>plusCount</button>
        <ChildForCallBack Learning={Learning} />
        {add}
        <button onClick={()=>setAdd(add+1)}>plus</button>
    </div>
  )
}

export default UseCallBackLearming
