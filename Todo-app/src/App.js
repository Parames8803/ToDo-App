import './App.css';
import React, { useState } from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';

function App() {

  const [todo, setTodo] = useState('')
  const [desc, setDesc] = useState('')
  const [list, setList] = useState([])


  function onValueChange(e) {
    setTodo(e.target.value)
  }
  function onDescChange(e) {
    setDesc(e.target.value)
  }
  function deleteTodo(id){
    // console.log(id)
    const newList = list.filter(n => n.id !== id);
    setList(newList)
  }




return (
  <div className="App">
    <h2>TODO - WEB APP</h2>
    <div className="inform">
    <div className="topic" style={{'display':'flex'}}>
    <input type='text' id='todo' value={todo} onChange={onValueChange} placeholder=' Enter the title of todo' /><br/>
    <input type='button' id='add' value='Add' onClick={(e) => {
        setList([
          ...list,{
            id : list.length + 1,
            todo : todo,
            description : desc
          }
        ]);
        setTodo("");
        setDesc("");
    }}/>
    </div>
    <TextareaAutosize type='text' id='desc' value={desc} onChange={onDescChange} placeholder='Enter a description' />
    </div>

    <div className="list">
   
      {list.map((m) => (
        <div key={m.id} className='iterate' >
          <button onClick={() => { deleteTodo(m.id)}} id ="del-btn" >Delete</button>
          <h2 id='line-1'>{m.todo}</h2>
          <p> ~ {m.description}</p>
        </div>
      ))}
    
    </div>
  </div>

)

}

export default App;
