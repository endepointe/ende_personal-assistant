import Image from 'next/image';
export default function Header() {
  return (
    <header
      className="-mt-28 bg-black h-96 w-full mb-16 flex flex-col justify-end text-white">
      <div className="flex flex-col content-start mb-14">
        <h3 className="text-3xl mx-8 mb-4">Get more accomplished in less time</h3>
        <p className="mx-8">Personal Assistant&copy; makes it simple to find the help you need: find yours today to get started.</p>
      </div>
      <button
        className="bg-green-500 text-white w-max ml-8 mb-8 py-2 px-4 rounded-sm font-semibold">FIND AN ASSISTANT</button>
    </header>
  )
}