import CreateTask from '../CreateTask';
import ViewTasks from '../ViewTasks';
import ViewAllTaskPosts from '../ViewAllTaskPosts';
import ViewAllContracts from '../ViewAllContracts';

///////////////////
// Reducer examples
// possible global state values would go here
const initialState = { value: 0 };

// Array reducer
const arr = [1, 2, 3, 4, 5];
const initialValue = 0;
const total = arr.reduce(sum, initialValue);
function sum(prevResult, currItem) {
  return prevResult + currItem;
}
console.log("reduction total: ", total)

// Action object
const addTodoAction = {
  type: 'todos/todoAdded',
  payload: 'take out the trash',
}
// Action Creators
const addTodo = text => {
  return {
    type: 'todos/todoAdded',
    payload: text,
  }
}

function counterReducer(state = initialState, action) {
  if (action.type === 'counter/increment') {
    return {
      ...state,
      value: state.value + 1,
    }
  }
  return state;
}
// end reducer examples
///////////////////////


export const DashboardReducer = (props) => {
  const action = props.action;
  switch (action) {
    case 'POST_TASK':
      return <CreateTask />;
    case 'VIEW_TASKS':
      return <ViewTasks />;
    case 'VIEW_ALL_TASK_POSTS':
      return <ViewAllTaskPosts />;
    case 'VIEW_ALL_CONTRACTS':
      return <ViewAllContracts />;
    default:
      return null;
  }
}