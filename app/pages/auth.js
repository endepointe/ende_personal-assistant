import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.text());

export default function Auth() {

  const { data, error } = useSWR('/api/auth', fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      {`cookie from response: "${data}"`}
    </div>
  )
}