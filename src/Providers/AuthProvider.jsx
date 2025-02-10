import { createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from 'firebase/auth';
import auth from '../Firebase/firebase.init';
import AuthContext from '../Context/AuthContext';
import axios from 'axios';





const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {

      if (currentUser?.email) {
        setUser(currentUser);

        const { data } = await axios.post('http://localhost:5000/jwt', {
          email: currentUser?.email
        },
          {
            withCredentials: true,
          }
        )
        console.log(data)

      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser?.email) {

        try {
          const { data } = await axios.post(
            'http://localhost:5000/jwt',
            { email: currentUser?.email },
            { withCredentials: true }
          );
          console.log(data);
        } catch (error) {
          console.error('Error fetching JWT:', error);
        }
      } else {
        setUser(currentUser);
        const { data } = await axios.get(
          'http://localhost:5000/logout',
          { withCredentials: true }
        );
      }

      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInformation = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    logout,
    updateUserProfile,

  };

  return (
    <AuthContext.Provider value={authInformation}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
