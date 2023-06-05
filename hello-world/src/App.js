import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from'./components/Message'
import Counter from'./components/Counter'
import FunctionClick from'./components/FunctionClick'
import ClassClick from'./components/ClassClick'
import EventBind from'./components/EventBind'
import ParentComponent from'./components/ParentComponent'
import UserGreeting from'./components/UserGreeting'
import NameList from'./components/NameList'
import Stylesheet from './components/Stylesheet'
import Inline from'./components/Inline'
import './appStyles.css'
import styles from'./appStyles.module.css'
import Form from './components/Form'
import LifeCycleA from './components/LifeCycleA'
import FragmentDemo from './components/FragmentDemo';
import Tables from './components/Tables';
import PC from './components/PC';
import ParComp from './components/ParComp';
import MemoComponent from './components/MemoComponent';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import { render } from 'react-dom';
import ClickCounter from './components/ClickCounter';
import HowerCounter from './components/HowerCounter';
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter2 from './components/HoverCounter2';
import User from './components/User';
import Counter1 from './components/Counter1';
import ComponentC from './components/ComponentC'
import {UserProvider} from './components/UserContext'
function App() {
  return (
    <div className="App">
      
     {/*<UserProvider value="Ishaan">
      <ComponentC />
      </UserProvider>}
      
     {/* <Counter1 render={(count,incrementCount)=> (
      <ClickCounter2 count={count} incrementCount={incrementCount}/>
      )} 
      />
       <Counter1 render={(count,incrementCount)=> (
      <HoverCounter2 count={count} incrementCount={incrementCount}/>
      )} 
      />}
     { /*<HoverCounter2 />
      <ClickCounter2 />
      <User render={(isLoggedIn)=>isLoggedIn ? 'Ishaan':'Guest'}/>}
     {/* <ErrorBoundary><Hero Heroname ='Superman' /></ErrorBoundary>
      
      <ErrorBoundary><Hero Heroname ='Batman' /></ErrorBoundary>
      
      <ErrorBoundary><Hero Heroname ='Joker' /></ErrorBoundary>}
      
 
      {/*<PortalDemo />
      {/*<FRParentInput />
      {/*<FocusInput />
     {/*} <RefsDemo />
    {/*<ParComp />}  
    {/*}
      {/*<Tables />}
      {/*<FragmentDemo />}
     {/*} <LifeCycleA />
    {/*<Form />
     {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
    {/*  <Inline />
     {/*} <Stylesheet primary={true}/>
     {/*<NameList />} 
     {/*<UserGreeting />} 
                     {/* <ParentComponent />
 <EventBind />
<ClassClick />
      <Greet name = "Diana"heroName="Wonder Woman"/>
      <Welcome name="Bruce" heroName="Batman">
        <button> Kill </button>
      </Welcome>
      <Greet name = "Bruce" heroName="Batman">
            <p>I am The Best SuperHero</p>
      </Greet>
      <Greet name = "Clarke"heroName="Superman">
        <button>Action</button>
      </Greet>  
  <Greet name = "Diana"heroName="Wonder Woman"/>
      <Welcome name="Bruce" heroName="Batman">
        <button> Kill </button>
      </Welcome>
      <Welcome name = "Clarke"heroName="Superman"></Welcome>
      <Welcome name = "Diana"heroName="Wonder Woman"/>*/}      
    </div>
  );
}

export default App;
