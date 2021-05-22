// possible global state values would go here
import CreateTask from '../CreateTask';
import ViewTasks from '../ViewTasks';
import ViewAllTaskPosts from '../ViewAllTaskPosts';
import ViewAllContracts from '../ViewAllContracts';

export const DashboardReducer = (props) => {
  console.log(props)
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