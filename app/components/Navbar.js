import Link from 'next/link';
// todo: 
//    - display the 'LOG OUT' link after user logs in
const Navbar = () => {
  return (
    <nav className="flex flex-row flex-nowrap items-center justify-between select-none bg-black">
      <Link href="/">
        <a className="flex flex-row justify-center items-center -ml-2.5 opacity-100 z-10">
          <img
            className="w-32 -mt-6 -mb-6"
            src="/logo_transparent.png" alt="health and fitness" />
        </a>
      </Link>

      <div className="flex flex-col justify-center items-center mx-5 z-10">
        <Link href="/login">
          <a className="text-white text-2xl">LOG IN</a>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;