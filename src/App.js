
import './App.css';
import Counter from './Components/Counter';
import {Greet} from './Components/Greet'
import Message from './Components/Message';
import Wellcome from './Components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name="Tak"/>
      <Wellcome name="Tak"/>
      <Message />
      <Counter />
      
    </div>
  );
}

export default App;
