import React, { createContext, useState, useEffect } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(loading);
  //Popup appear when google signin
  const providerLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //Create user to firebase
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //logout function
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //update user profile from firebase
  const updateUserProfile = (profile) => {
    return updateUserProfile(auth.currentUser, profile);
  };

  //Signin Functinality

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Observer for user tracking
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("inside auth state change", currentUser);

      if (currentUser === null) {
        setUser(currentUser);
        console.log(user);
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, [user]);

  const authInfo = {
    user,
    providerLogin,
    createUser,
    logOut,
    updateUserProfile,
    signIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
