import React ,{useState,useEffect} from 'react'
function IntervalHookCounter() {
    const[count,setCount]=useState(60)
    const tick =()=>
    {
        setCount(count-1)
    }
    useEffect(()=>
    {
        const interval=setInterval(tick,1000)
        return()=>
        {
         clearInterval(interval)   
        }
    },[count]
    )
  return (
    <div>
        <h2>{count}</h2>
    </div>
  )
}

export default IntervalHookCounter