import { CssBaseline, GeistProvider } from '@geist-ui/core';
import type { AppProps } from 'next/app';
import { FirebaseAppProvider } from 'reactfire';
import '../services/firebase';
import { firebaseConfig } from '../services/firebase';
import FirebaseComponents from '../services/FirebaseComponents';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <GeistProvider>
        <CssBaseline />

        <FirebaseComponents>
          <Component {...pageProps} />
        </FirebaseComponents>
      </GeistProvider>
    </FirebaseAppProvider>
  );
}
