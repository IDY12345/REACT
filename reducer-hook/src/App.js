import React,{useReducer} from 'react'
import logo from './logo.svg';
import './App.css';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import Counter3 from './components/Counter3';
import ComponentA from './components/ComponentA'
import ComponentB from'./components/ComponentB'
import ComponentC from'./components/ComponentC'
import DataFetching1 from './components/DataFetching1';
import DataFetching2 from './components/DataFetching2';
import ParentComponent from './components/ParentComponent';
export const CountContext=React.createContext()
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
function App() {
  const [count,dispatch]=useReducer(reducer,initialState)
  return (
    
    <div className="App">
      <ParentComponent />
     {/* <DataFetching2 />}
     {/* Count-{count}}
     {/* <ComponentA />
      <ComponentB />
      <ComponentC />
      }
      {/*<Counter3 />}
      {/*<Counter2 />}
      {/*<Counter1 />*/}      
    </div>
  );
}

export default App;
