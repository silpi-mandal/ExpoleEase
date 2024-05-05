import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from 'axios';
import { Contextapi } from "../store/Context";

const Protected=({ children })=>{
  const{isSignIn,logInData,registerData} = useContext(Contextapi);
  console.log("isSignIn",isSignIn);
  const[validation,setValidation]=useState([]);
  console.log("validation",validation);
  console.log("logInData",logInData);
  useEffect(()=>{
    axios.get("http://localhost:3031/auth")
    .then(
      (res)=>{
        console.log(res.data);
        setValidation(res.data);
      }
    )
    .catch(
      (err)=>{
        console.log(err);
      }
    )
  },[])

  if (isSignIn && (logInData.length > 0 || registerData.length > 0)) {
    return children;
  }

else {
  validation.map((val)=>{
  if(!isSignIn && logInData?.unm!=val.unm && logInData?.pass!=val.pass)
{
  return <Navigate to="/" replace />
}})
}
  
}
export default Protected;