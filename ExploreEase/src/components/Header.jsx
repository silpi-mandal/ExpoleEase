import { FaHome } from "react-icons/fa";
import { MdTravelExplore } from "react-icons/md";
import { TbHelpTriangleFilled } from "react-icons/tb";
import { IoMdContact } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState,useContext } from "react";
import "./Style/HeaderStyle.css";
import { Contextapi } from "./store/Context";
const Header=()=>{
  const{isSignIn,signIn,signOut,logInData,registerData} = useContext(Contextapi);
  const[icon,setIcon] = useState(true);
  const handleIcon=()=>{
    setIcon(icon=>!icon);
  }
  console.log("registerData",Object.keys(registerData).length);

  return(       
 <>
 <nav className="navItem">
  <h1 className="navLogo">ExploreEase</h1>
  <div className="menuIcon" onClick={handleIcon}>
  {
    icon? <MdOutlineRestaurantMenu/>: <CgMenuGridR/>
  }
  </div> 
  <ul className={icon? "navMenu" : "notnavMenu"}>
    <li>
      <Link to="/" className="navLink">HOME</Link>
    </li>
    <li>
      <Link to="/service" className="navLink">TOUR</Link>
    </li>
    <li>
      <Link to="/help" className="navLink">HELP</Link>
    </li>
    <li>
      {
        (isSignIn && (Object.keys(logInData).length > 0 || Object.keys(registerData).length > 0))? (
          <Link to="/">
          <button onClick={signOut}>
            SIGN OUT
          </button>
          </Link>
        ):(<Link to="/login">
          <button onClick={signIn}>
            SIGN IN
          </button>
          </Link>
        )
      }
    </li>
  </ul>
 </nav>
 </>
)
}
export default Header;