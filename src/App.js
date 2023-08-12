
import './App.css';
import {Greet} from './Components/Greet'
import Wellcome from './Components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name="Tak"/>
      <Wellcome name="Tak"/>
    </div>
  );
}

export default App;
