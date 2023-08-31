import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { store } from '../store';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isPrivateRoute = router.pathname.startsWith('/secure'); // Example: Define your private route pattern

  // Perform authentication checks if it's a private route
  // You can use your authentication state from Redux here
  const isAuthenticated = store.getState().auth.isAuthenticated;

  if (isPrivateRoute && !isAuthenticated) {
    router.push('/login'); // Redirect to login page if not authenticated
    return null;
  }
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}