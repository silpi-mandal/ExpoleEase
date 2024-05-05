import { PiMapPinBold } from "react-icons/pi";
import { FaIndianRupeeSign } from "react-icons/fa6";
import api from "./api.json";
import { Link, useParams } from "react-router-dom";
import style from "../Style/Details.module.css";
import Success from "./Success";
import Book from "./Book";

const Details = () => {
  const { tid } = useParams();

  const newApi = api.filter((newApi) => {
    return newApi.id == tid;
  });

  //console.log(newApi);

  return (
    <>
      <div className={style.card}>
        <div className={style.image}>
        <img src={newApi[0].image} alt="sorry" />
        <Link to={`/booking/${newApi[0].id}`} className="btn btn-info btn-sm">
            Book
          </Link>
        </div>
        <div className={style.body}>
          <h5 className="card-title">{newApi[0].name}</h5>
          <p className="card-text">
            <PiMapPinBold />
            {newApi[0].country}
          </p>
          <p className="card-text">Continent : {newApi[0].continent}</p>
          <ul className={`list-group ${style.pr}`}>
            <li className="list-group-item">Per Head</li>
            <li className="list-group-item">
              <FaIndianRupeeSign />
              {newApi[0].price} 
            </li>
          </ul>
          <br />
          <p className={`card-text`}>{newApi[0].description}</p>
          <p className="card-text">Population : {newApi[0].population}</p>
          <p className="card-text">Currency : {newApi[0].currency}</p>
          <p className="card-text">Language : {newApi[0].language}</p>
          <p className="card-text">Top Atraction :</p>
          <ul>
          {
            newApi[0].top_attractions.map((val)=>{
              return <li key={val}>{val}</li>
            })
          }
          </ul>
          <p className="card-text">Best Time to Visit : {newApi[0].best_time_to_visit}</p>
          <p className="card-text">Local Dishes : </p>
          <ul>
          {
            newApi[0].local_dishes.map((val)=>{
              return <li key={val}>{val}</li>
            })
          }
          </ul>
        
          <p className="card-text">Activities : </p>
          <ul>
          {
          newApi[0].activities.map((val)=>{
            return <li key={val}>{val}</li>
          })
          }
          </ul>
        </div>
      </div>
    </>
  );
};
export default Details;
