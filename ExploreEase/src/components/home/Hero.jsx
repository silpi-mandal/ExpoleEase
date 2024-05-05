import style from "../Style/Hero.module.css"; 
const Hero=(props)=>{
 return(
  <>
        <div className={style.hero}>
          <img src={props.image} alt="sorry" className={style.imageStyle} />
        </div>
          <div className={style.heroText}>
          <h1>{props.head}</h1>
            <p>{props.text}</p>
              <h5
                onClick={() => props.navigate("/aboutUs")}
              >
                {props.click}
              </h5>
        </div>
  </>
 ) 
}
export default Hero;