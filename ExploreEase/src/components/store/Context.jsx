import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const Contextapi = createContext({
  isSignIn : null,
  signIn : () => {},
  signOut : () => {},
  logInData : [],
  setLogInData : () => {},
  registerData :[],
  setRegisterData : () => {}
});
 const MainStore =({children})=>{
  const [isSignIn, setIsSignIn] = useState(null);
  const[logInData, setLogInData] = useState({});
  const[registerData,setRegisterData]=useState({});
  console.log(logInData);
  console.log(registerData);
  const signIn = () => {
    setIsSignIn(true);
  };
  const signOut = () => {
    setIsSignIn(false);
  };

  return(
    <Contextapi.Provider  value={{
      isSignIn,
      signIn,
      signOut,
      logInData,
      setLogInData,
      registerData,
      setRegisterData
    }} >
      {children}
    </Contextapi.Provider>
  )
}
export default MainStore;