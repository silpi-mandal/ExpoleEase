import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import validation from "./Resvalid";
import "../Style/Register.css";
import axios from "axios";
import {Navigate} from "react-router-dom";
import { Contextapi } from "../store/Context";

const Register=()=>{
  const{registerData,setRegisterData,} = useContext(Contextapi);
  const[resinfo,setResinfo]=useState({});
  const formik = useFormik({
    initialValues:{
      nm:"",
      unm:"",
      em:"",
      pass:""
    },
    validationSchema:validation,
    onSubmit:(data,action)=>{
      console.log(data);
      action.resetForm();
      setResinfo(data);
    }
  });
  console.log("resinfo",resinfo);
  useEffect(()=>{
    axios.post('http://localhost:3031/auth',{nm:resinfo.nm,unm:resinfo.unm,em:resinfo.em,pass:resinfo.pass})
    .then(
      (res)=>{
        console.log(res.data);
        setRegisterData(resinfo);
      }
    )
    .catch(
      (err)=>{
        console.log(err);
      }
    )
  },[resinfo]);
  
  if (Object.keys(registerData).length > 0) {
    return <Navigate to="/" replace />
  }

 return(
  <>
  <div className="reg">
    <img src="https://cdn.wallpapersafari.com/16/49/a1eQNO.jpg" alt="sorry" />
  </div>
  <div className="regdiv">
   <form onSubmit={formik.handleSubmit}>
   <label>Enter Full name</label>
    <input type="text" name="nm" onChange={formik.handleChange} value={formik.values.nm} />
    <span style={{color:"red", fontStyle:"italic"}}>
        {
          (formik.errors.nm && formik.touched.nm)? (formik.errors.nm):null
        }
      </span>
    <br />
    <label>Enter Username</label>
    <input type="text" name="unm" onChange={formik.handleChange} value={formik.values.unm} />
    <span style={{color:"red", fontStyle:"italic"}}>
        {
          (formik.errors.unm && formik.touched.unm)? (formik.errors.unm):null
        }
      </span>
    <br />
    <label>Enter Email</label>
    <input type="text" name="em" onChange={formik.handleChange} value={formik.values.em} />
    <span style={{color:"red", fontStyle:"italic"}}>
        {
          (formik.errors.em && formik.touched.em)? (formik.errors.em):null
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
    <button type="submit" className="btn btn-primary">Register</button>
   </form>
  </div>
  </>
 )
}
export default Register;