import React,{useReducer,useEffect} from 'react'
import axios from 'axios'
const initialState={
    loading:true,
    post:{},
    error:''
}
const reducer=(state,action)=>{
    switch(action.type){
         case 'Fetch Success':
             return {loading:false,
                post:action.payload,
                error:''
    }
        case 'Fetch Error':
            return{
                loading:false,
                post:{},
                error:'Something Went Wrong!'
            }
        default:
            return state    
}
}

function DataFetching2() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response =>
            {
               dispatch({type:'Fetch Success',payload:response.data})
            })
           .catch(error =>
              {
              dispatch({type:'Fetch Error'})
              })
      }, [])
    
  return (
    <div>{state.loading ? 'Loading':state.post.title}
    {state.error ? state.error : null}
    </div>
  )
}

export default DataFetching2 