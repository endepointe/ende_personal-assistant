// possible global state values would go here
import CreateTask from '../components/dashboard/CreateTask';
import ViewTasks from '../components/dashboard/ViewTasks';
import ViewAllTaskPosts from '../components/dashboard/ViewAllTaskPosts';
import ViewAllContracts from '../components/dashboard/ViewAllContracts';

// in the redux branch

export const DashboardReducer = (props) => {
  console.log(props)
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