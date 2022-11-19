import { getAuth } from 'firebase/auth'; // Firebase v9+
import { getDatabase } from 'firebase/database'; // Firebase v9+
import { getFirestore } from 'firebase/firestore';
import { PropsWithChildren } from 'react';

import {
  AuthProvider,
  DatabaseProvider,
  FirestoreProvider,
  useFirebaseApp,
} from 'reactfire';

const FirebaseComponents = ({ children }: PropsWithChildren<{}>) => {
  const app = useFirebaseApp(); // a parent component contains a `FirebaseAppProvider`
  const firestoreInstance = getFirestore(useFirebaseApp());

  // initialize Database and Auth with the normal Firebase SDK functions
  const database = getDatabase(app);
  const auth = getAuth(app);

  // any child components will be able to use `useUser`, `useDatabaseObjectData`, etc
  return (
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={firestoreInstance}>
        <DatabaseProvider sdk={database}>{children}</DatabaseProvider>
      </FirestoreProvider>
    </AuthProvider>
  );
};

export default FirebaseComponents;
