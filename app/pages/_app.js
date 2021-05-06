import '../styles/globals.css'
import reducer,
{
  initialState
} from '../context/reducer';
import { StateProvider } from '../context/StateProvider';

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Component {...pageProps} />
    </StateProvider>

  )
}

export default MyApp
