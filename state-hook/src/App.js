import React from 'react'
import './App.css';
import ClassCounter from './components/ClassCounter'
import DataFetching from './components/DataFetching';
import HookCounter from './components/HookCounter';
import HookCounter2 from './components/HookCounter2';
import HookCounter3 from './components/HookCounter3';
import HookCounter4 from './components/HookCounter4';
import HookCounter5 from './components/HookCounter5';
import HookMouse from './components/HookMouse';
import IntervalHookCounter from './components/IntervalHookCounter';
import MouseContainer from './components/MouseContainer';
import ComponentC from './components/ComponentC';
export const UserContext=React.createContext()
export const ChannelContext=React.createContext()
function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Ishaan'}>
        <ChannelContext.Provider value={'CodeEvolution'}>
        <ComponentC />
        </ChannelContext.Provider>
      
      </UserContext.Provider>
      {/*<DataFetching />}
      {/*<IntervalHookCounter />}
      {/*<MouseContainer />}
     {/* <HookMouse />}
     {/* <HookCounter5 />}
      {/*<HookCounter4 />}
     {/* <HookCounter3 />}
     {/* <HookCounter2 />}
     {/*<HookCounter />} 
     {/*<ClassCounter />*/}
    </div>
  );
}

export default App;
