import CreateTask from './createtask/CreateTask';

function ViewTasks(props) {
  return <h1>view existing tasks</h1>
}

function ViewAllTaskPosts(props) {
  return <h1>view all task posts</h1>
}
function ViewAllContracts(props) {
  return <h1>view all contracts</h1>
}

export default function Tabs(props) {
  console.log('in tabs element', props)
  const val = props.value;
  switch (val) {
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