import Header from "./components/layout/Header";
import TaskList from "./components/ui/TaskList";
import Weather from "./components/layout/Weather";

const App = () => {
  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h1>React App</h1>
        <Weather />
      </div>
      <Header title='Ik ben de React header' />
      <TaskList />
    </div>
  );
}

export default App;
