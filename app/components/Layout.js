import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Ende Ecomm 1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {props.children}
    </>
  )
}

export default Layout;