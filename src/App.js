import './App.css';
import {useState} from "react";

function App() {
const [todoList, SetTodolist] = useState([]);
const [NewTask, SetNewTAsk] = useState("");
 
const handleChange = (event) => {
  SetNewTAsk(event.target.value) 
};
let addTask = () => {
  const task = {
    id : todoList.length === 0 ? 1 : todoList[todoList.length -1].id + 1,
    taskName : NewTask,
    completed : false,
  };

  if (NewTask.trim()!== "") {
    SetTodolist([...todoList, task]);
  }
}
const deleteTask = (taskid) =>{

//  console.log(taskid);
    SetTodolist( todoList.filter((task)=>{
     // console.log(task);
      return task.id !==taskid
    },

    
    ))  
};

const completeTask = (taskid) => {

  SetTodolist( todoList.filter((task)=>{
    // console.log(task);
      if(task.id === taskid){
        //checks true or false automatically
        task.completed = !task.completed
      }
     return task;
   },

   
   ))
   
  
}

const enterPress = (e) =>{
  // console.log(e);
  if (e.code === "Enter"){
    addTask();
  }
}

  return (
   <div className='create'>
     <div className="App">
      <div className='Add_task'>
        <div className='title'>TO DO LIST </div>
        <input className='input' onChange={handleChange} placeholder='Enter Task' onKeyUp={(e) => enterPress(e)}/>
        <button className='but' onClick={ addTask} >Add Task </button>
      </div>
      <div className='list_task'>
     {todoList.map((task)=>{

      return (
      <div className='display'
      style={{backgroundColor: task.completed? '#ff69b4': '#ca9da4'}}
      >
        <ul  >
          <li>{task.taskName} 
          <button  onClick={()=> deleteTask(task.id)}>x</button> 
          <button onClick={()=> completeTask(task.id)} >complete</button>
          </li>
        </ul>
      
      </div>
      
      
      );
     })}
      </div>
    </div>
   </div>
  );
}

export default App;
