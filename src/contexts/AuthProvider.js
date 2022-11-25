import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";

import app from "../firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
   const [loading, setLoading] = useState(true);

  console.log(user);
  //1.create user
  const createUser = (email, password) => {
     setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //2. update  name

  const updateUserProfile = (name, photo) => {
     setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //3. email verify

  // const verityEamil = () =>{
  //     return sendEmailVerification(auth.currentUser)
  // }
  

  //4. google sign

  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
     setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //5. logIn with password

   const signIn = (email,password) =>{
     setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
   }


  //6. Log0ut 

  const logout = () => {
     setLoading(true);
    return signOut(auth);
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
    signIn,
    loading,
    setLoading
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
