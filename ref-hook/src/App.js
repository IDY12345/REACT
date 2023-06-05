import logo from './logo.svg';
import './App.css';
import FocusInput from './components/FocusInput';
import Timer from './components/Timer';
import HookTimer from './components/HookTimer';

function App() {
  return (
    <div className="App">
      <Timer />
      <HookTimer />
    </div>
  );
}

export default App;
