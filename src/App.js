import './App.css';
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "./reduxStore/counter"
import { addTask, removeTask } from "./reduxStore/tasks"

function App() {
  const { counter, tasks } = useSelector((state) => state);
  // const counter = useSelector((state) => state.counter);
  // const tasks = useSelector((state) => state.tasks);   // Ilk yontem
  // {JSON.stringify(state)} olarak değişir.

  const dispatch = useDispatch();
  console.log(counter);

  const formHandler = (event) => {
    event.preventDefault();
    dispatch(addTask(event.target.task.value))
    event.target.task.value ="";
  };

  return (
    <div className="App">

     <h1>Redux</h1>
     {JSON.stringify(counter)}
     {JSON.stringify(tasks)}  
     <hr />

    <form onSubmit={formHandler}>
      <input type="text" name="task" id="task" />
      <button type="submit">Add Task</button>
    </form>
     <hr />

     <ul>
       {
         tasks.map(item => <li key={item.id} onClick={() => dispatch(removeTask(item.id))}>{item.title}</li>)
       }
     </ul>
     <h1>{counter}</h1>
     <button onClick={() => dispatch(increment())}>+</button>
     <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

// <button onClick={() => dispatch(decrement(10))}>-</button> diyebilirim
// 10'ar 10'ar azalır

// Bu kısımda uuid'ye gerek yok, task'lar id'leri hazır geliyor..

export default App;
