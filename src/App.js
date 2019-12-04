import React, {useState} from 'react';
import {useSelector, useDispatch } from "react-redux"// these are the hooks and useDispatch is essentially the second part of connect of getting what action creators to dispatch
import {addTask, deleteTask} from "react-redux" // this is implied that it comes from redux/index.js
import {Form, Button} from "react-bootstrap"

function App(props) {
  const taskList = useSelector(taskList => taskList) // this is an array
  const dispatch = useDispatch() // we can utilize this for our button when we want to add a task
  const [task, setTask] = useState("")

  const displayTaskList = taskList.map((task, index) => {
     /* I added a plus one to the index because it starts at 0*/
    return (
      <h4 key={index} className="list-group-item list-group-item-action active">Task {index + 1}: {task}</h4> 
    )
  })

  function handleAddTask(task) { 
    dispatch({type:"ADD_TASK", payload: task}) // this is cool because we are able to call our action creators
    setTask("")
  }

  function handleChange(event) { // the onChange always handles an event
    setTask(event.target.value)
  }

  return (
    <>
      <div className="jumbotron">
        <div className="list-group">
          <h1>Task List using Redux</h1>
          {displayTaskList}
        </div>
      </div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Create your task below to have it added to the list above</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Write a task"
            onChange={handleChange}
            value={task}
             />
        </Form.Group>
        <Button variant="primary" onClick={() => handleAddTask(task)}> {/** equal to onClick={() => dispatch({type:"ADD_TASK"})} */}
          Create Task
        </Button>
      </Form>
    </>
  );
}

export default App;

