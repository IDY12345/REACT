import React,{useReducer} from 'react'

const initialState=0
const reducer =(state,action)=>
{
    switch(action){
        case 'increment':
         return   state+1
        case 'decrement':
            return state-1
        case 'increment5':
            return state+5
        case 'decrement5':
            return state-5    
        case 'reset':
            return initialState
        default:
            return state


    }

}
function Counter3() {
  const[count,dispatch] = useReducer(reducer,initialState)
  const[count2,dispatch2]=useReducer(reducer,initialState)
  return (
    <div>
        <div>Count-{count}</div>
        <button onClick={()=>dispatch('increment5')}>Increment5</button>
        <button onClick={()=>dispatch('increment')}>Increment</button>
        <button onClick={()=>dispatch('reset')}>Reset</button>
        <button onClick={()=>dispatch('decrement')}>Decrement</button>
        <button onClick={()=>dispatch('decrement5')}>Decrement5</button>
        <div>
            <div>Count2-{count2}</div>
        <button onClick={()=>dispatch2('increment5')}>Increment5</button>
        <button onClick={()=>dispatch2('increment')}>Increment</button>
        <button onClick={()=>dispatch2('reset')}>Reset</button>
        <button onClick={()=>dispatch2('decrement')}>Decrement</button>
        <button onClick={()=>dispatch2('decrement5')}>Decrement5</button>
        </div>
    </div>
  )
}

export default Counter3