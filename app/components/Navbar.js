import { signin, signout, useSession } from 'next-auth/client'
import { useState, useEffect } from 'react';
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Link from 'next/link';
import { useStateValue } from '../context/StateProvider';

const Navbar = () => {
  const [state, dispatch] = useStateValue();
  const [session, loading] = useSession();
  const [user, setUser] = useState({});

  useEffect(async () => {
    try {
      const res = await fetch('/api/get-session');
      const data = await res.json();
      if (res.status !== 401) {
        setUser({
          name: data.user.name,
          email: data.user.email,
          image: data.user.image
        });
        dispatch({
          type: 'SET_USER',
          user: {
            name: data.user.name,
            email: data.user.email,
            image: data.user.image
          }
        });
      }
    } catch (error) {
      console.error(error);
      setUser({
        name: null,
        email: null,
        image: null
      });
      dispatch({
        type: 'DELETE_USER',
        user: {
          name: null,
          email: null,
          image: null,
        }
      });
    }
  }, [session])

  const toggleNavMenu = () => {
    console.log(document.getElementById('navbar_nav_links').classList);
    document.getElementById('navbar_nav_links').classList.toggle('hidden');
  }

  const search = () => {
    let item = document.getElementById('search-input').value;
    console.log('search input: ', item);
    document.getElementById('search-input').value = null;
  }

  const signIn = (e) => {
    e.preventDefault();
    signin(null, { callbackUrl: 'http://localhost:3000/' });
  }
  const signOut = (e) => {
    e.preventDefault();
    signout();
  }
  return (
    <div className="flex flex-nowrap items-center justify-between h-16 bg-dark-blue">
      <Link href="/">
        <a className="flex flex-row justify-center items-center">
          <img
            className="w-32"
            src="/logo_transparent.png" alt="" />
        </a>
      </Link>
      <div className="flex items-center w-3/5">
        <input
          id="search-input"
          className="h-8 w-full pl-1 border-2 outline-none"
          placeholder="Search"
          type="text" />
        <SearchIcon
          fontSize="large"
          onClick={search}
          className="text-yellow-200 text-5xl ml-2 w-4 h-6 cursor-pointer" />
      </div>

      <div className="flex flex-col justify-center items-center mx-2.5">
        <button
          className="w-11 cursor-pointer border-none focus:outline-none"
          onClick={toggleNavMenu}
        >
          <div className="bg-white w-full h-1 my-0"></div>
          <div className="bg-white w-full h-1 my-2.5"></div>
          <div className="bg-white w-full h-1 my-0"></div>
        </button>

        {/* initially hidden on small screens */}
        <div
          id="navbar_nav_links"
          className="hidden flex flex-col absolute top-16 left-0 right-0 items-center w-full bg-dark-blue text-white">
          <Link href='/'>
            <div>
              <span>
                Hello, {user.name ? user.name : 'Guest'}
              </span>
              <span>
                {!session && (
                  <a
                    href="/api/auth/signin"
                    onClick={signIn}
                  >
                    {' |'} Sign in
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
                    <a
                      href="/api/auth/signout"
                      onClick={signOut}
                    >
                      {' |'} Sign out
                    </a>
                  </>
                )}
              </span>
            </div>
          </Link>

          <Link href="/orders">
            <div>
              <span>
                Returns &
              </span>
              <span>
                Orders
              </span>
            </div>
          </Link>

          <Link href="/account">
            <div>
              <span>
                Your
              </span>
              <span>
                Account
              </span>
            </div>
          </Link>

          <Link href="/checkout">
            <div>
              <ShoppingBasketIcon />
              <span>
                {state.basket?.length}
              </span>
            </div>
          </Link>
        </div>
        {/* end of hidden link content on small screens */}
      </div>
    </div>
  )
}

export default Navbar;