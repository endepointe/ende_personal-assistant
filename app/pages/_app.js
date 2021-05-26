import 'tailwindcss/tailwind.css';
import { Provider } from 'react-redux';
import { useStore } from '../store';

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
