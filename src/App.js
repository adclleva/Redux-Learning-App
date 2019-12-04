import React from 'react';
import {useSelector, useDispatch } from "react-redux"// these are the hooks and useDispatch is essentially the second part of connect of getting what action creators to dispatch
import {addTask, deleteTask} from "react-redux" // this is implied that it comes from redux/index.js


function App(props) {
  const taskList = useSelector(taskList => taskList)
  const dispatch = useDispatch() 

  const displayTaskList = taskList.map((task, index) => {
    return (
      <h4 key={index}>Task {index + 1}: {task}</h4>
    )
  })

  return (
   <div>
    <h1>Task List using Redux</h1>
    {displayTaskList}
   </div>
  );
}

export default App;
