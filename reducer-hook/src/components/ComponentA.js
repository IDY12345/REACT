import React,{useContext} from 'react'
import { CountContext } from '../App'
function ComponentA() {
    const countContext=useContext(CountContext)
  return (
    <div>
        Component A-{countContext.countState}
        <button onClick={()=>countContext.countDispatch('increment5')}>Increment5</button>
        <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
        <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
        <button onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
        <button onClick={()=>countContext.countDispatch('decrement5')}>Decrement5</button>
    </div>
  )
}

export default ComponentA