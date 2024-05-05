import style from "../Style/Service.module.css";
import api from "./api.json";
import { PiMapPinBold } from "react-icons/pi";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Search from "./Search";
import { useState } from "react";
import Filter from "./Filter";
import Price from "./Price";

const Service=()=>{
  const[newPlace,setNewPlace]=useState([]);
  const[filterCountry, setFilterCountry]=useState([]);
  const[pakage,setPakage] = useState([]);
  //console.log("newPlace",newPlace);
  //console.log("filterCountry",filterCountry);
  //console.log("pakage",pakage);
  
  return(
    <>
    <div className={style.service}>
      <img src="http://images.freecreatives.com/wp-content/uploads/2015/10/beach-waves-sunset-wide-high-definition-wallpaper.jpg" alt="sorry" className={style.image} />
    <div className={style.heading}><h1>Make Your Vacation Plan</h1></div>
    </div>
    <div className="row">
    <div className="col-6">
    <Search setNewPlace={setNewPlace} />
    </div>
    <div className="col-6">
    <Filter setFilterCountry={setFilterCountry} />
    <Price setPakage={setPakage} />
    </div>
    </div>
    <div className={style.placestyle}>
  {
    newPlace.length==0 && filterCountry.length==0 && pakage.length==0 && api.map((val)=>{
    // console.log("val",val);
    return <div className={`card ${style.cardItem}`} key={val.id}>
    <img src={val.image} className="card-img-top" alt="sorry"/>
    <div className="card-body">
      <h5 className="card-title">{val.name}</h5>
      <p className="card-text"><PiMapPinBold />{val.country}</p>
      <ul className="list-group">
      <li className="list-group-item"><FaIndianRupeeSign/>{val.price}</li>
      </ul>
      <br />
       <Link to={`/details/${val.id}`}  className="btn btn-info btn-sm">
        Details
        </Link>
    </div> 
  </div>
  })
  }
     {
       filterCountry.length>0 && filterCountry.map((val)=>{
        // console.log("val",val);
        return <div className={`card ${style.cardItem}`} key={val.id}>
        <img src={val.image} className="card-img-top" alt="sorry"/>
        <div className="card-body">
          <h5 className="card-title">{val.name}</h5>
          <p className="card-text"><PiMapPinBold />{val.country}</p>
          <ul className="list-group">
          <li className="list-group-item"><FaIndianRupeeSign/>{val.price}</li>
          </ul>
          <br />
           <Link to={`/details/${val.id}`}  className="btn btn-info btn-sm">
            Details
            </Link>
        </div> 
      </div>
      })
    }
     {
       newPlace.length>0 && newPlace.map((val)=>{
        // console.log("val",val);
        return <div className={`card ${style.cardItem}`} key={val.id}>
        <img src={val.image} className="card-img-top" alt="sorry"/>
        <div className="card-body">
          <h5 className="card-title">{val.name}</h5>
          <p className="card-text"><PiMapPinBold />{val.country}</p>
          <ul className="list-group">
          <li className="list-group-item"><FaIndianRupeeSign/>{val.price}</li>
          </ul>
          <br />
           <Link to={`/details/${val.id}`}  className="btn btn-info btn-sm">
            Details
            </Link>
        </div> 
      </div>
      })
     }
     {
       pakage.length>0 && pakage.map((val)=>{
        // console.log("val",val);
        return <div className={`card ${style.cardItem}`} key={val.id}>
        <img src={val.image} className="card-img-top" alt="sorry"/>
        <div className="card-body">
          <h5 className="card-title">{val.name}</h5>
          <p className="card-text"><PiMapPinBold />{val.country}</p>
          <ul className="list-group">
          <li className="list-group-item"><FaIndianRupeeSign/>{val.price}</li>
          </ul>
          <br />
           <Link to={`/details/${val.id}`}  className="btn btn-info btn-sm">
            Details
            </Link>
        </div> 
      </div>
      })
     }
     </div>
     </>
  )
}
export default Service;