import './App.scss';
import Accordion from './tasks/Accordion';
import ApiExample from './tasks/ApiExample';
import ContextTask from './tasks/ContextTask';
import Increment from './tasks/Increment';
import PassingProps1 from './tasks/PassingProps1';
import TodoList from './tasks/TodoList';
import UseEffectTask from './tasks/UseEffectTask';
import Wordle from './tasks/Wordle';

function App() {
  return (
    <div className="App">
      <Increment />
      <hr />

      <Accordion />
      <hr />

      <PassingProps1 />
      <hr />

      <ContextTask />
      <hr />
      <TodoList />
      <UseEffectTask />
      <Wordle />
      <ApiExample />
    </div>
  );
}

export default App;
