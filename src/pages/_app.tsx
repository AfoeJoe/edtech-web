import { CssBaseline, GeistProvider } from '@geist-ui/core';
import { collection, getFirestore } from 'firebase/firestore';
import type { AppProps } from 'next/app';
import { useCollection } from 'react-firebase-hooks/firestore';
import app from '../services/firebase';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const [_value, _loading, _error] = useCollection(
    collection(getFirestore(app), 'hooks'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    },
  );

  return (
    <GeistProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  );
}
