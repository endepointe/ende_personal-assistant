import Link from 'next/link';
import Image from 'next/image';
import Layout from "../components/Layout";

export default function onboarding() {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-medium mt-10 mb-8">Complete your profile</h1>

        <form className="flex flex-col w-11/12">
          <div className="flex flex-row items-center bg-white shadow-md border-gray-200 border-solid rounded-t-md">
            <div className="flex justify-end w-28 mr-2">
              <div className="max-w-max">
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <input
              id="email"
              type="email" name="email" placeholder="jane@example.com"
              className="w-full h-12" />
          </div>

          <div className="flex flex-row items-center mt-0.5 bg-white shadow-md border-gray-200 border-solid rounded-b-md">
            <div className="flex justify-end w-28 mr-2">
              <div className="max-w-max">
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <input
              id="password"
              type="password" name="password" placeholder="********"
              className="w-full h-12 " />
          </div>

          <button
            className="bg-green-500 text-white w-full mt-9 py-2 px-4 rounded shadow-md text-lg font-medium">Continue</button>
        </form>

        <p className="text-xl font-normal my-10">OR</p>

        <div className="flex flex-col w-11/12">
          {/* link height should be 3rem or 48 pixels */}
          <Link href="/onboarding">
            <a className="flex justify-center items-center text-center w-full h-12 my-0.5 bg-white font-sans-Roboto font-normal shadow-sm hover:pointer">
              <div className="testLogo flex flex-row items-center">
                <Image
                  src="/google-logo-light.svg"
                  quality={100}
                  width={48}
                  height={48} />
                <span className="pl-6 font-semibold">
                  Sign up with Google
              </span>
              </div>
            </a>
          </Link>
          <Link href="/onboarding">
            <a className="flex justify-center items-center text-center w-full h-12 my-0.5 bg-white font-sans-Roboto font-normal shadow-sm hover:pointer">
              <div className="testLogo flex flex-row items-center">
                <Image
                  src="/tw-logo-blue.svg"
                  quality={100}
                  width={32}
                  height={32} />
                <span className="pl-6 font-semibold">
                  Sign up with Twitter
              </span>
              </div>
            </a>
          </Link>
          <Link href="/onboarding">
            <a className="flex justify-center items-center text-center w-full h-12 my-0.5 bg-white font-sans-Roboto font-normal shadow-sm hover:pointer">
              <div
                className="testLogo flex flex-row items-center">
                <Image
                  src="/insta-logo-grad.png"
                  quality={100}
                  width={32}
                  height={32} />
                <span className="pl-6 font-semibold">
                  Sign up with Instagram
              </span>
              </div>
            </a>
          </Link>
          <Link href="/onboarding">
            <a className="flex justify-center items-center text-center w-full h-12 my-0.5 bg-white font-sans-Roboto font-normal shadow-sm hover:pointer">
              <div
                className="testLogo flex flex-row items-center">
                <Image
                  src="/github-logo-color.png"
                  quality={100}
                  width={32}
                  height={32} />
                <span className="pl-6 font-semibold">
                  Sign up with GitHub
              </span>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}