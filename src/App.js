
import './App.css';
import ClassClick from './Components/ClassClick';
import Counter from './Components/Counter';
import EventBinding from './Components/EventBinding';
import FuntionClick from './Components/FuntionClick';
import {Greet} from './Components/Greet'
import Message from './Components/Message';
import ParentComponent from './Components/ParentComponent';
import Wellcome from './Components/Welcome';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Tak"/>
      <Wellcome name="Tak"/>
      <Message />
      <Counter />
      <FuntionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBinding /> */}
      <ParentComponent />
      
    </div>
  );
}

export default App;
