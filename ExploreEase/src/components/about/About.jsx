import style from "../Style/About.module.css";
import { textArea } from "./AboutUs";
const About = (props) => {
  return (
    <>
      <div className={style.about} >
        <img src={props.image} alt="sorry" className={style.imageCl} />
      </div>
      <div className={style.text}>
        <h1>{props.title}</h1>
      </div>
      <div className={style.allText}>
      {
        textArea.map((val,index)=>{
          return <div key={index+1}>
          <p>{val.textTitle}</p>
          <span>{val.textBody}</span>
          </div>
        })
      }
      <span >{props.endline}</span>
      </div>
    </>
  );
};
export default About;
