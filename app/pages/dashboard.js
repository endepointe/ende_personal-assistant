import Layout from '../components/Layout';
import Box from '../components/Box';
import { useRouter } from 'next/router';

export default function dashboard() {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push('/dashboard')
    return;
  }

  return (
    <Layout>
      <p>Dashboard</p>
    </Layout>
  )
}