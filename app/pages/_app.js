import '../styles/globals.css'
import reducer,
{
  initialState
} from '../context/reducer';
import { StateProvider } from '../context/StateProvider';
import { Provider } from 'next-auth/client';

function MyApp({ Component, pageProps }) {
  const { session } = pageProps;
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Provider options={{ site: process.env.SITE }} session={session}>
        <Component {...pageProps} />
      </Provider>
    </StateProvider>
  )
}

export default MyApp
