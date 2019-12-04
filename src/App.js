import React from 'react';
import {useSelector, useDispatch } from "react-redux"// these are the hooks and useDispatch is essentially the second part of connect of getting what action creators to dispatch
import {addTask, deleteTask} from "redux" // this is implied that it comes from redux/index.js


function App(props) {
  return (
   <div>
    <h1>Something</h1>
   </div>
  );
}

export default App;
