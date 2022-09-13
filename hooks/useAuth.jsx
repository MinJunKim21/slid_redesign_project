import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth';

import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { auth } from '../firebase';

const AuthContext = createContext({
  user: null,
  singUP: async () => {},
  signIn: async () => {},
  logout: async () => {},
  error: null,
  loading: false,
  nickName: null,
});

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();
  const [initialLoading, setInitialLoading] = useState(true);
  const [nickName, setNickName] = useState(null);

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          //logged in
          setUser(user);
          setLoading(false);
          // setNickName(nickName);
        } else {
          //not logged in
          setUser(null);
          setLoading(true);
          router.push('/');
          // setNickName(null);
        }
        setInitialLoading(false);
      }),
    [auth]
  );
  const signUp = async (displayName, email, password) => {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        setNickName(displayName);
        router.push('/');
        setLoading(false);
      })
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false));
  };
  const signIn = async (email, password) => {
    setLoading(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        router.push('/');
        setLoading(false);
      })
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false));
  };

  const logout = async () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser(null);
        router.push('/');
        setNickName(null);
      })
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false));
  };

  const memoedValue = useMemo(
    () => ({
      user,
      signUp,
      signIn,
      error,
      loading,
      logout,
      nickName,
    }),
    [user, loading]
  );

  return (
    <AuthContext.Provider value={memoedValue}>
      {!initialLoading && children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
