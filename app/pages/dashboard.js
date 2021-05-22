import useSWR from 'swr';
import Layout from '../components/Layout';
import Box from '../components/Box';
import { DashboardReducer } from '../context/reducers';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HelpIcon from '@material-ui/icons/Help';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useRouter } from 'next/router';
import { useState } from 'react';

// sometime ill use this
const fetcher = url => fetch(url).then(res => res.json());

export default function dashboard() {
  // const { data, error } = useSWR('/api/test', fetcher);
  const [tab, setTab] = useState('');
  // sets the recently open tab for closing after
  // a menu selection has been made.
  const [openTab, setOpenTab] = useState({});
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
  const accountDropDown = (e) => {
    console.log(e.target)
    let parent = document.getElementById('accountDropDown');
    parent.classList.toggle('hidden')
  }
  const taskDropDown = (e) => {
    console.log(e.target);
    let parent = document.getElementById('taskDropDown');
    parent.classList.toggle('hidden');
    // add parent to the list of open tabs. These tabs will
    // be closed when the sidemenu is closed.
    setOpenTab(parent);
  }

  const viewTalentDropDown = () => {
    let parent = document.getElementById('viewTalentDropDown');
    parent.classList.toggle('hidden')
  }

  const reportsDropDown = () => {
    let parent = document.getElementById('reportsDropDown');
    parent.classList.toggle('hidden')
    console.log(openTabs)
  }

  const closeOpenTab = () => {
    openTab.classList.toggle('hidden');
  }

  // displays the component based on selected element's value
  const display = (e) => {
    console.log("e: ", e, e.target.attributes[0].value)
    setTab(e.target.attributes[0].value);
    showMenu();
    closeOpenTab();
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
                onClick={accountDropDown}
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
                className="hidden">
                <li>[account]</li>
              </ul>
            </li>
            <hr />
            <li className="my-4">
              <button
                onClick={taskDropDown}
                className="w-full flex flex-row justify-between items-center font-bold focus:outline-none">
                <span>Tasks</span>
                <ArrowDropDownIcon
                  fontSize="large" />
              </button>
              <ul
                id="taskDropDown"
                className="hidden pl-5">
                <li
                  value="VIEW_TASKS"
                  onClick={display}
                  className="hover:cursor-pointer hover:underline my-1">My Tasks</li>
                <li
                  value="VIEW_ALL_TASK_POSTS"
                  onClick={display}
                  className="hover:cursor-pointer hover:underline my-1">All Task Posts</li>
                <li
                  value="VIEW_ALL_CONTRACTS"
                  onClick={display}
                  className="hover:cursor-pointer hover:underline my-1">All Contracts</li>
                <li
                  value="POST_TASK"
                  onClick={display}
                  className="hover:cursor-pointer hover:underline my-1">Post a Task</li>
              </ul>
            </li>
            <hr />
            <li className="my-4">
              <button
                onClick={viewTalentDropDown}
                className="w-full flex flex-row justify-between items-center font-bold focus:outline-none">
                <span>Talent</span>
                <ArrowDropDownIcon
                  fontSize="large" />
              </button>
              <ul
                id="viewTalentDropDown"
                className="z-0 hidden">
                <li>view talent</li>
              </ul>
            </li>
            <hr />
            <li className="my-4">
              <button
                onClick={reportsDropDown}
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
                className="w-full flex flex-row justify-start items-center font-bold focus:outline-none">
                <SettingsIcon fontSize="large" />
                <span className="ml-2">Settings</span>
              </button>
            </li>
            <hr />
            <li className="my-4">
              <button
                onClick={display}
                className="w-full flex flex-row justify-start items-center font-bold focus:outline-none">
                <ExitToAppIcon fontSize="large" />
                <span className="ml-2">Logout</span>
              </button>
            </li>
          </ul>
        </nav>
      </aside>
      <Box>
        <section className="flex flex-col">
          <nav className="">
          </nav>
          <main className="w-full flex flex-col">
            <section>
              <DashboardReducer value={tab} />
            </section>
            <button
              onClick={showMenu}
              className="fixed bottom-4 right-4 w-20 h-20 rounded-full bg-blue-500 text-white focus:outline-none active:bg-blue-600">Menu</button>
          </main>
        </section>
      </Box>
    </Layout>
  )
}