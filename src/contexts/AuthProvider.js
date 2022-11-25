import { createUserWithEmailAndPassword, getAuth,  GoogleAuthProvider,  onAuthStateChanged,  signInWithPopup,  signOut,  updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';

import app from '../firebase/firebase.config';



const auth = getAuth(app);

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const [user, setUser] = useState({});
  //1.create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //2. update  name

  const updateUserProfile = (name,photo) => {
    return updateProfile(auth.currentUser, { 
        displayName: name,
        photoURL:photo,
});
  };

  //3. email verify

  // const verityEamil = () =>{
  //     return sendEmailVerification(auth.currentUser)
  // }

  //4. google sign

  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //5. logout

  const logout = () => {
  return  signOut(auth)
  };






  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);



    const authInfo = {
      user,
      createUser,
      updateUserProfile,
      signInWithGoogle,
      logout,
    };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;