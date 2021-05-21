import useSWR from 'swr';
import Layout from '../components/Layout';
import Box from '../components/Box';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HelpIcon from '@material-ui/icons/Help';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useRouter } from 'next/router';
import { useState } from 'react';


const fetcher = url => fetch(url).then(res => res.json());

function CreateTask(props) {
  return <h1>create a task</h1>
}

function ViewExistingTasks(props) {
  return <h1>view existing tasks</h1>
}

function Tabs(props) {
  const val = parseInt(props.val);
  switch (val) {
    case 1:
      return <CreateTask />;
    case 2:
      return <ViewExistingTasks />;
    default:
      return null;
  }
}

export default function dashboard() {
  // const { data, error } = useSWR('/api/test', fetcher);
  const [d, setDisplay] = useState(0);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push('/dashboard')
    return;
  }

  const showMenu = () => {
    let parent = document.getElementById('sidebar');
    parent.classList.toggle('-left-full')
  }
  const accountDropDown = () => {
    let parent = document.getElementById('accountDropDown');
    parent.classList.toggle('hidden')
  }

  const postTaskDropDown = () => {
    let parent = document.getElementById('postTaskDropDown');
    parent.classList.toggle('hidden')
  }

  const viewTaskDropDown = () => {
    let parent = document.getElementById('viewTaskDropDown');
    parent.classList.toggle('hidden')
  }

  const reportsDropDown = () => {
    let parent = document.getElementById('reportsDropDown');
    parent.classList.toggle('hidden')
  }

  const display = (e) => {
    console.log(e.target.value)
    setDisplay(e.target.value);
  }

  return (
    <Layout>
      <aside
        id="sidebar"
        className="absolute h-screen w-full -left-full flex flex-col justify-start overflow-hidden bg-black opacity-90 select-none">
        <nav className="w-full pt-5 px-5">
          <ul
            className="text-white">
            <hr />
            <li className="my-4">
              <button
                onClick={display, accountDropDown}
                value={1}
                className="w-full flex flex-row justify-between items-center font-bold z-10 focus:outline-none">
                <div>
                  <AccountCircleIcon
                    fontSize="large" />
                  <span className="ml-2">[insert user name]</span>
                </div>
                <ArrowDropDownIcon
                  fontSize="large" />
              </button>
              <ul
                id="accountDropDown"
                className="z-0 hidden">
                <li>[account]</li>
              </ul>
            </li>
            <hr />
            <li className="my-4">
              <button
                onClick={display, postTaskDropDown}
                value={1}
                className="w-full flex flex-row justify-between items-center font-bold focus:outline-none">
                <span>Post a task</span>
                <ArrowDropDownIcon
                  fontSize="large" />
              </button>
              <ul
                id="postTaskDropDown"
                className="z-0 hidden">
                <li>post task</li>
              </ul>
            </li>
            <hr />
            <li className="my-4">
              <button
                onClick={display, viewTaskDropDown}
                value={2}
                className="w-full flex flex-row justify-between items-center font-bold focus:outline-none">
                <span>View tasks</span>
                <ArrowDropDownIcon
                  fontSize="large" />
              </button>
              <ul
                id="viewTaskDropDown"
                className="z-0 hidden">
                <li>view tasks</li>
              </ul>
            </li>
            <hr />
            <li className="my-4">
              <button
                onClick={display, reportsDropDown}
                value={3}
                className="w-full flex flex-row justify-between items-center font-bold focus:outline-none">
                <span>Reports</span>
                <ArrowDropDownIcon
                  fontSize="large" />
              </button>
              <ul
                id="reportsDropDown"
                className="z-0 hidden">
                <li>reports</li>
              </ul>
            </li>
            <hr />
            <li className="my-4">
              <button
                onClick={display}
                value={4}
                className="w-full flex flex-row justify-between items-center font-bold focus:outline-none">
                <span>Messages</span>
              </button>
            </li>
            <hr />
            <li className="my-4">
              <button
                onClick={display}
                value={5}
                className="w-full flex flex-row justify-between items-center font-bold focus:outline-none">
                <span>Help</span>
                <HelpIcon
                  fontSize="large" />
              </button>
            </li>
            <hr />
            <li className="my-4">
              <button
                onClick={display}
                value={6}
                className="w-full flex flex-row justify-between items-center font-bold focuc:outline-none">
                <span>Notifications</span>
                <NotificationsIcon
                  fontSize="large" />
              </button>
            </li>
            <hr />
            <li className="my-4">
              <button
                onClick={display}
                value={7}
                className="w-full flex flex-row justify-start items-center font-bold focus:outline-none">
                <SettingsIcon fontSize="large" />
                <span className="ml-2">Settings</span>
              </button>
            </li>
            <hr />
            <li className="my-4">
              <button
                onClick={display}
                value={8}
                className="w-full flex flex-row justify-start items-center font-bold focus:outline-none">
                <ExitToAppIcon fontSize="large" />
                <span className="ml-2">Logout</span>
              </button>
            </li>
          </ul>
        </nav>
      </aside>
      <section className="flex flex-col">
        <nav className="">
        </nav>
        <main className="w-full flex flex-col">
          <section>
            <Tabs val={d} />
          </section>
          <button
            onClick={showMenu}
            className="fixed bottom-4 right-4 w-20 h-20 rounded-full bg-blue-500 text-white border-none">Menu</button>
        </main>
      </section>
    </Layout>
  )
}