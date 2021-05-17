import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import {
  useState,
  useEffect,
} from 'react';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  const [arrows, setArrows] = useState({});
  useEffect(() => {
    setArrows(document.getElementById('find-assistant-arrows'));
  })

  const begin = (e) => {
    arrows.classList.remove('opacity-0');
  }
  const end = (e) => {
    arrows.classList.toggle('opacity-0')
  }
  const register = (e) => {
    e.preventDefault();
    router.push('/register')
  }

  return (
    <header
      className="-mt-28 bg-black h-96 w-full mb-4 flex flex-col justify-end text-white">
      <div className="flex flex-col content-start mb-14">
        <h3 className="text-3xl mx-8 mb-4">Get more accomplished in less time</h3>
        <p className="mx-8">Personal Assistant&copy; makes it simple to find the help you need: find yours today to get started.</p>
      </div>

      <div className="flex flex-row">
        <button
          onMouseEnter={begin}
          onMouseLeave={end}
          onClick={register}
          className="bg-green-500 text-white w-max ml-8 mb-8 py-2 px-4 rounded-sm font-semibold text-lg">FIND AN ASSISTANT</button>
        <div
          id="find-assistant-arrows"
          className="opacity-0 select-none ml-2 transition-opacity duration-500 ease-linear">
          <DoubleArrowIcon
            className="text-gray-200 opacity-80"
            fontSize="large" />
          <DoubleArrowIcon
            className="text-gray-200 -ml-2 opacity-50"
            fontSize="large" />
          <DoubleArrowIcon
            className="text-gray-200 -ml-2 opacity-20"
            fontSize="large" />
        </div>
      </div>
    </header>
  );
}