import useSWR from 'swr';
import Layout from '../components/Layout';
import Box from '../components/Box';
import Tabs from '../components/Tabs';
import { useRouter } from 'next/router';
import { useState } from 'react';


const fetcher = url => fetch(url).then(res => res.json());

function Switch(props) {
  if (props.val === 1) return <h1>create a task</h1>;
  if (props.val === 2) return <h1>view existing tasks</h1>;
}

export default function dashboard() {
  // const { data, error } = useSWR('/api/test', fetcher);
  const [d, setDisplay] = useState(1);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push('/dashboard')
    return;
  }

  const showMenu = () => {
    // margin-left must be the same as the margin-left
    // in the parent
    let parent = document.getElementById('sidebar');
    parent.classList.toggle('-ml-60')
  }

  const display = (e) => {
    console.log(e.target.value)
    setDisplay(e.target.value)
  }

  return (
    <Layout>
      <aside
        id="sidebar"
        className="absolute h-screen -ml-60 w-6/12 flex flex-col justify-start items-center overflow-hidden bg-black opacity-90 transition-spacing duration-500">
        <nav className="pt-5">
          <ul
            className="text-white">
            <li className="my-4">
              <button
                onClick={display}
                value={1}
                className="font-bold hover:underline">Post a task</button>
            </li>
            <li className="my-4">
              <button
                onClick={display}
                value={2}
                className="font-bold hover:underline">View existing tasks</button>
            </li>
          </ul>
        </nav>
      </aside>
      <section className="flex flex-col">
        <nav className="">
        </nav>
        <main className="w-full flex flex-col">
          <section>

          </section>
          <button
            onClick={showMenu}
            className="fixed bottom-4 right-4 w-20 h-20 rounded-full bg-blue-500 text-white border-none">Menu</button>
        </main>
      </section>
    </Layout>
  )
}