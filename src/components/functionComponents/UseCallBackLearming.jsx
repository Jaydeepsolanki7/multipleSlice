import React, { useCallback, useState } from 'react'
import ChildForCallBack from './ChildForCallBack'

const UseCallBackLearming = () => {
    const [add, setAdd] = useState(0)
    const Learning = useCallback(()=>{

    },[])

  return (
    <div>
        <h2>UnderStanding UseCallback</h2>
        <ChildForCallBack Learning={Learning} />
        {add}
        <button onClick={()=>setAdd(add+1)}>plus</button>
    </div>
  )
}

export default UseCallBackLearming
