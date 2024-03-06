import React, { useMemo, useState } from 'react'

function UseMemoLearning() {
    const [add, setAdd] = useState(0)
    const [minus, setMinus] = useState(100)
    const multiplication = useMemo(function multiply(){
        console.log("#######")
        return add*10;
    },[add])

  return (
    <div>
        <h2>Using useMemo</h2>
       {multiplication}<br/> 
       {/* Used use memo of getting the memoized value it will re-render only on the add button */}
      <button onClick={()=>setAdd(add+1)} >Add</button>
      {add}<br/>
      <button onClick={()=>setMinus(minus-1)}>Substract</button>
      {minus}
    </div>
  )
}

export default UseMemoLearning
