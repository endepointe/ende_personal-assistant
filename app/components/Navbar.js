import { signin, signout, useSession } from 'next-auth/client'
import { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';
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
    document.getElementById('navbar_nav_links').classList.toggle(styles.show_nav_links);
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
    <div className={styles.navbar}>
      <Link href="/">
        <a>
          <img className={styles.navbar_logo}
            src="http://via.placeholder.com/100x60?text=Logo"
            alt="" />
        </a>
      </Link>
      <div className={styles.navbar_search}>
        <input className={styles.navbar_searchInput}
          type="text" />
        <SearchIcon className={styles.navbar_searchIcon} />
      </div>

      <div className={styles.navbar_nav}>

        <button
          onClick={toggleNavMenu}
          className={styles.navbar_nav_menuBtn}>
          <div></div>
          <div></div>
          <div></div>
        </button>

        {/* initially hidden on small screens */}
        <div
          id="navbar_nav_links"
          className={styles.navbar_nav_links}>
          <Link href='/'>
            <div className={styles.navbar_option}>
              <span className={styles.navbar_option_1}>
                Hello {user.name ? user.name : 'Guest'}
              </span>
              <span className={styles.navbar_option_2}>
                {!session && (
                  <a
                    href="/api/auth/signin"
                    onClick={signIn}
                  >
                    Sign in
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
                      Sign out
                    </a>
                  </>
                )}
              </span>
            </div>
          </Link>

          <Link href="/orders">
            <div className={styles.navbar_option}>
              <span className={styles.navbar_option_1}>
                Returns &
              </span>
              <span className={styles.navbar_option_2}>
                Orders
              </span>
            </div>
          </Link>

          <Link href="/account">
            <div className={styles.navbar_option}>
              <span className={styles.navbar_option_1}>
                Your
              </span>
              <span className={styles.navbar_option_2}>
                Account
              </span>
            </div>
          </Link>

          <Link href="/checkout">
            <div className={styles.navbar_optionBasket}>
              <ShoppingBasketIcon />
              <span className={styles.navbar_option_2, styles.navbar_basketCount}>
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