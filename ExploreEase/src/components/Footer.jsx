import { Link } from "react-router-dom";
import style from "./Style/Footer.module.css";
const Footer=()=>{
  return(
    <div className={style.footer}>
      <div className={style.top}>
      <div>
      <h1>ExploreEase</h1>
      <p>Travel expands perspectives, fosters empathy, and inspires growth.</p>
    </div>
    <div>
     <a href="https://www.facebook.com/profile.php?id=100039491742714">
     <i className="fa-brands fa-facebook"></i>
     </a>
     <a href="https://www.instagram.com/mandal.silpi/?hl=en">
     <i className="fa-brands fa-instagram"></i>
     </a>
     <a href="/">
     <i className="fa-brands fa-twitter"></i>     
     </a>
    </div>
    </div>
    <div className={style.buttom}>
    <div>
      <h4>Commiunity</h4>
      <a href="/">GitHub</a>
      <Link to="/service">Project</Link>
      <a href="/">Twitter</a>
    </div>
    <div>
      <h4>Help</h4>
      <Link to="/help">Support</Link>
      <Link to="/help">Troubleshooting</Link>
      <Link to="/help">Contact Us</Link>
    </div>
    <div>
      <h4>Others</h4>
      <Link to="/aboutUs">Term of Service</Link>
      <Link to="/aboutUs">Privacy Policy</Link>
      <Link to="/aboutUs">Licence</Link>
    </div>
    </div>
    </div>
  )
}
export default Footer;