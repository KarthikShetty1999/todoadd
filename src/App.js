import './App.css';
import {useState} from "react";
function App() {
const [todo, setTodo]= useState('');
const [data, setData]=useState([]);
function handleClick()
{
  if(todo === '')
  {
    alert("Empty")
  }else{
  const id = data.length + 1;
  setData((prev) => [
    ...prev,
    {
      id: id,
      task: todo,
      complete: false,
    },
  ]);
  setTodo("");
  console.log(data)
}

}
  return (
    <>
      <h1>TODO</h1>
      <input type="text" placeholder="TODO" value={todo} onChange={(e)=>setTodo(e.target.value)} />
      <button onClick={()=> handleClick()}>Add</button>
      <div>
      {data.map((todo) => {
              return (
                <>
               <div class="card"  >
                <div class="card-body">
                  <h5 class="card-title">{todo.id}{" "}{todo.task}</h5>
                </div>
              </div>
                </>
              );
            })} 
      </div>
    </>
  );
}
export default App;
