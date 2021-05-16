import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Ende Ecomm 1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="min-h-screen bg-app-bg">
        {props.children}
      </div>
      <Footer />
    </>
  )
}

export default Layout;