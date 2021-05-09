import { getSession } from 'next-auth/client';
export default async (req, res) => {
  const session = await getSession({ req });
  if (session) {
    console.log('session: ', JSON.stringify(session, null, 2));
    res.json(session)
  } else {
    res.status(401);
  }
  res.end();
}