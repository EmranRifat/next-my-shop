import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  FacebookAuthProvider,
} from "firebase/auth";
import {  useEffect, useState } from "react";
import app from "../firebase/Firebase.config";
import { createContext, useReducer } from 'react';
import { initialState, productReducer } from "../states/productState/ProductReducer";
import { actionTypes } from "../states/productState/ActionTypes";
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {



    const [state,dispatch]=useReducer(productReducer,initialState);



// console.log(state);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data12, setData12] = useState([]);







  useEffect(()=>{
    dispatch({type:actionTypes.FETCHING_START});
    fetch("/api/server")
    .then((res)=>res.json())
    .then((data)=>dispatch({type:actionTypes.FETCHING_SUCCESS,payload:data.data})
    )

    
    
    .catch(()=>{
      dispatch({type:actionTypes.FETCHING_ERROR})

    })
    setLoading(false);

  },[])



  // useEffect(() => {
  //   const dataFunction = async () => {
  //     const res = await fetch("/api/server");
  //     const data = await res.json();
  //     // console.log(28,data)
  //     setData12(data);
  //     setLoading(false);
  //   };

  //   dataFunction();
  // }, []);


  // console.log(state);

  const provider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };


  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };
  const facebookLogin = () => {
    return signInWithPopup(auth, provider);
  };



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log("current user ", currentUser);
    });
    return () => {
      return unsubscribe();
    };
  }, []);







  const value = {
    data12,
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    googleLogin,
    facebookLogin,
    dispatch,
    state
  
  };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
