import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Components/Home/Login/firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const auth = getAuth();

  // user use to google for sign in or login
  const signInGoogle = () => {
    setLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user);
    });
  };

  //   observe user for his or him state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });

    return () => unsubscribe;
  }, []);

  //   user logout
  const logOut = () => {
    signOut(auth).then(() => {});
    // setUser({});
  };

  return {
    user,
    signInGoogle,
    logOut,
    loading,
  };
};

export default useFirebase;
