import React,{useState,useEffect} from 'react'

function DocTitle2() {
    const [count, setCount] = useState(0)
    useEffect(() => {
      document.title=`Count-${count}`
    }, [count])
    
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Count-{count}</button>
    </div>
  )
}

export default DocTitle2