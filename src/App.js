
import './App.css';
import {Greet} from './Components/Greet'
import Message from './Components/Message';
import Wellcome from './Components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name="Tak"/>
      <Wellcome name="Tak"/>
      <Message />
    </div>
  );
}

export default App;
