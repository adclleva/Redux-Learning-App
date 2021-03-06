import redux, {createStore} from "redux" // we only import redux because we aren't inside a react app just a js file

function addTask(task) { // action creators always return a key of type and a value of the action
    return {
        type: "ADD_TASK", // this is upper snake case
        payload: task 
    }
}

function deleteTask(task) {
    return {
        type: "DELETE_TASK",
        payload: task
    }
}


function taskListReducer(taskList = ["create a task", "Read up redux", "Study more React"], action) { // reducers get an initial/current "state/value" and the action for their parameters
    switch(action.type) {
        case "ADD_TASK": 
            return [...taskList, action.payload]
        case "DELETE_TASK":
            return taskList.filter(task => {
                return task.toLowerCase() !== action.payload.toLowerCase
            })
        default:
            return taskList
    }
}

const store = createStore(taskListReducer) 

store.subscribe(() => {
    console.log(store.getState())
})

export {
    addTask,
    deleteTask
}
export default store

/**
The Store is the object that brings them together. The store has the following responsibilities:

Holds application state;
Allows access to state via getState();
Allows state to be updated via dispatch(action);
Registers listeners via subscribe(listener);
Handles unregistering of listeners via the function returned by subscribe(listener). 
*/