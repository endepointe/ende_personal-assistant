import useSWR from 'swr';
import Layout from '../components/Layout';
import Box from '../components/Box';
import { useRouter } from 'next/router';

const fetcher = url => fetch(url).then(res => res.json());

export default function dashboard() {
  // const { data, error } = useSWR('/api/test', fetcher);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push('/dashboard')
    return;
  }

  const showMenu = () => {
    let parent = document.getElementById('sidebar');
    parent.classList.toggle('w-5/12')
  }

  return (
    <Layout>
      <aside
        id="sidebar"
        className="h-screen w-0 overflow-hidden float-left bg-black opacity-90 transition-width duration-500">
        <nav className="min-w-max pt-5">
          <ul
            className="flex flex-col items-center flex-nowrap text-white">
            <li className="my-3">
              <button
                onClick={() => console.log('btn clicked')}
                className="font-bold">Post a task</button>
            </li>
            <li className="my-3">
              <button
                onClick={() => console.log('btn clicked')}
                className="font-bold">View existing tasks</button>
            </li>
          </ul>
        </nav>
      </aside>
      <section className="flex flex-col">
        <nav className="">
        </nav>
        <main className="w-full flex">
          <button
            onClick={showMenu}
            className="absolute bottom-0 right-0 w-20 h-20 rounded-full bg-blue-500 text-white">+</button>
        </main>
      </section>
    </Layout>
  )
}