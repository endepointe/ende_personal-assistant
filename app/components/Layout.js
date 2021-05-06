import Head from 'next/head';
import styles from '../styles/Layout.module.css';
import Navbar from './Navbar';

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Ende Ecomm 1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <div className={styles.container}>{props.children}</div>
      </main>
    </>
  )
}

export default Layout;