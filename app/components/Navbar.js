import styles from '../styles/Navbar.module.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Link from 'next/link';
import { useStateValue } from '../context/StateProvider';

const Navbar = () => {
  const [{ basket }, dispatch] = useStateValue();

  const toggleNavMenu = () => {
    console.log(document.getElementById('navbar_nav_links').classList);
    document.getElementById('navbar_nav_links').classList.toggle(styles.show_nav_links);
    console.log('open menu')
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

        {/* initiall hidden on small screens */}
        <div
          id="navbar_nav_links"
          className={styles.navbar_nav_links}>
          <Link href='/auth'>
            <div className={styles.navbar_option}>
              <span className={styles.navbar_option_1}>
                Hello Guest
            </span>
              <span className={styles.navbar_option_2}>
                Sign-in
            </span>
            </div>
          </Link>

          {/* <Link href='/login'>
            <div className={styles.navbar_option}>
              <span className={styles.navbar_option_1}>
                Hello Guest
            </span>
              <span className={styles.navbar_option_2}>
                Sign-in
            </span>
            </div>
          </Link>
          */}

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
                {basket?.length}
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