import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import Addtodo from './components/Addtodo';

function App() {
  return (
    <div className="App">
      <Addtodo/>
      <Todos/>
      
    </div>
  );
}

export default App;
