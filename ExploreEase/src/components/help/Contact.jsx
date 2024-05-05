import style from "../Style/Contact.module.css";
const Contact=(props)=>{
  return(
    <>
    <div className={style.contact}>
      <img src={props.image} alt="sorry" className={style.image} />
      <div className={style.title}>
        <h1>{props.title}</h1>
      </div>
    </div>
    </>
  )
}
export default Contact;