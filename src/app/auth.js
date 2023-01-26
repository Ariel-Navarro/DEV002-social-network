import {
    auth,
    app,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    providerGoogle,
    signInWithPopup,
    signOut,
    signInWithEmailAndPassword,
  } from './config.js';
  
  // para logIn
  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
  
  const googleLog = () => signInWithPopup(auth, providerGoogle);
  // para signUp
  const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);
  // para Home
  const logout = () => signOut(auth);
  
  // el observador
  const userState = (user) => onAuthStateChanged(auth, user);
  
  const user1 = () => auth.currentUser;
  
  export {
    auth,
    app,
    login,
    googleLog,
    signup,
    logout,
    userState,
    onAuthStateChanged,
    user1,
  };
  