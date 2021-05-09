import '../styles/globals.css'
import reducer,
{
  initialState
} from '../context/reducer';
import { StateProvider } from '../context/StateProvider';
import { Provider } from 'next-auth/client';

function MyApp({ Component, pageProps }) {
  return (
    <Provider options={{ site: process.env.SITE }} session={pageProps.session}>
      <StateProvider initialState={initialState} reducer={reducer} session={pageProps.session}>
        <Component {...pageProps} />
      </StateProvider>
    </Provider>
  )
}

export default MyApp
