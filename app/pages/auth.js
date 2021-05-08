import Link from 'next/link';
import { signin, signout, useSession } from 'next-auth/client';

export default function Auth() {
  const [session, loading] = useSession();

  const url = '/api/auth/google';

  const handleAuth = async () => {
    const res = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(await res.text());
  }

  return (
    <div>
      {!session && (
        <a
          href="/api/auth/signin"
          onClick={(e) => {
            e.preventDefault();
            signin();
          }}
        >
          <button>Sign in</button>
        </a>
      )}
      {session && (
        <>
          <Link href="/profile">
            <a>
              <span
                style={{ backgroundImage: `url(${session.user.image})` }}
              />
            </a>
          </Link>
          <span>{session.user.email}</span>
          <a
            href="/api/auth/signout"
            onClick={(e) => {
              e.preventDefault();
              signout();
            }}
          >
            <button>Sign out</button>
          </a>
        </>
      )}
    </div>
  )
}