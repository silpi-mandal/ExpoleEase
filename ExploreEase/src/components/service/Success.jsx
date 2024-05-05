import { Link } from 'react-router-dom';
import '../Style/Success.css';
const Success = () =>{
  return(
    <div className="card maincard" >
    <img src="https://zeuxinnovation.com/wp-content/uploads/2023/04/maximising-user-satisfaction-1.jpg" alt="sorry" />
  <div className="card-body">
    <p className="card-text">Congratulations, You successfully booked your tour pakage. </p>
    <h4>Thank You !</h4>
    <Link to="/"><h5>Visit again <i className="fa-sharp fa-solid fa-face-smile" style={{color: "#FFD43B"}}> </i></h5></Link>
  </div>
  </div>
  )
}
export default Success;