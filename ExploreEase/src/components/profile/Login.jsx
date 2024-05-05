import { useFormik } from "formik";
import validationRule from "./Valid";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import '../Style/Login.css';
import axios from "axios";
import {Navigate} from 'react-router-dom';
import Protected from "./Protected";
import { Contextapi } from "../store/Context";

const Login = () =>{
  const{logInData,setLogInData} = useContext(Contextapi);
  const[auth,setAuth]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3031/auth')
    .then(
      (res)=>{ console.log(res.data);
                setAuth(res.data);      
      }
    )
    .catch(
      (err)=>{ console.log(err); }
    )
  },[])
  
  const navigate = useNavigate();
  const[info,setinfo]=useState({})
  const formik = useFormik({
    initialValues:{
      unm:"",
      pass:""
    },
    validationSchema:validationRule,
    onSubmit:(data,action)=>{
      console.log(data);
      action.resetForm();
      setinfo(data);
      fetchInfo(data);
    }
  });
  console.log("info",info);
  const fetchInfo =(value)=>{
  const newarr = auth.filter((arr)=>{
      return value && arr.unm == value.unm && arr.pass == value.pass
  })
  console.log("newarr",newarr);
  setLogInData(newarr);
}

  if (Object.keys(logInData).length > 0) {
  return <Navigate to="/" replace /> 
 }
  
 return(
  <>
  <div className="log">
    <img src="https://cdn.wallpapersafari.com/16/49/a1eQNO.jpg" alt="sorry" />
  </div>
  <div className="formdiv">
   <form onSubmit={formik.handleSubmit}>
    <label>Enter Username</label>
    <input type="text" name="unm" onChange={formik.handleChange} value={formik.values.unm} />
    <span style={{color:"red", fontStyle:"italic"}}>
        {
          (formik.errors.unm && formik.touched.unm)? (formik.errors.unm):null
        }
      </span>
    <br />
    <label>Enter Password</label>
    <input type="password" name="pass" onChange={formik.handleChange} value={formik.values.pass} />
    <span style={{color:"red", fontStyle:"italic"}}>
        {
          (formik.errors.pass && formik.touched.pass)? (formik.errors.pass):null
        }
      </span>
    <br />
    <Protected/>
    <br />
    <button type="submit" className="btn btn-primary">Login</button>
    <h6>OR</h6>
    <button type="button" className="btn btn-success" onClick={()=>{navigate('/register')}}>Register</button>
   </form>
  </div>
  </>
 )
}
export default Login;