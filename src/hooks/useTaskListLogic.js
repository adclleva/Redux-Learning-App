// the purpose of this file is to create a custom hook
import React, { useState } from 'react'
import {useSelector, useDispatch } from "react-redux"// these are the hooks and useDispatch is essentially the second part of connect of getting what action creators to dispatch
import {addTask, deleteTask} from "../redux/index" // this is implied that it comes from redux/index.js

function useTaskListLogic() {

    function handleAddTask(task) {
      dispatch({type:"ADD_TASK", payload: task}) // this is cool because we are able to call our action creators
      setTask("") // this sets the task back to empty once the button is pressed
    }
    const taskList = useSelector(taskList => taskList) // this is an array
    const dispatch = useDispatch() // we can utilize this for our button when we want to add a task
    const [task, setTask] = useState("")

    const displayTaskList = taskList.map((task, index) => {
       /* I added a plus one to the index because it starts at 0*/
      return (
        <h4 key={index} class="list-group-item list-group-item-action active">Task {index + 1}: {task}</h4>
      )
    })

    function handleAddTask(task) {
      dispatch({type:"ADD_TASK", payload: task}) // this is cool because we are able to call our action creators
      setTask("") // this sets the task back to empty once the button is pressed
    }
      setTask(event.target.value)
    function handleChange(event) { // the onChange always handles an event
    }

    console.log("ddasdasdasd")
    return {displayTaskList, handleChange, handleAddTask, task}
}

export default useTaskListLogic
